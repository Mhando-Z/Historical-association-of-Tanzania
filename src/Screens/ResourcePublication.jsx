import React, { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import HomePageContext from "../Context/HomePageContext";
import { Dots } from "react-activity";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import UserContext from "../Context/UserContext";

// Date formatter component
const formatDate = (dateString) => {
  return moment(dateString).format("MMMM D, YYYY [at] h:mm:ss A");
};

function ResourcePublication() {
  const { ResourcesSect } = useContext(HomePageContext);
  const { setUpPId } = useContext(UserContext);
  const [value, setValue] = useState(0);
  const [count, setcount] = useState(10);
  // functions imports
  const navigate = useNavigate();

  // Update the value every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setValue((prevValue) => (prevValue + 1) % ResourcesSect.length);
    }, 5000);
    return () => clearInterval(interval); // Clear interval on component unmount
  }, [ResourcesSect.length]);

  const handleCount = () => {
    setcount(count + 4);
  };

  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 1 },
  };

  const fadeIn = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 1 },
  };

  const handleSelect = (id) => {
    setUpPId(id);
    navigate("/Publications/");
    scrollToTop();
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen mt-16 ">
      <div className="container flex flex-col mx-auto">
        {/* header */}
        <motion.div
          className="grid grid-cols-1 gap-2 shadow-xl"
          variants={fadeInUp}
          initial="initial"
          animate="animate"
        >
          <div className="relative flex flex-col w-full ">
            <img
              src={`http://127.0.0.1:8000/${ResourcesSect[value]?.image}`}
              alt={ResourcesSect[value]?.title}
              loading="lazy"
              className="h-[400px] md:h-full bg-cover max-w-screen aspect-video"
            />
            <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
            <div className="absolute flex flex-col items-center left-5 bottom-5">
              <h1 className="flex flex-col w-full max-w-2xl text-xl font-black text-white lg:text-4xl ">
                {ResourcesSect[value]?.title}
                <span className="max-w-xl text-base font-medium text-white lg:text-2xl ">
                  {ResourcesSect[value]?.subtitle}
                </span>
              </h1>
              <p className="max-w-xl px-0 mx-0 ml-0 text-2xl font-bold text-white "></p>
              <p className="max-w-2xl text-sm text-white lg:text-base line-clamp-3 xl:text-lg ">
                {ResourcesSect[value]?.description}
              </p>
            </div>
          </div>
        </motion.div>
        {/* body */}
        <motion.div
          className="flex flex-col mt-10 mb-28"
          variants={fadeInUp}
          initial="initial"
          animate="animate"
        >
          {/* title */}
          <div className="flex flex-col justify-center py-3 mb-10 shadow-xl">
            <h1 className="text-2xl font-bold xl:text-4xl md:text-4xl ">
              Publications
            </h1>
          </div>
          {/* publications */}
          <div className="grid grid-cols-1 gap-2 gap-y-6 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
            {ResourcesSect?.slice(0, count).map((dt, index) => {
              return (
                <motion.div
                  key={dt.id}
                  variants={fadeIn}
                  initial="initial"
                  animate="animate"
                  transition={{ delay: index * 0.1 }} // Staggered animation
                >
                  <motion.div
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.8 }}
                    transition={{ type: "spring", ease: "easeOut" }}
                    onClick={() => handleSelect(dt.id)}
                    className="w-full p-1"
                  >
                    <img
                      src={`http://127.0.0.1:8000/${dt?.image}`}
                      alt={ResourcesSect[value]?.title}
                      loading="lazy"
                      className="sm:h-[300px] rounded-lg h-[200px] bg-cover max-w-screen cursor-pointer aspect-video"
                    />
                    <div className="flex flex-col px-2 mt-2 bg-white">
                      <h1 className="flex flex-col w-full text-xl font-black text-gray-900 lg:text-2xl">
                        {dt?.title}
                        <span className="max-w-xl text-base font-bold">
                          {dt?.subtitle}
                        </span>
                      </h1>

                      <p className="max-w-2xl text-sm tracking-tighter text-justify line-clamp-3 lg:texl-base">
                        {dt?.description}
                      </p>
                      <div className="flex flex-col w-full mt-2">
                        <p className="text-sm line-clamp-3 lg:texl-base">
                          <span className="text-bold">Author-</span>
                          {dt?.author}
                        </p>
                        <p className="text-sm text-blue-800">
                          {formatDate(dt?.dateIssued)}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
          <div className="flex justify-end w-full mt-6">
            <motion.button
              onClick={handleCount}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.8 }}
              transition={{ type: "spring", ease: "easeOut" }}
              className="px-5 py-2 text-white rounded-3xl bg-[#b67a3d] "
            >
              More
            </motion.button>
          </div>
        </motion.div>
      </div>
      {ResourcesSect?.length === 0 ? (
        <div className="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center ">
          <Dots color="#b67a3d" size={40} speed={0.7} animating={true} />
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default ResourcePublication;
