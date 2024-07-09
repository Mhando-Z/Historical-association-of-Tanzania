import React from "react";
import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const Other = [
  {
    sections: "Members",
    links: "heroSect/",
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
  },
  {
    sections: "PresidentSect",
    links: "PresoSect/",
  },
  {
    sections: "AboutUs",
    links: "AboutSect/",
  },
  {
    sections: "Staffs",
    links: "StaffsSect/",
  },
  {
    sections: "Contacts",
    links: "ContactUsSect/",
  },
  {
    sections: "Gallery",
    links: "GallerySect/",
  },
  {
    sections: "Announcements",
    links: "lklk/",
  },
];

function SidePannel() {
  return (
    <div className="md:flex py-14 fixed mt-10 flex-col h-screen xl:w-[300px] md:w-[250px] hidden bg-slate-100">
      <div>
        <h1 className="xl:text-xl text-lg font-medium text-slate-900 px-4">
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
                  className={({ isActive }) =>
                    isActive
                      ? "bg-[#b67a3d] text-white w-full flex flex-row py-2 px-7 mt-2 rounded-3xl"
                      : "flex flex-row py-2 w-full hover:transition-colors hover:ease-out hover:duration-300 hover:bg-[#ca935c] hover:text-white hover:font-medium  px-7 mt-2 text-slate-800 rounded-3xl bg-slate-300"
                  }
                  to={dt.links}
                >
                  <h1 className=" xl:text-lg">{dt.sections}</h1>
                </NavLink>
              </motion.div>
            </div>
          );
        })}
      </div>
      <div className="mt-4">
        <h1 className="xl:text-xl text-lg font-medium text-slate-900 px-4">
          OTHER
        </h1>
      </div>
      <div className="px-4 flex flex-col w-full">
        {Other?.map((dt, index) => {
          return (
            <div key={index + 234} className="flex flex-col gap-y-4">
              <Link to={dt.links}>
                <div className="flex flex-row py-2 px-7 mt-2 text-slate-800 rounded-3xl bg-slate-300">
                  <h1 className=" xl:text-lg">{dt.sections}</h1>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SidePannel;
