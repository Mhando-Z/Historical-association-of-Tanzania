import React, { useContext } from "react";
import logo from "../Assets/Images/Logo3.png";
import { Link, NavLink, useLocation } from "react-router-dom";
import { TfiMenuAlt } from "react-icons/tfi";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import UserContext from "../Context/UserContext";
import ProfileIcon from "../Dashboard/Users/Components/ProfileIcon";
import { motion } from "framer-motion";

function NavBar() {
  const location = useLocation();
  const { userData } = useContext(UserContext);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={`${
        location.pathname === "/" ||
        location.pathname === "/Gallery/" ||
        location.pathname === "/Announcements/" ||
        location.pathname === "/President/" ||
        location.pathname === "/AboutUs/" ||
        location.pathname === "/President/" ||
        location.pathname === "/Register/" ||
        location.pathname === "/President/" ||
        location.pathname === "/Publications/" ||
        location.pathname === "/Research/"
          ? " py-3 fixed top-0 left-0 w-full z-50"
          : "hidden"
      }`}
    >
      <div className="px-1 md:px-10">
        <div className="container flex flex-row items-center justify-between w-full mx-auto gap-x-6 ">
          {/* logo section */}

          <NavLink to={"/"}>
            <img
              src={logo}
              alt="Historical association of TTanzania Logo"
              title="HAT Logo"
              className="h-5 xl:h-9 md:h-7"
            />
          </NavLink>
          {/* Pages Links */}
          <div className="flex-row items-center justify-center hidden px-10 py-2 bg-white rounded-3xl md:flex gap-x-10">
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                isActive
                  ? "px-4 rounded-3xl  font-medium hover:text-black hover:ring-[#b67a3d] ring-[#d99958]  text-white ring-2 bg-[#b67a3d] hover:bg-white"
                  : "px-4 hover:text-black hover:ring-[#b67a3d] hover:ring-1 hover:rounded-3xl "
              }
            >
              <motion.h1
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.8 }}
                transition={{ type: "spring", ease: "easeOut" }}
                className="text-base xl:text-lg"
              >
                Home
              </motion.h1>
            </NavLink>

            <NavLink
              onClick={scrollToTop}
              to={"AboutUs/"}
              className={({ isActive }) =>
                isActive
                  ? "px-4 rounded-3xl  font-medium hover:text-black hover:ring-[#b67a3d] ring-[#d99958]  text-white ring-2 bg-[#b67a3d] hover:bg-white"
                  : "px-4 hover:text-black hover:ring-[#b67a3d] hover:ring-1 hover:rounded-3xl "
              }
            >
              <motion.h1
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.8 }}
                transition={{ type: "spring", ease: "easeOut" }}
                className="text-base xl:text-lg"
              >
                About-Us
              </motion.h1>
            </NavLink>
            <NavLink
              to={"Research/"}
              className={({ isActive }) =>
                isActive
                  ? "px-4 rounded-3xl  font-medium hover:text-black hover:ring-[#b67a3d] ring-[#d99958]  text-white ring-2 bg-[#b67a3d] hover:bg-white"
                  : "px-4 hover:text-black hover:ring-[#b67a3d] hover:ring-1 hover:rounded-3xl "
              }
            >
              <motion.h1
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.8 }}
                transition={{ type: "spring", ease: "easeOut" }}
                className="text-base xl:text-lg"
              >
                Research
              </motion.h1>
            </NavLink>
            <NavLink>
              <Events />
            </NavLink>
          </div>
          <div className="hidden md:flex">
            {userData ? (
              <Link
                to={userData?.is_staff ? "Dashboard/" : "Dashboard/UserHome"}
              >
                <ProfileIcon data={userData} />
              </Link>
            ) : (
              <Link
                to={`Login/`}
                className="px-5 py-2 md:text-sm xl:text-lg hover:ring-1 hover:ring-[#d99958] font-medium rounded-3xl bg-[#b67a3d] text-white"
              >
                Login
              </Link>
            )}
          </div>
          {/* Humberger Menue icon */}
          <div className="flex md:hidden">
            <TfiMenuAlt className="text-3xl" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;

export function Events() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <MenuButton className="inline-flex w-full justify-center gap-x-1.5` xl:text-xl text-md text-black hover:bg-gray-50">
          Events
          <ChevronDownIcon
            className="w-5 h-5 text-gray-400"
            aria-hidden="true"
          />
        </MenuButton>
      </div>

      <MenuItems
        transition
        className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <div className="py-1">
          <MenuItem>
            {({ focus }) => (
              <NavLink
                to={"Announcements/"}
                className={({ isActive }) =>
                  isActive
                    ? "bg-[#b67a3d] text-white block px-4 py-2 xl:text-xl text-lg "
                    : "text-gray-700 block px-4 py-2 xl:text-xl text-lg"
                }
              >
                Announcements
              </NavLink>
            )}
          </MenuItem>
          <MenuItem>
            {({ focus }) => (
              <NavLink
                onClick={scrollToTop}
                to={"Gallery/"}
                className={({ isActive }) =>
                  isActive
                    ? "bg-[#b67a3d] text-white block px-4 py-2 text-lg xl:text-xl"
                    : "text-gray-700 block px-4 py-2 xl:text-xl text-lg"
                }
              >
                Gallery
              </NavLink>
            )}
          </MenuItem>
        </div>
      </MenuItems>
    </Menu>
  );
}
