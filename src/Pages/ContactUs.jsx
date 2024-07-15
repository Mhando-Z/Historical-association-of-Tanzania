import React, { useContext } from "react";
import { Link } from "react-router-dom";
import HomePageContext from "../Context/HomePageContext";
import { BsFacebook } from "react-icons/bs";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaSquareXTwitter } from "react-icons/fa6";

function ContactUs() {
  const { ContactSect } = useContext(HomePageContext);

  return (
    <div className="flex flex-col">
      <div className="mb-1 p-20 flex flex-col justify-center shadow-xl items-center  container mx-auto bg-[#b67a3d] bg-opacity-55 rounded-3xl">
        {/* Get intouch section */}
        <div className="flex flex-col justify-center items-center w-full ">
          <div className="flex flex-col justify-center items-center gap-y-6">
            <h1 className="text-6xl font-extrabold text-gray-800 mb-10">
              Get In Touch
            </h1>
            <div className="flex flex-row justify-between gap-x-10">
              <div className="flex flex-row gap-x-8">
                <input
                  type="text"
                  className="text-xl py-3 px-7 outline-none rounded-3xl placeholder ring-1 ring-black"
                  placeholder="Name"
                />
              </div>
              <div className="flex flex-row gap-x-8">
                <input
                  type="text"
                  className="text-xl py-3 px-7 outline-none rounded-3xl placeholder ring-1 ring-black"
                  placeholder="Email"
                />
              </div>
            </div>
            <div className="flex flex-col w-full">
              <textarea
                cols="30"
                rows="10"
                className="rounded-3xl text-xl px-7 outline-none py-3 ring-1 ring-black"
                placeholder="Message"
              ></textarea>
            </div>
            {/* submit button */}
            <div className="flex justify-end items-end w-full">
              <Link className="px-10 py-2 bg-white text-xl font-bold ring-1 ring-black rounded-3xl">
                Send
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Contact us Sections */}
      <div className="flex container mx-auto mt-20 flex-col">
        <div className="flex gap-x-20 flex-col-reverse justify-between xl:flex-row w-full px-12">
          {/* contact details */}
          <div className="flex flex-col gap-y-10">
            <div className="flex flex-col xl:justify-between justify-center gap-x-10">
              <div className="flex mb-10">
                <h1 className="text-5xl font-black text-[#b67a3d]">
                  Contact Us
                </h1>
              </div>
              <h1 className="text-3xl text-[#b67a3d] font-bold">Phone</h1>
              <div className="flex flex-col">
                <h2 className="text-xl font-semibold">
                  {ContactSect[0]?.phoneNumber1}
                </h2>
                <h2 className="text-xl font-semibold">
                  {ContactSect[0]?.phoneNumber2}
                </h2>
                <h2 className="text-xl font-semibold">
                  {ContactSect[0]?.phoneNumber3}
                </h2>
                <h2 className="text-xl font-semibold">
                  {ContactSect[0]?.phoneNumber4}
                </h2>
              </div>
            </div>
            <div className="flex flex-col xl:justify-between justify-center gap-x-10">
              <h1 className="text-3xl text-[#b67a3d] font-bold">Emails</h1>
              <div className="flex flex-col">
                <Link className="text-xl font-semibold ">
                  {ContactSect[0]?.email1}
                </Link>
                <Link className="text-xl font-semibold ">
                  {ContactSect[0]?.email2}
                </Link>
                <Link className="text-xl font-semibold">
                  {ContactSect[0]?.email3}
                </Link>
              </div>
            </div>
            <div className="flex flex-col xl:justify-between justify-center gap-x-10">
              <h1 className="text-3xl text-[#b67a3d] font-bold">Socials</h1>
              <div className="flex flex-row text-3xl gap-x-10 mt-8">
                <Link to={`${ContactSect[0]?.facebook}`}>
                  <BsFacebook className="text-blue-600" />
                </Link>
                <Link to={`${ContactSect[0]?.instagram}`}>
                  <FaInstagramSquare className="text-orange-600" />
                </Link>
                <Link to={`${ContactSect[0]?.linkedin}`}>
                  <FaLinkedin className="text-blue-600" />
                </Link>
                <Link>
                  <IoLogoWhatsapp className="text-green-600" />
                </Link>
                <Link to={`${ContactSect[0]?.twitter}`}>
                  <FaSquareXTwitter className="" />
                </Link>
              </div>
            </div>
          </div>
          {/*Map section  */}
          <div className="flex mb-10">
            <iframe
              title="Historical association of Tanzania location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d284.54685453461934!2d39.203648745810696!3d-6.780309156601822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x185c4ee6f9138fe9%3A0x85f5c7ce51ff2731!2sHistory%20Department!5e1!3m2!1sen!2stz!4v1719078991742!5m2!1sen!2stz"
              style={{ border: "0" }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              className="flex rounded-3xl xl:w-[800px] xl:h-[600px] md:w-[600px] md:h-[500px]"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
