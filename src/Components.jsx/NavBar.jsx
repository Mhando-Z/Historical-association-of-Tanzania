import React from "react";
import logo from "../Assets/Images/for_docs.png";
import { Link, NavLink } from "react-router-dom";
import { TfiMenuAlt } from "react-icons/tfi";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

function NavBar() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="bg-white py-3 fixed top-0 left-0 w-full z-50">
      <div className="md:px-10 px-1">
        <div className="flex container mx-auto flex-row justify-between items-center gap-x-6 w-full ">
          {/* logo section */}
          <NavLink to={"/"}>
            <img
              src={logo}
              alt="Historical association of TTanzania Logo"
              title="HAT Logo"
              className="xl:h-12 md:h-10 h-8"
            />
          </NavLink>
          {/* Pages Links */}
          <div className="flex-row items-center justify-between hidden md:flex gap-x-10">
            <NavLink
              to={"/"}
              className={({ isActive }) => (isActive ? "" : "")}
            >
              <h1 className=" xl:text-xl text-lg text-black">Home</h1>
            </NavLink>
            <NavLink
              onClick={scrollToTop}
              to={"AboutUs/"}
              className={({ isActive }) => (isActive ? "" : "")}
            >
              <h1 className=" xl:text-xl text-lg  text-black">About-Us</h1>
            </NavLink>
            <NavLink>
              <h1 className=" xl:text-xl text-lg  text-black">Research</h1>
            </NavLink>
            <NavLink>
              <Events />
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

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

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
        <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 xl:text-xl text-lg text-black hover:bg-gray-50">
          Events
          <ChevronDownIcon
            className="h-5 w-5 text-gray-400"
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
              // className={({ isActive }) =>
              //   isActive
              //     ? "bg-[#b67a3d] text-white block px-4 py-2 text-xl"
              //     : "text-gray-700 block px-4 py-2 xl:text-xl text-lg"
              // }
              >
                Conference
              </NavLink>
            )}
          </MenuItem>
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
