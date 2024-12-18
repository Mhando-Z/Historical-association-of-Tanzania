import React, { useContext } from "react";
import HomePageContext from "../Context/HomePageContext";
import { motion } from "framer-motion";

function HATPresident() {
  const { PresidentSect } = useContext(HomePageContext);

  // image link
  const IMAGE_BASE_URL = "https://hat-dashboard.onrender.com";

  return (
    <div className="flex flex-col min-h-screen mt-24 ">
      <div className="container flex flex-col mx-auto gap-y-5 gap-x-10 md:flex-row">
        {/* Basic Info */}
        <div className="flex flex-col">
          {/* image */}
          <motion.img
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            // src={`${IMAGE_BASE_URL}${PresidentSect[0]?.image}`}
            src={`${PresidentSect[0]?.image_url1}`}
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
            className="text-2xl font-medium text-center md:text-left font-roboto md:text-3xl xl:text-4xl"
          >
            {PresidentSect[0]?.title}
          </motion.h1>

          <div className="flex flex-col mt-2 gap-y-2">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="max-w-5xl leading-normal md:text-justify"
            >
              {PresidentSect[0]?.description}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="max-w-5xl mt-2 leading-normal md:text-justify"
            >
              {PresidentSect[0]?.description2}
            </motion.p>
            {/* image2  */}
            <motion.img
              initial={{ opacity: 0, y: 20 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
              // src={`${IMAGE_BASE_URL}${PresidentSect[0]?.image2}`}
              src={`${PresidentSect[0]?.image_url2}`}
              alt={PresidentSect[0]?.subtitle}
              className="max-w-screen opacity-70 object-top object-cover mt-2 mb-4 rounded-xl h-[450px]"
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="max-w-5xl leading-normal md:text-justify"
            >
              {PresidentSect[0]?.description3}
            </motion.p>

            {/* best Regards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="flex flex-col mt-4 mb-20"
            >
              <h2 className="font-medium text-md">Warm Regards</h2>
              <p className="mt-2 ">{PresidentSect[0]?.name}</p>
              <p className="mt-1 ">{PresidentSect[0]?.cheo}</p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HATPresident;
