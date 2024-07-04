import React from "react";
import DashNav from "../Componentz/DashNav";
import SidePannel from "../Screens/SidePannel";
import { Outlet } from "react-router-dom";

function MainPage() {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden overflow-y-hidden">
      <div>
        {/* Dashboard Navbar */}
        <DashNav />
      </div>
      <div className="flex flex-row w-full justify-between ">
        <div className="flex felx-col  xl:w-[300px] lg:w-[250px]">
          <SidePannel />
        </div>
        <div className="flex-1 ">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default MainPage;
