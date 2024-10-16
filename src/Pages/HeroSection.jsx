import React, { useContext, useEffect, useState } from "react";
import HomePageContext from "../Context/HomePageContext";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";

function HeroSection() {
  const { heroSect } = useContext(HomePageContext);
  const [value, setValue] = useState(0);
  const [direction, setDirection] = useState(1);

  // timer Logic
  useEffect(() => {
    if (!heroSect || heroSect.length === 0) return;

    // Fallback UI when there are no reviews
    if (!heroSect || heroSect?.length === 0) {
      return <div className="bg-white"></div>;
    }

    const interval = setInterval(() => {
      setValue((prevValue) => {
        if (direction === 1) {
          if (prevValue >= heroSect.length - 1) {
            setDirection(-1);
            return prevValue - 1;
          } else {
            return prevValue + 1;
          }
        } else {
          if (prevValue <= 0) {
            setDirection(1);
            return prevValue + 1;
          } else {
            return prevValue - 1;
          }
        }
      });
    }, 30000); // 30-second timer

    return () => clearInterval(interval);
  }, [direction, heroSect]);

  // Reset direction and pause auto-rotation on user interaction
  const handleNext = () => {
    setDirection(1);
    setValue((prevValue) =>
      prevValue < heroSect.length - 1 ? prevValue + 1 : prevValue
    );
  };

  const handlePrev = () => {
    setDirection(-1);
    setValue((prevValue) => (prevValue > 0 ? prevValue - 1 : prevValue));
  };

  // image url
  const IMAGE_BASE_URL = "https://hat-dashboard.onrender.com";

  return (
    <div className="relative flex">
      <div className="flex flex-col min-h-screen">
        <AnimatePresence mode="wait">
          <motion.div
            key={value}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ x: "-100vw", ease: "easeIn" }}
            transition={{
              duration: 3,
              type: "spring",
              ease: "easeOut",
            }}
            className="relative overflow-hidden aspect-h-1 aspect-w-1 xl:aspect-h-8 xl:aspect-w-7"
          >
            <motion.img
              src={`${IMAGE_BASE_URL}${heroSect[value]?.image}`}
              alt={heroSect[value]?.title}
              onError={(e) => (e.target.src = "/path/to/default-image.jpg")} // Fallback image
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className="md:min-h-screen md:h-[700px] xl:h-[900px] lg:h-[700px] h-screen shadow-md w-screen object-cover object-center group-hover:opacity-75"
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
        <div className="container absolute top-0 bottom-[-600px] left-0 right-0 flex flex-row mx-auto mt-5 md:bottom-[-700px] rounded-2xl">
          {/* herosection text */}
          <div className="flex flex-col justify-center w-full gap-y-2">
            <div className="flex flex-col justify-between bg-white md:flex-row">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 2,
                  type: "spring",
                  ease: "easeOut",
                  delay: 1,
                }}
                className="flex flex-col flex-grow p-6 bg-white md:p-10 md:rounded-l-2xl"
              >
                <AnimatePresence mode="wait">
                  <motion.h1
                    key={value + "title"}
                    initial={{ opacity: 0, x: "-90px" }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: "100%" }}
                    transition={{
                      duration: 2,
                      type: "spring",
                      ease: "easeOut",
                      delay: 0.5,
                    }}
                    className="md:text-3xl mb-2 text-3xl xl:text-4xl text-[#b67a3d] max-w-2xl font-Roboto font-extrabold"
                  >
                    {heroSect[value]?.title}
                  </motion.h1>
                </AnimatePresence>
                <AnimatePresence mode="wait">
                  <motion.h2
                    key={value + "subtitle"}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{
                      duration: 2,
                      type: "spring",
                      ease: "easeOut",
                      delay: 2,
                    }}
                    className="max-w-lg text-xl font-semibold tracking-tighter text-gray-900 md:line-clamp-2 xl:text-2xl md:text-xl"
                  >
                    {heroSect[value]?.subtitle}
                  </motion.h2>
                </AnimatePresence>
                <AnimatePresence mode="wait">
                  <motion.p
                    key={value + "description"}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{
                      duration: 2,
                      type: "spring",
                      ease: "easeOut",
                      delay: 2.5,
                    }}
                    className="max-w-lg mt-1 text-base leading-normal line-clamp-4 xl:max-w-2xl"
                  >
                    {heroSect[value]?.description}
                  </motion.p>
                </AnimatePresence>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 2,
                  type: "spring",
                  ease: "easeOut",
                  delay: 1,
                }}
                className="flex flex-col max-w-md bg-white rounded-r-2xl"
              >
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 2,
                    type: "spring",
                    ease: "easeOut",
                    delay: 2,
                  }}
                  className="flex-row justify-end hidden px-2 md:flex"
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.8 }}
                    transition={{ type: "spring", ease: "easeOut" }}
                    onClick={handlePrev}
                    className="p-5 text-xl text-gray-400 md:text-4xl"
                  >
                    <FaAngleLeft />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.8 }}
                    transition={{ type: "spring", ease: "easeOut" }}
                    onClick={handleNext}
                    className="p-5 text-xl text-gray-400 md:text-4xl"
                  >
                    <FaAngleRight />
                  </motion.button>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: "100%" }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 2,
                    type: "spring",
                    ease: "easeOut",
                    delay: 3,
                  }}
                  className="flex flex-col px-6 md:p-10 gap-y-2 "
                >
                  <h1 className="md:text-2xl text-xl font-bold text-[#b67a3d]">
                    Become a Member
                  </h1>
                  <p className="max-w-lg tracking-tighter sm:text-base xl:max-w-2xl xl:text-lg">
                    Join our vibrant community of professionals and enthusiasts
                    in home automation. Enjoy exclusive access to resources,
                    networking opportunities, and more.
                  </p>
                  {/* <motion.div className="flex justify-end md:mb-7 md:items-end">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.8 }}
                      transition={{ type: "spring", ease: "easeOut" }}
                      className="px-4 py-2 mt-2 font-medium text-[#744517] ring-2 ring-[#b67a3d] xl:py-2 hover:ring-2 hover:ring-black hover:bg-opacity-0 hover:text-black rounded-3xl "
                    >
                      <Link onClick={scrollToTop} to="/Register/">
                        Sign Up
                      </Link>
                    </motion.button>
                  </motion.div> */}
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
