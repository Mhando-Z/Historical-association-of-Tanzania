import React, { useContext, useState, useEffect, useRef } from "react";
import { RiAlignJustify } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import { FaRegUser, FaPowerOff } from "react-icons/fa6";
import { IoKeySharp } from "react-icons/io5";
import { LuLaptop2 } from "react-icons/lu";
import { motion } from "framer-motion";
import UserContext from "../../Context/UserContext";
import ProfileIcon from "../Users/Components/ProfileIcon";

function DashNav({ handleClick }) {
  const [show, setShow] = useState(false);
  const { userData, setUserData } = useContext(UserContext);

  const navigate = useNavigate();
  const menuRef = useRef(null); // Ref for tracking the profile menu

  // Handle logout functionality
  const handleLogout = () => {
    localStorage.removeItem("token");
    setUserData(null);
    navigate("/Login/", { replace: true });
  };

  // Toggle the profile menu
  const handleShow = () => {
    setShow(!show);
  };

  // Handle sidebar view
  const handleSideview = () => {
    handleClick();
  };

  // Close the profile menu when clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShow(false); // Close menu if click outside
      }
    };

    if (show) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    // Cleanup the event listener on unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [show]);

  return (
    <div className="bg-slate-100 w-full shadow ring-[#b67a3d] py-3 z-50">
      <div className="flex flex-row items-center justify-between px-4">
        <div className="flex items-start justify-start flex-1 gap-x-3 ">
          <Link>
            <RiAlignJustify onClick={handleSideview} className="text-3xl" />
          </Link>
          <a href={"/"}>
            <LuLaptop2 className="text-3xl" />
          </a>
        </div>
        <div className="flex flex-row items-center justify-between gap-x-7 ">
          <div className="relative flex flex-col items-center gap-x-2 ">
            {/* Profile icon or picture */}
            <div className="cursor-pointer" onClick={handleShow}>
              <ProfileIcon data={userData} />
            </div>

            {show ? (
              <motion.div
                ref={menuRef} // Attach the ref to the menu
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{
                  duration: 0.7,
                  ease: "easeOut",
                  type: "spring",
                }}
                className="absolute top-14 right-0 h-[23rem] w-[270px] rounded-xl bg-slate-100"
              >
                <div className="flex flex-col justify-center py-14 gap-y-4 px-7">
                  <div className="flex flex-col items-center">
                    <motion.img
                      className="object-cover border-4 border-green-300 rounded-full h-14"
                      src={`https://ui-avatars.com/api/?name=${userData?.email}`}
                      alt="User Avatar"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.5 }}
                    />
                    <h1 className="text-lg line-clamp-2 mt-2 items-center text-[#121037] font-medium">
                      {userData?.username}
                    </h1>
                    <p className="line-clamp-2 items-center text-[#121037]">
                      {userData?.email}
                    </p>
                  </div>
                  <div className="mt-5 border-2 border-slate-300"></div>
                  <Link onClick={() => setShow(!show)} to={"UserProfile/"}>
                    <div className="flex flex-row items-center cursor-pointer gap-x-4">
                      <FaRegUser className="text-xl" />
                      <h1 className="text-[#121037] font-medium">
                        View Profile
                      </h1>
                    </div>
                  </Link>
                  <div className="flex flex-row items-center cursor-pointer gap-x-4">
                    <IoKeySharp className="text-xl" />
                    <h1 className="text-[#121037] font-medium">
                      Change password
                    </h1>
                  </div>
                  <div
                    onClick={handleLogout}
                    className="flex flex-row items-center cursor-pointer gap-x-4"
                  >
                    <FaPowerOff className="text-xl text-red-600" />
                    <h1 className="text-[#121037] font-medium">Log Out</h1>
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
