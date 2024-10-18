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
        location.pathname === "/Resources/" ||
        location.pathname === "/Patrons/" ||
        location.pathname === "/Publications/" ||
        location.pathname === "/Research/"
          ? "block"
          : "hidden"
      }`}
    >
      <div className="">
        <NewsLetter />
      </div>
    </div>
  );
}

export default Footer;
