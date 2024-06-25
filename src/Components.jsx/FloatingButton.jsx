import React, { useState, useEffect } from "react";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled up to a certain distance
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
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
        <button
          onClick={scrollToTop}
          className="bg-[#b67a3d] text-white p-3 rounded-full shadow-lg ring-2 ring-[#a46425] hover:bg-[#bc8a59] transition duration-300 ease-in-out"
        >
          <h1 className="animate-bounce transition-all ease-in-out duration-700 md:text-xl md:py-1 ">
            {" "}
            ↑
          </h1>
        </button>
      )}
    </div>
  );
};

export default ScrollToTopButton;
