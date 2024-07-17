import React, { useEffect, useState } from "react";
import logo from "../../Assets/Images/Logo3.png";
import { RiAlignJustify } from "react-icons/ri";
import { Link } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { GrNotification } from "react-icons/gr";
import { FaRegCaretSquareDown } from "react-icons/fa";
import { FaRegCircleUser } from "react-icons/fa6";
import { CiSquareChevDown } from "react-icons/ci";
import { CiSquareChevUp } from "react-icons/ci";

function DashNav() {
  const [user, setUser] = useState([]);
  useEffect(() => {
    try {
      const usertoken = localStorage.getItem("token");
      const user = jwtDecode(usertoken);
      setUser(user);
    } catch (error) {}
  }, []);
  return (
    <div className="bg-slate-100 py-3 fixed top-0 left-0 w-full z-50">
      <div className="w-full px-4 flex flex-row items-center justify-between">
        {/* HAT logo */}
        <div className="xl:w-[300px] md:w-[250px] w-[100px]">
          <Link to={"/Dashboard/"}>
            <img src={logo} alt="hat-logo" className="h-8" />
          </Link>
        </div>
        <div className="flex flex-1 items-start justify-start ">
          <Link>
            <RiAlignJustify className="text-3xl" />
          </Link>
        </div>
        <div className="flex flex-row items-center justify-between gap-x-4 ">
          <div>
            <GrNotification className="text-3xl" />
          </div>
          <div className="flex flex-row items-center gap-x-2 relative ">
            <FaRegCircleUser className="text-4xl" />
            <CiSquareChevDown className="text-3xl text-black" />
            <div className="absolute top-14 right-0 h-80 w-[270px] rounded-2xl bg-black"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashNav;
