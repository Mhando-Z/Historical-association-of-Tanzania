import React, { useContext } from "react";
import HomePageContext from "../Context/HomePageContext";
import { Link } from "react-router-dom";

function AboutUs() {
  const { AboutUSSect } = useContext(HomePageContext);
  console.log(AboutUSSect);

  return (
    <div className="mt-16">
      <div className="flex flex-col md:flex-row container mx-auto">
        <div className="flex flex-col gap-y-5">
          <h1 className="md:text-5xl text-[#b67a3d] tracking-tighter font-extrabold max-w-2xl">
            {AboutUSSect[0]?.title}
          </h1>
          <p className="xl:text-2xl md:text-xl line-clamp-6 xl:line-clamp-none text-justify tracking-tighter">
            {AboutUSSect[0]?.description}
          </p>
          <div className="flex flex-row w-full justify-end items-end">
            <Link className="px-5 py-2 hover:ring-2 hover:ring-black hover:text-black hover:bg-white rounded-3xl  mt-2 xl:text-2xl text-xl font-semibold bg-[#b67a3d] text-white">
              ReadMore
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
