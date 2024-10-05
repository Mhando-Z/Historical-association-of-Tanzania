import React from "react";
import { motion } from "framer-motion";

const GreetingsTimer = ({ Username }) => {
  const getGreeting = () => {
    const hours = new Date().getHours();
    if (hours < 12) return "Good Morning";
    if (hours < 17) return "Good Afternoon";
    if (hours < 20) return "Good Evening";
    return "Good Night";
  };

  const greeting = getGreeting();

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex items-center "
    >
      <motion.h1
        className="text-2xl font-bold md:text-3xl"
        initial={{ scale: 0.5 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        Hello {greeting}! {Username}
      </motion.h1>
    </motion.div>
  );
};

export default GreetingsTimer;
