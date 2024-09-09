import React, { useState } from "react";
import DashNav from "../Componentz/DashNav";
import SidePannel from "../Screens/SidePannel";
import { Outlet } from "react-router-dom";

function IndexPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Function to toggle the sidebar
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 w-64 bg-slate-100  h-full transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="flex flex-col justify-between min-h-screen p-6">
          <div>
            {/* <img src={logo} alt="herveg logo" className="h-10 " /> */}
            <nav className="">
              <SidePannel />
            </nav>
          </div>
        </div>
      </aside>

      {/* Overlay for Sidebar on small screens */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black opacity-50"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Main content */}
      <div className="flex-1 ml-0 overflow-y-auto bg-gray-50 md:ml-64">
        <header className="sticky top-0 z-30 flex items-center justify-between py-4 shadow bg-slate-100 md:py-6">
          {/* Button to toggle sidebar on mobile */}
          <DashNav handleClick={toggleSidebar} />
        </header>

        <main className="p-4 md:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default IndexPage;
