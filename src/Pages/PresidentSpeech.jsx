import React, { useContext } from "react";
import HomePageContext from "../Context/HomePageContext";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Dots } from "react-activity";

function PresidentSpeech() {
  const { PresidentSect } = useContext(HomePageContext);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div
      className={`relative px-6 ${PresidentSect?.length === 0 ? "hidden" : ""} mt-40 shadow-xl sm:mt-32 p-14 md:py-20 md:mt-20 bg-opacity-15`}
    >
      <div className="container flex flex-col mx-auto md:flex-row">
        {PresidentSect?.slice(0, 1).map((dt) => {
          return (
            <div
              key={dt.id}
              className="flex flex-col justify-between w-full md:flex-row gap-x-10"
            >
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1,
                }}
                className="flex flex-col items-center justify-center gap-y-3"
              >
                <div className="w-full overflow-hidden bg-gray-200 rounded-lg aspect-h-1 aspect-w-1 md:rounded-xl xl:aspect-h-8 xl:aspect-w-7">
                  <img
                    src={`http://127.0.0.1:8000/${dt.image}`}
                    alt={dt?.subtitle}
                    className="h-[400px] w-full shadow-lg object-cover object-top md:object-center group-hover:opacity-75"
                  />
                </div>
                <p className="w-[300px] mt-2 text-sm font-medium justify-center text-center ">
                  {dt.subtitle}
                </p>
              </motion.div>
              <div className="flex flex-col mt-5 md:gap-y-4 gap-y-2">
                <h1 className="max-w-lg text-3xl font-extrabold tracking-tighter text-center text-gray-800 xl:max-w-2xl md:text-left md:text-4xl xl:text-5xl">
                  {dt.title}
                </h1>
                <h1 className="text-xl font-semibold text-gray-700 md:text-left md:text-2xl xl:text-3xl">
                  {dt.subtitle}
                </h1>
                <motion.div
                  initial={{ opacity: 0, y: -30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                  className="flex flex-col gap-y-2"
                >
                  <p className="max-w-5xl tracking-tighter text-justify md:text-base xl:text-lg line-clamp-6">
                    {dt.description}
                  </p>
                  <motion.div className="flex justify-end w-full mt-6 ">
                    <Link
                      onClick={scrollToTop}
                      to={"President/"}
                      className="px-4 py-2 mt-2 font-medium text-black ring-2 ring-black xl:py-2 hover:ring-2 hover:ring-black hover:bg-opacity-0 hover:text-black rounded-3xl "
                    >
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.8 }}
                        transition={{ type: "spring", ease: "easeOut" }}
                      >
                        ReadMore
                      </motion.div>
                    </Link>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          );
        })}
      </div>
      {PresidentSect?.length === 0 ? (
        <div className="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center ">
          <Dots color="#b67a3d" size={40} speed={0.7} animating={true} />
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default PresidentSpeech;
