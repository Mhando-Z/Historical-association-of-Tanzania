import { useContext } from "react";
import HomePageContext from "../Context/HomePageContext";
import { Dots } from "react-activity";
import { motion } from "framer-motion";

export default function Partners() {
  const { companies } = useContext(HomePageContext);
  return (
    <div className="mt-20 mb-20">
      <div className="container flex flex-col mx-auto">
        <h2 className="xl:text-6xl  text-4xl mb-5 md:mb-12 font-black leading-8 text-[#b67a3d]">
          Our Partners
        </h2>
        <div className="relative grid items-center justify-center grid-cols-2 mt-10 md:grid-cols-4 gap-x-8 gap-y-10 sm:grid-cols-3 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          {companies?.map((dt) => {
            return (
              <motion.div
                initial={{ opacity: 0, scale: 0, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, type: "spring" }}
                key={dt.id}
                className="relative flex flex-col items-center justify-center h-full rounded-lg shadow-xl group xl:p-10 lg:p-5 bg-slate-100"
              >
                <img
                  className="object-cover h-auto transition-all duration-500 ease-in max-w-screen lg:h-36 group-hover:scale-75"
                  src={`http://127.0.0.1:8000/${dt?.image}`}
                  alt={dt.title}
                />
                <div className="absolute hidden items-center justify-center  group-hover:flex top-0 right-0 left-0 bottom-0 bg-gradient-to-t from-black rounded-lg  via-95% via-transparent to-transparent">
                  <img
                    className="object-cover h-auto transition-all duration-500 ease-in max-w-screen lg:h-36 group-hover:scale-75"
                    src={`http://127.0.0.1:8000/${dt?.image}`}
                    alt={dt.title}
                  />
                </div>
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    type: "spring",
                    ease: "easeOut",
                    duration: "0.4",
                  }}
                  className="font-black uppercase text-white transition-all ease-out xl:text-xl group text-center hidden max-w-[200px] group-hover:flex absolute bottom-4 mt-2"
                >
                  {dt?.title}
                </motion.h1>
              </motion.div>
            );
          })}
          {companies?.length === 0 ? (
            <div className="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center ">
              <Dots color="#b67a3d" size={40} speed={0.7} animating={true} />
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}
