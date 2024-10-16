import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import picha from "../Assets/Images/04.jpg";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

function AboutUs() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("AboutUs/");
  };

  return (
    <motion.div
      className="container py-16 mx-auto shadow-xl bg-gradient-to-br from-orange-50 to-orange-100 rounded-3xl"
      initial="hidden"
      viewport={{ once: true }}
      whileInView="visible"
      variants={containerVariants}
    >
      <motion.h1
        className="mb-8 text-3xl sm:text-4xl md:text-5xl font-black font-roboto text-[#b67a3d] text-center"
        variants={itemVariants}
      >
        Who We Are
      </motion.h1>
      <div className="flex flex-col justify-between px-6 md:flex-row gap-x-10 md:px-10">
        <motion.div
          className="flex flex-col max-w-2xl xl:text-base"
          variants={itemVariants}
        >
          {[
            "The Historical Association of Tanzania (HAT) is dedicated to promoting the understanding and appreciation of the rich history and cultural heritage of Tanzania. Founded with the mission to preserve and disseminate historical knowledge, HAT engages in various educational and research activities to foster a deeper connection to the past among Tanzanians and the global community.",
            "Our association organizes events, lectures, and exhibitions that highlight significant historical events and figures in Tanzania's history. We also collaborate with academic institutions, museums, and other cultural organizations to support research and scholarship in the field of history.",
            "At HAT, we believe that understanding history is crucial for building a better future. By exploring our past, we can gain valuable insights into the present and make informed decisions for the future. Join us in our journey to uncover and celebrate the history of Tanzania.",
          ].map((paragraph, index) => (
            <motion.p
              key={index}
              className="mb-6 text-lg leading-relaxed text-gray-700 md:text-justify"
              variants={itemVariants}
            >
              {paragraph}
            </motion.p>
          ))}
          <motion.div className="flex w-full mt-5 mb-10 md:mt-10">
            <motion.button
              onClick={handleClick}
              className="relative px-4 py-1.5 md:py-2 hover:text-white rounded-3xl text-xs sm:text-sm md:text-base ring-2 ring-[#b67a3d] overflow-hidden text-[#744517] font-medium "
              whileHover="hover"
              initial="initial"
            >
              <motion.div
                className="absolute inset-0 bg-[#b67a3d]"
                initial={{ x: "-100%" }}
                variants={{
                  hover: { x: 0 },
                }}
                transition={{ duration: 0.3 }}
              />
              <motion.div
                className="absolute inset-0 "
                initial={{ x: 0 }}
                variants={{
                  hover: { x: "100%" },
                }}
                transition={{ duration: 0.3 }}
              />
              <span className="relative z-10">ReadMore</span>
            </motion.button>
          </motion.div>
        </motion.div>
        <motion.div
          className="flex flex-col w-full md:w-1/2"
          variants={itemVariants}
        >
          <div className="relative overflow-hidden shadow-2xl rounded-2xl">
            <img
              // src={`${IMAGE_BASE_URL}${AboutUSSect[0]?.image}`}
              src={picha}
              alt="Historical Association of Tanzania"
              className="w-full h-[500px] object-cover transition-transform duration-300 ease-in-out hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6">
              <h3 className="mb-2 text-2xl font-bold text-white">
                Preserving Our Heritage
              </h3>
              <p className="text-white text-opacity-80">
                Exploring Tanzania's rich historical tapestry
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default AboutUs;
