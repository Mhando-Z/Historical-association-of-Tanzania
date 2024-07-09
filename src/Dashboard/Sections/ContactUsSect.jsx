import React, { useContext, useState } from "react";
import HomePageContext from "../../Context/HomePageContext";
import { motion } from "framer-motion";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdSocialDistance } from "react-icons/md";
import { FaAddressCard } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function ContactUsSect() {
  const { ContactSect } = useContext(HomePageContext);
  const [editContacts, setEdit] = useState(true);

  const handleEdit = () => {
    setEdit(!editContacts);
  };

  return (
    <div className="px-10 flex flex-col">
      {editContacts ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex flex-col mt-24 bg-slate-200 rounded-3xl"
        >
          <div className="p-10">
            <h1 className="xl:text-2xl font-bold text-gray-900">
              CONTACT DETAILS
            </h1>
            <div className="border-b-2 border-gray-300 mt-5 mb-5"></div>
            <div className="flex flex-col space-x-10">
              {/* Emails Section */}
              <div className="flex mt-5 flex-row items-center gap-x-2">
                <MdEmail className="text-3xl" />
                <h1 className="xl:text-xl font-bold"> Emails</h1>
              </div>
              <h1>{ContactSect[0]?.email1}</h1>
              <h1>{ContactSect[0]?.email2}</h1>
              <h1>{ContactSect[0]?.email3}</h1>
            </div>
            <div className="flex flex-col space-x-10">
              {/* Phone Numbers Section */}
              <div className="flex mt-10 flex-row items-center gap-x-4">
                <FaPhoneVolume className="text-xl" />
                <h1 className="xl:text-xl font-bold"> Phone Numbers</h1>
              </div>
              <h1>{ContactSect[0]?.phoneNumber1}</h1>
              <h1>{ContactSect[0]?.phoneNumber2}</h1>
              <h1>{ContactSect[0]?.phoneNumber3}</h1>
              <h1>{ContactSect[0]?.phoneNumber4}</h1>
            </div>
            <div className="flex flex-col space-x-10">
              {/* Social media Section */}
              <div className="flex mt-10 flex-row items-center gap-x-2">
                <MdSocialDistance className="text-3xl" />
                <h1 className="xl:text-xl font-bold">Social Media </h1>
              </div>
              <h1>{ContactSect[0]?.facebook}</h1>
              <h1>{ContactSect[0]?.instagram}</h1>
              <h1>{ContactSect[0]?.linkedin}</h1>
              <h1>{ContactSect[0]?.twitter}</h1>
            </div>
            <div className="flex flex-col space-x-10">
              {/* Address Section */}
              <div className="flex mt-10 flex-row items-center gap-x-2">
                <FaAddressCard className="text-3xl" />
                <h1 className="xl:text-xl font-bold">Address Section</h1>
              </div>
              <h1>{ContactSect[0]?.location}</h1>
              <h1>{ContactSect[0]?.physicalAdress}</h1>
              <h1>{ContactSect[0]?.postcode}</h1>
            </div>
            <div className="flex flex-col w-full">
              <div className="flex mt-10 flex-col justify-end items-end">
                <motion.button
                  onClick={handleEdit}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.8 }}
                  transition={{ type: "spring", ease: "easeOut" }}
                  className="px-7 py-2 bg-[#b67a3d] text-white rounded-3xl"
                >
                  Edit
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="bg-slate-100 p-10 rounded-3xl"
        >
          <form>
            <div className="space-y-12 mt-16">
              <div className="pb-12">
                <h2 className="text-base xl:text-2xl font-bold leading-7 text-gray-900">
                  Contacts Section
                </h2>
                <p className="mt-1 text-sm leading-6 text-gray-600">
                  Perfom CRUD to this section
                </p>
                <div className="mt-10 mb-5 border-b-2 border-slate-300"></div>
                <div className="flex mt-10 flex-row items-center gap-x-5">
                  <MdEmail className="text-3xl" />
                  <h1 className="xl:text-xl font-bold"> Emails Section</h1>
                </div>
                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  {/* Emails Section */}
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="first-name"
                      className="block  xl:text-lg text-sm font-medium leading-6 text-gray-900"
                    >
                      Email1
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="first-name"
                        id="first-name"
                        defaultValue={ContactSect[0]?.email1}
                        autoComplete="given-name"
                        className="block w-full rounded-2xl border-0 py-2 px-2 outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#b67a3d] sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="first-name"
                      className="block xl:text-lg text-sm font-medium leading-6 text-gray-900"
                    >
                      Email2
                    </label>
                    <div className="mt-2">
                      <input
                        defaultValue={ContactSect[0]?.email2}
                        type="text"
                        name="first-name"
                        id="first-name"
                        autoComplete="given-name"
                        className="block w-full rounded-2xl border-0 py-2 px-2 outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#b67a3d] sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="first-name"
                      className="block xl:text-lg text-sm font-medium leading-6 text-gray-900"
                    >
                      Email3
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="first-name"
                        defaultValue={ContactSect[0]?.email3}
                        id="first-name"
                        autoComplete="given-name"
                        className="block w-full rounded-2xl border-0 py-2 px-2 outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#b67a3d] sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-10 mb-5 border-b-2 border-slate-300"></div>
                <div className="flex mt-10 flex-row items-center gap-x-5">
                  <FaPhoneVolume className="text-xl" />
                  <h1 className="xl:text-xl font-bold">
                    Phone Numbers Section
                  </h1>
                </div>
                <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  {/* Phone Numbers Section */}
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="first-name"
                      className="block xl:text-lg text-sm font-medium leading-6 text-gray-900"
                    >
                      Phone Number1
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="first-name"
                        defaultValue={ContactSect[0]?.phoneNumber1}
                        id="first-name"
                        autoComplete="given-name"
                        className="block w-full rounded-2xl border-0 py-2 px-2 outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#b67a3d] sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="first-name"
                      className="block xl:text-lg text-sm font-medium leading-6 text-gray-900"
                    >
                      Phone Number2
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        defaultValue={ContactSect[0]?.phoneNumber2}
                        name="first-name"
                        id="first-name"
                        autoComplete="given-name"
                        className="block w-full rounded-2xl border-0 py-2 px-2 outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#b67a3d] sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="first-name"
                      className="block xl:text-lg text-sm font-medium leading-6 text-gray-900"
                    >
                      Phone Number3
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        defaultValue={ContactSect[0]?.phoneNumber3}
                        name="first-name"
                        id="first-name"
                        autoComplete="given-name"
                        className="block w-full rounded-2xl border-0 py-2 px-2 outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#b67a3d] sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="first-name"
                      className="block xl:text-lg text-sm font-medium leading-6 text-gray-900"
                    >
                      Phone Number4
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="first-name"
                        defaultValue={ContactSect[0]?.phoneNumber4}
                        id="first-name"
                        autoComplete="given-name"
                        className="block w-full rounded-2xl border-0 py-2 px-2 outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#b67a3d] sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-10 mb-5 border-b-2 border-slate-300"></div>
                <div className="flex mt-10 items-center gap-x-5 flex-row">
                  <MdSocialDistance className="text-3xl" />
                  <h1 className="xl:text-xl font-bold">Social Media Section</h1>
                </div>
                <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  {/* Social Media Section */}
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="first-name"
                      className="block xl:text-lg text-sm font-medium leading-6 text-gray-900"
                    >
                      Instagram
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="first-name"
                        defaultValue={ContactSect[0]?.instagram}
                        id="first-name"
                        autoComplete="given-name"
                        className="block w-full rounded-2xl border-0 py-2 px-2 outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#b67a3d] sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="first-name"
                      className="block xl:text-lg text-sm font-medium leading-6 text-gray-900"
                    >
                      Facebook
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="first-name"
                        defaultValue={ContactSect[0]?.facebook}
                        id="first-name"
                        autoComplete="given-name"
                        className="block w-full rounded-2xl border-0 py-2 px-2 outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#b67a3d] sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="first-name"
                      className="block xl:text-lg text-sm font-medium leading-6 text-gray-900"
                    >
                      Linkedin
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="first-name"
                        id="first-name"
                        defaultValue={ContactSect[0]?.linkedin}
                        autoComplete="given-name"
                        className="block w-full rounded-2xl border-0 py-2 px-2 outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#b67a3d] sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="first-name"
                      className="block xl:text-lg text-sm font-medium leading-6 text-gray-900"
                    >
                      Twitter
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        defaultValue={ContactSect[0]?.twitter}
                        name="first-name"
                        id="first-name"
                        autoComplete="given-name"
                        className="block w-full rounded-2xl border-0 py-2 px-2 outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#b67a3d] sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-10 mb-5 border-b-2 border-slate-300"></div>
                <div className="flex mt-10 flex-row items-center gap-x-5">
                  <FaAddressCard className="text-3xl" />
                  <h1 className="xl:text-xl font-bold">Address Section</h1>
                </div>
                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  {/* Address section */}
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="first-name"
                      className="block xl:text-lg text-sm font-medium leading-6 text-gray-900"
                    >
                      Pysical Address
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="first-name"
                        defaultValue={ContactSect[0]?.physicalAdress}
                        id="first-name"
                        autoComplete="given-name"
                        className="block w-full rounded-2xl border-0 py-2 px-2 outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#b67a3d] sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="first-name"
                      className="block xl:text-lg text-sm font-medium leading-6 text-gray-900"
                    >
                      Location
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="first-name"
                        defaultValue={ContactSect[0]?.location}
                        id="first-name"
                        autoComplete="given-name"
                        className="block w-full rounded-2xl border-0 py-2 px-2 outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#b67a3d] sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="first-name"
                      className="block xl:text-lg text-sm font-medium leading-6 text-gray-900"
                    >
                      PostalCode
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="first-name"
                        defaultValue={ContactSect[0]?.postcode}
                        id="first-name"
                        autoComplete="given-name"
                        className="block w-full rounded-2xl border-0 py-2 px-2 outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#b67a3d] sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex mt-10 flex-row gap-x-5 justify-end items-end">
              <motion.button
                onClick={handleEdit}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.8 }}
                transition={{ type: "spring", ease: "easeOut" }}
                className="px-7 py-2 bg-[#b67a3d] text-white rounded-3xl"
              >
                cancel
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.8 }}
                transition={{ type: "spring", ease: "easeOut" }}
                className="px-7 py-2 bg-[#b67a3d] text-white rounded-3xl"
              >
                Add
              </motion.button>
            </div>
          </form>
        </motion.div>
      )}
    </div>
  );
}

export default ContactUsSect;
