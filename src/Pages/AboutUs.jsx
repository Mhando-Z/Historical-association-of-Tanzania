import React, { useContext } from "react";
import HomePageContext from "../Context/HomePageContext";
import { Link } from "react-router-dom";

function AboutUs() {
  const { AboutUSSect } = useContext(HomePageContext);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="mt-16">
      <div className="flex flex-col container mx-auto">
        <div className="flex flex-col gap-y-5">
          <h1 className="md:text-5xl text-[#b67a3d] tracking-tighter font-extrabold max-w-2xl">
            {AboutUSSect[0]?.title}
          </h1>
          <p className="xl:text-xl md:text-xl text-gray-500 line-clamp-6 xl:line-clamp-none text-justify tracking-tighter">
            {AboutUSSect[0]?.description}
          </p>
        </div>
        <div className="flex flex-col mt-10 justify-between">
          <div className="w-full  ">
            <h1 className="md:text-5xl text-[#b67a3d] tracking-tighter font-extrabold max-w-2xl">
              {AboutUSSect[1]?.title}
            </h1>
          </div>
          <div className="flex flex-col mt-5 md:flex-row justify-between gap-x-10">
            <div>
              <p className="xl:text-xl md:text-xl max-w-7xl text-gray-500 line-clamp-6 xl:line-clamp-none text-justify tracking-tighter">
                {AboutUSSect[1]?.description}
              </p>
            </div>
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-3xl   ">
              <img
                src={`http://127.0.0.1:8000/${AboutUSSect[1]?.image}`}
                alt={AboutUSSect[1]?.title}
                className="h-[300px] w-full rounded-3xl object-cover object-center"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-10 justify-between">
          <div className="w-full  ">
            <h1 className="md:text-5xl text-[#b67a3d] tracking-tighter font-extrabold max-w-2xl">
              {AboutUSSect[2]?.title}
            </h1>
          </div>
          <div className="flex flex-col mt-5 md:flex-row justify-between gap-x-10">
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-3xl   ">
              <img
                src={`http://127.0.0.1:8000/${AboutUSSect[2]?.image}`}
                alt={AboutUSSect[1]?.title}
                className="h-[300px] w-full rounded-3xl object-cover object-center"
              />
            </div>
            <div>
              <p className="xl:text-xl md:text-xl max-w-7xl text-gray-500 line-clamp-6 xl:line-clamp-none text-justify tracking-tighter">
                {AboutUSSect[2]?.description}
              </p>
            </div>
          </div>
        </div>
        <div className="flex mt-10 flex-row w-full justify-end items-end">
          <Link
            onClick={scrollToTop}
            to={"AboutUs/"}
            className="px-5 py-2 hover:ring-2 hover:ring-black hover:text-black hover:bg-white rounded-3xl  mt-2  font-semibold bg-[#b67a3d] text-white"
          >
            ReadMore
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
