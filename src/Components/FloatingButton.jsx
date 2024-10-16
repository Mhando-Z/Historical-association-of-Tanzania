import React, { useState, useEffect, useContext } from "react";
import HomePageContext from "../Context/HomePageContext";
import { motion } from "framer-motion";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { setVisible } = useContext(HomePageContext);

  // Show button when page is scrolled up to a certain distance
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
      setVisible("bg-white bg-opacity-85 hover:bg-opacity-100 ");
    } else {
      setIsVisible(false);
      setVisible("");
    }
  };

  // Scroll the page to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed bottom-4 right-4">
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          className="relative p-2 hover:text-white font-roboto rounded-3xl text-xs sm:text-sm md:text-xl ring-2 ring-[#b67a3d] overflow-hidden text-[#744517] font-bold "
          whileHover="hover"
          initial="initial"
        >
          <motion.div
            className="absolute inset-0 bg-[#b67a3d]"
            initial={{ y: "100%" }}
            variants={{
              hover: { y: 0 },
            }}
            transition={{ duration: 0.3 }}
          />
          <motion.div
            className="absolute inset-0 "
            initial={{ y: 0 }}
            variants={{
              hover: { y: "-100%" },
            }}
            transition={{ duration: 0.3 }}
          />
          <span className="relative z-10 md:py-1">↑</span>
        </motion.button>
      )}
    </div>
  );
};

export default ScrollToTopButton;
