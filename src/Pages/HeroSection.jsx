// import React, { useContext, useEffect, useState } from "react";
// import HomePageContext from "../Context/HomePageContext";
// import { Link } from "react-router-dom";
// import { FaAngleLeft } from "react-icons/fa6";
// import { Dots } from "react-activity";
// import { FaAngleRight } from "react-icons/fa6";
// import { motion } from "framer-motion";

// function HeroSection() {
//   const { heroSect } = useContext(HomePageContext);
//   const [value, setValue] = useState(0);
//   const [direction, setDirection] = useState(1);

//   // timer Logic
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setValue((prevValue) => {
//         if (direction === 1) {
//           if (prevValue >= heroSect?.length - 1) {
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
//     }, 30000); // Interval duration 10000 means 10 seconds timer will execute code

//     return () => clearInterval(interval); // Cleanup the interval on unmount
//   }, [direction, heroSect.length]);

//   // change buttons logic
//   const handleNext = () => {
//     if (value <= heroSect.length - 2) {
//       setValue(value + 1);
//     }
//   };
//   const handlePrev = () => {
//     if (value > 0) {
//       setValue(value - 1);
//     }
//   };

//   return (
//     <div className="relative flex ">
//       <div className="flex flex-col min-h-screen">
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{
//             duration: 2,
//             type: "spring",
//             ease: "easeOut",
//             delay: 0.5,
//           }}
//           className="relative overflow-hidden bg-gray-200 aspect-h-1 aspect-w-1 xl:aspect-h-8 xl:aspect-w-7"
//         >
//           <motion.img
//             src={`http://127.0.0.1:8000/${heroSect[value]?.image}`}
//             alt={heroSect[value]?.title}
//             className="md:min-h-screen  h-[900px] shadow-md w-screen object-cover object-center group-hover:opacity-75"
//           />
//           {heroSect?.length === 0 ? (
//             <div className="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center ">
//               <Dots color="#b67a3d" size={40} speed={0.7} animating={true} />
//             </div>
//           ) : (
//             ""
//           )}
//         </motion.div>
//         <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
//         <div className="container absolute top-0 bottom-[-899px] left-0 right-0 flex  flex-row mx-auto mt-5 md:bottom-[-700px] rounded-2xl">
//           {/* herosection text */}
//           <div className="flex flex-col justify-center w-full gap-y-2">
//             <div className="flex flex-col justify-between md:flex-row">
//               <motion.div
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{
//                   duration: 2,
//                   type: "spring",
//                   ease: "easeOut",
//                   delay: 1,
//                 }}
//                 className="flex flex-col flex-grow p-10 bg-white md:rounded-l-2xl"
//               >
//                 <motion.h1
//                   initial={{ opacity: 0, x: "-100%" }}
//                   animate={{ opacity: 1, x: 0 }}
//                   transition={{
//                     duration: 2,
//                     type: "spring",
//                     ease: "easeOut",
//                     delay: 0.5,
//                   }}
//                   className="md:text-4xl mb-2  text-3xl xl:text-5xl text-[#b67a3d] xl:max-w-2xl max-w-2xl font-Roboto font-extrabold"
//                 >
//                   {heroSect[value]?.title}
//                 </motion.h1>
//                 <motion.h2
//                   initial={{ opacity: 0, y: -20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{
//                     duration: 2,
//                     type: "spring",
//                     ease: "easeOut",
//                     delay: 2,
//                   }}
//                   className="max-w-lg text-xl font-semibold tracking-tighter text-gray-900 md:line-clamp-2 xl:text-4xl md:text-2xl"
//                 >
//                   {heroSect[value]?.subtitle}
//                 </motion.h2>
//                 <motion.p
//                   initial={{ opacity: 0, y: -20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{
//                     duration: 2,
//                     type: "spring",
//                     ease: "easeOut",
//                     delay: 2.5,
//                   }}
//                   className="max-w-lg mt-1 text-base tracking-tighter text-justify xl:text-lg line-clamp-4 xl:max-w-2xl"
//                 >
//                   {heroSect[value]?.description}
//                 </motion.p>
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
//                 className="flex flex-col max-w-md bg-white rounded-r-2xl "
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
//                   className="flex flex-row justify-between"
//                 >
//                   <motion.button
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.8 }}
//                     transition={{ type: "spring", ease: "easeOut" }}
//                     onClick={handlePrev}
//                     className="p-5 text-3xl text-purple-900 md:text-4xl "
//                   >
//                     <FaAngleLeft />
//                   </motion.button>
//                   <motion.button
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.8 }}
//                     transition={{ type: "spring", ease: "easeOut" }}
//                     onClick={handleNext}
//                     className="p-5 text-3xl text-purple-900 md:text-4xl"
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
//                   className="flex flex-col p-10 gap-y-2"
//                 >
//                   <h1 className="md:text-3xl text-2xl  font-bold text-[#b67a3d]">
//                     Become a Member
//                   </h1>
//                   <p className="max-w-lg tracking-tighter text-gray-500 sm:text-base xl:max-w-2xl xl:text-lg">
//                     Join our vibrant community of professionals and enthusiasts
//                     in home automation. Enjoy exclusive access to resources,
//                     networking opportunities, and more.
//                   </p>
//                   <motion.div className="flex justify-end md:mb-7 md:items-end">
//                     <motion.button
//                       whileHover={{ scale: 1.05 }}
//                       whileTap={{ scale: 0.8 }}
//                       transition={{ type: "spring", ease: "easeOut" }}
//                       className="px-3 md:px-5 xl:py-2 text-sm md:text-lg hover:ring-2 hover:ring-black rounded-3xl hover:bg-white hover:text-black  bg-[#b67a3d] font-medium py-1 text-white"
//                     >
//                       Join Now
//                     </motion.button>
//                   </motion.div>
//                 </motion.div>
//               </motion.div>
//             </div>
//             <div className="flex flex-col justify-between md:flex-row gap-x-8">
//               <div className="flex flex-col w-full p-10">
//                 <div className="flex-col hidden mt-3 mb-10">
//                   <div className="flex flex-col gap-y-1">
//                     <motion.h1
//                       initial={{ opacity: 0, x: -20 }}
//                       animate={{ opacity: 1, x: 0 }}
//                       transition={{
//                         duration: 2,
//                         type: "spring",
//                         ease: "easeOut",
//                         delay: 3,
//                       }}
//                       className="md:text-3xl text-2xl font-bold text-[#b67a3d]"
//                     >
//                       Register for the Upcoming Conference
//                     </motion.h1>
//                     <motion.p
//                       initial={{ opacity: 0, x: -20 }}
//                       animate={{ opacity: 1, x: 0 }}
//                       transition={{
//                         duration: 2,
//                         type: "spring",
//                         ease: "easeOut",
//                         delay: 3,
//                       }}
//                       className="max-w-lg text-gray-500 sm:text-base xl:max-w-2xl xl:text-lg"
//                     >
//                       Don’t miss out on the Annual HAT Conference 2024. Early
//                       bird registration is now open!.
//                     </motion.p>
//                     <motion.div
//                       initial={{ opacity: 0, x: "-100%" }}
//                       animate={{ opacity: 1, x: 0 }}
//                       transition={{
//                         duration: 1,
//                         type: "spring",
//                         ease: "easeOut",
//                         delay: 3.5,
//                         stiffness: 140,
//                       }}
//                       className="flex mt-2"
//                     >
//                       <motion.div
//                         whileHover={{ scale: 1.05 }}
//                         whileTap={{ scale: 0.8 }}
//                         transition={{ type: "spring", ease: "easeOut" }}
//                       >
//                         <Link className="px-5 md:py-2 rounded-3xl bg-[#b67a3d] hover:ring-2  hover:bg-white hover:text-black hover:ring-black font-medium py-1 text-white">
//                           Register Here
//                         </Link>
//                       </motion.div>
//                     </motion.div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default HeroSection;

// import React, { useContext, useEffect, useState } from "react";
// import HomePageContext from "../Context/HomePageContext";
// import { Link } from "react-router-dom";
// import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
// import { Dots } from "react-activity";
// import { motion, AnimatePresence } from "framer-motion";

// function HeroSection() {
//   const { heroSect } = useContext(HomePageContext);
//   const [value, setValue] = useState(0);
//   const [direction, setDirection] = useState(1);

//   // timer Logic
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setValue((prevValue) => {
//         if (direction === 1) {
//           if (prevValue >= heroSect?.length - 1) {
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
//     }, 30000); // Interval duration 30000 means 30 seconds timer will execute code

//     return () => clearInterval(interval); // Cleanup the interval on unmount
//   }, [direction, heroSect.length]);

//   // change buttons logic
//   const handleNext = () => {
//     if (value <= heroSect.length - 2) {
//       setValue(value + 1);
//     }
//   };
//   const handlePrev = () => {
//     if (value > 0) {
//       setValue(value - 1);
//     }
//   };

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
//               src={`http://127.0.0.1:8000/${heroSect[value]?.image}`}
//               alt={heroSect[value]?.title}
//               initial={{ x: 300, opacity: 0 }}
//               animate={{ x: 0, opacity: 1 }}
//               transition={{ duration: 1 }}
//               exit={{ x: "" }}
//               className="md:min-h-screen h-[900px] shadow-md w-screen object-cover object-center group-hover:opacity-75"
//             />
//             {heroSect?.length === 0 ? (
//               <div className="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center">
//                 <Dots color="#b67a3d" size={40} speed={0.7} animating={true} />
//               </div>
//             ) : (
//               ""
//             )}
//           </motion.div>
//         </AnimatePresence>
//         <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
//         <div className="container absolute top-0 bottom-[-899px] left-0 right-0 flex flex-row mx-auto mt-5 md:bottom-[-700px] rounded-2xl">
//           {/* herosection text */}
//           <div className="flex flex-col justify-center w-full gap-y-2">
//             <div className="flex flex-col justify-between md:flex-row">
//               <motion.div
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{
//                   duration: 2,
//                   type: "spring",
//                   ease: "easeOut",
//                   delay: 1,
//                 }}
//                 className="flex flex-col flex-grow p-10 bg-white md:rounded-l-2xl"
//               >
//                 <AnimatePresence mode="wait">
//                   <motion.h1
//                     key={value + "title"}
//                     initial={{ opacity: 0, x: "-100%" }}
//                     animate={{ opacity: 1, x: 0 }}
//                     exit={{ opacity: 0, x: "100%" }}
//                     transition={{
//                       duration: 2,
//                       type: "spring",
//                       ease: "easeOut",
//                       delay: 0.5,
//                     }}
//                     className="md:text-4xl mb-2 text-3xl xl:text-5xl text-[#b67a3d] xl:max-w-2xl max-w-2xl font-Roboto font-extrabold"
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
//                     className="max-w-lg text-xl font-semibold tracking-tighter text-gray-900 md:line-clamp-2 xl:text-4xl md:text-2xl"
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
//                     className="max-w-lg mt-1 text-base tracking-tighter text-justify xl:text-lg line-clamp-4 xl:max-w-2xl"
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
//                   className="flex flex-row justify-between"
//                 >
//                   <motion.button
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.8 }}
//                     transition={{ type: "spring", ease: "easeOut" }}
//                     onClick={handlePrev}
//                     className="p-5 text-3xl text-purple-900 md:text-4xl"
//                   >
//                     <FaAngleLeft />
//                   </motion.button>
//                   <motion.button
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.8 }}
//                     transition={{ type: "spring", ease: "easeOut" }}
//                     onClick={handleNext}
//                     className="p-5 text-3xl text-purple-900 md:text-4xl"
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
//                   className="flex flex-col p-10 gap-y-2"
//                 >
//                   <h1 className="md:text-3xl text-2xl font-bold text-[#b67a3d]">
//                     Become a Member
//                   </h1>
//                   <p className="max-w-lg tracking-tighter text-gray-500 sm:text-base xl:max-w-2xl xl:text-lg">
//                     Join our vibrant community of professionals and enthusiasts
//                     in home automation. Enjoy exclusive access to resources,
//                     networking opportunities, and more.
//                   </p>
//                   <motion.div className="flex justify-end md:mb-7 md:items-end">
//                     <motion.button
//                       whileHover={{ scale: 1.05 }}
//                       whileTap={{ scale: 0.8 }}
//                       transition={{ type: "spring", ease: "easeOut" }}
//                       className="px-3 md:px-5 xl:py-2 text-sm md:text-lg hover:ring-2 hover:ring-black rounded-3xl hover:bg-white hover:text-black bg-[#b67a3d] font-medium py-1 text-white"
//                     >
//                       Join Now
//                     </motion.button>
//                   </motion.div>
//                 </motion.div>
//               </motion.div>
//             </div>
//             <div className="flex flex-col justify-between md:flex-row gap-x-8">
//               <div className="flex flex-col w-full p-10">
//                 <div className="flex-col hidden mt-3 mb-10">
//                   <div className="flex flex-col gap-y-1">
//                     <motion.h1
//                       initial={{ opacity: 0, x: -20 }}
//                       animate={{ opacity: 1, x: 0 }}
//                       transition={{
//                         duration: 2,
//                         type: "spring",
//                         ease: "easeOut",
//                         delay: 3,
//                       }}
//                       className="md:text-3xl text-2xl font-bold text-[#b67a3d]"
//                     >
//                       Register for the Upcoming Conference
//                     </motion.h1>
//                     <motion.p
//                       initial={{ opacity: 0, x: -20 }}
//                       animate={{ opacity: 1, x: 0 }}
//                       transition={{
//                         duration: 2,
//                         type: "spring",
//                         ease: "easeOut",
//                         delay: 3,
//                       }}
//                       className="max-w-lg text-gray-500 sm:text-base xl:max-w-2xl xl:text-lg"
//                     >
//                       Don’t miss out on the Annual HAT Conference 2024. Early
//                       bird registration is now open!.
//                     </motion.p>
//                     <motion.div
//                       initial={{ opacity: 0, x: "-100%" }}
//                       animate={{ opacity: 1, x: 0 }}
//                       transition={{
//                         duration: 1,
//                         type: "spring",
//                         ease: "easeOut",
//                         delay: 3.5,
//                         stiffness: 140,
//                       }}
//                       className="flex mt-2"
//                     >
//                       <motion.div
//                         whileHover={{ scale: 1.05 }}
//                         whileTap={{ scale: 0.8 }}
//                         transition={{ type: "spring", ease: "easeOut" }}
//                       >
//                         <Link className="px-5 md:py-2 rounded-3xl bg-[#b67a3d] hover:ring-2 hover:bg-white hover:text-black hover:ring-black font-medium py-1 text-white">
//                           Register Here
//                         </Link>
//                       </motion.div>
//                     </motion.div>
//                   </div>
//                 </div>
//               </div>
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
import { Link } from "react-router-dom";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { Dots } from "react-activity";
import { motion, AnimatePresence } from "framer-motion";

function HeroSection() {
  const { heroSect } = useContext(HomePageContext);
  const [value, setValue] = useState(0);
  const [direction, setDirection] = useState(1);

  // timer Logic
  useEffect(() => {
    if (!heroSect || heroSect.length === 0) return;

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
    }, 30000); // Interval duration 30000 means 30 seconds timer will execute code

    return () => clearInterval(interval); // Cleanup the interval on unmount
  }, [direction, heroSect]);

  // change buttons logic
  const handleNext = () => {
    if (value <= heroSect.length - 2) {
      setValue(value + 1);
    }
  };
  const handlePrev = () => {
    if (value > 0) {
      setValue(value - 1);
    }
  };

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
              src={`http://127.0.0.1:8000/${heroSect[value]?.image}`}
              alt={heroSect[value]?.title}
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className="md:min-h-screen md:h-[900px] h-[600px] shadow-md w-screen object-cover object-center group-hover:opacity-75"
            />
            {heroSect?.length === 0 && (
              <div className="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center">
                <Dots color="#b67a3d" size={40} speed={0.7} animating={true} />
              </div>
            )}
          </motion.div>
        </AnimatePresence>
        <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
        <div className="container absolute top-0 bottom-[-600px] left-0 right-0 flex flex-row mx-auto mt-5 md:bottom-[-700px] rounded-2xl">
          {/* herosection text */}
          <div className="flex flex-col justify-center w-full gap-y-2">
            <div className="flex flex-col justify-between md:flex-row">
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
                    initial={{ opacity: 0, x: "-100%" }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: "100%" }}
                    transition={{
                      duration: 2,
                      type: "spring",
                      ease: "easeOut",
                      delay: 0.5,
                    }}
                    className="md:text-4xl mb-2 text-3xl xl:text-5xl text-[#b67a3d] xl:max-w-2xl max-w-2xl font-Roboto font-extrabold"
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
                    className="max-w-lg text-xl font-semibold tracking-tighter text-gray-900 md:line-clamp-2 xl:text-4xl md:text-2xl"
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
                    className="max-w-lg mt-1 text-base tracking-tighter text-justify xl:text-lg line-clamp-4 xl:max-w-2xl"
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
                  className="flex-row justify-between hidden md:flex"
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.8 }}
                    transition={{ type: "spring", ease: "easeOut" }}
                    onClick={handlePrev}
                    className="p-5 text-3xl text-purple-900 md:text-4xl"
                  >
                    <FaAngleLeft />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.8 }}
                    transition={{ type: "spring", ease: "easeOut" }}
                    onClick={handleNext}
                    className="p-5 text-3xl text-purple-900 md:text-4xl"
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
                  <h1 className="md:text-3xl text-2xl font-bold text-[#b67a3d]">
                    Become a Member
                  </h1>
                  <p className="max-w-lg tracking-tighter sm:text-base xl:max-w-2xl xl:text-lg">
                    Join our vibrant community of professionals and enthusiasts
                    in home automation. Enjoy exclusive access to resources,
                    networking opportunities, and more.
                  </p>
                  <motion.div className="flex justify-end md:mb-7 md:items-end">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.8 }}
                      transition={{ type: "spring", ease: "easeOut" }}
                      className="px-5 rounded-3xl py-2 text-base font-bold text-white bg-[#b67a3d]"
                    >
                      <Link to="/">Sign Up</Link>
                    </motion.button>
                  </motion.div>
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
