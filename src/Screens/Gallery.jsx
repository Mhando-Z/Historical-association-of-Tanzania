import React, { useContext, useState } from "react";
import HomePageContext from "../Context/HomePageContext";
import { Link } from "react-router-dom";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import ImageDisplay from "../Components/InageDisplay";
import { Dots } from "react-activity";
import { motion, AnimatePresence } from "framer-motion";

function Gallery() {
  const { gallerySect } = useContext(HomePageContext);
  const [value, setValue] = useState(0);
  const [count, setCount] = useState(8);
  const [valuez, setValuez] = useState(null);
  const [open, setOpen] = useState(false);

  const handleCount = () => {
    if (count <= gallerySect.length) {
      setCount(count + 4);
    }
  };

  const handleValue = (index) => {
    setValuez(index);
    setOpen(!open);
  };

  const handleNext = () => {
    if (value <= gallerySect.length - 2) {
      setValue(value + 1);
    }
  };

  const handlePrev = () => {
    if (value > 0) {
      setValue(value - 1);
    }
  };

  return (
    <div
      className={`flex ${gallerySect?.length === 0 ? "hidden" : ""} flex-col items-center justify-center min-h-screen bg-gray-50`}
    >
      <div className="flex flex-col w-full mb-12 gap-y-3">
        <div className="relative w-full overflow-hidden bg-gray-200 aspect-h-1 aspect-w-1 xl:aspect-h-8 xl:aspect-w-7">
          <AnimatePresence mode="wait">
            <motion.img
              key={gallerySect[value]?.id}
              src={`http://127.0.0.1:8000/${gallerySect[value]?.image}`}
              alt={gallerySect[0]?.title}
              loading="lazy"
              initial={{ x: 0, opacity: 0 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ x: "-5000vw", opacity: [1, 1, 0, 0] }}
              transition={{ ease: "easeOut", duration: 1 }}
              className="h-[600px] lg:h-[900px] w-full transition-all duration-500 ease-in object-cover object-center"
            />
          </AnimatePresence>
          {gallerySect?.length === 0 && (
            <div className="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center ">
              <Dots color="#b67a3d" size={40} speed={0.7} animating={true} />
            </div>
          )}
          <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-t from-white via-transparent via-30% to-transparent"></div>
          <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-t from-white via-transparent via-20% to-transparent"></div>
          <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-t from-white via-transparent via-5% to-transparent"></div>
          <div className="absolute bottom-0 flex flex-col rounded-lg gap-y-1 xl:bottom-12 md:bottom-36 right-2 md:right-10">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.8 }}
              transition={{ type: "spring", ease: "easeOut" }}
              onClick={handlePrev}
              className="p-3 text-3xl bg-white rounded-lg md:p-5 md:text-4xl hover:ring-1 focus:ring-1 focus:duration-500 focus:ring-purple-950 focus:bg-opacity-20 hover:ring-purple-900 focus:animate-pulse text-purple-950 bg-opacity-30 "
            >
              <FaAngleLeft />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.8 }}
              transition={{ type: "spring", ease: "easeOut" }}
              onClick={handleNext}
              className="p-3 text-3xl bg-white rounded-lg md:p-5 md:text-4xl hover:ring-1 focus:ring-1 focus:duration-500 focus:ring-purple-950 focus:bg-opacity-20 hover:ring-purple-900 focus:animate-pulse text-purple-950 bg-opacity-30 "
            >
              <FaAngleRight />
            </motion.button>
          </div>
        </div>
      </div>
      <div className="flex flex-col px-2 bg-white shadow-2xl  border-b-8 border-b-[#a97c50] lg-px-10 sm:px-5 ">
        <div className="py-3 mb-10 shadow-xl ">
          <motion.h1
            className="ml-2 md:text-4xl text-3xl font-semibold text-[#a97c50] tracking-tighter md:text-5xll"
            initial={{ opacity: 0, y: -20 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Gallery
          </motion.h1>
        </div>
        <div className="grid grid-cols-1 gap-x-1 gap-y-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 xl:gap-x-1">
          {gallerySect?.slice(0, count).map((product, index) => (
            <Link
              onClick={() => handleValue(index)}
              key={product.id}
              className="group"
            >
              <motion.div
                className="w-full overflow-hidden bg-gray-200 rounded-xl aspect-h-1 aspect-w-1 hover:rounded-2xl xl:aspect-h-8 xl:aspect-w-7"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <img
                  src={`http://127.0.0.1:8000/${product.image}`}
                  alt={product.title}
                  loading="lazy"
                  className="h-[400px] w-full group-hover:grayscale transition-all duration-500 ease-in object-cover object-center"
                />
              </motion.div>
            </Link>
          ))}
        </div>
        <div className="flex justify-end w-full py-2">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.8 }}
            transition={{ type: "spring", ease: "easeOut" }}
            className="py-2 px-7 font-medium text-center hover:ring-black rounded-3xl text-white bg-[#a97c50] md:hover:bg-opacity-0 md:hover:text-black md:hover:ring-2 "
            onClick={handleCount}
          >
            more
          </motion.button>
        </div>
      </div>
      <div className="flex items-end justify-end w-full mt-10 mb-16"></div>
      <ImageDisplay value={valuez} open={open} setOpen={setOpen} />
    </div>
  );
}

export default Gallery;
