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
      className={`flex flex-col ${ConferenceSect?.length === 0 ? "hidden" : ""} items-center justify-center h-[300px] bg-gray-100`}
    >
      <h2 className="text-5xl text-[#b67a3d] font-black mb-10">
        {ConferenceSect[0]?.title2}
      </h2>
      <div className="flex flex-row items-center justify-around w-full">
        <TimeBox value={timeRemaining.days} label="DAYS" />
        <TimeBox value={timeRemaining.hours} label="HOURS" />
        <TimeBox value={timeRemaining.minutes} label="MINUTES" />
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
