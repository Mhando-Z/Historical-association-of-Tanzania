import React, { useContext } from "react";
import HomePageContext from "../Context/HomePageContext";
import { Link } from "react-router-dom";

function PresidentSpeech() {
  const { PresidentSect } = useContext(HomePageContext);
  return (
    <div className="bg-[#b67a3d] bg-opacity-15 py-20">
      <div className="flex container mx-auto flex-col md:flex-row">
        {PresidentSect?.map((dt) => {
          return (
            <div
              key={dt.id}
              className="flex flex-col md:flex-row justify-between w-full gap-x-10"
            >
              <div className="flex flex-col items-center justify-center gap-y-3">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-3xl bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <img
                    src={`http://127.0.0.1:8000/${dt.image}`}
                    alt={dt.subtitle}
                    className="h-[400px] w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                {/* <img
                  src={`http://127.0.0.1:8000/${dt.image}`}
                  alt="hat president"
                  className="max-w-screen xl:h-[500px] md:h-[400px] ring-2 ring-slate-400 p-2"
                /> */}
                <p className="w-[300px] mt-2 font-semibold justify-center text-center ">
                  {dt.subtitle}
                </p>
              </div>
              <div className="flex flex-col gap-y-4">
                <h1 className="md:text-5xl text-black tracking-tighter font-extrabold max-w-2xl">
                  {dt.title}
                </h1>
                <h1 className="lg:text-3xl text-black font-semibold">
                  {dt.subtitle}
                </h1>
                <p className="xl:text-2xl md:text-xl max-w-5xl line-clamp-6 xl:line-clamp-none text-justify tracking-tighter">
                  {dt.description}
                </p>
                <div className="mt-2">
                  <Link className="px-6 py-2 mt-2 xl:text-2xl md:text-xl hover:ring-2 hover:ring-black hover:bg-opacity-0 hover:text-black font-semibold rounded-3xl bg-[#b67a3d] text-white">
                    ReadMore
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default PresidentSpeech;
