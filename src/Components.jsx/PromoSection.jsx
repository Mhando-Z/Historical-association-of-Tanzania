import { Link } from "react-router-dom";
import { useContext } from "react";
import HomePageContext from "../Context/HomePageContext";

export default function PromoSect() {
  const { ConferenceSect } = useContext(HomePageContext);
  return (
    <div className="relative overflow-hidden mt-20 min-h-screen bg-white">
      <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <div className="sm:max-w-lg">
            <h1 className="text-4xl text-[#b67a3d] font-black tracking-tight sm:text-6xl">
              {ConferenceSect[0]?.title}
            </h1>
            <p className="mt-4 text-xl text-gray-500">
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
                      <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                        <img
                          loading="lazy"
                          src={`http://127.0.0.1:8000/${ConferenceSect[0]?.image}`}
                          alt="Hat conference pictures"
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          loading="lazy"
                          src={`http://127.0.0.1:8000/${ConferenceSect[0]?.image8}`}
                          alt="hat conference pictures 1"
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          loading="lazy"
                          src={`http://127.0.0.1:8000/${ConferenceSect[0]?.image2}`}
                          alt="Hat conference pictures 2"
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          loading="lazy"
                          src={`http://127.0.0.1:8000/${ConferenceSect[0]?.image3}`}
                          alt="Hat conference pictures 3"
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          loading="lazy"
                          src={`http://127.0.0.1:8000/${ConferenceSect[0]?.image4}`}
                          alt="Hat conference pictures 4"
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          loading="lazy"
                          src={`http://127.0.0.1:8000/${ConferenceSect[0]?.image5}`}
                          alt="Hat conference pictures 5"
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          loading="lazy"
                          src={`http://127.0.0.1:8000/${ConferenceSect[0]?.image6}`}
                          alt="Hat conference pictures 6"
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Link
                href="#"
                className="inline-block rounded-3xl hover:bg-opacity-0 hover:ring-2 hover:text-black hover:ring-black border border-transparent bg-[#b67a3d] px-8 py-3 text-center font-medium text-white"
              >
                Register Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
