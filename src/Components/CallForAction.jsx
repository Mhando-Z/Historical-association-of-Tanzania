import { Link } from "react-router-dom";
import mage from "../Assets/Images/8.jpg";

export default function CallForAction() {
  return (
    <div className="bg-white mt-14">
      <div className="container flex mx-auto">
        <div className="relative w-full isolate overflow-hidden shadow-xl bg-[#b67a3d] opacity-95 px-6 pt-16 sm:rounded-lg sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
          <svg
            viewBox="0 0 1024 1024"
            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
            aria-hidden="true"
          >
            <circle
              cx={512}
              cy={512}
              r={512}
              fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
              fillOpacity="0.7"
            />
            <defs>
              <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                <stop stopColor="#7775D6" />
                <stop offset={1} stopColor="#E935C1" />
              </radialGradient>
            </defs>
          </svg>
          <div className="max-w-md mx-auto text-left lg:mx-0 lg:flex-auto lg:py-32">
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Boost your expertise and network with like-minded professionals.
              <br />
              <br />
              Join Us today and enjoy exclusive access to resources, events, and
              more.
            </h2>
            <p className="mt-6 text-lg font-medium leading-8 text-white">
              Join our vibrant community of professionals and enthusiasts in
              home automation. Enjoy exclusive access to resources, networking
              opportunities, and more.
            </p>
            <div className="flex items-center justify-start mt-10 gap-x-6">
              <Link
                to={"/Register/"}
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-medium text-black"
              >
                Join Now
              </Link>
              <Link
                to={"/AboutUs/"}
                className="text-sm font-semibold leading-6 text-white"
              >
                Learn more <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
          <div className="relative mt-16 h-80 lg:mt-8">
            <img
              className="absolute left-0 top-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
              src={mage}
              alt="App screenshot"
              width={1824}
              height={1080}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
