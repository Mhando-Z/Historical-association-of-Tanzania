import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { TfiClose } from "react-icons/tfi";
import logo from "../Assets/Images/Logo3.png";
// icons
import { ImHome } from "react-icons/im";
import { FaImages } from "react-icons/fa6";
import { FaNewspaper } from "react-icons/fa6";
import { HiSpeakerphone } from "react-icons/hi";
import { BsFillInfoCircleFill } from "react-icons/bs";
import UserContext from "../Context/UserContext";
import { BsPersonSquare } from "react-icons/bs";
import ProfilePictures from "../Dashboard/Componentz/ProfilePicture";

const SideNavBar = ({ open, setOpen }) => {
  const { userData } = useContext(UserContext);

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <div
      className={`fixed inset-0 z-50 transition-opacity duration-500 ease-in-out ${
        open
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
    >
      {/* Background overlay */}
      <div
        className={`fixed inset-0 bg-black transition-opacity duration-500 ease-in-out ${
          open ? "opacity-50" : "opacity-0"
        }`}
        onClick={closeMenu}
      ></div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 w-64 h-full bg-white shadow-lg transform transition-transform duration-500 ease-in-out ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-row justify-between p-4">
          <div>
            <img
              src={logo}
              alt="Historical Association of Tanzania Logo"
              title="HAT Logo"
              className="h-7 xl:h-9 md:h-7"
            />
          </div>
          <TfiClose
            onClick={closeMenu}
            className="text-2xl ring-2 rounded-full ring-[#a56322] cursor-pointer text-[#a56322]"
          />
        </div>
        <nav className="flex flex-col p-4 space-y-2 overflow-y-auto">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "bg-[#b67a3d] flex flex-row items-center w-full gap-x-2 font-medium text-white px-7 py-2 "
                : "text-gray-700 flex flex-row items-center w-full gap-x-2 hover:text-[#b67a3d] px-7 py-2 bg-slate-200"
            }
            onClick={closeMenu}
          >
            <ImHome className="" />
            Home
          </NavLink>
          <NavLink
            to="/AboutUs/"
            className={({ isActive }) =>
              isActive
                ? "bg-[#b67a3d] flex flex-row items-center w-full gap-x-2 font-medium text-white px-7 py-2 "
                : "text-gray-700 flex flex-row items-center w-full gap-x-2 hover:text-[#b67a3d] px-7 py-2 bg-slate-200"
            }
            onClick={closeMenu}
          >
            <BsFillInfoCircleFill />
            About Us
          </NavLink>
          <NavLink
            to="/Research/"
            className={({ isActive }) =>
              isActive
                ? "bg-[#b67a3d] flex flex-row items-center w-full gap-x-2 font-medium text-white px-7 py-2 "
                : "text-gray-700 flex flex-row items-center w-full gap-x-2 hover:text-[#b67a3d] px-7 py-2 bg-slate-200"
            }
            onClick={closeMenu}
          >
            <FaNewspaper />
            Research
          </NavLink>
          <NavLink
            to="/Announcements/"
            className={({ isActive }) =>
              isActive
                ? "bg-[#b67a3d] flex flex-row items-center w-full gap-x-2 font-medium text-white px-7 py-2 "
                : "text-gray-700 flex flex-row items-center w-full gap-x-2 hover:text-[#b67a3d] px-7 py-2 bg-slate-200"
            }
            onClick={closeMenu}
          >
            <HiSpeakerphone />
            Announcements
          </NavLink>
          <NavLink
            to="/Gallery/"
            className={({ isActive }) =>
              isActive
                ? "bg-[#ce8d4c] flex flex-row items-center w-full gap-x-2 font-medium text-white px-7 py-2 "
                : "text-gray-700 flex flex-row items-center w-full gap-x-2 hover:text-[#b67a3d] px-7 py-2 bg-slate-200"
            }
            onClick={closeMenu}
          >
            <FaImages />
            Gallery
          </NavLink>
          <div className="flex">
            {userData ? (
              <Link
                to={userData?.is_staff ? "Dashboard/" : "Dashboard/UserHome"}
              >
                <div className="w-[230px] mt-10">
                  <ProfilePictures data={userData} />
                </div>
              </Link>
            ) : (
              <div className="flex flex-col w-full mt-10 gap-y-5">
                <div>
                  <BsPersonSquare className="h-auto w-[230px] opacity-25" />
                </div>
                <div className="flex flex-row-reverse justify-between w-full">
                  <Link
                    to={`Login/`}
                    className="px-5 py-2 md:text-sm xl:text-lg hover:ring-1 hover:ring-[#d99958] font-medium rounded bg-[#b67a3d] text-white"
                  >
                    Sign In
                  </Link>
                  <Link
                    to={`Register/`}
                    className="px-5 py-2 md:text-sm xl:text-lg hover:ring-1 hover:ring-[#d99958] font-medium rounded bg-blue-700 text-white"
                  >
                    Sign Up
                  </Link>
                </div>
              </div>
            )}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default SideNavBar;
