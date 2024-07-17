import { PhotoIcon } from "@heroicons/react/20/solid";
import React, { useContext, useState } from "react";
import HomePageContext from "../../Context/HomePageContext";
import Table from "../Componentz/Table";
import { motion } from "framer-motion";
import axiosInstance from "../../Context/axiosInstance";

function GallerySect() {
  const { gallerySect, setGallery } = useContext(HomePageContext);
  const [picture, setData] = useState({
    title: "",
    image: null,
  });

  // handle inputs
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setData((data) => {
        return { ...data, [name]: files[0] };
      });
    } else {
      setData((data) => {
        return { ...data, [name]: value };
      });
    }
  };

  // handle synchronous functions
  async function postGallerydata() {
    const formData = new FormData();
    formData.append("title", picture.title);
    formData.append("image", picture.image);

    const { data } = await axiosInstance.post(
      "/hat-api/Gallery_Details/",
      formData
    );
    const vibes = [data, ...gallerySect];
    setGallery(vibes);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="px-10 flex flex-col">
      <div className="mt-20">
        <Table data={gallerySect} />
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
                Gallery Section
              </h2>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                Perfom CRUD to this section
              </p>

              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label
                    htmlFor="title"
                    className="block xl:text-lg text-sm font-medium leading-6 text-gray-900"
                  >
                    Title
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      defaultValue={"HAT-image"}
                      onChange={handleChange}
                      name="title"
                      id="title"
                      autoComplete="given-name"
                      className="block w-full rounded-2xl border-0 py-2 px-7 outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#b67a3d] sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                {/* image1 */}
                <div className="col-span-full">
                  <label
                    htmlFor="cover-photo"
                    className="block xl:text-lg text-sm font-medium leading-6 text-gray-900"
                  >
                    Photo
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
                            onChange={handleChange}
                            name="image"
                            type="file"
                            className="sr-only"
                          />
                        </label>
                      </div>
                      <p className="text-xs leading-5 text-gray-600">
                        Name: {picture?.image?.name}
                      </p>
                      <p className="text-xs leading-5 text-gray-600">
                        Size: {picture?.image?.size}
                      </p>
                      <p className="text-xs leading-5 text-gray-600">
                        Type: {picture?.image?.type}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-end items-end">
            <motion.button
              onClick={postGallerydata}
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

export default GallerySect;
