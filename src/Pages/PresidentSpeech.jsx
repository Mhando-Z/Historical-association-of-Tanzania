import React, { useContext } from "react";
import HomePageContext from "../Context/HomePageContext";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function PresidentSpeech() {
  const { PresidentSect } = useContext(HomePageContext);

  const navigate = useNavigate();

  const handleNaviate = () => {
    navigate("President/");
  };

  // image url
  const IMAGE_BASE_URL = "https://hat-dashboard.onrender.com";

  // Fallback UI when there are no data
  if (!PresidentSect || PresidentSect?.length === 0) {
    return <div className="bg-white"></div>;
  }

  return (
    <div
      className={`relative px-6 ${
        PresidentSect?.length === 0 ? "hidden" : ""
      } mt-40 shadow-md sm:mt-32 p-14 md:py-20 md:mt-20 bg-opacity-15`}
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
                viewport={{ once: true }}
                transition={{
                  duration: 1,
                }}
                className="flex flex-col items-center justify-center gap-y-3"
              >
                <div className="w-full overflow-hidden bg-gray-200 rounded-lg aspect-h-1 aspect-w-1 md:rounded-xl xl:aspect-h-8 xl:aspect-w-7">
                  <img
                    src={`${IMAGE_BASE_URL}${dt.image}`}
                    alt={dt?.subtitle}
                    className="h-[400px] w-full shadow-lg object-cover object-top md:object-center group-hover:opacity-75"
                  />
                </div>
                <p className="w-[300px] mt-2 text-sm font-medium capitalize justify-center text-center ">
                  {dt.subtitle}
                </p>
              </motion.div>
              <div className="flex flex-col mt-5 md:gap-y-4 gap-y-2">
                <h1 className="max-w-lg text-2xl font-extrabold tracking-tighter text-center text-gray-800 sm:text-3xl font-roboto xl:max-w-2xl md:text-left md:text-4xl xl:text-5xl">
                  {dt.title}
                </h1>
                {/* <h1 className="text-xl font-semibold text-gray-700 md:text-left md:text-2xl xl:text-3xl">
                  {dt.subtitle}
                </h1> */}
                <motion.div
                  initial={{ opacity: 0, y: -30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1 }}
                  className="flex flex-col gap-y-2"
                >
                  <p className="max-w-5xl text-base leading-normal md:text-justify line-clamp-6">
                    {dt.description}
                  </p>
                  <p className="max-w-5xl mt-2 text-base leading-normal md:text-justify line-clamp-6">
                    {dt.description2}
                  </p>
                  <motion.div className="flex justify-end w-full mt-6 ">
                    <motion.button
                      onClick={handleNaviate}
                      className="relative px-4 py-1.5 md:py-2 hover:text-white rounded-3xl text-xs sm:text-sm md:text-base ring-2 ring-[#b67a3d] overflow-hidden text-[#744517] font-medium "
                      whileHover="hover"
                      initial="initial"
                    >
                      <motion.div
                        className="absolute inset-0 bg-[#b67a3d]"
                        initial={{ x: "100%" }}
                        variants={{
                          hover: { x: 0 },
                        }}
                        transition={{ duration: 0.3 }}
                      />
                      <motion.div
                        className="absolute inset-0 "
                        initial={{ x: 0 }}
                        variants={{
                          hover: { x: "-100%" },
                        }}
                        transition={{ duration: 0.3 }}
                      />
                      <span className="relative z-10">ReadMore</span>
                    </motion.button>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default PresidentSpeech;
