import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
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
import { FaUserGroup } from "react-icons/fa6";
import lgo from "../../Assets/Images/Logo3.png";
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
      initial={{ opacity: 1, x: -100 }}
      animate={{ opacity: 1, x: 1 }}
      transition={{ duration: 0.1, ease: "easeOut" }}
      className="z-40 flex flex-col justify-between h-screen overflow-y-auto bg-slate-100"
    >
      {/* HAT logo */}
      <div className="flex py-5 mb-5">
        <Link to={"/Dashboard/"}>
          <img src={lgo} alt="hat-logo" className="h-8" />
        </Link>
      </div>
      {userData?.is_staff === true ? (
        <div className="flex flex-col flex-grow">
          <div className="">
            <h1 className="xl:text-xl px-3 border-l-[#b67a3d] border-l-4 text-lg font-medium text-slate-900 ">
              WEB-SECTIONS
            </h1>
          </div>
          <div className="flex flex-col w-full ">
            {Sections?.map((dt, index) => {
              return (
                <div key={index + 234} className="flex flex-col gap-y-4">
                  <motion.div
                    transition={{ type: "spring", ease: "easeOut" }}
                    className="flex w-full"
                  >
                    <NavLink
                      onClick={scrollToTop}
                      className={({ isActive }) =>
                        isActive
                          ? "bg-slate-300 items-center gap-x-5 text-center font-medium  text-gray-900 w-full flex flex-row py-2 px-7 mt-2 rounded"
                          : "flex flex-row py-2 w-full  gap-x-2 hover:transition-colors items-center hover:ease-out hover:duration-300 hover:bg-slate-300 hover:text-gray-900 hover:font-medium  px-7 mt-2 text-slate-800 rounded"
                      }
                      to={dt.links}
                    >
                      <p className="text-xl">{dt.icon}</p>
                      <h1 className="text-sm xl:text-base line-clamp-1">
                        {dt.sections}
                      </h1>
                    </NavLink>
                  </motion.div>
                </div>
              );
            })}
          </div>
          <div className="mt-10">
            <h1 className="xl:text-xl border-l-[#b67a3d] border-l-4 text-lg font-medium text-slate-900 px-3 ">
              OTHER
            </h1>
          </div>
          <div className="flex flex-col w-full ">
            {Other?.map((dt, index) => {
              return (
                <div key={index + 234} className="flex flex-col gap-y-4">
                  <motion.div
                    transition={{ type: "spring", ease: "easeOut" }}
                    className="flex w-full"
                  >
                    <NavLink
                      onClick={scrollToTop}
                      className={({ isActive }) =>
                        isActive
                          ? "bg-slate-300 items-center px-4 gap-x-2 w-full text-center font-medium  text-gray-900  flex flex-row py-2  mt-2 rounded"
                          : "flex flex-row py-2 w-full  gap-x-2 hover:transition-colors items-center hover:ease-out hover:duration-300 hover:bg-slate-300 hover:text-gray-900 hover:font-medium  px-4 mt-2 text-slate-800 rounded"
                      }
                      to={dt.links}
                    >
                      <p className="text-xl">{dt.icon}</p>
                      <h1 className="text-sm xl:text-base ">{dt.sections}</h1>
                    </NavLink>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      ) : userData ? (
        <div className="flex flex-col flex-grow">
          <div className="">
            <h1 className="xl:text-xl border-l-[#b67a3d] border-l-4 text-lg font-medium text-slate-900 px-3 ">
              SECTIONS
            </h1>
          </div>
          <div className="flex flex-col w-full ">
            {UserChoices?.map((dt, index) => {
              return (
                <div key={index + 234} className="flex flex-col gap-y-4">
                  <motion.div
                    transition={{ type: "spring", ease: "easeOut" }}
                    className="flex w-full"
                  >
                    <NavLink
                      onClick={scrollToTop}
                      className={({ isActive }) =>
                        isActive
                          ? "bg-slate-300 items-center gap-x-5 text-center font-medium  text-gray-900 w-full flex flex-row py-2 px-7 mt-2 rounded"
                          : "flex flex-row py-2 w-full  gap-x-2 hover:transition-colors items-center hover:ease-out hover:duration-300 hover:bg-slate-300 hover:text-gray-900 hover:font-medium  px-7 mt-2 text-slate-800 rounded"
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
        </div>
      ) : (
        ""
      )}
      <div className="flex flex-col w-full mb-5">
        <motion.div
          transition={{ type: "spring", ease: "easeOut" }}
          className="flex items-center justify-center w-full bg-gray-200 bg-opacity-50 rounded "
        >
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "bg-slate-300 items-center text-gray-900 w-full rounded"
                : "w-full rounded-xl text-gray-900  "
            }
            to={"UserProfile/"}
          >
            <div className="flex flex-row items-center justify-between w-full px-2 py-5 gap-x-5">
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
                      className="object-cover object-top shadow-lg ring-1 size-14  ring-[#b67a3d] rounded-full max-w-screen"
                    />
                  </>
                ) : userData?.profile.is_student === true &&
                  userData?.profile.gender === "male" ? (
                  <div>
                    <img
                      src={stdprofile}
                      alt="userData pprofile.rofile"
                      className="h-12 ring-4 rounded-full  shadow-xl ring-[#b67a3d] "
                    />
                  </div>
                ) : userData?.profile.gender === "male" ? (
                  <img
                    src={manprofile}
                    alt="userData pprofile.rofile"
                    className="h-12 ring-4 rounded-full shadow-xl ring-[#b67a3d]"
                  />
                ) : userData?.profile.is_student === true &&
                  userData?.profile.gender === "female" ? (
                  <div>
                    <img
                      src={stdprofile2}
                      alt="userData pprofile.rofile"
                      className="h-12 ring-4 rounded-full shadow-xl ring-[#b67a3d]"
                    />
                  </div>
                ) : userData?.profile.gender === "female" ? (
                  <img
                    src={womanProfile}
                    alt="userData pprofile.rofile"
                    className="h-12 ring-4 rounded-full shadow-xl ring-[#b67a3d]"
                  />
                ) : (
                  <motion.img
                    className="object-cover border-4 border-green-300 rounded-full h-14"
                    src={`https://ui-avatars.com/api/?name=${userData?.email}`}
                    alt="User Avatar"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5 }}
                  />
                )}
              </div>
              <div className="flex flex-col flex-grow">
                {/* user details and status */}
                <h1 className="text-sm font-bold xl:text-base line-clamp-2">
                  {userData?.username}
                </h1>
                {userData?.is_staff ? (
                  <div className="flex flex-row items-center w-full gap-x-1">
                    <>
                      <h1 className="text-sm font-medium xl:text-base">
                        Admin
                      </h1>
                    </>
                    <HiMiniCheckBadge className="text-sm text-blue-700 xl:text-lg gap-x-10" />
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
      </div>
    </motion.div>
  );
}

export default SidePannel;
