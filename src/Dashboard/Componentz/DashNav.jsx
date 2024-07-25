import React, { useContext, useState } from "react";
import logo from "../../Assets/Images/Logo3.png";
import { RiAlignJustify } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import { GrNotification } from "react-icons/gr";
import { FaRegUser } from "react-icons/fa6";
import { FaPowerOff } from "react-icons/fa6";
import { IoKeySharp } from "react-icons/io5";
import { LuLaptop2 } from "react-icons/lu";
import { motion } from "framer-motion";
import UserContext from "../../Context/UserContext";
import ProfileIcon from "../Users/Components/ProfileIcon";

function DashNav() {
  const [show, setshow] = useState(false);
  const [show1, setshow1] = useState(false);
  const { open, setOpen } = useContext(UserContext);
  const { userData } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/Login/", { replace: true });
  };

  const handleShow = () => {
    if (show1 === true) {
      setshow1(!show1);
      setshow(!show);
    }
    setshow(!show);
  };

  const handleShow1 = () => {
    if (show === true) {
      setshow(!show);
      setshow1(!show1);
    }
    setshow1(!show1);
  };

  const handleSideview = () => {
    setOpen(!open);
  };

  return (
    <div className="bg-slate-100 ring-1 shadow-xl ring-[#b67a3d] py-3 fixed top-0 left-0 w-full z-50">
      <div className="flex flex-row items-center justify-between w-full px-4">
        {/* HAT logo */}
        <div className="xl:w-[300px] md:w-[250px] w-[100px]">
          <Link to={"/Dashboard/"}>
            <img src={logo} alt="hat-logo" className="h-8" />
          </Link>
        </div>
        <div className="flex items-start justify-start flex-1 gap-x-3 ">
          <Link>
            <RiAlignJustify onClick={handleSideview} className="text-3xl" />
          </Link>
          <Link to={"/"}>
            <LuLaptop2 className="text-3xl" />
          </Link>
        </div>
        <div className="flex flex-row items-center justify-between gap-x-7 ">
          <div className="relative flex flex-col items-center cursor-pointer gap-x-2">
            <GrNotification
              onClick={handleShow1}
              className="text-3xl xl:text-3xl"
            />
            {show1 ? (
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{
                  duration: 0.7,
                  ease: "easeOut",
                  type: "spring",
                }}
                className="absolute top-14 ring-1 ring-[#b67a3d] right-0 h-64 w-[270px] rounded-2xl bg-slate-100 "
              ></motion.div>
            ) : (
              ""
            )}
          </div>
          <div className="relative flex flex-col items-center gap-x-2 ">
            {/* profile icon or picture */}
            <div className="cursor-pointer" onClick={handleShow}>
              <ProfileIcon data={userData} />
            </div>
            {show ? (
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{
                  duration: 0.7,
                  ease: "easeOut",
                  type: "spring",
                }}
                className="absolute top-14 ring-1 ring-[#b67a3d] right-0 h-72 w-[270px] rounded-2xl bg-slate-100 "
              >
                <div className="flex flex-col justify-center py-10 gap-y-4 px-7">
                  <div className="flex flex-row items-center gap-x-4 ">
                    {/* <ProfileIcon data={userData} /> */}
                    <FaRegUser className="text-3xl rounded-full size-10 ring-1 ring-black" />
                    <h1 className="text-xl ml-2 flex line-clamp-2 flex-row items-center text-[#121037] font-medium">
                      {userData?.username}
                    </h1>
                  </div>
                  <div className="mt-5 border-2 border-slate-300"></div>
                  <Link onClick={() => setshow(!show)} to={"UserProfile/"}>
                    <div className="flex flex-row items-center cursor-pointer gap-x-4 ">
                      <FaRegUser className="text-xl" />
                      <h1 className="text-xl text-[#121037] font-medium">
                        View Profile
                      </h1>
                    </div>
                  </Link>
                  <div className="flex flex-row items-center cursor-pointer gap-x-4 ">
                    <IoKeySharp className="text-xl" />
                    <h1 className="text-xl text-[#121037] font-medium">
                      Change password
                    </h1>
                  </div>
                  <div
                    onClick={handleLogout}
                    className="flex flex-row items-center cursor-pointer gap-x-4 "
                  >
                    <FaPowerOff className="text-xl text-red-600" />
                    <h1 className="text-xl text-[#121037] font-medium">
                      Log Out
                    </h1>
                  </div>
                </div>
              </motion.div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashNav;
