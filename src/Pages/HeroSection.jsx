// import React, { useContext, useEffect, useState } from "react";
// import HomePageContext from "../Context/HomePageContext";
// import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
// import { motion, AnimatePresence } from "framer-motion";

// function HeroSection() {
//   const { heroSect } = useContext(HomePageContext);
//   const [value, setValue] = useState(0);
//   const [direction, setDirection] = useState(1);

//   // timer Logic
//   useEffect(() => {
//     if (!heroSect || heroSect.length === 0) return;

//     // Fallback UI when there are no reviews
//     if (!heroSect || heroSect?.length === 0) {
//       return <div className="bg-white"></div>;
//     }

//     const interval = setInterval(() => {
//       setValue((prevValue) => {
//         if (direction === 1) {
//           if (prevValue >= heroSect.length - 1) {
//             setDirection(-1);
//             return prevValue - 1;
//           } else {
//             return prevValue + 1;
//           }
//         } else {
//           if (prevValue <= 0) {
//             setDirection(1);
//             return prevValue + 1;
//           } else {
//             return prevValue - 1;
//           }
//         }
//       });
//     }, 30000); // 30-second timer

//     return () => clearInterval(interval);
//   }, [direction, heroSect]);

//   // Reset direction and pause auto-rotation on user interaction
//   const handleNext = () => {
//     setDirection(1);
//     setValue((prevValue) =>
//       prevValue < heroSect.length - 1 ? prevValue + 1 : prevValue
//     );
//   };

//   const handlePrev = () => {
//     setDirection(-1);
//     setValue((prevValue) => (prevValue > 0 ? prevValue - 1 : prevValue));
//   };

//   // image url
//   const IMAGE_BASE_URL = "https://hat-dashboard.onrender.com";

//   return (
//     <div className="relative flex">
//       <div className="flex flex-col min-h-screen">
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={value}
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ x: "-100vw", ease: "easeIn" }}
//             transition={{
//               duration: 3,
//               type: "spring",
//               ease: "easeOut",
//             }}
//             className="relative overflow-hidden aspect-h-1 aspect-w-1 xl:aspect-h-8 xl:aspect-w-7"
//           >
//             <motion.img
//               // src={`${IMAGE_BASE_URL}${heroSect[value]?.image}`}
//               src={`${heroSect[value]?.image_url}`}
//               alt={heroSect[value]?.title}
//               onError={(e) => (e.target.src = "/path/to/default-image.jpg")} // Fallback image
//               initial={{ x: 300, opacity: 0 }}
//               animate={{ x: 0, opacity: 1 }}
//               transition={{ duration: 1 }}
//               className="md:min-h-screen md:h-[700px] xl:h-[900px] lg:h-[700px] h-screen shadow-md w-screen object-cover object-center group-hover:opacity-75"
//             />
//           </motion.div>
//         </AnimatePresence>
//         <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
//         <div className="container absolute top-0 bottom-[-600px] left-0 right-0 flex flex-row mx-auto mt-5 md:bottom-[-700px] rounded-2xl">
//           {/* herosection text */}
//           <div className="flex flex-col justify-center w-full gap-y-2">
//             <div className="flex flex-col justify-between bg-white md:flex-row">
//               <motion.div
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{
//                   duration: 2,
//                   type: "spring",
//                   ease: "easeOut",
//                   delay: 1,
//                 }}
//                 className="flex flex-col flex-grow p-6 bg-white md:p-10 md:rounded-l-2xl"
//               >
//                 <AnimatePresence mode="wait">
//                   <motion.h1
//                     key={value + "title"}
//                     initial={{ opacity: 0, x: "-90px" }}
//                     animate={{ opacity: 1, x: 0 }}
//                     exit={{ opacity: 0, x: "100%" }}
//                     transition={{
//                       duration: 2,
//                       type: "spring",
//                       ease: "easeOut",
//                       delay: 0.5,
//                     }}
//                     className="md:text-3xl mb-2 text-3xl xl:text-4xl text-[#b67a3d] max-w-2xl font-Roboto font-extrabold"
//                   >
//                     {heroSect[value]?.title}
//                   </motion.h1>
//                 </AnimatePresence>
//                 <AnimatePresence mode="wait">
//                   <motion.h2
//                     key={value + "subtitle"}
//                     initial={{ opacity: 0, y: -20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     exit={{ opacity: 0, y: 20 }}
//                     transition={{
//                       duration: 2,
//                       type: "spring",
//                       ease: "easeOut",
//                       delay: 2,
//                     }}
//                     className="max-w-lg text-xl font-semibold tracking-tighter text-gray-900 md:line-clamp-2 xl:text-2xl md:text-xl"
//                   >
//                     {heroSect[value]?.subtitle}
//                   </motion.h2>
//                 </AnimatePresence>
//                 <AnimatePresence mode="wait">
//                   <motion.p
//                     key={value + "description"}
//                     initial={{ opacity: 0, y: -20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     exit={{ opacity: 0, y: 20 }}
//                     transition={{
//                       duration: 2,
//                       type: "spring",
//                       ease: "easeOut",
//                       delay: 2.5,
//                     }}
//                     className="max-w-lg mt-1 text-base leading-normal line-clamp-4 xl:max-w-2xl"
//                   >
//                     {heroSect[value]?.description}
//                   </motion.p>
//                 </AnimatePresence>
//               </motion.div>
//               <motion.div
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{
//                   duration: 2,
//                   type: "spring",
//                   ease: "easeOut",
//                   delay: 1,
//                 }}
//                 className="flex flex-col max-w-md bg-white rounded-r-2xl"
//               >
//                 <motion.div
//                   initial={{ opacity: 0, y: -20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{
//                     duration: 2,
//                     type: "spring",
//                     ease: "easeOut",
//                     delay: 2,
//                   }}
//                   className="flex-row justify-end hidden px-2 md:flex"
//                 >
//                   <motion.button
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.8 }}
//                     transition={{ type: "spring", ease: "easeOut" }}
//                     onClick={handlePrev}
//                     className="p-5 text-xl text-gray-400 md:text-4xl"
//                   >
//                     <FaAngleLeft />
//                   </motion.button>
//                   <motion.button
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.8 }}
//                     transition={{ type: "spring", ease: "easeOut" }}
//                     onClick={handleNext}
//                     className="p-5 text-xl text-gray-400 md:text-4xl"
//                   >
//                     <FaAngleRight />
//                   </motion.button>
//                 </motion.div>
//                 <motion.div
//                   initial={{ opacity: 0, x: "100%" }}
//                   animate={{ opacity: 1, x: 0 }}
//                   transition={{
//                     duration: 2,
//                     type: "spring",
//                     ease: "easeOut",
//                     delay: 3,
//                   }}
//                   className="flex flex-col px-6 md:p-10 gap-y-2 "
//                 >
//                   <h1 className="md:text-2xl text-xl font-bold text-[#b67a3d]">
//                     Become a Member
//                   </h1>
//                   <p className="max-w-lg tracking-tighter sm:text-base xl:max-w-2xl xl:text-lg">
//                     Join our vibrant community of professionals and enthusiasts
//                     in home automation. Enjoy exclusive access to resources,
//                     networking opportunities, and more.
//                   </p>
//                   {/* <motion.div className="flex justify-end md:mb-7 md:items-end">
//                     <motion.button
//                       whileHover={{ scale: 1.05 }}
//                       whileTap={{ scale: 0.8 }}
//                       transition={{ type: "spring", ease: "easeOut" }}
//                       className="px-4 py-2 mt-2 font-medium text-[#744517] ring-2 ring-[#b67a3d] xl:py-2 hover:ring-2 hover:ring-black hover:bg-opacity-0 hover:text-black rounded-3xl "
//                     >
//                       <Link onClick={scrollToTop} to="/Register/">
//                         Sign Up
//                       </Link>
//                     </motion.button>
//                   </motion.div> */}
//                 </motion.div>
//               </motion.div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default HeroSection;
import React, { useContext, useEffect, useState } from "react";
import HomePageContext from "../Context/HomePageContext";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const HeroSection = () => {
  const { heroSect } = useContext(HomePageContext);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    if (!heroSect?.length) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        if (direction === 1) {
          return prev >= heroSect.length - 1 ? 0 : prev + 1;
        }
        return prev <= 0 ? heroSect.length - 1 : prev - 1;
      });
    }, 30000);

    return () => clearInterval(interval);
  }, [direction, heroSect]);

  if (!heroSect?.length) {
    return <div className="min-h-screen bg-gray-50" />;
  }

  const handleNavigation = (dir) => {
    setDirection(dir);
    setCurrentIndex((prev) => {
      if (dir === 1) {
        return prev >= heroSect.length - 1 ? 0 : prev + 1;
      }
      return prev <= 0 ? heroSect.length - 1 : prev - 1;
    });
  };

  // const slideVariants = {
  //   enter: (direction) => ({
  //     x: direction > 0 ? 1000 : -1000,
  //   }),
  //   center: {
  //     zIndex: 1,
  //     x: 0,
  //     opacity: 1,
  //   },
  //   exit: (direction) => ({
  //     zIndex: 0,
  //     x: direction < 0 ? 1000 : -1000,
  //   }),
  // };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0, // Start invisible when entering
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1, // Fully visible when centered
      transition: {
        duration: 0.5, // Adjust for smoother fade-in
      },
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0, // Fade out when exiting
      transition: {
        duration: 0.5, // Adjust for smoother fade-out
      },
    }),
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-gray-50">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          className="absolute inset-0"
        >
          {/* Background Image */}
          <div className="relative h-full">
            <motion.img
              src={heroSect[currentIndex]?.image_url}
              alt={heroSect[currentIndex]?.title}
              className="object-cover w-full h-full"
              initial={{ scale: 1.2 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.5 }}
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>

          <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
          <div className="container absolute top-0 bottom-[-400px] left-0 right-0 flex flex-row mx-auto mt-5 md:bottom-[-700px] rounded-t-2xl">
            {/* Content Container */}
            <div className="flex flex-col justify-center w-full rounded-t-2xl gap-y-2 ">
              <div className="flex flex-col justify-between bg-white rounded-t-2xl md:flex-row">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 2,
                    type: "spring",
                    ease: "easeOut",
                    delay: 1,
                  }}
                  className="flex flex-col flex-grow p-6 bg-white md:p-10 rounded-t-2xl"
                >
                  <AnimatePresence mode="wait">
                    <motion.h1
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
                      {heroSect[currentIndex]?.title}
                    </motion.h1>
                  </AnimatePresence>
                  <AnimatePresence mode="wait">
                    <motion.h2
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
                      {heroSect[currentIndex]?.subtitle}
                    </motion.h2>
                  </AnimatePresence>
                  <AnimatePresence mode="wait">
                    <motion.p
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
                      {heroSect[currentIndex]?.description}
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
                  className="flex flex-col max-w-md"
                >
                  <motion.div
                    initial={{ opacity: 0, x: "100%" }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 2,
                      type: "spring",
                      ease: "easeOut",
                      delay: 3,
                    }}
                    className="flex-col hidden px-6 md:flex md:p-10 gap-y-2"
                  >
                    <h1 className="md:text-2xl text-xl font-bold text-[#b67a3d]">
                      Become a Member
                    </h1>
                    <p className="max-w-lg mb-32 tracking-tighter sm:text-base xl:max-w-2xl xl:text-lg">
                      Join our vibrant community of professionals and
                      enthusiasts in home automation. Enjoy exclusive access to
                      resources, networking opportunities, and more.
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
        </motion.div>
      </AnimatePresence>

      {/* Navigation Controls */}
      <div className="absolute z-10 flex items-center justify-between w-full transform -translate-y-1/2 top-1/2">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => handleNavigation(-1)}
          className="p-2 ml-4 text-white transition-colors rounded-full bg-amber-800/80 backdrop-blur-sm hover:bg-amber-900"
        >
          <ChevronLeft className="w-6 h-6" />
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => handleNavigation(1)}
          className="p-2 mr-4 text-white transition-colors rounded-full bg-amber-800/80 backdrop-blur-sm hover:bg-amber-900"
        >
          <ChevronRight className="w-6 h-6" />
        </motion.button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-0 left-0 right-0 z-10 flex justify-center pb-4">
        <div className="flex space-x-2">
          {heroSect.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex ? "bg-amber-800" : "bg-white/50"
              }`}
              whileHover={{ scale: 1.2 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
