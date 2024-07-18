import React, { useContext, useEffect, useState } from "react";
import logo from "../../Assets/Images/Logo3.png";
import { RiAlignJustify } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { GrNotification } from "react-icons/gr";
import { FaRegCaretSquareDown } from "react-icons/fa";
import { FaRegCircleUser } from "react-icons/fa6";
import { CiSquareChevDown } from "react-icons/ci";
import { CiSquareChevUp } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa6";
import { FaPowerOff } from "react-icons/fa6";
import { IoKeySharp } from "react-icons/io5";
import { motion } from "framer-motion";
import UserContext from "../../Context/UserContext";

function DashNav() {
  const [user, setUser] = useState([]);
  const [show, setshow] = useState(false);
  const [show1, setshow1] = useState(false);
  const { open, setOpen } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/Login/", { replace: true });
  };

  const handleShow = () => {
    setshow(!show);
  };
  const handleShow1 = () => {
    setshow1(!show1);
  };

  const handleSideview = () => {
    setOpen(!open);
  };

  useEffect(() => {
    try {
      const usertoken = localStorage.getItem("token");
      const user = jwtDecode(usertoken);
      setUser(user);
    } catch (error) {}
  }, []);
  return (
    <div className="bg-slate-100 ring-1 ring-[#b67a3d] py-3 fixed top-0 left-0 w-full z-50">
      <div className="w-full px-4 flex flex-row items-center justify-between">
        {/* HAT logo */}
        <div className="xl:w-[300px] md:w-[250px] w-[100px]">
          <Link to={"/Dashboard/"}>
            <img src={logo} alt="hat-logo" className="h-8" />
          </Link>
        </div>
        <div className="flex flex-1 items-start justify-start ">
          <Link>
            <RiAlignJustify onClick={handleSideview} className="text-3xl" />
          </Link>
        </div>
        <div className="flex flex-row items-center justify-between gap-x-7 ">
          <div className="flex cursor-pointer flex-col items-center gap-x-2 relative">
            <GrNotification
              onClick={handleShow1}
              className="xl:text-3xl text-[#b67a3d] text-3xl"
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
          <div className="flex flex-col items-center gap-x-2 relative ">
            <FaRegCircleUser
              onClick={handleShow}
              className="xl:text-4xl text-[#b67a3d] text-3xl"
            />
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
                className="absolute top-14  ring-1 ring-[#b67a3d] right-0 h-64 w-[270px] rounded-2xl bg-slate-100 "
              >
                <div className="flex flex-col gap-y-4 justify-center px-7 py-10">
                  <div className="flex flex-row items-center gap-x-4 ">
                    <FaRegUser className="text-xl ring-1 ring-black rounded-full" />
                    <h1 className="text-xl text-[#121037] font-medium">
                      {user?.username}
                    </h1>
                  </div>
                  <div className="border-2 border-slate-300 mt-2"></div>
                  <div className="flex flex-row cursor-pointer items-center gap-x-4 ">
                    <FaRegUser className="text-xl" />
                    <h1 className="text-xl text-[#121037] font-medium">
                      View Profile
                    </h1>
                  </div>
                  <div className="flex flex-row cursor-pointer items-center gap-x-4 ">
                    <IoKeySharp className="text-xl" />
                    <h1 className="text-xl text-[#121037] font-medium">
                      Change password
                    </h1>
                  </div>
                  <div
                    onClick={handleLogout}
                    className="flex flex-row cursor-pointer items-center gap-x-4 "
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
