import React, { useContext } from "react";
import DashNav from "../Componentz/DashNav";
import SidePannel from "../Screens/SidePannel";
import { Outlet } from "react-router-dom";
import { motion } from "framer-motion";
import UserContext from "../../Context/UserContext";

function MainPage() {
  const { open } = useContext(UserContext);

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden overflow-y-hidden">
      <div>
        {/* Dashboard Navbar */}
        <DashNav />
      </div>
      <div className="flex flex-row w-full justify-between ">
        {open ? (
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 1 }}
            transition={{ duration: 1, type: "spring", ease: "easeOut" }}
            className="flex felx-col xl:w-[300px] lg:w-[250px]"
          >
            <SidePannel />
          </motion.div>
        ) : (
          ""
        )}
        <motion.div className="flex-1 ">
          <Outlet />
        </motion.div>
      </div>
    </div>
  );
}

export default MainPage;
