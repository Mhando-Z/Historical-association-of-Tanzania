import { CalendarDaysIcon, HandRaisedIcon } from "@heroicons/react/24/outline";
import { useContext } from "react";
import HomePageContext from "../Context/HomePageContext";
import logo from "../Assets/Images/logo2.png";
import { Link } from "react-router-dom";
import { BsFacebook } from "react-icons/bs";
import { FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaSquareXTwitter } from "react-icons/fa6";

export default function NewsLetter() {
  const { footerSect } = useContext(HomePageContext);
  console.log(footerSect);
  return (
    <div className="relative isolate overflow-hidden bg-[#b67a3d] opacity-95 py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          <div className="max-w-xl lg:max-w-lg">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Subscribe to our newsletter.
            </h2>
            <p className="mt-4 text-lg leading-8 text-white font-semibold">
              Nostrud amet eu ullamco nisi aute in ad minim nostrud adipisicing
              velit quis. Duis tempor incididunt dolore.
            </p>
            <div className="mt-6 flex max-w-md gap-x-4">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="min-w-0 flex-auto rounded-md border-0 outline-none ring-white bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                placeholder="Enter your email"
              />
              <button
                type="submit"
                className="flex-none hover:bg-opacity-0 hover:ring-2 text-black hover:ring-white  bg-white rounded-3xl px-3.5 py-2.5 text-sm font-bold hover:text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                Subscribe
              </button>
            </div>
          </div>
          <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
            <div className="flex flex-col items-start">
              <div className="rounded-md bg-white/5 p-2 ring-1 ring-white">
                <CalendarDaysIcon
                  className="h-6 w-6 text-white"
                  aria-hidden="true"
                />
              </div>
              <dt className="mt-4 font-semibold text-white">Weekly articles</dt>
              <dd className="mt-2 leading-7 text-white">
                Non laboris consequat cupidatat laborum magna. Eiusmod non irure
                cupidatat duis commodo amet.
              </dd>
            </div>
            <div className="flex flex-col items-start">
              <div className="rounded-md bg-white/5 p-2 ring-1 ring-white">
                <HandRaisedIcon
                  className="h-6 w-6 text-white"
                  aria-hidden="true"
                />
              </div>
              <dt className="mt-4 font-semibold text-white">No spam</dt>
              <dd className="mt-2 leading-7 text-white">
                Officia excepteur ullamco ut sint duis proident non adipisicing.
                Voluptate incididunt anim.
              </dd>
            </div>
          </dl>
        </div>
      </div>
      <div
        className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6"
        aria-hidden="true"
      >
        <div
          className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      {/* FOOTER SECTION*/}
      <div className="flex flex-col container mx-auto border-b border-white mt-14"></div>
      <div className="flex mt-12 flex-col container mx-auto">
        <div className="flex flex-col gap-x-10 gap-y-4 md:flex-row w-full justify-between">
          {/* Logo */}
          <div>
            <img
              src={logo}
              alt="hat-logo"
              className="md:h-10 h-auto w-[100px]"
            />
          </div>

          {/* TERMS CONDITION AND POLICIES SECTION */}
          <div className="flex flex-col gap-y-4 flex-1 justify-center items-center">
            <div className="flex flex-col">
              <h1 className="text-xl text-white font-medium">Policies</h1>
              <h1 className="text-white line-clamp-1 max-w-xl">
                {footerSect[0]?.policies.policy1}
              </h1>
              <h1 className="text-white line-clamp-1 max-w-xl">
                {footerSect[0]?.policies.policy2}
              </h1>
              <h1 className="text-white line-clamp-1 max-w-xl">
                {footerSect[0]?.policies.policy3}
              </h1>
              <h1 className="text-white line-clamp-1 max-w-xl">
                {footerSect[0]?.policies.policy4}
              </h1>
            </div>
            <div className="flex flex-col">
              <h1 className="text-xl text-white font-medium">
                Terms of Service
              </h1>
              <h1 className="text-white line-clamp-1 max-w-xl">
                {footerSect[0]?.termsofService.term1}
              </h1>
              <h1 className="text-white line-clamp-1 max-w-xl">
                {footerSect[0]?.termsofService.term2}
              </h1>
              <h1 className="text-white line-clamp-1 max-w-xl">
                {footerSect[0]?.termsofService.term3}
              </h1>
              <h1 className="text-white line-clamp-1 max-w-xl">
                {footerSect[0]?.termsofService.term4}
              </h1>
            </div>
          </div>
          {/* Contacts section */}
          <div className="flex flex-col gap-y-4">
            {/* Emails section */}
            <div className="flex flex-col gap-x-4 md:flex-row">
              <h1 className="md:text-xl text-white font-medium">Emails</h1>
              <div className="flex flex-col gap-y-2">
                <h1 className="text-xl text-white">
                  {footerSect[0]?.contacts.email1}
                </h1>
                <h1 className="text-xl text-white">
                  {footerSect[0]?.contacts.email2}
                </h1>
                <h1 className="text-xl text-white">
                  {footerSect[0]?.contacts.email3}
                </h1>
              </div>
            </div>
            {/* Contacts section */}
            <div className="flex flex-col gap-x-4 md:flex-row">
              <h1 className="md:text-xl text-white font-medium">Phone</h1>
              <div className="flex flex-col gap-y-2">
                <h1 className="text-xl text-white">
                  {footerSect[0]?.contacts.phoneNumber1}
                </h1>
                <h1 className="text-xl text-white">
                  {footerSect[0]?.contacts.phoneNumber2}
                </h1>
                <h1 className="text-xl text-white">
                  {footerSect[0]?.contacts.phoneNumber3}
                </h1>
              </div>
            </div>
            <div className="flex flex-col gap-x-4 md:flex-row">
              <h1 className="md:text-xl text-white font-medium">Location</h1>
              <div className="flex flex-col gap-y-2">
                <h1 className="text-xl text-white">
                  {footerSect[0]?.contacts.location}
                </h1>
              </div>
            </div>
          </div>
        </div>
        {/* Socials */}
        <div className="flex mt-5 flex-col justify-center items-center">
          <div className="flex flex-row text-gray-300 text-2xl gap-x-10 mt-8">
            <Link
              className="ring-1 p-2 ring-white rounded-full"
              to={`${footerSect[0]?.contacts.facebook}`}
            >
              <BsFacebook />
            </Link>
            <Link
              className="ring-1 p-2 ring-white rounded-full"
              to={`${footerSect[0]?.contacts.instagram}`}
            >
              <FaInstagramSquare />
            </Link>
            <Link
              className="ring-1 p-2 ring-white rounded-full"
              to={`${footerSect[0]?.contacts.linkedin}`}
            >
              <FaLinkedin />
            </Link>
            <Link className="ring-1 p-2 ring-white rounded-full">
              <IoLogoWhatsapp />
            </Link>
            <Link
              className="ring-1 p-2 ring-white rounded-full"
              to={`${footerSect[0]?.contacts.twitter}`}
            >
              <FaSquareXTwitter />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
