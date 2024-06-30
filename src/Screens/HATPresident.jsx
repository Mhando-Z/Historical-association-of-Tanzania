import React, { useContext } from "react";
import HomePageContext from "../Context/HomePageContext";

function HATPresident() {
  const { PresidentSect } = useContext(HomePageContext);

  return (
    <div className="flex mb-10 flex-col justify-center items-center min-h-screen">
      <div className="aspect-h-1 relative aspect-w-1 w-full overflow-hidden xl:aspect-h-8 xl:aspect-w-7">
        <img
          src={`http://127.0.0.1:8000/${PresidentSect[0]?.image2}`}
          alt={PresidentSect[0]?.subtitle}
          className="h-[550px] w-full object-cover object-top hover:grayscale transition-all duration-500 ease-in"
        />
        <div className="absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-b from-transparent via-transparent to-white"></div>
      </div>
      <div className="flex xl:mt-10 flex-col container mx-auto gap-y-3">
        <h1 className="xl:text-6xl text-5xl text-gray-800 tracking-tighter font-bold max-w-2xl">
          {PresidentSect[0]?.title}
        </h1>
        <h2 className="lg:text-3xl text-gray-700 font-semibold">
          {PresidentSect[0]?.subtitle}
        </h2>
        <p className="xl:text-xl tracking-tighter text-justify">
          {PresidentSect[0]?.description}
        </p>
      </div>
    </div>
  );
}

export default HATPresident;
