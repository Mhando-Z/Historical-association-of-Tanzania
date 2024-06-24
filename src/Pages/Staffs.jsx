import React, { useContext } from "react";
import ImageList from "../Components.jsx/ImgaList";
import HomePageContext from "../Context/HomePageContext";

function Staffs() {
  const { StaffsSect } = useContext(HomePageContext);
  return (
    <div className="flex container mx-auto mt-10">
      <div className=" flex flex-col">
        <h1 className="text-6xl font-extrabold mb-12 text-[#b67a3d]">
          Our Team
        </h1>
        <ImageList data={StaffsSect} />
      </div>
    </div>
  );
}

export default Staffs;
