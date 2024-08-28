import React from "react";
import NewsLetter from "./NewsLetter";
import { useLocation } from "react-router-dom";

function Footer() {
  const location = useLocation();
  return (
    <div
      className={`${
        location.pathname === "/" ||
        location.pathname === "/Gallery/" ||
        location.pathname === "/Announcements/" ||
        location.pathname === "/Announce/" ||
        location.pathname === "/President/" ||
        location.pathname === "/AboutUs/" ||
        location.pathname === "/Register/" ||
        location.pathname === "/Publications/" ||
        location.pathname === "/Register/"
          ? "block"
          : "hidden"
      }`}
    >
      <div>
        <NewsLetter />
      </div>
    </div>
  );
}

export default Footer;
