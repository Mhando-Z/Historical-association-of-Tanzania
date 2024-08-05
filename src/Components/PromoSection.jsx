import { useContext } from "react";
import HomePageContext from "../Context/HomePageContext";
import { Dots } from "react-activity";
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

  return (
    <div className="relative min-h-screen mt-20 overflow-hidden bg-white">
      {ConferenceSect?.length === 0 ? (
        <div className="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center">
          <Dots color="#b67a3d" size={40} speed={0.7} animating={true} />
        </div>
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
                              src={`http://127.0.0.1:8000/${item?.image}`}
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
                              src={`http://127.0.0.1:8000/${item?.image}`}
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
                              src={`http://127.0.0.1:8000/${item?.image}`}
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
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.8 }}
                  transition={{ type: "spring", ease: "easeOut" }}
                  className="inline-block rounded-3xl hover:bg-opacity-0 hover:ring-2 hover:text-black hover:ring-black border border-transparent bg-[#b67a3d] px-5 py-2 text-center font-medium text-white"
                  variants={itemVariants}
                >
                  Register Now
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}
