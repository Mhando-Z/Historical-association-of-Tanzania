import React, { useContext, useState } from "react";
import { motion } from "framer-motion";
import { PhotoIcon } from "@heroicons/react/24/outline";
import Table from "../Componentz/Table";
import HomePageContext from "../../Context/HomePageContext";
import axiosInstance from "../../Context/axiosInstance";

function AnnouncementsSect() {
  const { AnnounceSect, setAnnounce } = useContext(HomePageContext);
  const [AnnounceData, setData] = useState({
    title: "",
    description: "",
    image: null,
    image2: null,
  });

  // handle custom inputs
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image" || name === "image2") {
      setData((data) => {
        return { ...data, [name]: files[0] };
      });
    } else {
      setData((data) => {
        return { ...data, [name]: value };
      });
    }
  };
  // Asynchronous Fuctions posting/ Adding data
  async function postdata() {
    const formData = new FormData();
    formData.append("title", AnnounceData.title);
    formData.append("description", AnnounceData.description);
    formData.append("image", AnnounceData.image);
    formData.append("image2", AnnounceData.image2);

    try {
      const { data } = await axiosInstance.post(
        "/hat-api/Announce_Details/",
        formData
      );
      const vibes = [data, ...AnnounceSect];
      setAnnounce(vibes);
    } catch (error) {
      console.error(error);
    }
  }

  // prevent form refresh after submit button is pressed
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="px-10 flex flex-col">
      <div className="mt-20">
        <Table data={AnnounceSect} />
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="bg-slate-100 p-10 rounded-3xl"
      >
        <form onSubmit={handleSubmit}>
          <div className="space-y-12 mt-5">
            <div className="pb-12">
              <h2 className="text-base xl:text-xl font-semibold leading-7 text-gray-900">
                Announcement Section
              </h2>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                Perfom CRUD to this section
              </p>

              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label
                    htmlFor="title"
                    className="block  xl:text-lg text-sm font-medium leading-6 text-gray-900"
                  >
                    Title
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="title"
                      required
                      onChange={handleChange}
                      id="title"
                      autoComplete="given-name"
                      className="block w-full rounded-2xl border-0 py-2 px-7 outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#b67a3d] sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="col-span-full">
                  <label
                    htmlFor="description"
                    className="block  xl:text-lg text-sm font-medium leading-6 text-gray-900"
                  >
                    Description
                  </label>
                  <div className="mt-2">
                    <textarea
                      id="description"
                      onChange={handleChange}
                      name="description"
                      rows={3}
                      className="block p-7 w-full h-[300px]  rounded-2xl border-0 text-gray-900 shadow-sm ring-1 ring-inset outline-none ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#b67a3d] sm:text-sm sm:leading-6"
                      defaultValue={""}
                    />
                  </div>
                  <p className="mt-3 text-sm leading-6 text-gray-600">
                    number of words {AnnounceData?.description.length}
                  </p>
                </div>
                {/* image1 */}
                <div className="col-span-full">
                  <label
                    htmlFor="cover-photo"
                    className="block xl:text-lg text-sm font-medium leading-6 text-gray-900"
                  >
                    Photo1
                  </label>
                  <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900 px-6 py-10">
                    <div className="text-center">
                      <PhotoIcon
                        className="mx-auto h-12 w-12 text-gray-300"
                        aria-hidden="true"
                      />
                      <div className="mt-4 flex text-sm leading-6 text-gray-600">
                        <label
                          htmlFor="image"
                          className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                        >
                          <span>Upload a file</span>
                          <input
                            id="image"
                            name="image"
                            required
                            onChange={handleChange}
                            type="file"
                            className="sr-only"
                          />
                        </label>
                        <p className="text-xs leading-5 text-gray-600">
                          PNG, JPG, GIF up to 10MB
                        </p>
                      </div>
                      <p className="text-xs leading-5 text-gray-600">
                        Name: {AnnounceData?.image?.name}
                      </p>
                      <p className="text-xs leading-5 text-gray-600">
                        Size: {AnnounceData?.image?.size}
                      </p>
                      <p className="text-xs leading-5 text-gray-600">
                        Type: {AnnounceData?.image?.type}
                      </p>
                    </div>
                  </div>
                </div>
                {/* image2 */}
                <div className="col-span-full">
                  <label
                    htmlFor="cover-photo"
                    className="block xl:text-lg text-sm font-medium leading-6 text-gray-900"
                  >
                    Photo2
                  </label>
                  <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900 px-6 py-10">
                    <div className="text-center">
                      <PhotoIcon
                        className="mx-auto h-12 w-12 text-gray-300"
                        aria-hidden="true"
                      />
                      <div className="mt-4 flex flex-row items-center gap-x-4 text-sm leading-6 text-gray-600">
                        <label
                          htmlFor="image2"
                          className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                        >
                          <span>Upload a file</span>
                          <input
                            id="image2"
                            name="image2"
                            required
                            onChange={handleChange}
                            type="file"
                            className="sr-only"
                          />
                        </label>
                        <p className="text-xs leading-5 text-gray-600">
                          PNG, JPG, GIF up to 10MB
                        </p>
                      </div>
                      <p className="text-xs leading-5 text-gray-600">
                        Name: {AnnounceData?.image2?.name}
                      </p>
                      <p className="text-xs leading-5 text-gray-600">
                        Size: {AnnounceData?.image2?.size}
                      </p>
                      <p className="text-xs leading-5 text-gray-600">
                        Type: {AnnounceData?.image2?.type}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-end items-end">
            <motion.button
              onClick={postdata}
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
    </div>
  );
}

export default AnnouncementsSect;
