// import { PhotoIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import axiosInstance from "../../Context/axiosInstance";
import { toast } from "react-toastify";

function ConferenceSect() {
  const [conferenceData, setConferenceData] = useState({
    title: "",
    subtitle: "",
    description: "",
    date_of_conference: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setConferenceData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axiosInstance.post(
        "hat-api/Conferences/",
        conferenceData
      );
      toast.success("Conference data uploaded successfully");
      console.log("Response from server:", data);
      // Reset form after successful submission if needed
      setConferenceData({
        title: "",
        subtitle: "",
        description: "",
        date_of_conference: "",
      });
    } catch (error) {
      toast.error("Failed to upload conference data");
      console.error("Error uploading conference data:", error);
    }
  };

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      // Handle dropped files if needed
      console.log("Accepted files:", acceptedFiles);
    },
  });

  return (
    <div className="px-10 flex flex-col mb-20 mt-24">
      <h1 className="md:text-xl border-l-[#b67a3d] shadow-xl bg-slate-50 py-3 border-r-[#b67a3d] border-r-8 border-l-8 mb-5 font-bold uppercase">
        <span className="ml-2">Conference Form</span>
      </h1>
      <motion.div
        initial={{ opacity: 0, scale: 0, x: -100 }}
        animate={{ opacity: 1, scale: [1, 0, 1], x: 1 }}
        transition={{
          duration: 0.5,
          ease: "easeOut",
          stiffness: 140,
          type: "spring",
        }}
        className="bg-slate-100 border-b-4 border-b-[#b67a3d] shadow-2xl"
      >
        <form onSubmit={handleSubmit}>
          <div className="space-y-12 mt-5">
            <div className="pb-12">
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label
                    htmlFor="title"
                    className="block py-2 bg-slate-50 w-[200px] mb-2 shadow uppercase border-l-8 border-l-[#b67a3d] xl:text-lg text-sm font-medium leading-6 text-gray-900"
                  >
                    <span className="ml-2">Title</span>
                  </label>
                  <div className="mt-4 px-4">
                    <input
                      type="text"
                      name="title"
                      value={conferenceData.title}
                      onChange={handleChange}
                      id="title"
                      autoComplete="given-name"
                      className="block w-full rounded-2xl border-0 py-2 px-7 outline-none text-gray-900 shadow-lg ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#b67a3d] sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-3">
                  <label
                    htmlFor="subtitle"
                    className="block py-2 bg-slate-50 w-[200px] mb-2 shadow uppercase border-l-8 border-l-[#b67a3d] xl:text-lg text-sm font-medium leading-6 text-gray-900"
                  >
                    <span className="ml-2">Subtitle</span>
                  </label>
                  <div className="mt-4 px-4">
                    <input
                      type="text"
                      name="subtitle"
                      value={conferenceData.subtitle}
                      onChange={handleChange}
                      id="subtitle"
                      autoComplete="given-name"
                      className="block w-full rounded-2xl border-0 py-2 px-7 outline-none text-gray-900 shadow-lg ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#b67a3d] sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-3">
                  <label
                    htmlFor="description"
                    className="block py-2 bg-slate-50 w-[200px] mb-2 shadow uppercase border-l-8 border-l-[#b67a3d] xl:text-lg text-sm font-medium leading-6 text-gray-900"
                  >
                    <span className="ml-2">Description</span>
                  </label>
                  <div className="mt-4 px-4">
                    <textarea
                      id="description"
                      name="description"
                      value={conferenceData.description}
                      onChange={handleChange}
                      rows={3}
                      className="block p-7 w-full h-[300px] rounded-2xl border-0 text-gray-900 shadow-lg ring-1 ring-inset outline-none ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#b67a3d] sm:text-sm sm:leading-6"
                      defaultValue={""}
                    />
                  </div>
                </div>
                <div className="sm:col-span-3">
                  <label
                    htmlFor="date_of_conference"
                    className="block py-2 bg-slate-50 w-[200px] mb-2 shadow uppercase border-l-8 border-l-[#b67a3d] xl:text-lg text-sm font-medium leading-6 text-gray-900"
                  >
                    <span className="ml-2">Date of Conference</span>
                  </label>
                  <div className="mt-4 px-4">
                    <input
                      type="datetime-local"
                      name="date_of_conference"
                      value={conferenceData.date_of_conference}
                      onChange={handleChange}
                      id="date_of_conference"
                      className="block w-full rounded-2xl border-0 py-2 px-7 outline-none text-gray-900 shadow-lg ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#b67a3d] sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                {/* <div className="col-span-full">
                  <label
                    htmlFor="image"
                    className="block py-2 bg-slate-50 w-[200px] mb-2 shadow uppercase border-l-8 border-l-[#b67a3d] xl:text-lg text-sm font-medium leading-6 text-gray-900"
                  >
                    <span className="ml-2">Cover Photo</span>
                  </label>
                  <div
                    {...getRootProps()}
                    className="mt-4 relative flex justify-center rounded-lg border border-dashed border-gray-900 px-6 py-10"
                  >
                    <div className="text-center">
                      <PhotoIcon
                        className="mx-auto h-12 w-12 text-gray-300"
                        aria-hidden="true"
                      />
                      <div className="mt-4 flex text-sm leading-6 text-gray-600">
                        <label
                          htmlFor="cover-photo"
                          className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                        >
                          <span>Upload a file</span>
                          <input
                            id="cover-photo"
                            name="cover-photo"
                            {...getInputProps()}
                            required
                            type="file"
                            className="sr-only"
                          />
                        </label>
                        <p className="text-xs leading-5 text-gray-600">
                          PNG, JPG, GIF up to 10MB
                        </p>
                      </div>
                      <p className="text-xs leading-5 text-gray-600">
                        Name: {conferenceData?.coverPhoto?.name}
                      </p>
                      <p className="text-xs leading-5 text-gray-600">
                        Size: {conferenceData?.coverPhoto?.size}
                      </p>
                      <p className="text-xs leading-5 text-gray-600">
                        Type: {conferenceData?.coverPhoto?.type}
                      </p>
                    </div>
                   
                  </div>
                </div> */}
              </div>
            </div>
          </div>
          <div className="flex flex-col mb-3 px-4 justify-end items-end">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.8 }}
              transition={{ type: "spring", ease: "easeOut" }}
              type="submit"
              className="block bg-[#b67a3d] text-white py-3 px-8 rounded-full font-medium text-lg hover:bg-[#a56c28]"
            >
              Submit
            </motion.button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}

export default ConferenceSect;
