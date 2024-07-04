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
      <div className="flex flex-row w-full justify-between gap-x-5">
        <div className="flex felx-col  w-[300px]">
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
