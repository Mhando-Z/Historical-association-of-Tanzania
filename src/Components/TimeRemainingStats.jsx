import React, { useState, useEffect, useContext } from "react";
import { motion } from "framer-motion";
import HomePageContext from "../Context/HomePageContext";

const Countdown = () => {
  const { ConferenceSect } = useContext(HomePageContext);
  const conferenceDate = new Date(
    ConferenceSect[0]?.date_of_conference
  ).getTime();
  const [timeRemaining, setTimeRemaining] = useState(
    calculateTimeRemaining(conferenceDate)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining(conferenceDate));
    }, 60000); // Update every minute
    return () => clearInterval(interval);
  }, [conferenceDate]);

  return (
    <div
      className={`flex flex-col ${
        ConferenceSect?.length === 0 ? "hidden" : ""
      } justify-center h-[300px] bg-gradient-to-t mt-10 md:mt-0 from-orange-50 to-transparent`}
    >
      <div className="container flex flex-col items-center justify-between mx-auto md:flex-row">
        <div className="p-5 border-gray-500">
          <h1 className="max-w-xs text-[#b67a3d] text-4xl font-semibold capitalize font-roboto">
            Count Down to Conference Day
          </h1>
        </div>
        <div className="flex-grow">
          <div className="flex flex-row items-center justify-around w-full">
            <TimeBox value={timeRemaining.days} label="DAYS" />
            <TimeBox value={timeRemaining.hours} label="HOURS" />
            <TimeBox value={timeRemaining.minutes} label="MINUTES" />
          </div>
        </div>
      </div>
    </div>
  );
};

const calculateTimeRemaining = (conferenceDate) => {
  const now = new Date().getTime();
  const difference = conferenceDate - now;

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));

  return { days, hours, minutes };
};

const TimeBox = ({ value, label }) => (
  <motion.div
    key={value}
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="flex flex-col items-center p-4 px-8 bg-white rounded shadow"
  >
    <span className="block text-4xl font-semibold">{value}</span>
    <span className="block text-sm font-medium">{label}</span>
  </motion.div>
);

export default Countdown;
