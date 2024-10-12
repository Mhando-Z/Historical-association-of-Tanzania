// export default Gallery;
import React, { useContext, useEffect, useState } from "react";
import HomePageContext from "../Context/HomePageContext";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";
// icons imports
import { ImCamera } from "react-icons/im";

function Gallery() {
  const { gallerySect } = useContext(HomePageContext);
  const [value, setValue] = useState(0);
  const [count, setCount] = useState(8);
  const [selected, setSelect] = useState(0);
  const [open, setOpen] = useState(false);

  const handleCount = () => {
    setCount((prevCount) => Math.min(prevCount + 4, gallerySect.length));
  };

  // Update the value every 5 seconds
  useEffect(() => {
    if (!gallerySect || gallerySect.length === 0) return;

    const interval = setInterval(() => {
      setValue((prevValue) => (prevValue + 1) % gallerySect.length);
    }, 5000);
    return () => clearInterval(interval); // Clear interval on component unmount
  }, [gallerySect]);

  const handleSelect = (index) => {
    setSelect(index);
    setOpen(true);
  };

  const handleNext = () => {
    if (value < gallerySect.length - 1) {
      setValue(value + 1);
    }
  };

  const handlePrev = () => {
    if (value > 0) {
      setValue(value - 1);
    }
  };

  const handleNext1 = () => {
    if (selected < gallerySect.length - 1) {
      setSelect(selected + 1);
    }
  };

  const handlePrev1 = () => {
    if (selected > 0) {
      setSelect(selected - 1);
    }
  };

  // Animation logic
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

  if (!gallerySect || gallerySect.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-screen mt-28">
        <p>No images available at the moment.</p>
      </div>
    );
  }

  const IMAGE_BASE_URL = "https://hat-dashboard.onrender.com";

  return (
    <div className="flex flex-col justify-center min-h-screen mt-28">
      <div className="container flex flex-col mx-auto">
        <h1 className="flex flex-row items-center mb-2 text-2xl font-lobstyled md:text-3xl gap-x-2">
          Gallery
          <span>
            <ImCamera className="text-gray-500" />
          </span>
        </h1>
        <p className="max-w-5xl text-sm">
          This section showcases a curated collection of images from various
          conferences and events. Each photo captures key moments, highlighting
          the atmosphere, participants, and significant activities that took
          place. Browse through to relive the experiences and get a visual
          summary of these impactful gatherings.
        </p>
      </div>
      <motion.div
        className="flex flex-col min-h-screen mt-10"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="container relative flex flex-col justify-center mx-auto ">
          {/* Header */}
          <motion.div
            className="grid grid-flow-row-dense grid-cols-1 gap-y-5 gap-x-2 md:grid-cols-3"
            variants={itemVariants}
          >
            <div className="md:h-[30rem] h-[20rem] col-span-2 relative">
              <motion.img
                src={`${IMAGE_BASE_URL}${gallerySect[value]?.image}`}
                alt={gallerySect[value]?.title || "Gallery image"}
                loading="lazy"
                className="object-cover object-center w-full h-full transition-transform duration-300 ease-in-out transform rounded-xl"
                variants={imgHoverEffect}
                whileHover="hover"
              />
              <div className="absolute flex flex-row justify-between w-full px-5 rounded-lg bottom-3 ">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.8 }}
                  transition={{ type: "spring", ease: "easeOut" }}
                  onClick={handlePrev}
                  className="p-3 text-3xl bg-white rounded-lg md:p-5 md:text-4xl hover:ring-1 focus:ring-1 focus:duration-500 focus:ring-purple-950 focus:bg-opacity-20 hover:ring-purple-900 focus:animate-pulse text-purple-950 bg-opacity-30 "
                  aria-label="Previous Image"
                >
                  <FaAngleLeft />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.8 }}
                  transition={{ type: "spring", ease: "easeOut" }}
                  onClick={handleNext}
                  className="p-3 text-3xl bg-white rounded-lg md:p-5 md:text-4xl hover:ring-1 focus:ring-1 focus:duration-500 focus:ring-purple-950 focus:bg-opacity-20 hover:ring-purple-900 focus:animate-pulse text-purple-950 bg-opacity-30 "
                  aria-label="Next Image"
                >
                  <FaAngleRight />
                </motion.button>
              </div>
            </div>
            {/* Scroll Grids */}
            <motion.div
              className="grid grid-flow-row gap-y-1 overflow-y-auto h-[30rem]"
              variants={containerVariants}
            >
              {gallerySect.slice(0, count).map((data, index) => (
                <motion.div
                  key={data.id} // Assuming data.id is unique
                  className="h-[10rem] relative cursor-pointer"
                  variants={itemVariants}
                  onClick={() => handleSelect(index)}
                >
                  <motion.img
                    src={`${IMAGE_BASE_URL}${data?.image}`}
                    alt={data?.title || "Gallery image"}
                    loading="lazy"
                    className="object-cover object-center w-full h-full transition-transform duration-300 ease-in-out transform rounded-xl"
                    variants={imgHoverEffect}
                    whileHover="hover"
                  />
                  <div className="absolute inset-0 bg-black rounded-xl bg-opacity-30"></div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          {/* News List */}
          <motion.div
            className="grid grid-cols-1 gap-2 mt-5 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-5"
            variants={containerVariants}
          >
            {gallerySect.slice(0, count).map((data, index) => (
              <motion.div
                key={data.id} // Assuming data.id is unique
                className="flex-col items-center justify-center cursor-pointer"
                variants={itemVariants}
                whileHover="hover"
                onClick={() => handleSelect(index)}
              >
                <div className="h-[10rem]">
                  <motion.img
                    src={`${IMAGE_BASE_URL}${data?.image}`}
                    alt={data?.title || "Gallery image"}
                    loading="lazy"
                    className="object-cover object-center w-full h-full transition-transform duration-300 ease-in-out transform rounded-xl"
                    variants={imgHoverEffect}
                    whileHover="hover"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
          <div className="flex justify-end w-full mt-6 mb-20">
            <motion.button
              onClick={handleCount}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.8 }}
              transition={{ type: "spring", ease: "easeOut" }}
              className="px-5 py-1.5 text-white rounded-3xl bg-[#b67a3d] hover:bg-[#a56a2e]"
            >
              More
            </motion.button>
          </div>
          {/* Selected Image Overlay */}
          <AnimatePresence>
            {open && (
              <>
                <div
                  onClick={() => setOpen(false)}
                  className="absolute top-0 bottom-0 left-0 right-0 bg-black blur-sm bg-opacity-70"
                ></div>

                <div className="absolute flex items-center justify-center bg-black bg-opacity-50 ">
                  <motion.div
                    className="relative py-2 px-1 h-[40rem] bg-white rounded-lg"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                  >
                    <motion.img
                      src={`${IMAGE_BASE_URL}${gallerySect[selected]?.image}`}
                      alt={gallerySect[selected]?.title || "Selected Image"}
                      loading="lazy"
                      className="object-cover w-screen h-full rounded"
                      variants={imgHoverEffect}
                      whileHover="hover"
                    />
                    <button
                      onClick={() => setOpen(false)}
                      className="absolute px-2 text-4xl text-white bg-red-600 rounded-full top-2 right-2 hover:text-gray-100"
                      aria-label="Close"
                    >
                      ×
                    </button>
                    <div className="flex items-center justify-center mt-6 gap-x-3">
                      <button
                        onClick={handlePrev1}
                        disabled={selected === 0}
                        className={`p-5 rounded ${
                          selected === 0
                            ? "text-red-600 text-xl bg-gray-100 cursor-not-allowed"
                            : "text-purple-900 text-xl bg-gray-100 hover:text-purple-700"
                        }`}
                        aria-label="Previous Selected Image"
                      >
                        <FaAngleLeft />
                      </button>
                      <button
                        onClick={handleNext1}
                        disabled={selected === gallerySect.length - 1}
                        className={`p-5 rounded ${
                          selected === gallerySect.length - 1
                            ? "text-red-600 text-xl bg-gray-100 cursor-not-allowed"
                            : "text-purple-900 text-xl bg-gray-100 hover:text-purple-700"
                        }`}
                        aria-label="Next Selected Image"
                      >
                        <FaAngleRight />
                      </button>
                    </div>
                  </motion.div>
                </div>
              </>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}

export default Gallery;
