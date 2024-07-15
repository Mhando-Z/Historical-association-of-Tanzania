import { useContext } from "react";
import HomePageContext from "../Context/HomePageContext";

export default function Partners() {
  const { companies } = useContext(HomePageContext);
  return (
    <div className="mt-20 mb-20">
      <div className="flex container mx-auto flex-col">
        <h2 className="xl:text-6xl md:text-5xl text-4xl mb-12 font-bold leading-8 text-[#b67a3d]">
          Our Partners
        </h2>
        <div className="mt-10 grid  grid-cols-4 items-center justify-center gap-x-8 gap-y-10 sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          {companies?.map((dt) => {
            return (
              <div
                key={dt.id}
                className="flex flex-col rounded-lg shadow-xl group xl:p-10 lg:p-5 bg-slate-100 relative items-center justify-center"
              >
                <img
                  className="max-w-screen lg:h-36 h-auto object-contain group-hover:scale-75 transition-all duration-500 ease-in"
                  src={`http://127.0.0.1:8000/${dt?.image}`}
                  alt={dt.title}
                />
                <div className="absolute hidden group-hover:flex top-0 right-0 left-0 bottom-0 bg-gradient-to-t from-[#b67a3d]  via-70% via-transparent to-transparent"></div>
                <h1 className="font-black uppercase text-white transition-all ease-out xl:text-xl group text-center hidden max-w-[200px] group-hover:flex absolute bottom-4 mt-2">
                  {dt?.title}
                </h1>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
