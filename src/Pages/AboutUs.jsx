import React, { useContext } from "react";
import { motion } from "framer-motion";
import HomePageContext from "../Context/HomePageContext";
import { useNavigate } from "react-router-dom";

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
  const { AboutUSSect } = useContext(HomePageContext);
  // function imports
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("AboutUs/");
  };

  // image url
  const IMAGE_BASE_URL = "https://hat-dashboard.onrender.com";

  return (
    <motion.div
      className="container py-16 mx-auto "
      initial="hidden"
      viewport={{ once: true }}
      whileInView="visible"
      variants={containerVariants}
    >
      <motion.h1
        className="mb-8 text-2xl sm:text-3xl md:text-4xl font-black font-roboto text-[#b67a3d]"
        variants={itemVariants}
      >
        Who we Are
      </motion.h1>
      <div className="flex flex-col justify-between md:flex-row gap-x-5 ">
        <div className="flex flex-col max-w-2xl xl:text-base ">
          <motion.p
            className="mb-6 leading-normal text-gray-700 md:text-justify "
            variants={itemVariants}
          >
            The Historical Association of Tanzania (HAT) is dedicated to
            promoting the understanding and appreciation of the rich history and
            cultural heritage of Tanzania. Founded with the mission to preserve
            and disseminate historical knowledge, HAT engages in various
            educational and research activities to foster a deeper connection to
            the past among Tanzanians and the global community.
          </motion.p>
          <motion.p
            className="mb-6 leading-normal text-gray-700 md:text-justify "
            variants={itemVariants}
          >
            Our association organizes events, lectures, and exhibitions that
            highlight significant historical events and figures in Tanzania's
            history. We also collaborate with academic institutions, museums,
            and other cultural organizations to support research and scholarship
            in the field of history.
          </motion.p>
          <motion.p
            className="mb-6 leading-normal text-gray-700 md:text-justify "
            variants={itemVariants}
          >
            At HAT, we believe that understanding history is crucial for
            building a better future. By exploring our past, we can gain
            valuable insights into the present and make informed decisions for
            the future. Join us in our journey to uncover and celebrate the
            history of Tanzania.
          </motion.p>
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
        </div>
        <div className="flex flex-col w-full">
          <motion.div className=" rounded-xl" variants={itemVariants}>
            <img
              src={`${IMAGE_BASE_URL}${AboutUSSect[0]?.image}`}
              alt="Historical Association of Tanzania"
              className="w-full md:h-full   h-[450px] object-cover shadow-lg rounded-lg md:rounded-xl"
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default AboutUs;
