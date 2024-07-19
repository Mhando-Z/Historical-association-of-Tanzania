import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { jwtDecode } from "jwt-decode";
import { HiSpeakerphone } from "react-icons/hi";
import { AiFillPicture } from "react-icons/ai";
import { MdContactPage } from "react-icons/md";
import { IoPeopleSharp } from "react-icons/io5";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { BsFillPrinterFill } from "react-icons/bs";
import { FaHome } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { MdLocalPolice } from "react-icons/md";
import { FaUserGroup } from "react-icons/fa6";
import logo from "../../Assets/Images/3dlogo.png";

const Other = [
  {
    sections: "Members",
    links: "MembersMgt/",
    icon: <FaUserGroup />,
  },
  {
    sections: "Report Submission",
    links: "heroSect/",
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
    sections: "Policies&Terms",
    links: "PoliciesTerms/",
    icon: <MdLocalPolice />,
  },
  {
    sections: "Gallery",
    links: "GallerySect/",
    icon: <AiFillPicture />,
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

function SidePannel() {
  const [user, setUser] = useState([]);
  useEffect(() => {
    try {
      const usertoken = localStorage.getItem("token");
      const user = jwtDecode(usertoken);
      setUser(user);
    } catch (error) {}
  }, []);
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
      {user?.is_staff === true ? (
        <>
          <div className="">
            <h1 className="xl:text-xl border-l-[#b67a3d] border-l-8 text-lg font-medium text-slate-900 px-4">
              WEB-SECTIONS
            </h1>
          </div>
          <div className="px-4 flex flex-col w-full">
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
                          ? "bg-[#b67a3d] items-center gap-x-5 text-center text-white w-full flex flex-row py-2 px-7 mt-2 rounded-3xl"
                          : "flex flex-row py-2 w-full shadow-md gap-x-2 hover:transition-colors items-center hover:ease-out hover:duration-300 hover:bg-[#ca935c] hover:text-white hover:font-medium  px-7 mt-2 text-slate-800 rounded-3xl bg-slate-300"
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
          <div className="px-4 flex flex-col w-full">
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
                          ? "bg-[#b67a3d] items-center gap-x-5 text-center text-white w-full flex flex-row py-2 px-7 mt-2 rounded-3xl"
                          : "flex flex-row py-2 w-full shadow-md gap-x-2 hover:transition-colors items-center hover:ease-out hover:duration-300 hover:bg-[#ca935c] hover:text-white hover:font-medium  px-7 mt-2 text-slate-800 rounded-3xl bg-slate-300"
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
      <div className="absolute bottom-10 left-4 ">
        <img src={logo} alt="hatlogo" className="h-20 opacity-45" />
      </div>
    </motion.div>
  );
}

export default SidePannel;
