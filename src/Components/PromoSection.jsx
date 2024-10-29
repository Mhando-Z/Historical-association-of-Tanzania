import { useContext } from "react";
import HomePageContext from "../Context/HomePageContext";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 1 },
  },
};

const gridContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.6 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

export default function PromoSect() {
  const { ConferenceSect } = useContext(HomePageContext);
  const { gallerySect } = useContext(HomePageContext);
  const navigate = useNavigate();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleRegister = () => {
    scrollToTop();
    navigate("/Register/");
  };

  // image url
  const IMAGE_BASE_URL = "https://hat-dashboard.onrender.com";

  return (
    <div className="relative min-h-screen mt-20 overflow-hidden bg-white">
      {ConferenceSect?.length === 0 ? (
        <div className="bg-white"></div>
      ) : (
        <motion.div
          className="pt-16 pb-80 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40"
          initial="hidden"
          viewport={{ once: true }}
          whileInView="visible"
          variants={containerVariants}
        >
          <div className="relative px-4 mx-auto max-w-7xl sm:static sm:px-6 lg:px-8">
            <motion.div className="sm:max-w-lg">
              <motion.h1
                className="text-4xl text-[#b67a3d] md:max-w-[390px] max-w-[290px] xl:max-w-lg font-black tracking-tight md:text-5xl xl:text-6xl"
                variants={itemVariants}
              >
                {ConferenceSect[0]?.title}
              </motion.h1>
              <motion.p
                className="mt-4 text-base text-gray-500 xl:text-lg"
                variants={itemVariants}
              >
                {ConferenceSect[0]?.description}
              </motion.p>
            </motion.div>
            <div>
              <div className="mt-10">
                {/* Decorative image grid with staggering */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                >
                  <motion.div
                    className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={gridContainerVariants}
                  >
                    <div className="flex items-center space-x-6 lg:space-x-8">
                      {/* First Grid Section */}
                      <motion.div
                        className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8"
                        variants={gridContainerVariants}
                      >
                        {gallerySect.slice(0, 2).map((item, index) => (
                          <motion.div
                            key={index}
                            variants={itemVariants}
                            className="h-64 overflow-hidden rounded-lg w-44"
                          >
                            <motion.img
                              whileHover={{ scale: 1.05 }}
                              transition={{ type: "spring", ease: "easeOut" }}
                              loading="lazy"
                              // src={`${IMAGE_BASE_URL}${item?.image}`}
                              src={`${item?.image_url}`}
                              alt={`Hat conference pictures ${index}`}
                              className="object-cover object-center w-full h-full"
                            />
                          </motion.div>
                        ))}
                      </motion.div>
                      {/* Second Grid Section */}
                      <motion.div
                        className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8"
                        variants={gridContainerVariants}
                      >
                        {gallerySect.slice(2, 5).map((item, index) => (
                          <motion.div
                            key={index}
                            variants={itemVariants}
                            className="h-64 overflow-hidden rounded-lg w-44"
                          >
                            <motion.img
                              whileHover={{ scale: 1.05 }}
                              transition={{ type: "spring", ease: "easeOut" }}
                              loading="lazy"
                              // src={`${IMAGE_BASE_URL}${item?.image}`}
                              src={`${item?.image_url}`}
                              alt={`Hat conference pictures ${index + 2}`}
                              className="object-cover object-center w-full h-full"
                            />
                          </motion.div>
                        ))}
                      </motion.div>
                      {/* Third Grid Section */}
                      <motion.div
                        className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8"
                        variants={gridContainerVariants}
                      >
                        {gallerySect.slice(5, 7).map((item, index) => (
                          <motion.div
                            key={index}
                            variants={itemVariants}
                            className="h-64 overflow-hidden rounded-lg w-44"
                          >
                            <motion.img
                              whileHover={{ scale: 1.05 }}
                              transition={{ type: "spring", ease: "easeOut" }}
                              loading="lazy"
                              // src={`${IMAGE_BASE_URL}${item?.image}`}
                              src={`${item?.image_url}`}
                              alt={`Hat conference pictures ${index + 5}`}
                              className="object-cover object-center w-full h-full"
                            />
                          </motion.div>
                        ))}
                      </motion.div>
                    </div>
                  </motion.div>
                </div>

                <motion.button
                  onClick={handleRegister}
                  className="relative px-4 py-1.5 md:py-2 bg-[#b67a3d] text-white  rounded-3xl text-xs sm:text-sm md:text-base ring-2 ring-[#b67a3d] overflow-hidden hover:text-[#744517] font-medium "
                  whileHover="hover"
                  initial="initial"
                >
                  <motion.div
                    className="absolute inset-0 bg-white"
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
                  <span className="relative z-10"> Register Now</span>
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}
