import React, { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import HomePageContext from "../Context/HomePageContext";
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
  // animation logic

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.2, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
    hover: { scale: 1.03 },
  };

  const imgHoverEffect = {
    hover: { scale: 1 },
  };

  return (
    <motion.div
      className="flex flex-col min-h-screen mt-20"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="container flex flex-col justify-center mx-auto ">
        {/* header */}
        <motion.div
          className="grid grid-flow-row-dense grid-cols-1 gap-y-5 gap-x-2 md:grid-cols-3"
          variants={itemVariants}
        >
          <div className="md:h-[30rem] h-[20rem] col-span-2 relative">
            <motion.img
              src={`http://127.0.0.1:8000/${ResourcesSect[value]?.image}`}
              alt={`News picture`}
              loading="lazy"
              className="object-cover object-center w-screen h-full transition-transform duration-300 ease-in-out transform rounded-xl"
              variants={imgHoverEffect}
              whileHover="hover"
            />
            <div className="absolute top-0 bottom-0 left-0 right-0 rounded-xl bg-gradient-to-t from-black to-transparent via-transparent"></div>
            <div className="absolute z-20 left-4 bottom-6 ">
              <h1 className="text-2xl font-semibold text-white">
                {ResourcesSect[value]?.title}
              </h1>
              <p className="text-gray-300 line-clamp-3">
                {ResourcesSect[value]?.description}
              </p>
            </div>
          </div>
          {/* scroll grids */}
          <motion.div
            className="grid grid-flow-row gap-y-1 overflow-y-auto h-[30rem]"
            variants={containerVariants}
          >
            {ResourcesSect?.slice(0, count).map((data, index) => (
              <motion.div
                key={index + data.id}
                className="h-[10rem] relative cursor-pointer"
                variants={itemVariants}
                onClick={() => handleSelect(data.id)}
              >
                <motion.img
                  src={`http://127.0.0.1:8000/${data?.image}`}
                  alt={ResourcesSect[value]?.title}
                  loading="lazy"
                  className="object-cover object-center w-screen h-full transition-transform duration-300 ease-in-out transform rounded-xl"
                  variants={imgHoverEffect}
                  whileHover="hover"
                />
                <div className="absolute top-0 bottom-0 left-0 right-0 rounded-xl bg-gradient-to-t from-black to-transparent "></div>
                <div className="absolute z-20 bottom-2 left-4 ">
                  <h1 className="text-lg font-semibold text-white xl:text-xl line-clamp-1">
                    {data?.title}
                  </h1>
                  <p className="max-w-md text-gray-300 line-clamp-2">
                    {data?.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
        {/* news list */}
        <motion.div
          className="grid grid-cols-1 gap-2 mt-5 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-5"
          variants={containerVariants}
        >
          {ResourcesSect?.slice(0, count).map((data, index) => (
            <motion.div
              key={index + data.id}
              className="flex-col items-center justify-center cursor-pointer flx"
              variants={itemVariants}
              whileHover="hover"
              onClick={() => handleSelect(data.id)}
            >
              <div className="h-[10rem]">
                <motion.img
                  src={`http://127.0.0.1:8000/${data?.image}`}
                  alt={ResourcesSect[value]?.title}
                  loading="lazy"
                  className="object-cover object-center w-screen h-full transition-transform duration-300 ease-in-out transform rounded-xl"
                  variants={imgHoverEffect}
                  whileHover="hover"
                />
              </div>
              <div className="flex flex-col px-1 py-2">
                <h1 className="w-full text-xl font-semibold line-clamp-2">
                  {data?.title}
                </h1>
                <p className="w-full line-clamp-3">{data?.description}</p>
              </div>
              <div className="flex flex-col px-1">
                <p className="text-sm line-clamp-3 lg:texl-base">
                  <span className="text-bold">Author-</span>
                  {data?.author}
                </p>
                <p className="text-sm text-blue-800">
                  {formatDate(data?.dateIssued)}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
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
      </div>
    </motion.div>
  );
}

export default ResourcePublication;
