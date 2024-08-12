import React, { useContext } from "react";
import { Link } from "react-router-dom";
import HomePageContext from "../Context/HomePageContext";
import { BsFacebook } from "react-icons/bs";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaSquareXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";

function ContactUs() {
  const { ContactSect } = useContext(HomePageContext);

  return (
    <div className="flex flex-col">
      <div className="container flex flex-col items-center justify-center px-6 py-10 mx-auto mb-1 bg-gray-200 shadow-2xl md:p-20 sm:rounded-xl">
        {/* Get intouch section */}
        <div className="flex flex-col items-center justify-center w-full ">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.3 }}
            className="flex flex-col items-center justify-center gap-y-6"
          >
            <h1 className="text-4xl font-extrabold text-purple-900 md:mb-10 xl:text-6xl lg:text-5xl">
              Get In Touch
            </h1>
            <div className="flex flex-col justify-between w-full gap-y-3 md:flex-row gap-x-10">
              <motion.div
                whileInView={{ opacity: 1, x: [0, -20, 20, 0] }}
                transition={{ duration: 1.3, delay: 1.5 }}
                className="flex flex-row gap-x-8"
              >
                <input
                  type="text"
                  className="w-full py-2 md:py-3 text-base shadow-xl ring-[#b67a3d]  outline-none xl:text-xl focus:bg-blue-50 px-7 rounded-3xl placeholder ring-1"
                  placeholder="Name"
                />
              </motion.div>
              <motion.div
                whileInView={{ opacity: 1, x: [0, 20, -20, 0] }}
                transition={{ duration: 1.3, delay: 1.5 }}
                className="flex flex-row gap-x-8"
              >
                <input
                  type="text"
                  className="w-full py-2 md:py-3 text-base shadow-xl ring-[#b67a3d]  outline-none xl:text-xl focus:bg-blue-50 px-7 rounded-3xl placeholder ring-1"
                  placeholder="Email"
                />
              </motion.div>
            </div>
            <div className="flex flex-col w-full">
              <textarea
                cols="30"
                rows="8"
                className="text-base shadow-xl ring-[#b67a3d]  outline-none py-7 focus:bg-blue-50 xl:text-xl rounded-3xl px-7 ring-1"
                placeholder="Message"
              ></textarea>
            </div>
            {/* submit button */}
            <div className="flex items-end justify-end w-full">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.8 }}
                transition={{ type: "spring", ease: "easeOut" }}
                className="px-6 py-2 font-bold bg-white xl:text-lg ring-1 ring-black rounded-3xl"
              >
                Send
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
      {/* Contact us Sections */}
      <div className="container flex flex-col mx-auto mt-20">
        <div className="flex flex-col-reverse justify-between w-full gap-x-20 xl:flex-row">
          {/* contact details */}
          <div className="flex flex-col gap-y-10">
            <div className="flex mb-3">
              <h1 className="xl:text-5xl lg:text-4xl text-3xl font-black text-[#b67a3d]">
                Contact Us
              </h1>
            </div>
            <div className="flex flex-row items-center justify-between px-6 md:px-0 md:items-start xl:flex-col md: gap-y-5">
              <div className="flex flex-col justify-center xl:justify-between gap-x-10">
                <h1 className="text-2xl font-bold text-purple-900">Phone</h1>
                <div className="flex flex-col mt-2 text-sm md:text-base xl:text-lg">
                  <h5 className="font-semibold">
                    {ContactSect[0]?.phoneNumber1}
                  </h5>
                  <h5 className="font-semibold">
                    {ContactSect[0]?.phoneNumber2}
                  </h5>
                  <h5 className="font-semibold">
                    {ContactSect[0]?.phoneNumber3}
                  </h5>
                  <h5 className="font-semibold">
                    {ContactSect[0]?.phoneNumber4}
                  </h5>
                </div>
              </div>
              <div className="flex flex-col justify-center px-6 md:px-0 xl:justify-between gap-x-10">
                <h1 className="text-2xl font-bold text-purple-900">Emails</h1>
                <div className="flex flex-col mt-1 md:text-base xl:text-lg">
                  <Link className="font-semibold ">
                    {ContactSect[0]?.email1}
                  </Link>
                  <Link className="font-semibold ">
                    {ContactSect[0]?.email2}
                  </Link>
                  <Link className="font-semibold">
                    {ContactSect[0]?.email3}
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center px-6 md:px-0 xl:justify-between gap-x-10">
              <h1 className="text-2xl font-bold text-purple-900">Socials</h1>
              <div className="flex flex-row mt-8 text-3xl gap-x-10">
                <Link to={`${ContactSect[0]?.facebook}`}>
                  <BsFacebook className="text-blue-600 duration-1000 animate-bounce" />
                </Link>
                <Link to={`${ContactSect[0]?.instagram}`}>
                  <FaInstagramSquare className="text-orange-600 duration-1000 animate-bounce" />
                </Link>
                <Link to={`${ContactSect[0]?.linkedin}`}>
                  <FaLinkedin className="text-blue-600 duration-1000 animate-bounce" />
                </Link>
                <Link>
                  <IoLogoWhatsapp className="text-green-600 duration-1000 animate-bounce" />
                </Link>
                <Link to={`${ContactSect[0]?.twitter}`}>
                  <FaSquareXTwitter className="duration-1000 animate-bounce" />
                </Link>
              </div>
            </div>
          </div>
          {/*Map section  */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, type: "spring" }}
            className="flex mb-10"
          >
            <iframe
              title="Historical association of Tanzania location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d284.54685453461934!2d39.203648745810696!3d-6.780309156601822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x185c4ee6f9138fe9%3A0x85f5c7ce51ff2731!2sHistory%20Department!5e1!3m2!1sen!2stz!4v1719078991742!5m2!1sen!2stz"
              style={{ border: "0" }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              className="flex rounded-xl  w-screen xl:h-[600px] h-[350px] xl:w-[900px] md:h-[500px]"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
