import { useContext } from "react";
import HomePageContext from "../Context/HomePageContext";
import { motion } from "framer-motion";

export default function Partners() {
  const { companies } = useContext(HomePageContext);

  // image url
  const IMAGE_BASE_URL = "https://hat-dashboard.onrender.com";

  // Fallback UI when there are no reviews
  if (!companies || companies?.length === 0) {
    return <div className="bg-white"></div>;
  }

  return (
    <div className={`mt-20 mb-20 ${companies?.length === 0 ? "hidden" : ""}`}>
      <div className="container flex flex-col mx-auto">
        <h2 className="xl:text-5xl text-3xl md:text-4xl mb-5 md:mb-12 font-black leading-8 text-[#b67a3d]">
          Our Partners
        </h2>
        <div className="relative grid grid-flow-col mt-10 overflow-x-auto overflow-y-hidden gap-x-4">
          {companies?.map((dt) => {
            return (
              <motion.div
                initial={{ opacity: 0, scale: 0, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, type: "spring" }}
                key={dt.id}
                className="relative flex flex-col items-center justify-center w-[10rem] md:w-[20rem] h-full rounded-lg shadow-xl group xl:p-10 lg:p-5 bg-slate-100"
              >
                <img
                  className="object-cover h-auto transition-all duration-500 ease-in max-w-screen lg:h-36 group-hover:scale-75"
                  src={`${IMAGE_BASE_URL}${dt?.image}`}
                  alt={dt.title}
                />
                <div className="absolute hidden items-center justify-center  group-hover:flex top-0 right-0 left-0 bottom-0 bg-gradient-to-t from-[#b67a3d] rounded-lg  via-95% via-transparent to-transparent">
                  <img
                    className="object-cover h-auto transition-all duration-500 ease-in max-w-screen lg:h-36 group-hover:scale-75"
                    src={`${IMAGE_BASE_URL}${dt?.image}`}
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
        </div>
      </div>
    </div>
  );
}
