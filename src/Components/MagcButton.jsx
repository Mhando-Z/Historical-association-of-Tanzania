import React from "react";
import { motion } from "framer-motion";

const MagicButton = ({ text }) => {
  return (
    <motion.button
      className="relative px-6 py-3 overflow-hidden font-semibold text-white rounded-md"
      whileHover="hover"
      initial="initial"
    >
      <motion.div
        className="absolute inset-0 bg-green-600"
        initial={{ x: "100%" }}
        variants={{
          hover: { x: 0 },
        }}
        transition={{ duration: 0.3 }}
      />
      <motion.div
        className="absolute inset-0 bg-gray-300"
        initial={{ x: 0 }}
        variants={{
          hover: { x: "-100%" },
        }}
        transition={{ duration: 0.3 }}
      />
      <span className="relative z-10">{text}</span>
    </motion.button>
  );
};

export default MagicButton;
