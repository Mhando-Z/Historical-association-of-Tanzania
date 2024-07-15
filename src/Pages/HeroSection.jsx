import React, { useContext, useEffect, useState } from "react";
import HomePageContext from "../Context/HomePageContext";
import { Link } from "react-router-dom";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import { motion } from "framer-motion";

function HeroSection() {
  const { heroSect } = useContext(HomePageContext);
  const [value, setValue] = useState(0);
  const [direction, setDirection] = useState(1);

  // timer Logic
  useEffect(() => {
    const interval = setInterval(() => {
      setValue((prevValue) => {
        if (direction === 1) {
          if (prevValue >= heroSect?.length - 1) {
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
    }, 10000); // Interval duration 10000 means 10 seconds timer will execute code

    return () => clearInterval(interval); // Cleanup the interval on unmount
  }, [direction, heroSect.length]);

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
    <div className="flex container mx-auto mt-20">
      <div className="flex flex-col min-h-screen">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, type: "spring", ease: "easeOut" }}
          className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-3xl bg-gray-200 xl:aspect-h-8 xl:aspect-w-7"
        >
          <motion.img
            src={`http://127.0.0.1:8000/${heroSect[value]?.image}`}
            alt={heroSect[value]?.title}
            className="xl:h-[680px] h-[500px] w-screen object-cover object-center group-hover:opacity-75"
          />
        </motion.div>
        <div className="flex flex-row mt-5 rounded-2xl">
          {/* herosection text */}
          <div className="flex flex-col justify-center gap-y-2 w-full">
            <div className="flex flex-row justify-between">
              <div className="flex flex-col">
                <h1 className="md:text-5xl xl:text-6xl text-[#b67a3d] xl:max-w-2xl max-w-lg font-Roboto font-extrabold">
                  {heroSect[value]?.title}
                </h1>
                <h1 className="text-4xl font-semibold">
                  {heroSect[value]?.subtitle}
                </h1>
              </div>
              <div className="flex flex-row">
                <Link onClick={handlePrev} className=" p-5 text-4xl ">
                  <FaAngleLeft />
                </Link>
                <Link onClick={handleNext} className="p-5 text-4xl">
                  <FaAngleRight />
                </Link>
              </div>
            </div>
            <div className="flex flex-row justify-between gap-x-8">
              <div className="flex flex-col">
                <p className="md:text-xl xl:max-w-2xl max-w-lg text-justify tracking-tighter">
                  {heroSect[value]?.description}
                </p>
                <div className="flex flex-col mb-10 mt-3">
                  <div className="flex flex-col gap-y-1">
                    <h1 className="text-3xl font-bold text-[#b67a3d]">
                      Register for the Upcoming Conference
                    </h1>
                    <p className="xl:max-w-2xl max-w-lg md:text-xl text-gray-500">
                      Don’t miss out on the Annual HAT Conference 2024. Early
                      bird registration is now open!.
                    </p>
                    <div className="flex mt-1">
                      <Link className=" px-5 rounded-3xl bg-[#b67a3d] hover:ring-2 hover:bg-white hover:text-black hover:ring-black font-medium py-2 text-white">
                        Register Here
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex flex-col gap-y-2">
                  <h1 className="text-3xl font-bold text-[#b67a3d]">
                    Become a Member
                  </h1>
                  <p className="xl:max-w-2xl max-w-lg md:text-xl text-gray-500">
                    Join our vibrant community of professionals and enthusiasts
                    in home automation. Enjoy exclusive access to resources,
                    networking opportunities, and more.
                  </p>
                  <div className="flex items-end justify-end">
                    <Link className="px-5 hover:ring-2 hover:ring-black rounded-3xl hover:bg-white hover:text-black  bg-[#b67a3d] font-medium py-2 text-white">
                      Join Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
