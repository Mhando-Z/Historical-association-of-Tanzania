import React, { useContext } from "react";
import DashNav from "../Componentz/DashNav";
import SidePannel from "../Screens/SidePannel";
import { Outlet } from "react-router-dom";
import { motion } from "framer-motion";
import UserContext from "../../Context/UserContext";

function MainPage() {
  const { open } = useContext(UserContext);

  return (
    <div className="flex flex-col h-screen">
      <div>
        {/* Dashboard Navbar */}
        <DashNav />
      </div>
      <div className="flex flex-row  flex-grow">
        {open && (
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, type: "spring", ease: "easeOut" }}
            className="xl:flex hidden flex-col xl:w-[300px] lg:w-[250px] h-full"
          >
            <SidePannel />
          </motion.div>
        )}
        <div className="flex flex-col flex-grow overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default MainPage;
