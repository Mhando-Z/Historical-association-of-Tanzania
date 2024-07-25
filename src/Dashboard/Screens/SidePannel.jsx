import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { HiSpeakerphone } from "react-icons/hi";
import { AiFillPicture } from "react-icons/ai";
import { MdContactPage } from "react-icons/md";
import { IoPeopleSharp } from "react-icons/io5";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { BsFillPrinterFill } from "react-icons/bs";
import { FaHome } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { MdLocalPolice } from "react-icons/md";
import { PiVideoConferenceFill } from "react-icons/pi";
import { FaRegCircleUser, FaUserGroup } from "react-icons/fa6";
import logo from "../../Assets/Images/3dlogo.png";
// profile logos
import stdprofile from "../../Assets/profiles/man.png";
import stdprofile2 from "../../Assets/profiles/woman2.png";
import manprofile from "../../Assets/profiles/man1.png";
import womanProfile from "../../Assets/profiles/woman.png";
// verification badge
import { HiMiniCheckBadge } from "react-icons/hi2";
import UserContext from "../../Context/UserContext";

// page and section links
const Other = [
  {
    sections: "User Management",
    links: "MembersMgt/",
    icon: <FaUserGroup />,
  },
];
const Sections = [
  {
    sections: "HeroSection",
    links: "heroSect/",
    icon: <FaHome />,
  },
  {
    sections: "PresidentSect",
    links: "PresoSect/",
    icon: <IoPerson />,
  },
  {
    sections: "AboutUs",
    links: "AboutSect/",
    icon: <BsFillInfoCircleFill />,
  },
  {
    sections: "Staffs",
    links: "StaffsSect/",
    icon: <IoPeopleSharp />,
  },
  {
    sections: "Contacts",
    links: "ContactUsSect/",
    icon: <MdContactPage />,
  },
  {
    sections: "Companies",
    links: "Partners/",
    icon: <MdLocalPolice />,
  },
  {
    sections: "Gallery",
    links: "GallerySect/",
    icon: <AiFillPicture />,
  },
  {
    sections: "Conference",
    links: "Conference/",
    icon: <PiVideoConferenceFill />,
  },
  {
    sections: "Announcements",
    links: "Announcement/",
    icon: <HiSpeakerphone />,
  },
  {
    sections: "Reseach&publications",
    links: "Research&publications/",
    icon: <BsFillPrinterFill />,
  },
];
const UserChoices = [
  {
    sections: "Home",
    links: "UserHome/",
    icon: <FaUserGroup />,
  },
  {
    sections: "Membership",
    links: "Membership/",
    icon: <FaUserGroup />,
  },
  {
    sections: "Conference",
    links: "UserConference/",
    icon: <FaUserGroup />,
  },
  {
    sections: "My Payments",
    links: "MyPayments/",
    icon: <FaUserGroup />,
  },
];

function SidePannel() {
  const { userData } = useContext(UserContext);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 1 }}
      transition={{ duration: 1, type: "spring", ease: "easeOut" }}
      className="xl:flex py-14 ring-1  shadow-2xl ring-[#b67a3d] fixed mt-10 flex-col min-h-screen xl:w-[300px] md:w-[250px] hidden bg-slate-100"
    >
      {userData?.is_staff === true ? (
        <>
          <div className="">
            <h1 className="xl:text-xl border-l-[#b67a3d] border-l-8 text-lg font-medium text-slate-900 px-4">
              WEB-SECTIONS
            </h1>
          </div>
          <div className="flex flex-col w-full px-4">
            {Sections?.map((dt, index) => {
              return (
                <div key={index + 234} className="flex flex-col gap-y-4">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.8 }}
                    transition={{ type: "spring", ease: "easeOut" }}
                    className="flex w-full"
                  >
                    <NavLink
                      onClick={scrollToTop}
                      className={({ isActive }) =>
                        isActive
                          ? "bg-[#b67a3d] items-center gap-x-5 text-center text-white w-full flex flex-row py-2 px-7 mt-2 rounded-2xl"
                          : "flex flex-row py-2 w-full shadow-md gap-x-2 hover:transition-colors items-center hover:ease-out hover:duration-300 hover:bg-[#ca935c] hover:text-white hover:font-medium  px-7 mt-2 text-slate-800 rounded-2xl bg-slate-300"
                      }
                      to={dt.links}
                    >
                      <p className="text-xl">{dt.icon}</p>
                      <h1 className=" xl:text-lg">{dt.sections}</h1>
                    </NavLink>
                  </motion.div>
                </div>
              );
            })}
          </div>
          <div className="mt-10">
            <h1 className="xl:text-xl border-l-[#b67a3d] border-l-8 text-lg font-medium text-slate-900 px-4">
              OTHER
            </h1>
          </div>
          <div className="flex flex-col w-full px-4">
            {Other?.map((dt, index) => {
              return (
                <div key={index + 234} className="flex flex-col gap-y-4">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.8 }}
                    transition={{ type: "spring", ease: "easeOut" }}
                    className="flex w-full"
                  >
                    <NavLink
                      onClick={scrollToTop}
                      className={({ isActive }) =>
                        isActive
                          ? "bg-[#b67a3d] items-center gap-x-5 text-center text-white w-full flex flex-row py-2 px-7 mt-2 rounded-2xl"
                          : "flex flex-row py-2 w-full shadow-md gap-x-2 hover:transition-colors items-center hover:ease-out hover:duration-300 hover:bg-[#ca935c] hover:text-white hover:font-medium  px-7 mt-2 text-slate-800 rounded-2xl bg-slate-300"
                      }
                      to={dt.links}
                    >
                      <p className="text-xl">{dt.icon}</p>
                      <h1 className=" xl:text-lg">{dt.sections}</h1>
                    </NavLink>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </>
      ) : userData ? (
        <>
          <div className="">
            <h1 className="xl:text-xl border-l-[#b67a3d] border-l-8 text-lg font-medium text-slate-900 px-4">
              SECTIONS
            </h1>
          </div>
          <div className="flex flex-col w-full px-4">
            {UserChoices?.map((dt, index) => {
              return (
                <div key={index + 234} className="flex flex-col gap-y-4">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.8 }}
                    transition={{ type: "spring", ease: "easeOut" }}
                    className="flex w-full"
                  >
                    <NavLink
                      onClick={scrollToTop}
                      className={({ isActive }) =>
                        isActive
                          ? "bg-[#b67a3d] items-center gap-x-5 text-center text-white w-full flex flex-row py-2 px-7 mt-2 rounded-2xl"
                          : "flex flex-row py-2 w-full shadow-md gap-x-2 hover:transition-colors items-center hover:ease-out hover:duration-300 hover:bg-[#ca935c] hover:text-white hover:font-medium  px-7 mt-2 text-slate-800 rounded-2xl bg-slate-300"
                      }
                      to={dt.links}
                    >
                      <p className="text-xl">{dt.icon}</p>
                      <h1 className=" xl:text-lg">{dt.sections}</h1>
                    </NavLink>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </>
      ) : (
        ""
      )}
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.8 }}
        transition={{ type: "spring", ease: "easeOut" }}
        className="absolute bottom-14 flex items-center justify-center ring-[#b67a3d] ring-1  bg-slate-300  shadow-xl left-4 size-28 w-[260px]  rounded-xl "
      >
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "bg-[#b67a3d] items-center text-white w-full rounded-xl"
              : "hover:transition-colors hover:ease-out w-full hover:duration-300 rounded-xl hover:bg-[#ca935c] hover:text-white hover:font-medium"
          }
          to={"UserProfile/"}
        >
          <div className="flex flex-row items-center justify-between w-full p-5 gap-x-5">
            <div>
              {/* profile images */}

              {userData?.profile?.profile_picture !== null ? (
                <>
                  <motion.img
                    initial={{ initial: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 1,
                      ease: "easeInOut",
                      type: "spring",
                    }}
                    src={userData?.profile.profile_picture}
                    alt="Profile"
                    className="object-cover object-top shadow-lg ring-1 size-20  ring-[#b67a3d] rounded-full max-w-screen"
                  />
                </>
              ) : userData?.profile.is_student === true &&
                userData?.profile.gender === "male" ? (
                <div>
                  <img
                    src={stdprofile}
                    alt="userData pprofile.rofile"
                    className="h-20 ring-4 rounded-full  shadow-xl ring-[#b67a3d] "
                  />
                </div>
              ) : userData?.profile.gender === "male" ? (
                <img
                  src={manprofile}
                  alt="userData pprofile.rofile"
                  className="h-20 ring-4 rounded-full shadow-xl ring-[#b67a3d]"
                />
              ) : userData?.profile.is_student === true &&
                userData?.profile.gender === "female" ? (
                <div>
                  <img
                    src={stdprofile2}
                    alt="userData pprofile.rofile"
                    className="h-20 ring-4 rounded-full shadow-xl ring-[#b67a3d]"
                  />
                </div>
              ) : userData?.profile.gender === "female" ? (
                <img
                  src={womanProfile}
                  alt="userData pprofile.rofile"
                  className="h-20 ring-4 rounded-full shadow-xl ring-[#b67a3d]"
                />
              ) : (
                <div>
                  <FaRegCircleUser className="text-7xl" />
                </div>
              )}
            </div>
            <div className="flex flex-col flex-grow">
              {/* user details and status */}
              <h1 className="text-lg font-bold line-clamp-2">
                {userData?.username}
              </h1>
              {userData?.is_staff ? (
                <div className="flex flex-row items-center w-full gap-x-1">
                  <>
                    <h1 className="font-medium">Admin</h1>
                  </>
                  <HiMiniCheckBadge className="text-xl text-blue-700 gap-x-10" />
                </div>
              ) : (
                <div className="flex flex-row items-center w-full gap-x-1">
                  <>
                    <h1 className="font-medium">User</h1>
                  </>
                  {userData?.profile.is_paid_membership === true &&
                  userData?.profile.is_paid_conference === true ? (
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
        </NavLink>
      </motion.div>

      <div className="absolute bottom-10 left-4 ">
        <img src={logo} alt="hatlogo" className="hidden opacity-25 h-14" />
      </div>
    </motion.div>
  );
}

export default SidePannel;
