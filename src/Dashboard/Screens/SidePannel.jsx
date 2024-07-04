import React from "react";
import { Link } from "react-router-dom";

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
];

function SidePannel() {
  return (
    <div className="flex fixed  flex-col h-screen w-[300px] bg-slate-100">
      <div className="px-4 mt-20 flex flex-col w-full">
        {Sections?.map((dt, index) => {
          return (
            <div key={index + 234} className="flex flex-col gap-y-4">
              <Link to={dt.links}>
                <div className="flex flex-row py-2 mt-2 bg-slate-300">
                  <h1 className="font-medium xl:text-xl">{dt.sections}</h1>
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
