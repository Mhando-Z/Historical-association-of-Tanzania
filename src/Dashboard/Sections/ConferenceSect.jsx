// import { PhotoIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import React, { useContext, useEffect, useState } from "react";
import axiosInstance from "../../Context/axiosInstance";
import HomePageContext from "../../Context/HomePageContext";
import { toast } from "react-toastify";
import moment from "moment";
import { FaRegPenToSquare, FaRegTrashCan } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { PiVideoConference } from "react-icons/pi";
import { MdCreateNewFolder } from "react-icons/md";
import { RefreshCw } from "lucide-react";

// Date formatter component
const formatDate = (dateString) => {
  return moment(dateString).format("MMMM D, YYYY [at] h:mm:ss A");
};

function ConferenceSect() {
  const { ConferenceSect, setConference, getConference } =
    useContext(HomePageContext);
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [dataId, setDataId] = useState("");
  const [conferenceData, setConferenceData] = useState({
    title: "",
    subtitle: "",
    description: "",
    date_of_conference: "",
  });
  const [conferenceDat, setConferenceDat] = useState({
    title: "",
    subtitle: "",
    description: "",
    date_of_conference: "",
  });

  const data = ConferenceSect?.filter((dt) => {
    return dt.id === dataId;
  });

  useEffect(() => {
    if (dataId) {
      const data = ConferenceSect.find((dt) => dt.id === dataId);
      if (data) {
        setConferenceDat({
          title: data.title,
          subtitle: data.subtitle,
          description: data.description,
          date_of_conference: data.date_of_conference,
        });
      }
    }
  }, [ConferenceSect, dataId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (show !== true) {
      setConferenceData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    } else {
      setConferenceDat((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  // Resources and publications
  async function deleteConference(Id) {
    const Reso = ConferenceSect?.filter((pt) => pt.id !== Id);
    setConference(Reso);
    try {
      await axiosInstance.delete(`/hat-api/Conference_Details/${Id}/`);
      toast.success("Deleted Successfully");
      getConference();
      setLoading(false);
    } catch (error) {
      setLoading(false);
      toast.error("Action Delete Failed");
      setConference(ConferenceSect);
    }
  }

  // post conference data
  async function postConferenceData() {
    const formData = new FormData();
    formData.append("title", conferenceData.title);
    formData.append("subtitle", conferenceData.subtitle);
    formData.append("author", conferenceData.author);
    formData.append("description", conferenceData.description);
    formData.append("date_of_conference", conferenceData.date_of_conference);

    try {
      const { data } = await axiosInstance.post(
        "hat-api/Conference/",
        formData
      );
      const vibes = [data, ...ConferenceSect];
      setConference(vibes);
      toast.success("Data upload was a success");
      getConference();
    } catch (error) {
      toast.error("Data upload was a failure");
      console.error(error);
    }
  }

  // updates conference Data
  async function updateConference() {
    const formData = new FormData();
    formData.append("title", conferenceDat.title);
    formData.append("subtitle", conferenceDat.subtitle);
    formData.append("date_of_conference", conferenceDat.date_of_conference);
    formData.append("description", conferenceDat.description);

    try {
      const response = await axiosInstance.put(
        `hat-api/Conference_Details/${dataId}/`,
        formData
      );
      // Update local state immediately after a successful update
      const updated = ConferenceSect.map((Re) =>
        Re.id === dataId ? response.data : Re
      );
      toast.success("Updates Applied");
      setConference(updated);
      getConference();
      setShow(false); // Close the drawer after update
    } catch (error) {
      toast.error("Updates Failed");
      console.error("Error updating the resource section:", error);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handlePost = () => {
    if (conferenceData.title !== "" && conferenceData.description !== null) {
      postConferenceData();
      setLoading(true);
    } else {
      toast.error("Fill all sections");
    }
  };

  const handleEdit = (id) => {
    setShow(!show);

    setDataId(id);
  };

  return (
    <div className="container flex flex-col mx-auto mb-20">
      <h1 className="flex flex-row items-center px-4 py-3 mb-5 font-bold uppercase shadow-xl gap-x-3 md:text-xl bg-slate-50">
        <PiVideoConference className="text-3xl" />
        <span className="">Conference</span>
      </h1>
      <div className="grid relative xl:grid-cols-3 lg:grid-cols-2 grid-cols-1  gap-3 px-5 w-full h-[700px] overflow-y-auto">
        {ConferenceSect?.map((dt, i) => {
          return (
            <motion.div
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 1 }}
              transition={{
                duration: 0.5 * i,
                type: "spring",
                ease: "easeOut",
              }}
              key={dt.id}
              className="relative"
            >
              <div className="p-5 shadow-xl bg-slate-100 ring-2 ring-slate-200">
                <h1 className="max-w-sm text-3xl font-bold">{dt.title}</h1>
                <h2 className="text-xl font-medium">{dt?.subtitle}</h2>
                <p className="max-w-xl tracking-tighter text-justify">
                  {dt.description}
                </p>
                <p className="flex items-center justify-between mt-2">
                  Date of Conference
                  <span className="text-blue-700">
                    {formatDate(dt.date_of_conference)}
                  </span>
                </p>
              </div>
              <div className="absolute top-5 right-0 size-10 w-[100px] rounded-xl">
                <div className="flex flex-row items-center gap-x-3">
                  <Link
                    onClick={() => handleEdit(dt.id)}
                    className="px-3 py-2 text-white bg-blue-600 rounded-md"
                  >
                    <FaRegPenToSquare className="text-xl" />
                  </Link>
                  <Link
                    onClick={() => deleteConference(dt.id)}
                    className="px-3 py-2 text-white bg-red-600 rounded-md"
                  >
                    <FaRegTrashCan className="text-xl" />
                  </Link>
                </div>
              </div>
            </motion.div>
          );
        })}
        {show ? (
          <div className="absolute top-0 bottom-0 left-0 right-0 bg-slate-100">
            <h1 className="px-4 py-3 mb-5 font-bold uppercase md:text-lg">
              <MdCreateNewFolder className="text-3xl" />
              <span className="">update your data</span>
              <br />
              <span className="text-sm text-gray-600 capitalize ">
                To this section you can modify the posted data
              </span>
            </h1>
            <form onSubmit={handleSubmit} className="">
              <div className="space-y-12 ">
                <div className="pb-12">
                  <div className="grid grid-cols-1 mt-5 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="px-4 sm:col-span-3">
                      <label
                        htmlFor="title"
                        className="block py-2 mb-2 text-sm font-medium leading-6 text-gray-900 capitalize xl:text-lg"
                      >
                        <span className="">Title</span>
                      </label>
                      <div className="">
                        <input
                          type="text"
                          name="title"
                          defaultValue={data[0]?.title}
                          onChange={handleChange}
                          id="title"
                          autoComplete="given-name"
                          className="block w-full rounded border-0 py-2 px-7 outline-none text-gray-900 shadow ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#b67a3d] sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                    <div className="px-4 sm:col-span-3">
                      <label
                        htmlFor="subtitle"
                        className="block py-2 mb-2 text-sm font-medium leading-6 text-gray-900 capitalize xl:text-lg"
                      >
                        <span className="">Subtitle</span>
                      </label>
                      <div className="">
                        <input
                          type="text"
                          name="subtitle"
                          defaultValue={data[0]?.subtitle}
                          onChange={handleChange}
                          id="subtitle"
                          autoComplete="given-name"
                          className="block w-full rounded border-0 py-2 px-7 outline-none text-gray-900 shadow ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#b67a3d] sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                    <div className="px-4 sm:col-span-3">
                      <label
                        htmlFor="description"
                        className="block py-2 mb-2 text-sm font-medium leading-6 text-gray-900 capitalize xl:text-lg"
                      >
                        <span className="">Description</span>
                      </label>
                      <div className="">
                        <textarea
                          id="description"
                          name="description"
                          defaultValue={data[0]?.description}
                          //   value={conferenceData.description}
                          onChange={handleChange}
                          rows={3}
                          className="block p-7 w-full h-[300px] rounded-2xl border-0 text-gray-900 shadow ring-1 ring-inset outline-none ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#b67a3d] sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                    <div className="px-4 sm:col-span-3">
                      <label
                        htmlFor="date_of_conference"
                        className="block py-2 mb-2 text-sm font-medium leading-6 text-gray-900 capitalize xl:text-lg"
                      >
                        <span className="">Date of Conference</span>
                      </label>
                      <div className="">
                        <input
                          type="datetime-local"
                          name="date_of_conference"
                          defaultValue={data[0]?.date_of_conference}
                          //   value={conferenceData.date_of_conference}
                          onChange={handleChange}
                          id="date_of_conference"
                          className="block w-full rounded border-0 py-2 px-7 outline-none text-gray-900 shadow ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#b67a3d] sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-end justify-end px-4 mb-3 gap-x-4">
                <motion.button
                  onClick={updateConference}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.8 }}
                  transition={{ type: "spring", ease: "easeOut" }}
                  type="submit"
                  className="block bg-[#b67a3d] text-white py-1 px-5 rounded-full font-medium  hover:bg-[#a56c28]"
                >
                  Submit
                </motion.button>

                <motion.button
                  onClick={() => setShow(false)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.8 }}
                  transition={{ type: "spring", ease: "easeOut" }}
                  type="submit"
                  className="block bg-red-600 text-white py-1 px-5 rounded-full font-medium  hover:bg-[#a56c28]"
                >
                  cancel
                </motion.button>
              </div>
            </form>
          </div>
        ) : (
          ""
        )}
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 0.3,
          duration: 1,
          ease: "easeOut",
          stiffness: 140,
          type: "spring",
        }}
        className="bg-slate-100 border-b-2 border-b-[#b67a3d] shadow"
      >
        {/* Title and descriptions */}
        <h1 className="px-4 py-3 mb-5 font-bold uppercase md:text-lg">
          <MdCreateNewFolder className="text-3xl" />
          <span className="">Add/Create</span>
          <br />
          <span className="text-sm text-gray-600 capitalize ">
            To this section you can add more data on Conference Section
          </span>
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="mt-5 space-y-12">
            <div className="pb-12">
              <div className="grid grid-cols-1 mt-10 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="px-4 sm:col-span-3">
                  <label
                    htmlFor="title"
                    className="block py-2 mb-2 text-sm font-medium leading-6 text-gray-900 capitalize xl:text-lg"
                  >
                    <span className="">Title</span>
                  </label>
                  <div className="">
                    <input
                      type="text"
                      name="title"
                      value={conferenceData.title}
                      onChange={handleChange}
                      id="title"
                      autoComplete="given-name"
                      className="block w-full rounded border-0 py-2 px-7 outline-none text-gray-900 shadow ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#b67a3d] sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="px-4 sm:col-span-3">
                  <label
                    htmlFor="subtitle"
                    className="block py-2 mb-2 text-sm font-medium leading-6 text-gray-900 capitalize xl:text-lg"
                  >
                    <span className="">Subtitle</span>
                  </label>
                  <div className="">
                    <input
                      type="text"
                      name="subtitle"
                      value={conferenceData.subtitle}
                      onChange={handleChange}
                      id="subtitle"
                      autoComplete="given-name"
                      className="block w-full rounded border-0 py-2 px-7 outline-none text-gray-900 shadow ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#b67a3d] sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="px-4 sm:col-span-3">
                  <label
                    htmlFor="description"
                    className="block py-2 mb-2 text-sm font-medium leading-6 text-gray-900 capitalize xl:text-lg"
                  >
                    <span className="">Description</span>
                  </label>
                  <div className="">
                    <textarea
                      id="description"
                      name="description"
                      value={conferenceData.description}
                      onChange={handleChange}
                      rows={3}
                      className="block p-7 w-full h-[300px] rounded-2xl border-0 text-gray-900 shadow ring-1 ring-inset outline-none ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#b67a3d] sm:text-sm sm:leading-6"
                      defaultValue={""}
                    />
                  </div>
                </div>
                <div className="px-4 sm:col-span-3">
                  <label
                    htmlFor="date_of_conference"
                    className="block py-2 mb-2 text-sm font-medium leading-6 text-gray-900 capitalize xl:text-lg"
                  >
                    <span className="">Date of Conference</span>
                  </label>
                  <div className="">
                    <input
                      type="datetime-local"
                      name="date_of_conference"
                      value={conferenceData.date_of_conference}
                      onChange={handleChange}
                      id="date_of_conference"
                      className="block w-full rounded border-0 py-2 px-7 outline-none text-gray-900 shadow ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#b67a3d] sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-end justify-end px-4 mb-3">
            <motion.button
              onClick={handlePost}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.8 }}
              transition={{ type: "spring", ease: "easeOut" }}
              type="submit"
              className="block bg-[#b67a3d] text-white py-1.5 px-5 rounded-full font-medium  hover:bg-[#a56c28]"
            >
              {loading ? (
                <RefreshCw className="animate-spin" />
              ) : (
                <>
                  <span className="relative z-10"> Submit</span>
                </>
              )}
            </motion.button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}

export default ConferenceSect;
