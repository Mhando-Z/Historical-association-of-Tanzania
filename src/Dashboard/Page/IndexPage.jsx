import React, { useContext } from "react";
import DashNav from "../Componentz/DashNav";
import SidePannel from "../Screens/SidePannel";
import UserContext from "../../Context/UserContext";
import { Outlet } from "react-router-dom";
import { motion } from "framer-motion";

function IndexPage() {
  const { open } = useContext(UserContext);

  return (
    <div className="flex flex-col min-h-screen overflow-hidden ">
      <div className="flex flex-row w-full">
        {open && (
          <motion.div className="flex bg-white xl:w-[300px]">
            {/* sideBar */}
            <SidePannel />
          </motion.div>
        )}
        <div className="flex flex-col flex-grow bg-gray-200 bg-opacity-80">
          {/* central pages */}
          <div
            className={`z-50 fixed top-0 ${open ? "xl:left-[300px] md:left-[250px] left-[200px]" : "left-0"} right-0 `}
          >
            <DashNav />
          </div>
          <div>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default IndexPage;
