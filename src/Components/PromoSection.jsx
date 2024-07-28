import { useContext } from "react";
import HomePageContext from "../Context/HomePageContext";
import { Dots } from "react-activity";
import { motion } from "framer-motion";

export default function PromoSect() {
  const { ConferenceSect } = useContext(HomePageContext);
  const { gallerySect } = useContext(HomePageContext);
  return (
    <div className="relative min-h-screen mt-20 overflow-hidden bg-white">
      {ConferenceSect?.length === 0 ? (
        <div className="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center ">
          <Dots color="#b67a3d" size={40} speed={0.7} animating={true} />
        </div>
      ) : (
        <div className="pt-16 pb-80 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
          <div className="relative px-4 mx-auto max-w-7xl sm:static sm:px-6 lg:px-8">
            <div className="sm:max-w-lg ">
              <h1 className="text-4xl text-[#b67a3d] md:max-w-[390px] max-w-[290px] xl:max-w-lg font-black tracking-tight md:text-5xl xl:text-6xl">
                {ConferenceSect[0]?.title}
              </h1>
              <p className="mt-4 text-base text-gray-500 xl:text-lg">
                {ConferenceSect[0]?.description}
              </p>
            </div>
            <div>
              <div className="mt-10">
                {/* Decorative image grid */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                >
                  <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                    <div className="flex items-center space-x-6 lg:space-x-8">
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 overflow-hidden rounded-lg w-44 sm:opacity-0 lg:opacity-100">
                          <img
                            loading="lazy"
                            src={`http://127.0.0.1:8000/${gallerySect[0]?.image}`}
                            alt="Hat conference pictures"
                            className="object-cover object-center w-full h-full"
                          />
                        </div>
                        <div className="h-64 overflow-hidden rounded-lg w-44">
                          <img
                            loading="lazy"
                            src={`http://127.0.0.1:8000/${gallerySect[1]?.image}`}
                            alt="hat conference pictures 1"
                            className="object-cover object-center w-full h-full"
                          />
                        </div>
                      </div>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 overflow-hidden rounded-lg w-44">
                          <img
                            loading="lazy"
                            src={`http://127.0.0.1:8000/${gallerySect[2]?.image}`}
                            alt="Hat conference pictures 2"
                            className="object-cover object-center w-full h-full"
                          />
                        </div>
                        <div className="h-64 overflow-hidden rounded-lg w-44">
                          <img
                            loading="lazy"
                            src={`http://127.0.0.1:8000/${gallerySect[3]?.image}`}
                            alt="Hat conference pictures 3"
                            className="object-cover object-center w-full h-full"
                          />
                        </div>
                        <div className="h-64 overflow-hidden rounded-lg w-44">
                          <img
                            loading="lazy"
                            src={`http://127.0.0.1:8000/${gallerySect[4]?.image}`}
                            alt="Hat conference pictures 4"
                            className="object-cover object-center w-full h-full"
                          />
                        </div>
                      </div>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 overflow-hidden rounded-lg w-44">
                          <img
                            loading="lazy"
                            src={`http://127.0.0.1:8000/${gallerySect[5]?.image}`}
                            alt="Hat conference pictures 5"
                            className="object-cover object-center w-full h-full"
                          />
                        </div>
                        <div className="h-64 overflow-hidden rounded-lg w-44">
                          <img
                            loading="lazy"
                            src={`http://127.0.0.1:8000/${gallerySect[6]?.image}`}
                            alt="Hat conference pictures 6"
                            className="object-cover object-center w-full h-full"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.8 }}
                  transition={{ type: "spring", ease: "easeOut" }}
                  className="inline-block rounded-3xl hover:bg-opacity-0 hover:ring-2 hover:text-black hover:ring-black border border-transparent bg-[#b67a3d] px-5 py-2 text-center font-medium text-white"
                >
                  Register Now
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
