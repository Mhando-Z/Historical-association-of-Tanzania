import HomePageContext from "../../Context/HomePageContext";
import { PhotoIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import React, { useContext, useState } from "react";
import Table from "../Componentz/Table";
import axiosInstance from "../../Context/axiosInstance";
import { toast } from "react-toastify";

function PresidentSect() {
  const { PresidentSect, setPresident } = useContext(HomePageContext);
  const [previewURL1, setPreviewURL1] = useState(null);
  const [previewURL2, setPreviewURL2] = useState(null);
  const [presoData, setData] = useState({
    title: "",
    subtitle: "",
    description: "",
    image: null,
    image2: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "image" || name === "image2") {
      const file = files[0];
      const reader = new FileReader();

      reader.onloadend = () => {
        setData((data) => ({ ...data, [name]: file }));

        if (name === "image") {
          setPreviewURL1(reader.result); // Set preview for first image
        } else if (name === "image2") {
          setPreviewURL2(reader.result); // Set preview for second image
        }
      };
      if (file) {
        reader.readAsDataURL(file);
      }
    } else {
      setData((data) => ({ ...data, [name]: value }));
    }
  };

  const handleDrop = (e, name) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setData((data) => ({ ...data, [name]: file }));

      if (name === "image") {
        setPreviewURL1(reader.result); // Set preview for first image
      } else if (name === "image2") {
        setPreviewURL2(reader.result); // Set preview for second image
      }
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  // Asynchronous Function
  async function posPresotdata() {
    const formData = new FormData();
    formData.append("title", presoData.title);
    formData.append("subtitle", presoData.subtitle);
    formData.append("description", presoData.description);
    formData.append("image", presoData.image);
    formData.append("image2", presoData.image2);

    try {
      const { data } = await axiosInstance.post("hat-api/President/", formData);
      const vibes = [data, ...PresidentSect];
      setPresident(vibes);
      setPreviewURL1(null);
      setPreviewURL2(null);
      toast.success("data upload was a success");
    } catch (error) {
      toast.error("data upload was a failure");
      console.error(error);
    }
  }

  // Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handlePost = () => {
    if (presoData.title !== "" && presoData.image !== null) {
      posPresotdata();
    } else {
      toast.error("Fill all sections");
    }
  };

  return (
    <div className="container flex flex-col mx-auto mt-24 mb-20">
      <h1 className="md:text-xl border-l-[#b67a3d] shadow-xl bg-slate-50 py-3  border-r-[#b67a3d] border-r-8  border-l-8 mb-5 font-bold uppercase">
        <span className="ml-2">President Section</span>
      </h1>
      <div className="mt-10 mb-10 shadow-xl bg-slate-100 ">
        <Table data={PresidentSect} />
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
        className="bg-slate-100  border-b-4 border-b-[#b67a3d] shadow-2xl"
      >
        {/* title and descriptions */}
        <h1 className="md:text-xl border-l-[#b67a3d] shadow-lg bg-slate-50 py-3  border-r-[#b67a3d] border-r-8  border-l-8 mb-5 font-bold uppercase">
          <span className="ml-2">Add data to president Sections</span>
          <br />
          <span className="mt-1 ml-2 text-sm leading-6 text-gray-600">
            To this section you can add more data to president section
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
                      name="title"
                      required
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
                  <div className="px-4 mt-4">
                    <input
                      type="text"
                      name="subtitle"
                      onChange={handleChange}
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
                      className="block p-7 w-full h-[300px]  rounded-2xl border-0 text-gray-900 shadow-lg ring-1 ring-inset outline-none ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#b67a3d] sm:text-sm sm:leading-6"
                      defaultValue={""}
                    />
                  </div>
                  <p className="px-4 mt-3 text-sm leading-6 text-gray-600">
                    Number of words {presoData?.description.length}
                  </p>
                </div>
                {/* image1 */}
                <div
                  className="border-2 border-gray-300 border-dashed shadow-lg col-span-full"
                  onDrop={(e) => handleDrop(e, "image")}
                  onDragOver={handleDragOver}
                >
                  <label
                    htmlFor="cover-photo"
                    className="block py-2 bg-slate-50 w-[200px] mb-2 shadow uppercase border-l-8 border-l-[#b67a3d] xl:text-lg text-sm font-medium leading-6 text-gray-900"
                  >
                    <span className="ml-2">Photo1</span>
                  </label>
                  <div className="relative flex justify-center px-6 py-10 mt-4 rounded-lg">
                    <div className="text-center">
                      <PhotoIcon
                        className="w-12 h-12 mx-auto text-gray-300"
                        aria-hidden="true"
                      />
                      <div className="flex mt-4 text-sm leading-6 text-gray-600">
                        <label
                          htmlFor="image"
                          className="relative font-semibold text-indigo-600 bg-white rounded-md cursor-pointer focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
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
                        Name: {presoData?.image?.name}
                      </p>
                      <p className="text-xs leading-5 text-gray-600">
                        Size: {presoData?.image?.size}
                      </p>
                      <p className="text-xs leading-5 text-gray-600">
                        Type: {presoData?.image?.type}
                      </p>
                    </div>
                    {/* image */}
                    {previewURL1 && (
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
                          src={previewURL1}
                          alt="Preview"
                          className="h-[230px] ml-40 lg:ml-0 lg:aspect-video  aspect-square object-cover rounded-xl"
                        />
                      </motion.div>
                    )}
                  </div>
                </div>
                {/* image2 */}
                <div
                  className="border-2 border-gray-300 border-dashed shadow-lg col-span-full"
                  onDrop={(e) => handleDrop(e, "image2")}
                  onDragOver={handleDragOver}
                >
                  <label
                    htmlFor="cover-photo"
                    className="block py-2 bg-slate-50 w-[200px] mb-2 shadow uppercase border-l-8 border-l-[#b67a3d] xl:text-lg text-sm font-medium leading-6 text-gray-900"
                  >
                    <span className="ml-2">Photo2</span>
                  </label>
                  <div className="relative flex justify-center px-6 py-10 mt-4 rounded-lg">
                    <div className="text-center">
                      <PhotoIcon
                        className="w-12 h-12 mx-auto text-gray-300"
                        aria-hidden="true"
                      />
                      <div className="flex flex-row items-center mt-4 text-sm leading-6 text-gray-600 gap-x-4">
                        <label
                          htmlFor="image2"
                          className="relative font-semibold text-indigo-600 bg-white rounded-md cursor-pointer focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
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
                        Name: {presoData?.image2?.name}
                      </p>
                      <p className="text-xs leading-5 text-gray-600">
                        Size: {presoData?.image2?.size}
                      </p>
                      <p className="text-xs leading-5 text-gray-600">
                        Type: {presoData?.image2?.type}
                      </p>
                    </div>
                    {/* image */}
                    {previewURL2 && (
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
                          src={previewURL2}
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

export default PresidentSect;
