import React, { useContext, useState, useEffect, useRef } from "react";
import { RiAlignJustify } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import { FaRegUser, FaPowerOff } from "react-icons/fa6";
import { IoKeySharp } from "react-icons/io5";
import { LuLaptop2 } from "react-icons/lu";
import { motion } from "framer-motion";
import UserContext from "../../Context/UserContext";
import { HiMiniCheckBadge } from "react-icons/hi2";

// icons impots
import stdprofile from "../../Assets/profiles/man.png";
import stdprofile2 from "../../Assets/profiles/woman2.png";
import manprofile from "../../Assets/profiles/man1.png";
import womanProfile from "../../Assets/profiles/woman.png";

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
    <div className="bg-slate-100 w-full  ring-[#b67a3d] md:py-3 z-50">
      <div className="flex flex-row items-center justify-between px-4">
        <div className="flex items-start justify-start flex-1 gap-x-3 ">
          <Link>
            <RiAlignJustify
              onClick={handleSideview}
              className="text-xl md:text-2xl"
            />
          </Link>
          <a href={"/"}>
            <LuLaptop2 className="text-xl md:text-2xl" />
          </a>
        </div>
        <div className="flex flex-row items-center justify-between gap-x-7 ">
          <div className="relative flex flex-col items-center gap-x-2 ">
            {/* Profile icon or picture */}
            <div className="cursor-pointer" onClick={handleShow}>
              <div className="flex flex-row items-center gap-x-3">
                <div className="flex items-center justify-center ">
                  {/* profile images */}
                  {userData?.profile.profile_picture !== null ? (
                    <>
                      <motion.img
                        initial={{ initial: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                          duration: 1,
                          ease: "easeInOut",
                          type: "spring",
                        }}
                        src={`${userData?.profile.profile_picture}`}
                        alt="Profile"
                        // className="object-cover object-top   ring-1 size-60 md:size-60 ring-[#b67a3d] rounded max-w-screen"
                        className="md:size-7 size-5 object-cover object-top ring-4 rounded-full ring-[#b67a3d] "
                      />
                    </>
                  ) : (
                    <>
                      {userData?.profile.is_student === true &&
                      userData?.profile.gender === "male" ? (
                        <>
                          <img
                            src={stdprofile}
                            alt="userData profile"
                            className=" h-5 md:h-7 ring-4 rounded-full ring-[#b67a3d] "
                          />
                        </>
                      ) : userData?.profile.gender === "male" ? (
                        <img
                          src={manprofile}
                          alt="userData profile"
                          className=" h-5 md:h-7 ring-4 rounded-full ring-[#b67a3d]"
                        />
                      ) : userData?.profile.is_student === true &&
                        userData?.profile.gender === "female" ? (
                        <>
                          <img
                            src={stdprofile2}
                            alt="userData profile"
                            className=" h-5 md:h-7 ring-4 rounded-full   ring-[#b67a3d]"
                          />
                        </>
                      ) : userData?.profile.gender === "female" ? (
                        <img
                          src={womanProfile}
                          alt="userData profile"
                          className=" h-5 md:h-7 ring-4 rounded-full   ring-[#b67a3d]"
                        />
                      ) : (
                        <motion.img
                          className="object-cover h-5 border-4 border-green-300 rounded-full md:h-7"
                          src={`https://ui-avatars.com/api/?name=${userData?.email}`}
                          alt="User Avatar"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ duration: 0.5 }}
                        />
                      )}
                    </>
                  )}
                </div>
                <div className="flex flex-col flex-grow">
                  {userData?.is_staff ? (
                    <div className="flex flex-row items-center w-full gap-x-1">
                      <>
                        <h1 className="font-medium ">Admin</h1>
                      </>
                      <HiMiniCheckBadge className="text-blue-700 md:text-xl gap-x-10" />
                    </div>
                  ) : (
                    <div className="flex flex-row items-center w-full gap-x-1">
                      <>
                        <h1 className="font-medium">User</h1>
                      </>
                      {userData?.profile.is_paid_membership === true &&
                      userData?.profile.is_paid_conference ? (
                        <HiMiniCheckBadge className="text-xl text-green-700 gap-x-10" />
                      ) : userData?.profile.is_paid_membership === true ? (
                        <HiMiniCheckBadge className="text-xl text-yellow-700 gap-x-10" />
                      ) : userData?.profile.is_paid_conference === true ? (
                        <HiMiniCheckBadge className="text-xl text-purple-700 gap-x-10" />
                      ) : (
                        <HiMiniCheckBadge className="text-xl text-black gap-x-10" />
                      )}
                    </div>
                  )}
                </div>
              </div>
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
