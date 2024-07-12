import React, { useContext, useEffect, useState } from "react";
import HomePageContext from "../../Context/HomePageContext";
import { motion } from "framer-motion";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdSocialDistance } from "react-icons/md";
import { FaAddressCard } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import axios from "axios";

function ContactUsSect() {
  const { ContactSect, setContacts } = useContext(HomePageContext);
  const [editContacts, setEdit] = useState(true);
  const dataId = ContactSect;
  //
  const [contactsData, setData] = useState({
    location: "",
    postcode: "",
    physicalAdress: "",
    facebook: "",
    instagram: "",
    linkedin: "",
    twitter: "",
    email1: "",
    email2: "",
    email3: "",
    phoneNumber1: "",
    phoneNumber2: "",
    phoneNumber3: "",
    phoneNumber4: "",
  });

  // page state update
  useEffect(() => {
    if (dataId) {
      const data = dataId.find((dt) => dt.id === dataId);
      if (data) {
        setData({
          location: data.location,
          postcode: data.postcode,
          physicalAdress: data.physicalAdress,
          facebook: data.facebook,
          instagram: data.instagram,
          linkedin: data.twitter,
          twitter: data.twitter,
          email1: data.email1,
          email2: data.email2,
          email3: data.email3,
          phoneNumber1: data.phoneNumber1,
          phoneNumber2: data.phoneNumber2,
          phoneNumber3: data.phoneNumber3,
          phoneNumber4: data.phoneNumber4,
        });
      }
    }
  }, [dataId]);

  // handle CHange
  const handleChange = (e) => {
    const { name, value } = e.target;

    setData((data) => {
      return { ...data, [name]: value };
    });
  };

  // Asynchronous function
  async function updateContactSect() {
    try {
      const response = await axios.put(
        `http://127.0.0.1:8000/hat-api/Contact_Details/${dataId[0]?.id}/`,
        contactsData
      );
      // Update local state immediately after a successful update
      const updatedContacts = ContactSect?.map((contacts) =>
        contacts.id === dataId[0]?.id ? response.data : contacts
      );
      setContacts(updatedContacts);
      setEdit(!editContacts);
    } catch (error) {
      console.error("Error updating the hero section:", error);
    }
  }

  const handleUpdate = (e) => {
    e.preventDefault();
    updateContactSect();
  };
  const handleEdit = () => {
    setEdit(!editContacts);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="bg-slate-100 p-10 rounded-3xl"
        >
          <form onSubmit={handleSubmit}>
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
                      htmlFor="email1"
                      className="block  xl:text-lg text-sm font-medium leading-6 text-gray-900"
                    >
                      Email1
                    </label>
                    <div className="mt-2">
                      <input
                        type="email"
                        name="email1"
                        onChange={handleChange}
                        id="email1"
                        defaultValue={ContactSect[0]?.email1}
                        autoComplete="given-name"
                        className="block w-full rounded-2xl border-0 py-2 px-7 outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#b67a3d] sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="email2"
                      className="block xl:text-lg text-sm font-medium leading-6 text-gray-900"
                    >
                      Email2
                    </label>
                    <div className="mt-2">
                      <input
                        defaultValue={ContactSect[0]?.email2}
                        type="email"
                        onChange={handleChange}
                        name="email2"
                        id="email2"
                        autoComplete="given-name"
                        className="block w-full rounded-2xl border-0 py-2 px-7 outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#b67a3d] sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="email3"
                      className="block xl:text-lg text-sm font-medium leading-6 text-gray-900"
                    >
                      Email3
                    </label>
                    <div className="mt-2">
                      <input
                        type="email"
                        name="email3"
                        onChange={handleChange}
                        defaultValue={ContactSect[0]?.email3}
                        id="email3"
                        autoComplete="given-name"
                        className="block w-full rounded-2xl border-0 py-2 px-7 outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#b67a3d] sm:text-sm sm:leading-6"
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
                      htmlFor="phoneNumber1"
                      className="block xl:text-lg text-sm font-medium leading-6 text-gray-900"
                    >
                      Phone Number1
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="phoneNumber1"
                        onChange={handleChange}
                        defaultValue={ContactSect[0]?.phoneNumber1}
                        id="phoneNumber1"
                        autoComplete="given-name"
                        className="block w-full rounded-2xl border-0 py-2 px-7 outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#b67a3d] sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="phoneNumber2"
                      className="block xl:text-lg text-sm font-medium leading-6 text-gray-900"
                    >
                      Phone Number2
                    </label>
                    <div className="mt-2">
                      <input
                        onChange={handleChange}
                        type="text"
                        defaultValue={ContactSect[0]?.phoneNumber2}
                        name="phoneNumber2"
                        id="phoneNumber2"
                        autoComplete="given-name"
                        className="block w-full rounded-2xl border-0 py-2 px-7 outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#b67a3d] sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="phoneNumber3"
                      className="block xl:text-lg text-sm font-medium leading-6 text-gray-900"
                    >
                      Phone Number3
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        onChange={handleChange}
                        defaultValue={ContactSect[0]?.phoneNumber3}
                        name="phoneNumber3"
                        id="phoneNumber3"
                        autoComplete="given-name"
                        className="block w-full rounded-2xl border-0 py-2 px-7 outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#b67a3d] sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="phoneNumber4"
                      className="block xl:text-lg text-sm font-medium leading-6 text-gray-900"
                    >
                      Phone Number4
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        onChange={handleChange}
                        name="phoneNumber4"
                        defaultValue={ContactSect[0]?.phoneNumber4}
                        id="phoneNumber4"
                        autoComplete="given-name"
                        className="block w-full rounded-2xl border-0 py-2 px-7 outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#b67a3d] sm:text-sm sm:leading-6"
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
                      htmlFor="instagram"
                      className="block xl:text-lg text-sm font-medium leading-6 text-gray-900"
                    >
                      Instagram
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        onChange={handleChange}
                        name="instagram"
                        defaultValue={ContactSect[0]?.instagram}
                        id="instagram"
                        autoComplete="given-name"
                        className="block w-full rounded-2xl border-0 py-2 px-7 outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#b67a3d] sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="facebook"
                      className="block xl:text-lg text-sm font-medium leading-6 text-gray-900"
                    >
                      Facebook
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="facebook"
                        onChange={handleChange}
                        defaultValue={ContactSect[0]?.facebook}
                        id="facebook"
                        autoComplete="given-name"
                        className="block w-full rounded-2xl border-0 py-2 px-7 outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#b67a3d] sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="linkedin"
                      className="block xl:text-lg text-sm font-medium leading-6 text-gray-900"
                    >
                      Linkedin
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        onChange={handleChange}
                        name="linkedin"
                        id="linkedin"
                        defaultValue={ContactSect[0]?.linkedin}
                        autoComplete="given-name"
                        className="block w-full rounded-2xl border-0 py-2 px-7 outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#b67a3d] sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="twitter"
                      className="block xl:text-lg text-sm font-medium leading-6 text-gray-900"
                    >
                      Twitter
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        onChange={handleChange}
                        defaultValue={ContactSect[0]?.twitter}
                        name="twitter"
                        id="twitter"
                        autoComplete="given-name"
                        className="block w-full rounded-2xl border-0 py-2 px-7 outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#b67a3d] sm:text-sm sm:leading-6"
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
                      htmlFor="physicalAdress"
                      className="block xl:text-lg text-sm font-medium leading-6 text-gray-900"
                    >
                      Pysical Address
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        onChange={handleChange}
                        name="physicalAdress"
                        defaultValue={ContactSect[0]?.physicalAdress}
                        id="physicalAdress"
                        autoComplete="given-name"
                        className="block w-full rounded-2xl border-0 py-2 px-7 outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#b67a3d] sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="location"
                      className="block xl:text-lg text-sm font-medium leading-6 text-gray-900"
                    >
                      Location
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        onChange={handleChange}
                        name="location"
                        defaultValue={ContactSect[0]?.location}
                        id="location"
                        autoComplete="given-name"
                        className="block w-full rounded-2xl border-0 py-2 px-7 outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#b67a3d] sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="postcode"
                      className="block xl:text-lg text-sm font-medium leading-6 text-gray-900"
                    >
                      PostalCode
                    </label>
                    <div className="mt-2">
                      <input
                        type="number"
                        onChange={handleChange}
                        name="postcode"
                        defaultValue={ContactSect[0]?.postcode}
                        id="postcode"
                        autoComplete="given-name"
                        className="block w-full rounded-2xl border-0 py-2 px-7 outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#b67a3d] sm:text-sm sm:leading-6"
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
                onClick={handleUpdate}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.8 }}
                transition={{ type: "spring", ease: "easeOut" }}
                className="px-7 py-2 bg-[#b67a3d] text-white rounded-3xl"
              >
                Update
              </motion.button>
            </div>
          </form>
        </motion.div>
      )}
    </div>
  );
}

export default ContactUsSect;
