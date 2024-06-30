import React, { useState, useEffect, useContext } from "react";
import { motion } from "framer-motion";
import HomePageContext from "../Context/HomePageContext";

const Countdown = () => {
  const { ConferenceSect } = useContext(HomePageContext);
  // const days = ConferenceSect[0]?.Day;
  // const year = ConferenceSect[0]?.year;
  // const month = ConferenceSect[0]?.month;

  // const all=(`"${year}-${month}-${days}T00:00:00"`);

  const conferenceDate = new Date(`2024-12-12T00:00:00`).getTime();
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 60000); // Update every minute

    return () => clearInterval(interval);
  }, []);

  function calculateTimeRemaining() {
    const now = new Date().getTime();
    const difference = conferenceDate - now;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));

    return { days, hours, minutes };
  }

  return (
    <div className="flex flex-col items-center justify-center h-[300px] bg-gray-100">
      <h2 className="text-5xl text-[#b67a3d] font-black mb-10">
        {ConferenceSect[0]?.title2}
      </h2>
      <div className="flex flex-row items-center justify-around w-full">
        <motion.div
          key={timeRemaining.days}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white p-4 px-8 rounded shadow flex flex-col items-center"
        >
          <span className="block text-4xl font-semibold">
            {timeRemaining.days}
          </span>
          <span className="block text-sm font-medium">DAYS</span>
        </motion.div>
        <motion.div
          key={timeRemaining.hours}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white p-4 px-8 rounded shadow flex flex-col items-center"
        >
          <span className="block text-4xl font-semibold">
            {timeRemaining.hours}
          </span>
          <span className="block text-sm font-medium">HOURS</span>
        </motion.div>
        <motion.div
          key={timeRemaining.minutes}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white p-4 px-8 rounded shadow flex flex-col items-center"
        >
          <span className="block text-4xl font-semibold">
            {timeRemaining.minutes}
          </span>
          <span className="block text-sm font-medium">MINUTES</span>
        </motion.div>
      </div>
    </div>
  );
};

export default Countdown;
