import { PhotoIcon } from "@heroicons/react/24/solid";
import React, { useContext, useState } from "react";
import Table from "../Componentz/Table";
import HomePageContext from "../../Context/HomePageContext";
import { motion } from "framer-motion";
import axiosInstance from "../../Context/axiosInstance";
import { toast } from "react-toastify";

function HeroSect() {
  const { heroSect, setHero } = useContext(HomePageContext);
  const [previewURL, setPreviewURL] = useState(null);
  const [heroData, setData] = useState({
    title: "",
    subtitle: "",
    description: "",
    image: null,
  });

  // Handle file changes (from input or drop)
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      const file = files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setData((data) => ({ ...data, image: file }));
        setPreviewURL(reader.result);
      };
      if (file) {
        reader.readAsDataURL(file);
      }
    } else {
      setData((data) => ({ ...data, [name]: value }));
    }
  };

  // Handle file drop
  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file && file.type.match("image.*")) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setData((data) => ({ ...data, image: file }));
        setPreviewURL(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Prevent default behavior for dragover
  const handleDragOver = (e) => {
    e.preventDefault();
  };

  // Asynchronous function to post hero data
  async function postHerodata() {
    const formData = new FormData();
    formData.append("title", heroData.title);
    formData.append("subtitle", heroData.subtitle);
    formData.append("description", heroData.description);
    formData.append("image", heroData.image);

    try {
      const { data } = await axiosInstance.post("hat-api/heroSect/", formData);
      const vibes = [data, ...heroSect];
      setHero(vibes);
      setPreviewURL(null);
      toast.success("Data upload was a success");
    } catch (error) {
      toast.error("Data upload was a failure");
      console.error(error.response);
    }
  }

  // Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handlePost = () => {
    if (heroData.title !== "" && heroData.image !== null) {
      postHerodata();
    } else {
      toast.error("Fill all sections");
    }
  };

  return (
    <div className="container flex flex-col mx-auto mt-24 mb-20">
      <h1 className="md:text-xl border-l-[#b67a3d] shadow-xl bg-slate-50 py-3  border-r-[#b67a3d] border-r-8  border-l-8 mb-5 font-bold uppercase">
        <span className="ml-2">Hero Section</span>
      </h1>

      <div className="mt-10 mb-10 shadow-xl bg-slate-100 ">
        <Table data={heroSect} />
      </div>
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
        {/* Title and descriptions */}
        <h1 className="md:text-xl border-l-[#b67a3d] shadow-lg bg-slate-50 py-3  border-r-[#b67a3d] border-r-8  border-l-8 mb-5 font-bold uppercase">
          <span className="ml-2">Add/Create More AboutUs Sections</span>
          <br />
          <span className="mt-1 ml-2 text-sm leading-6 text-gray-600">
            To this section you can add more data on AboutUs section
          </span>
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="mt-5 space-y-12">
            <div className="pb-12">
              <div className="grid grid-cols-1 mt-10 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label
                    htmlFor="title"
                    className="block py-2 bg-slate-50 w-[200px] mb-2 shadow uppercase border-l-8 border-l-[#b67a3d] xl:text-lg text-sm font-medium leading-6 text-gray-900"
                  >
                    <span className="ml-2">Title</span>
                  </label>
                  <div className="px-4 mt-4">
                    <input
                      type="text"
                      required
                      onChange={handleChange}
                      name="title"
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
                  <div className="px-4 mt-4">
                    <input
                      type="text"
                      onChange={handleChange}
                      name="subtitle"
                      id="subtitle"
                      autoComplete="given-name"
                      className="block w-full rounded-2xl border-0 py-2 px-7 outline-none text-gray-900 shadow-lg ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#b67a3d] sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="col-span-full">
                  <label
                    htmlFor="description"
                    className="block py-2 bg-slate-50 w-[200px] mb-2 shadow uppercase border-l-8 border-l-[#b67a3d] xl:text-lg text-sm font-medium leading-6 text-gray-900"
                  >
                    <span className="ml-2">Description</span>
                  </label>
                  <div className="px-4 mt-4">
                    <textarea
                      id="description"
                      onChange={handleChange}
                      name="description"
                      rows={3}
                      className="block w-full h-[300px] rounded-2xl border-0 p-7 text-gray-900 shadow-lg ring-1 ring-inset outline-none ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#b67a3d] sm:text-sm sm:leading-6"
                    />
                  </div>
                  <p className="px-4 mt-3 text-sm leading-6 text-gray-600">
                    Number of words: {heroData?.description.length}
                  </p>
                </div>

                <div
                  className="border-2 border-gray-300 border-dashed shadow-lg col-span-full"
                  onDrop={handleDrop}
                  onDragOver={handleDragOver}
                >
                  <label
                    htmlFor="cover-photo"
                    className="block py-2 bg-slate-50 w-[200px] mb-2 shadow uppercase border-l-8 border-l-[#b67a3d] xl:text-lg text-sm font-medium leading-6 text-gray-900"
                  >
                    <span className="ml-2">Photo</span>
                  </label>
                  <div className="relative flex justify-center px-6 py-10 mt-4 border border-gray-900 border-dashed rounded-lg">
                    <div className="text-center">
                      <PhotoIcon
                        className="w-12 h-12 mx-auto text-gray-300"
                        aria-hidden="true"
                      />
                      <div className="flex flex-row items-center mt-4 text-sm leading-6 text-gray-600 gap-x-4">
                        <label
                          htmlFor="image"
                          className="relative font-semibold text-indigo-600 bg-white rounded-md cursor-pointer focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                        >
                          <span>Upload a file</span>
                          <input
                            id="image"
                            onChange={handleChange}
                            name="image"
                            type="file"
                            required
                            className="sr-only"
                          />
                        </label>
                        <p className="text-xs leading-5 text-gray-600">
                          PNG, JPG, GIF up to 10MB
                        </p>
                      </div>
                      <p className="text-xs leading-5 text-gray-600">
                        Name: {heroData?.image?.name}
                      </p>
                      <p className="text-xs leading-5 text-gray-600">
                        Size: {heroData?.image?.size}
                      </p>
                      <p className="text-xs leading-5 text-gray-600">
                        Type: {heroData?.image?.type}
                      </p>
                    </div>
                    {previewURL && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0, x: 100 }}
                        animate={{ opacity: 1, scale: 1, x: 1 }}
                        transition={{
                          duration: 0.5,
                          ease: "easeOut",
                          type: "spring",
                        }}
                        className="absolute right-0 top-0 bottom-0 h-full rounded-2xl w-[400px] size-20"
                      >
                        <img
                          src={previewURL}
                          alt="Preview"
                          className="h-[230px] ml-40 lg:ml-0 lg:aspect-video  aspect-square object-cover rounded-xl"
                        />
                      </motion.div>
                    )}
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

export default HeroSect;
