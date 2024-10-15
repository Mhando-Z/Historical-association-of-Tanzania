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
  const currentYear = new Date().getFullYear();

  return (
    <div className="flex flex-col min-h-screen isolate overflow-hidden bg-[#b67a3d] bg-opacity-95  py-16 sm:py-24 lg:py-32">
      <div className="px-4 mx-auto max-w-7xl">
        <div className="grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          <div className="max-w-xl lg:max-w-lg">
            <h2 className="text-3xl font-bold tracking-tight text-white font-roboto sm:text-4xl">
              Stay Updated! Subscribe to Our Newsletter
            </h2>
            <p className="mt-4 font-semibold leading-6 text-white">
              Be the first to know about our latest updates, events, and
              exclusive insights. Join our community today and never miss out on
              the exciting developments from the Historical Association of
              Tanzania!
            </p>

            <div className="flex max-w-md mt-6 gap-x-4">
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
              <div className="p-2 rounded-md bg-white/5 ring-1 ring-white">
                <CalendarDaysIcon
                  className="w-6 h-6 text-white"
                  aria-hidden="true"
                />
              </div>
              <dt className="mt-4 font-semibold text-white">Weekly Articles</dt>
              <dd className="mt-2 leading-6 text-white">
                Stay informed with our carefully curated weekly articles.
                Explore in-depth insights, research findings, and
                thought-provoking discussions on Tanzania's history and cultural
                heritage. Delivered right to your inbox!
              </dd>
            </div>
            <div className="flex flex-col items-start">
              <div className="p-2 rounded-md bg-white/5 ring-1 ring-white">
                <HandRaisedIcon
                  className="w-6 h-6 text-white"
                  aria-hidden="true"
                />
              </div>
              <dt className="mt-4 font-semibold text-white">
                No Spam, Only Value
              </dt>
              <dd className="mt-2 leading-7 text-white">
                We respect your inbox! Expect only valuable content and updates
                relevant to your interests. No spam, just quality insights and
                information.
              </dd>
            </div>
          </dl>
        </div>
      </div>

      {/* FOOTER SECTION*/}
      <div className="container flex flex-col mx-auto border-b border-white mt-14"></div>
      <div className="flex flex-col mt-12 md:container md:mx-auto ">
        <div className="flex flex-col justify-between w-full gap-x-10 gap-y-4 md:flex-row">
          {/* Logo */}
          <div>
            <img
              src={logo}
              alt="hat-logo"
              className="md:h-10 h-auto w-[100px]"
            />
          </div>

          {/* Socials */}
          <div className="flex flex-col">
            <div className="flex flex-row text-2xl text-gray-300 gap-x-10">
              <Link
                className="p-2 rounded-full ring-1 ring-white"
                to={`${footerSect[0]?.contacts.facebook}`}
              >
                <BsFacebook />
              </Link>
              <Link
                className="p-2 rounded-full ring-1 ring-white"
                to={`${footerSect[0]?.contacts.instagram}`}
              >
                <FaInstagramSquare />
              </Link>
              <Link
                className="p-2 rounded-full ring-1 ring-white"
                to={`${footerSect[0]?.contacts.linkedin}`}
              >
                <FaLinkedin />
              </Link>
              <Link className="p-2 rounded-full ring-1 ring-white">
                <IoLogoWhatsapp />
              </Link>
              <Link
                className="p-2 rounded-full ring-1 ring-white"
                to={`${footerSect[0]?.contacts.twitter}`}
              >
                <FaSquareXTwitter />
              </Link>
            </div>
          </div>

          {/* Contacts section */}
          <div className="flex flex-col gap-y-4">
            {/* Emails section */}
            <div className="flex flex-col gap-x-4 md:flex-row">
              <h1 className="font-medium text-white md:text-xl">Emails</h1>
              <div className="flex flex-col gap-y-2">
                <h1 className="text-white ">
                  {footerSect[0]?.contacts.email1}
                </h1>
                <h1 className="text-white ">
                  {footerSect[0]?.contacts.email2}
                </h1>
                <h1 className="text-white ">
                  {footerSect[0]?.contacts.email3}
                </h1>
              </div>
            </div>
            {/* Contacts section */}
            <div className="flex flex-col gap-x-4 md:flex-row">
              <h1 className="font-medium text-white md:text-xl">Phone</h1>
              <div className="flex flex-col gap-y-2">
                <h1 className="text-white">
                  {footerSect[0]?.contacts.phoneNumber1}
                </h1>
                <h1 className="text-white ">
                  {footerSect[0]?.contacts.phoneNumber2}
                </h1>
                <h1 className="text-white ">
                  {footerSect[0]?.contacts.phoneNumber3}
                </h1>
              </div>
            </div>
            {/* <div className="flex flex-col gap-x-4 md:flex-row">
              <h1 className="font-medium text-white md:text-xl">Location</h1>
              <div className="flex flex-col gap-y-2">
                <h1 className="text-white">
                  {footerSect[0]?.contacts.location}
                </h1>
              </div>
            </div> */}
          </div>
        </div>
      </div>
      {/* TERMS CONDITION AND POLICIES SECTION */}
      <div className="container flex flex-col items-center justify-center flex-1 gap-5 mx-auto mt-10 md:flex-row md:flex gap-y-4">
        <div className="flex flex-col">
          <h1 className="text-xl font-medium text-white">Policies</h1>
          <div className="flex flex-col mt-2 gap-y-3">
            <h1 className="max-w-4xl text-white line-clamp-1 md:line-clamp-none ">
              <span className="mr-2">(1)</span>
              {footerSect[0]?.policies?.policy1}
            </h1>
            <h1 className="max-w-4xl text-white line-clamp-1 md:line-clamp-none">
              <span className="mr-2">(2)</span>
              {footerSect[0]?.policies?.policy2}
            </h1>
            <h1 className="max-w-4xl text-white line-clamp-1 md:line-clamp-none">
              <span className="mr-2">(3)</span>
              {footerSect[0]?.policies?.policy3}
            </h1>
            <h1 className="max-w-4xl text-white line-clamp-1 md:line-clamp-none">
              <span className="mr-2">(4)</span>
              {footerSect[0]?.policies?.policy4}
            </h1>
            <h1 className="max-w-4xl text-white line-clamp-1 md:line-clamp-none">
              <span className="mr-2">(5)</span>
              {footerSect[0]?.policies?.policy5}
            </h1>
          </div>
        </div>
        <div className="flex flex-col">
          <h1 className="text-xl font-medium text-white">Terms of Service</h1>
          <div className="flex flex-col mt-2 gap-y-3">
            <h1 className="max-w-4xl text-white line-clamp-1 md:line-clamp-none">
              <span className="mr-2">(1)</span>
              {footerSect[0]?.termsofService.term1}
            </h1>
            <h1 className="max-w-4xl text-white line-clamp-1 md:line-clamp-none">
              <span className="mr-2">(2)</span>
              {footerSect[0]?.termsofService.term2}
            </h1>
            <h1 className="max-w-4xl text-white line-clamp-1 md:line-clamp-none">
              <span className="mr-2">(3)</span>
              {footerSect[0]?.termsofService.term3}
            </h1>
            <h1 className="max-w-4xl text-white line-clamp-1 md:line-clamp-none">
              <span className="mr-2">(4)</span>
              {footerSect[0]?.termsofService.term4}
            </h1>
            <h1 className="max-w-4xl text-white line-clamp-1 md:line-clamp-none">
              <span className="mr-2">(5)</span>
              {footerSect[0]?.termsofService.term5}
            </h1>
          </div>
        </div>
      </div>
      <div className="container flex flex-col mx-auto border-b border-white mt-14"></div>
      {/* year declaration */}
      <div className="px-4 mt-5 mb-10 text-center">
        <p className="text-gray-50">
          &copy; {currentYear} The Historical Association of Tanzania, Inc. All
          rights reserved.
        </p>
      </div>
    </div>
  );
}
