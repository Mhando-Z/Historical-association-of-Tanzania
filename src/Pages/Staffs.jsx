import React, { useContext } from "react";
import ImageList from "../Components/ImgaList";
import HomePageContext from "../Context/HomePageContext";
import { Dots } from "react-activity";

function Staffs() {
  const { StaffsSect } = useContext(HomePageContext);
  return (
    <div className="flex container relative mx-auto mt-20 min-h-screen">
      <div className=" flex flex-col">
        <h1 className="text-6xl font-extrabold mb-12 text-[#b67a3d]">
          Our Team
        </h1>
        <ImageList data={StaffsSect} />
      </div>
      {StaffsSect?.length === 0 ? (
        <div className="absolute top-0 right-0 left-0 bottom-0 flex items-center justify-center ">
          <Dots color="#b67a3d" size={40} speed={0.7} animating={true} />
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Staffs;
