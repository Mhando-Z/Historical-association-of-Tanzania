import React, { useContext } from "react";
import HomePageContext from "../Context/HomePageContext";

function HATPresident() {
  const { PresidentSect } = useContext(HomePageContext);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen mb-10">
      <div className="relative w-full overflow-hidden aspect-h-1 aspect-w-1 xl:aspect-h-8 xl:aspect-w-7">
        <img
          src={`http://127.0.0.1:8000/${PresidentSect[0]?.image2}`}
          alt={PresidentSect[0]?.subtitle}
          className="h-[650px] w-full object-cover object-top  transition-all duration-500 ease-in"
        />
        <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b from-transparent via-transparent via-90% to-white"></div>
      </div>
      <div className="container flex flex-col mx-auto xl:mt-10 gap-y-3">
        <h1 className="max-w-2xl text-5xl font-bold tracking-tighter text-gray-800 xl:text-6xl">
          {PresidentSect[0]?.title}
        </h1>
        <h2 className="font-semibold text-gray-700 lg:text-3xl">
          {PresidentSect[0]?.subtitle}
        </h2>
        <div className="">
          <div>
            <p className="tracking-tighter text-justify xl:text-lg">
              {PresidentSect[0]?.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HATPresident;
