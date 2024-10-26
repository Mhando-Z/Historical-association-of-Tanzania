import React, { useContext, useEffect, useState } from "react";
import HomePageContext from "../../Context/HomePageContext";
import { motion } from "framer-motion";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdSocialDistance } from "react-icons/md";
import { FaAddressCard } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import axiosInstance from "../../Context/axiosInstance";
import { toast } from "react-toastify";
import { MdOutlineSettingsInputAntenna } from "react-icons/md";
import { RefreshCw } from "lucide-react";

function ContactUsSect() {
  const { ContactSect, setContacts } = useContext(HomePageContext);
  const { PolicieSect, setPolicy, getContacts } = useContext(HomePageContext);
  const { TermsSect, setTermsService } = useContext(HomePageContext);
  const [loading, setLoading] = useState(false);

  const dataId = ContactSect[0]?.id;
  const dataId1 = PolicieSect[0]?.id;
  const dataId2 = TermsSect[0]?.id;

  const [editContacts, setEdit] = useState(true);

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

  const [terms, setTerms] = useState({
    term1: "",
    term2: "",
    term3: "",
    term4: "",
  });

  const [policies, setPolicies] = useState({
    policy1: "",
    policy2: "",
    policy3: "",
    policy4: "",
  });

  useEffect(() => {
    if (dataId) {
      const data = ContactSect.find((dt) => dt.id === dataId);
      if (data) {
        setData({
          location: data.location,
          postcode: data.postcode,
          physicalAdress: data.physicalAdress,
          facebook: data.facebook,
          instagram: data.instagram,
          linkedin: data.linkedin,
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
    if (dataId1) {
      const data = PolicieSect.find((dt) => dt.id === dataId1);
      if (data) {
        setPolicies({
          policy1: data.policy1,
          policy2: data.policy2,
          policy3: data.policy3,
          policy4: data.policy4,
        });
      }
    }
    if (dataId2) {
      const data = TermsSect.find((dt) => dt.id === dataId2);
      if (data) {
        setTerms({
          term1: data.term1,
          term2: data.term2,
          term3: data.term3,
          term4: data.term4,
        });
      }
    }
  }, [ContactSect, dataId, dataId1, dataId2, PolicieSect, TermsSect]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleChange1 = (e) => {
    const { name, value } = e.target;
    setPolicies((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleChange2 = (e) => {
    const { name, value } = e.target;
    setTerms((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const updateContactSect = async () => {
    setLoading(true);
    try {
      const response = await axiosInstance.put(
        `hat-api/Contact_Details/${dataId}/`,
        contactsData
      );
      const updatedContacts = ContactSect.map((contact) =>
        contact.id === dataId ? response.data : contact
      );
      setContacts(updatedContacts);
      setEdit(!editContacts);
      setLoading(false);
      getContacts();
      toast.success("Contacts Update Successfull");
    } catch (error) {
      setLoading(false);
      toast.error("Error updating the contact section");
      console.error("Error updating the contact section:", error);
    }
  };

  const updatePoliciesSect = async () => {
    try {
      const response = await axiosInstance.put(
        `hat-api/Policies_Details/${dataId1}/`,
        policies
      );
      const updatedPolicies = PolicieSect.map((policy) =>
        policy.id === dataId1 ? response.data : policy
      );
      setPolicy(updatedPolicies);
      setEdit(!editContacts);
      getContacts();
      toast.success("Policy Update Successfull");
    } catch (error) {
      toast.error("Error updating the Policy section");
      console.error("Error updating the Policy section:", error);
    }
  };

  const updateTerms = async () => {
    try {
      const response = await axiosInstance.put(
        `hat-api/Terms_Details/${dataId2}/`,
        terms
      );
      const updatedTerms = TermsSect.map((terms) =>
        terms.id === dataId2 ? response.data : terms
      );
      setTermsService(updatedTerms);
      setEdit(!editContacts);
      getContacts();
      toast.success("Terms Update Successfull");
    } catch (error) {
      console.error("Error updating the Terms section:", error);
      toast.error("Failed to Update Terms");
    }
  };

  const handleUpdate = () => {
    updateContactSect();
    updatePoliciesSect();
    updateTerms();
  };

  const handleEdit = () => {
    setEdit(!editContacts);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="container flex flex-col mx-auto ">
      {editContacts ? (
        <motion.div
          initial={{ opacity: 0, scale: 0, x: -100 }}
          animate={{ opacity: 1, scale: [1, 0, 1], x: 1 }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
            stiffness: 140,
            type: "spring",
          }}
          className="bg-slate-100  border-b-2 border-b-[#b67a3d] shadow"
        >
          <div className="p-10">
            <h1 className="flex flex-row py-3 mb-2 font-bold uppercase gap-x-3 md:text-xl bg-slate-50">
              <MdOutlineSettingsInputAntenna className="text-2xl" />
              <span className="ml-2">contact Section</span>
            </h1>

            <div className="mt-5 mb-5 border-b-2 border-gray-300"></div>
            <div className="flex flex-col space-x-10">
              {/* Emails Section */}
              <div className="flex flex-row items-center mt-5 gap-x-2">
                <MdEmail className="text-3xl" />
                <h1 className="font-bold xl:text-xl"> Emails</h1>
              </div>
              <h1>{ContactSect[0]?.email1}</h1>
              <h1>{ContactSect[0]?.email2}</h1>
              <h1>{ContactSect[0]?.email3}</h1>
            </div>
            <div className="flex flex-col space-x-10">
              {/* Phone Numbers Section */}
              <div className="flex flex-row items-center mt-10 gap-x-4">
                <FaPhoneVolume className="text-xl" />
                <h1 className="font-bold xl:text-xl"> Phone Numbers</h1>
              </div>
              <h1>{ContactSect[0]?.phoneNumber1}</h1>
              <h1>{ContactSect[0]?.phoneNumber2}</h1>
              <h1>{ContactSect[0]?.phoneNumber3}</h1>
              <h1>{ContactSect[0]?.phoneNumber4}</h1>
            </div>
            <div className="flex flex-col space-x-10">
              {/* Social media Section */}
              <div className="flex flex-row items-center mt-10 gap-x-2">
                <MdSocialDistance className="text-3xl" />
                <h1 className="font-bold xl:text-xl">Social Media </h1>
              </div>
              <h1>{ContactSect[0]?.facebook}</h1>
              <h1>{ContactSect[0]?.instagram}</h1>
              <h1>{ContactSect[0]?.linkedin}</h1>
              <h1>{ContactSect[0]?.twitter}</h1>
            </div>
            <div className="flex flex-col space-x-10">
              {/* Address Section */}
              <div className="flex flex-row items-center mt-10 gap-x-2">
                <FaAddressCard className="text-3xl" />
                <h1 className="font-bold xl:text-xl">Address Section</h1>
              </div>
              <h1>{ContactSect[0]?.location}</h1>
              <h1>{ContactSect[0]?.physicalAdress}</h1>
              <h1>{ContactSect[0]?.postcode}</h1>
            </div>

            <div className="flex flex-col mt-10 gap-y-10">
              <div>
                <h1 className="font-bold xl:text-xl">Policies</h1>
                {PolicieSect?.map((dt) => {
                  return (
                    <div className="flex flex-col gap-y-4" key={dt.id}>
                      <p className="xl:max-w-4xl">1.{dt.policy5}</p>
                      <p className="xl:max-w-4xl">2.{dt.policy2}</p>
                      <p className="xl:max-w-4xl">3.{dt.policy3}</p>
                      <p className="xl:max-w-4xl">4.{dt.policy4}</p>
                    </div>
                  );
                })}
              </div>
              <div>
                <h1 className="font-bold xl:text-xl">Terms of Service</h1>
                {TermsSect?.map((dt) => {
                  return (
                    <div className="flex flex-col gap-y-4" key={dt.id}>
                      <p className="xl:max-w-4xl">1.{dt.term1}</p>
                      <p className="xl:max-w-4xl">2.{dt.term2}</p>
                      <p className="xl:max-w-4xl">3.{dt.term3}</p>
                      <p className="xl:max-w-4xl">4.{dt.term4}</p>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="flex items-end justify-end w-full">
              <div className="flex flex-col items-end justify-end mt-10">
                <motion.button
                  onClick={handleEdit}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.8 }}
                  transition={{ type: "spring", ease: "easeOut" }}
                  className="px-5  py-1 bg-[#b67a3d] text-white rounded-3xl"
                >
                  Edit
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0, x: 100 }}
          animate={{ opacity: 1, scale: [1, 0, 1], x: 1 }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
            stiffness: 140,
            type: "spring",
          }}
          className="p-10 bg-slate-100 rounded-3xl"
        >
          <form onSubmit={handleSubmit}>
            <div className="mt-16 space-y-12">
              <div className="pb-12">
                <h2 className="text-base font-bold leading-7 text-gray-900 xl:text-2xl">
                  Contacts Section
                </h2>
                <p className="mt-1 text-sm leading-6 text-gray-600">
                  Perfom CRUD to this section
                </p>
                <div className="mt-10 mb-5 border-b-2 border-slate-300"></div>
                <div className="flex flex-row items-center mt-10 gap-x-5">
                  <MdEmail className="text-3xl" />
                  <h1 className="font-bold xl:text-xl"> Emails Section</h1>
                </div>
                <div className="grid grid-cols-1 mt-10 gap-x-6 gap-y-8 sm:grid-cols-6">
                  {/* Emails Section */}
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="email1"
                      className="block text-sm font-medium leading-6 text-gray-900 xl:text-lg"
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
                        className="block w-full rounded border-0 py-2 px-7 outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#b67a3d] sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="email2"
                      className="block text-sm font-medium leading-6 text-gray-900 xl:text-lg"
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
                        className="block w-full rounded border-0 py-2 px-7 outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#b67a3d] sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="email3"
                      className="block text-sm font-medium leading-6 text-gray-900 xl:text-lg"
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
                        className="block w-full rounded border-0 py-2 px-7 outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#b67a3d] sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-10 mb-5 border-b-2 border-slate-300"></div>
                <div className="flex flex-row items-center mt-10 gap-x-5">
                  <FaPhoneVolume className="text-xl" />
                  <h1 className="font-bold xl:text-xl">
                    Phone Numbers Section
                  </h1>
                </div>
                <div className="grid grid-cols-1 mt-5 gap-x-6 gap-y-8 sm:grid-cols-6">
                  {/* Phone Numbers Section */}
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="phoneNumber1"
                      className="block text-sm font-medium leading-6 text-gray-900 xl:text-lg"
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
                        className="block w-full rounded border-0 py-2 px-7 outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#b67a3d] sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="phoneNumber2"
                      className="block text-sm font-medium leading-6 text-gray-900 xl:text-lg"
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
                        className="block w-full rounded border-0 py-2 px-7 outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#b67a3d] sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="phoneNumber3"
                      className="block text-sm font-medium leading-6 text-gray-900 xl:text-lg"
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
                        className="block w-full rounded border-0 py-2 px-7 outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#b67a3d] sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="phoneNumber4"
                      className="block text-sm font-medium leading-6 text-gray-900 xl:text-lg"
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
                        className="block w-full rounded border-0 py-2 px-7 outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#b67a3d] sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-10 mb-5 border-b-2 border-slate-300"></div>
                <div className="flex flex-row items-center mt-10 gap-x-5">
                  <MdSocialDistance className="text-3xl" />
                  <h1 className="font-bold xl:text-xl">Social Media Section</h1>
                </div>
                <div className="grid grid-cols-1 mt-5 gap-x-6 gap-y-8 sm:grid-cols-6">
                  {/* Social Media Section */}
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="instagram"
                      className="block text-sm font-medium leading-6 text-gray-900 xl:text-lg"
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
                        className="block w-full rounded border-0 py-2 px-7 outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#b67a3d] sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="facebook"
                      className="block text-sm font-medium leading-6 text-gray-900 xl:text-lg"
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
                        className="block w-full rounded border-0 py-2 px-7 outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#b67a3d] sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="linkedin"
                      className="block text-sm font-medium leading-6 text-gray-900 xl:text-lg"
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
                        className="block w-full rounded border-0 py-2 px-7 outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#b67a3d] sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="twitter"
                      className="block text-sm font-medium leading-6 text-gray-900 xl:text-lg"
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
                        className="block w-full rounded border-0 py-2 px-7 outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#b67a3d] sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-10 mb-5 border-b-2 border-slate-300"></div>
                <div className="flex flex-row items-center mt-10 gap-x-5">
                  <FaAddressCard className="text-3xl" />
                  <h1 className="font-bold xl:text-xl">Address Section</h1>
                </div>
                <div className="grid grid-cols-1 mt-10 gap-x-6 gap-y-8 sm:grid-cols-6">
                  {/* Address section */}
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="physicalAdress"
                      className="block text-sm font-medium leading-6 text-gray-900 xl:text-lg"
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
                        className="block w-full rounded border-0 py-2 px-7 outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#b67a3d] sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="location"
                      className="block text-sm font-medium leading-6 text-gray-900 xl:text-lg"
                    >
                      Location
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        required
                        onChange={handleChange}
                        name="location"
                        defaultValue={ContactSect[0]?.location}
                        id="location"
                        autoComplete="given-name"
                        className="block w-full rounded border-0 py-2 px-7 outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#b67a3d] sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="postcode"
                      className="block text-sm font-medium leading-6 text-gray-900 xl:text-lg"
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
                        className="block w-full rounded border-0 py-2 px-7 outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#b67a3d] sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-10 mb-5 border-b-2 border-slate-300"></div>
                <div className="flex flex-row items-center mt-10 gap-x-5">
                  <h1 className="font-bold xl:text-xl">Policies Section</h1>
                </div>
                <div className="grid grid-cols-1 mt-5 gap-x-6 gap-y-8 sm:grid-cols-6">
                  {/* Policy Section */}
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="Policy1"
                      className="block text-sm font-medium leading-6 text-gray-900 xl:text-lg"
                    >
                      Policy1
                    </label>
                    <div className="mt-2">
                      <textarea
                        type="text"
                        onChange={handleChange1}
                        name="Policy1"
                        defaultValue={PolicieSect[0]?.policy1}
                        id="Policy1"
                        autoComplete="given-name"
                        className="block w-full rounded border-0 py-2 px-7 outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#b67a3d] sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="policy2"
                      className="block text-sm font-medium leading-6 text-gray-900 xl:text-lg"
                    >
                      policy2
                    </label>
                    <div className="mt-2">
                      <textarea
                        type="text"
                        name="policy2"
                        onChange={handleChange1}
                        defaultValue={PolicieSect[0]?.policy2}
                        id="policy2"
                        autoComplete="given-name"
                        className="block w-full rounded border-0 py-2 px-7 outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#b67a3d] sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="policy3"
                      className="block text-sm font-medium leading-6 text-gray-900 xl:text-lg"
                    >
                      policy3
                    </label>
                    <div className="mt-2">
                      <textarea
                        type="text"
                        onChange={handleChange1}
                        name="policy3"
                        id="policy3"
                        defaultValue={PolicieSect[0]?.policy3}
                        autoComplete="given-name"
                        className="block w-full rounded border-0 py-2 px-7 outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#b67a3d] sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="policy4"
                      className="block text-sm font-medium leading-6 text-gray-900 xl:text-lg"
                    >
                      policy4
                    </label>
                    <div className="mt-2">
                      <textarea
                        type="text"
                        onChange={handleChange1}
                        defaultValue={PolicieSect[0]?.policy4}
                        name="policy4"
                        id="policy4"
                        autoComplete="given-name"
                        className="block w-full rounded border-0 py-2 px-7 outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#b67a3d] sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="policy5"
                      className="block text-sm font-medium leading-6 text-gray-900 xl:text-lg"
                    >
                      policy5
                    </label>
                    <div className="mt-2">
                      <textarea
                        type="text"
                        onChange={handleChange1}
                        defaultValue={PolicieSect[0]?.policy5}
                        name="policy5"
                        id="policy5"
                        autoComplete="given-name"
                        className="block w-full rounded border-0 py-2 px-7 outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#b67a3d] sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                </div>
                {/* terms section */}
                <div className="mt-10 mb-5 border-b-2 border-slate-300"></div>
                <div className="flex flex-row items-center mt-10 gap-x-5">
                  <h1 className="font-bold xl:text-xl">
                    Terms of Service Section
                  </h1>
                </div>
                <div className="grid grid-cols-1 mt-5 gap-x-6 gap-y-8 sm:grid-cols-6">
                  {/* Policy Section */}
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="term1"
                      className="block text-sm font-medium leading-6 text-gray-900 xl:text-lg"
                    >
                      term1
                    </label>
                    <div className="mt-2">
                      <textarea
                        type="text"
                        onChange={handleChange2}
                        name="term1"
                        defaultValue={TermsSect[0]?.term1}
                        id="term1"
                        autoComplete="given-name"
                        className="block w-full rounded border-0 py-2 px-7 outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#b67a3d] sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="term2"
                      className="block text-sm font-medium leading-6 text-gray-900 xl:text-lg"
                    >
                      term2
                    </label>
                    <div className="mt-2">
                      <textarea
                        type="text"
                        name="term2"
                        onChange={handleChange2}
                        defaultValue={TermsSect[0]?.term2}
                        id="term2"
                        autoComplete="given-name"
                        className="block w-full rounded border-0 py-2 px-7 outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#b67a3d] sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="term3"
                      className="block text-sm font-medium leading-6 text-gray-900 xl:text-lg"
                    >
                      term3
                    </label>
                    <div className="mt-2">
                      <textarea
                        type="text"
                        onChange={handleChange2}
                        name="term3"
                        id="term3"
                        defaultValue={TermsSect[0]?.term3}
                        autoComplete="given-name"
                        className="block w-full rounded border-0 py-2 px-7 outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#b67a3d] sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="term4"
                      className="block text-sm font-medium leading-6 text-gray-900 xl:text-lg"
                    >
                      term4
                    </label>
                    <div className="mt-2">
                      <textarea
                        type="text"
                        onChange={handleChange2}
                        defaultValue={TermsSect[0]?.term4}
                        name="term4"
                        id="term4"
                        autoComplete="given-name"
                        className="block w-full rounded border-0 py-2 px-7 outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#b67a3d] sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="term5"
                      className="block text-sm font-medium leading-6 text-gray-900 xl:text-lg"
                    >
                      term5
                    </label>
                    <div className="mt-2">
                      <textarea
                        type="text"
                        onChange={handleChange2}
                        defaultValue={TermsSect[0]?.term5}
                        name="term5"
                        id="term5"
                        autoComplete="given-name"
                        className="block w-full rounded border-0 py-2 px-7 outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#b67a3d] sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-10 mb-5 border-b-2 border-slate-300"></div>
              </div>
            </div>
            <div className="flex flex-row items-end justify-end mt-10 gap-x-5">
              <motion.button
                onClick={handleEdit}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.8 }}
                transition={{ type: "spring", ease: "easeOut" }}
                className="px-4 py-1 bg-[#e43127] text-white rounded-3xl"
              >
                cancel
              </motion.button>
              <motion.button
                onClick={handleUpdate}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.8 }}
                transition={{ type: "spring", ease: "easeOut" }}
                className="px-5 py-1 bg-[#b67a3d] text-white rounded-3xl"
              >
                {loading ? (
                  <RefreshCw className="animate-spin" />
                ) : (
                  <>
                    <span className="relative z-10 text-sm"> Update</span>
                  </>
                )}
              </motion.button>
            </div>
          </form>
        </motion.div>
      )}
    </div>
  );
}

export default ContactUsSect;
