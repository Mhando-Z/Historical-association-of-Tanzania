import React, { useContext, useState } from "react";
import logo from "../Assets/Images/Logo3.png";
import { Link, NavLink, useLocation } from "react-router-dom";
import UserContext from "../Context/UserContext";
import ProfileIcon from "../Dashboard/Users/Components/ProfileIcon";
import { motion } from "framer-motion";
import SideNavBar from "./SideNavBar";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { Menu } from "@headlessui/react";
import HomePageContext from "../Context/HomePageContext";
import { FiMenu } from "react-icons/fi";

function NavBar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const { userData } = useContext(UserContext);
  const { visible } = useContext(HomePageContext);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleClick = () => {
    setOpen(!open);
  };

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
        location.pathname === "/Resources/" ||
        location.pathname === "/Research/"
          ? `py-3 fixed top-0 left-0 w-full z-40 ${visible}`
          : "hidden"
      }`}
    >
      <div className="">
        <div className="container flex flex-row items-center justify-between w-full mx-auto gap-x-6">
          {/* logo section */}
          <NavLink to={"/"}>
            <img
              src={logo}
              alt="Historical association of Tanzania Logo"
              title="HAT Logo"
              className="h-6 xl:h-9 md:h-7"
            />
          </NavLink>

          {/* Pages Links */}
          <motion.div
            className="flex-row items-center justify-center hidden px-5 py-2 bg-white bg-opacity-60 hover:bg-opacity-85 rounded-3xl md:flex gap-x-5"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
          >
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                isActive
                  ? "px-4 py-1.5 text-sm rounded-3xl font-medium hover:ring-[#b67a3d] ring-[#9c6630] text-white ring-2 bg-[#b67a3d]"
                  : "px-4 py-1.5 text-sm hover:text-gray-100 hover:bg-[#b67a3d] hover:ring-[#b67a3d] hover:ring-2 hover:rounded-3xl"
              }
            >
              <motion.h1
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.8 }}
                transition={{ type: "spring", ease: "easeOut" }}
              >
                Home
              </motion.h1>
            </NavLink>

            <NavLink
              onClick={scrollToTop}
              to={"AboutUs/"}
              className={({ isActive }) =>
                isActive
                  ? "px-4 py-1.5 text-sm rounded-3xl font-medium hover:ring-[#b67a3d] ring-[#d99958] text-white ring-2 bg-[#b67a3d]"
                  : "px-4 py-1.5 text-sm hover:text-gray-100 hover:bg-[#b67a3d] hover:ring-[#b67a3d] hover:ring-2 hover:rounded-3xl"
              }
            >
              <motion.h1
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.8 }}
                transition={{ type: "spring", ease: "easeOut" }}
              >
                About-Us
              </motion.h1>
            </NavLink>

            <NavLink
              to={"Research/"}
              className={({ isActive }) =>
                isActive
                  ? "px-4 py-1.5 text-sm rounded-3xl font-medium hover:ring-[#b67a3d] ring-[#d99958] text-white ring-2 bg-[#b67a3d]"
                  : "px-4 py-1.5 text-sm hover:text-gray-100 hover:bg-[#b67a3d] hover:ring-[#b67a3d] hover:ring-2 hover:rounded-3xl"
              }
            >
              <motion.h1
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.8 }}
                transition={{ type: "spring", ease: "easeOut" }}
                className=""
              >
                Research
              </motion.h1>
            </NavLink>
            <NavLink
              to={"Resources/"}
              className={({ isActive }) =>
                isActive
                  ? "px-4 py-1.5 text-sm rounded-3xl font-medium hover:ring-[#b67a3d] ring-[#d99958] text-white ring-2 bg-[#b67a3d]"
                  : "px-4 py-1.5 text-sm hover:text-gray-100 hover:bg-[#b67a3d] hover:ring-[#b67a3d] hover:ring-2 hover:rounded-3xl"
              }
            >
              <motion.h1
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.8 }}
                transition={{ type: "spring", ease: "easeOut" }}
              >
                Resources
              </motion.h1>
            </NavLink>

            <NavLink>
              <Events />
            </NavLink>
          </motion.div>

          {/* User Profile or Sign-In */}
          <div className="flex-row hidden md:flex gap-x-3">
            {userData ? (
              <Link
                to={userData?.is_staff ? "Dashboard/" : "Dashboard/UserHome"}
              >
                <ProfileIcon data={userData} />
              </Link>
            ) : (
              <Link
                to={`Login/`}
                className="px-5 py-1.5 md:text-sm text-base hover:ring-1 hover:ring-[#d99958] font-medium rounded-3xl bg-[#b67a3d] text-white"
              >
                Sign In
              </Link>
            )}
          </div>

          {/* Hamburger Menu icon */}
          <div className="flex md:hidden">
            <motion.div
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleClick}
              className="text-3xl text-[#d99958]"
            >
              <FiMenu />
            </motion.div>
          </div>
        </div>
      </div>
      {/* sidebar toggler */}
      <SideNavBar open={open} setOpen={setOpen} />
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
        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 xl:text-xl text-md text-black">
          Events
          <ChevronDownIcon className="w-5 h-5 text-black" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Menu.Items
        transition
        className="absolute right-0 z-10 w-56 mt-4 transition origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg bg-opacity-60 hover:bg-opacity-85 ring-1 ring-black ring-opacity-5 focus:outline-none"
      >
        <div className="py-1">
          <Menu.Item>
            {({ active }) => (
              <motion.div>
                <NavLink
                  to={"Announcements/"}
                  className={({ isActive }) =>
                    isActive
                      ? "bg-[#b67a3d] hover:bg-[#b67a3d] text-white block px-4 py-2 xl:text-xl text-lg"
                      : "text-gray-700 block px-4 py-2 xl:text-xl text-lg hover:bg-[#cd9a68] hover:text-white"
                  }
                  onClick={scrollToTop} // The menu will close automatically after click
                >
                  Announcements
                </NavLink>
              </motion.div>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <motion.div>
                <NavLink
                  to={"Gallery/"}
                  className={({ isActive }) =>
                    isActive
                      ? "bg-[#b67a3d] hover:bg-[#b67a3d] text-white block px-4 py-2 xl:text-xl text-lg"
                      : "text-gray-700 block px-4 py-2 xl:text-xl text-lg hover:bg-[#cd9a68] hover:text-white"
                  }
                  onClick={() => {
                    scrollToTop();
                  }} // The menu will close automatically after click
                >
                  Gallery
                </NavLink>
              </motion.div>
            )}
          </Menu.Item>
        </div>
      </Menu.Items>
    </Menu>
  );
}
