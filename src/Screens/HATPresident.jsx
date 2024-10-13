import React, { useContext } from "react";
import HomePageContext from "../Context/HomePageContext";
import { motion } from "framer-motion";

function HATPresident() {
  const { PresidentSect } = useContext(HomePageContext);

  // image link
  const IMAGE_BASE_URL = "https://hat-dashboard.onrender.com";

  return (
    <div className="flex flex-col min-h-screen mt-24">
      <div className="container flex flex-col mx-auto gap-y-5 gap-x-10 md:flex-row">
        {/* Basic Info */}
        <div className="flex flex-col shadow">
          {/* image */}
          <motion.img
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            src={`${IMAGE_BASE_URL}${PresidentSect[0]?.image}`}
            alt={PresidentSect[0]?.subtitle}
            className="max-w-screen object-top rounded-xl object-cover h-[450px]"
          />
        </div>
        {/* description */}
        <div className="flex flex-col flex-grow gap-y-2 ">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="px-2 text-xl md:text-3xl font-medium border-l-4 border-l-[#744517] xl:text-4xl"
          >
            {PresidentSect[0]?.title}
          </motion.h1>
          {/* <motion.h2
            initial={{ opacity: 0, y: 20 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="px-2 text-xl font-medium border-l-4 border-l-[#744517] xl:text-2xl"
          >
            {PresidentSect[0]?.subtitle}
          </motion.h2> */}
          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="max-w-5xl tracking-tighter text-justify"
          >
            {PresidentSect[0]?.description}
          </motion.p>
          <motion.img
            initial={{ opacity: 0, y: 20 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            src={`${IMAGE_BASE_URL}${PresidentSect[0]?.image2}`}
            alt={PresidentSect[0]?.subtitle}
            className="max-w-screen opacity-70 object-top object-cover mt-2 mb-20 rounded-xl h-[450px]"
          />
        </div>
      </div>
    </div>
  );
}

export default HATPresident;
