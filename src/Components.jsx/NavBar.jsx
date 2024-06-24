import React from "react";
import logo from "../Assets/Images/for_docs.png";
import { NavLink } from "react-router-dom";
import { TfiMenuAlt } from "react-icons/tfi";

function NavBar() {
  return (
    <div className="mt-5  sticky top-0 bg-white py-3">
      <div className="md:px-10 px-1">
        <div className="flex container mx-auto flex-row justify-between items-center gap-x-6 w-full ">
          {/* logo section */}
          <div>
            <img
              src={logo}
              alt="Historical association of TTanzania Logo"
              title="HAT Logo"
              className="md:h-12 h-8"
            />
          </div>
          {/* Pages Links */}
          <div className="flex-row items-center justify-between hidden md:flex gap-x-10">
            <NavLink>
              <h1 className=" text-xl font-semibold text-black">Home</h1>
            </NavLink>
            <NavLink>
              <h1 className=" text-xl font-semibold text-black">About-Us</h1>
            </NavLink>
            <NavLink>
              <h1 className=" text-xl font-semibold text-black">Research</h1>
            </NavLink>
            <NavLink>
              <h1 className=" text-xl font-semibold text-black">Events</h1>
            </NavLink>
            <NavLink>
              <h1 className=" text-xl font-semibold text-black">Gallery</h1>
            </NavLink>
            <NavLink>
              <h1 className=" text-xl font-semibold text-black">Membership</h1>
            </NavLink>
          </div>
          {/* Humberger Menue icon */}
          <div className="md:hidden flex">
            <TfiMenuAlt className="text-3xl" />
          </div>
        </div>
        {/* <div className="border-b-4 mt-3 flex container mx-auto"></div> */}
      </div>
    </div>
  );
}

export default NavBar;
