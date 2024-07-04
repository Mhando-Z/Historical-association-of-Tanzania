import React from "react";
import logo from "../../Assets/Images/Logo3.png";
import { Link } from "react-router-dom";
import { RiAlignJustify } from "react-icons/ri";
import { UserCircleIcon } from "@heroicons/react/24/solid";

function DashNav() {
  return (
    <div className="bg-slate-100 py-3 fixed top-0 left-0 w-full z-50">
      <div className="w-full px-4 flex flex-row items-center justify-between">
        <div className="w-[300px]">
          <Link to={"/Dashboard/"}>
            <img src={logo} alt="hat-logo" className="h-8" />
          </Link>
        </div>
        <div className="flex flex-1 items-start justify-start ">
          <Link>
            <RiAlignJustify className="text-3xl" />
          </Link>
        </div>
        <div className="">
          <UserCircleIcon
            className="h-12 w-12 text-gray-300"
            aria-hidden="true"
          />
        </div>
      </div>
    </div>
  );
}

export default DashNav;
