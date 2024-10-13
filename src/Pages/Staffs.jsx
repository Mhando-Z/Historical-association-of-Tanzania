import React, { useContext } from "react";
import ImageList from "../Components/ImgaList";
import HomePageContext from "../Context/HomePageContext";

function Staffs() {
  const { StaffsSect } = useContext(HomePageContext);

  if (!StaffsSect || StaffsSect?.length === 0) {
    return <div className="bg-white"></div>;
  }

  return (
    <div className="container relative flex min-h-screen mx-auto mt-20">
      <div className="flex flex-col ">
        <h1 className="md:text-5xl flex flex-col text-4xl font-extrabold mb-7 text-[#b67a3d]">
          Our Team
          <span className="max-w-4xl mt-3 text-base font-normal text-gray-800 xl:text-lg">
            Our team is a group of passionate professionals dedicated to
            delivering top-notch services and solutions. Each of us brings
            unique skills and expertise, working together to ensure the best
            experience. Meet the team behind our success and discover what makes
            us tick!
          </span>
        </h1>
        <ImageList data={StaffsSect} />
      </div>
    </div>
  );
}

export default Staffs;
