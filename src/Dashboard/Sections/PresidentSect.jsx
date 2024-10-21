import HomePageContext from "../../Context/HomePageContext";
import { PhotoIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import React, { useContext, useState } from "react";
import Table from "../Componentz/Table";
import axiosInstance from "../../Context/axiosInstance";
import { toast } from "react-toastify";
import { MdCreateNewFolder } from "react-icons/md";
import { RefreshCw } from "lucide-react";

function PresidentSect() {
  const { PresidentSect, setPresident } = useContext(HomePageContext);
  const [previewURL1, setPreviewURL1] = useState(null);
  const [previewURL2, setPreviewURL2] = useState(null);
  const [loading, setLoading] = useState(false);
  const [presoData, setData] = useState({
    title: "",
    subtitle: "",
    description: "",
    description2: "",
    description3: "",
    name: "",
    cheo: "",
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
    formData.append("name", presoData.name);
    formData.append("cheo", presoData.cheo);
    formData.append("subtitle", presoData.subtitle);
    formData.append("description", presoData.description);
    formData.append("description2", presoData.description2);
    formData.append("description3", presoData.description3);
    if (presoData.image) {
      formData.append("image", presoData.image);
    }
    if (presoData.image2) {
      formData.append("image", presoData.image2);
    }

    try {
      const { data } = await axiosInstance.post("hat-api/President/", formData);
      const vibes = [data, ...PresidentSect];
      setPresident(vibes);
      setPreviewURL1(null);
      setPreviewURL2(null);
      setLoading(false);
      toast.success("data upload was a success");
    } catch (error) {
      toast.error("data upload was a failure");
      console.error(error);
      setLoading(false);
    }
  }

  // Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handlePost = () => {
    if (presoData.title !== "" && presoData.description !== "") {
      posPresotdata();
      setLoading(true);
    } else {
      toast.error("Fill all sections");
    }
  };

  return (
    <div className="container flex flex-col mx-auto mb-20">
      <div className="mt-10 mb-10 shadow bg-slate-100 ">
        <Table data={PresidentSect} />
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1,
          delay: 0.5,
          ease: "easeOut",
          stiffness: 140,
          type: "spring",
        }}
        className="bg-slate-100  border-b-4 border-b-[#b67a3d]"
      >
        {/* Title and descriptions */}
        <h1 className="px-4 py-3 mb-5 font-bold uppercase md:text-lg">
          <MdCreateNewFolder className="text-3xl" />
          <span className="">Add/Create</span>
          <br />
          <span className="text-sm text-gray-600 capitalize ">
            To this section you can add more data on President Section
          </span>
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="mt-5 space-y-12">
            <div className="pb-12">
              <div className="grid grid-cols-1 mt-10 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="px-4 sm:col-span-3">
                  <label
                    htmlFor="title"
                    className="block mb-2 text-sm font-medium leading-6 text-gray-900 capitalize xl:text-lg"
                  >
                    <span className="">Title</span>
                  </label>
                  <div className="">
                    <input
                      type="text"
                      placeholder="title"
                      required
                      onChange={handleChange}
                      name="title"
                      id="title"
                      autoComplete="given-name"
                      className="block w-full rounded border-0 py-2 px-7 outline-none text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#b67a3d] sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="px-4 sm:col-span-3">
                  <label
                    htmlFor="subtitle"
                    className="block mb-2 text-sm font-medium leading-6 text-gray-900 capitalize xl:text-lg"
                  >
                    <span className="ml-2">subtitle</span>
                  </label>
                  <div className="">
                    <input
                      type="text"
                      placeholder="subtitle"
                      required
                      onChange={handleChange}
                      name="subtitle"
                      id="subtitle"
                      autoComplete="given-name"
                      className="block w-full rounded border-0 py-2 px-7 outline-none text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#b67a3d] sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="px-4 sm:col-span-3">
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium leading-6 text-gray-900 capitalize xl:text-lg"
                  >
                    <span className="">name</span>
                  </label>
                  <div className="">
                    <input
                      type="text"
                      placeholder="name"
                      required
                      onChange={handleChange}
                      name="name"
                      id="name"
                      autoComplete="given-name"
                      className="block w-full rounded border-0 py-2 px-7 outline-none text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#b67a3d] sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="px-4 sm:col-span-3">
                  <label
                    htmlFor="cheo"
                    className="block mb-2 text-sm font-medium leading-6 text-gray-900 capitalize xl:text-lg"
                  >
                    <span className="ml-2">Position</span>
                  </label>
                  <div className="">
                    <input
                      type="text"
                      placeholder="cheo"
                      required
                      onChange={handleChange}
                      name="cheo"
                      id="cheo"
                      autoComplete="given-name"
                      className="block w-full rounded border-0 py-2 px-7 outline-none text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#b67a3d] sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="px-4 col-span-full">
                  <label
                    htmlFor="description"
                    className="block mb-2 text-sm font-medium leading-6 text-gray-900 capitalize xl:text-lg"
                  >
                    <span className="">Introduction</span>
                  </label>
                  <div className="">
                    <textarea
                      id="description"
                      onChange={handleChange}
                      name="description"
                      rows={3}
                      className="block p-7 w-full h-[300px]  rounded-2xl border-0 text-gray-900 lg ring-1 ring-inset outline-none ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#b67a3d] sm:text-sm sm:leading-6"
                      defaultValue={""}
                    />
                  </div>
                  <p className="px-4 mt-3 text-sm leading-6 text-gray-600">
                    Number of words {presoData?.description.length}
                  </p>
                </div>
                <div className="px-4 col-span-full">
                  <label
                    htmlFor="description2"
                    className="block mb-2 text-sm font-medium leading-6 text-gray-900 capitalize xl:text-lg"
                  >
                    <span className="">Main Body</span>
                  </label>
                  <div className="">
                    <textarea
                      id="description2"
                      onChange={handleChange}
                      name="description2"
                      rows={3}
                      className="block p-7 w-full h-[300px]  rounded-2xl border-0 text-gray-900 lg ring-1 ring-inset outline-none ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#b67a3d] sm:text-sm sm:leading-6"
                      defaultValue={""}
                    />
                  </div>
                  <p className="px-4 mt-3 text-sm leading-6 text-gray-600">
                    Number of words {presoData?.description2.length}
                  </p>
                </div>
                <div className="px-4 col-span-full">
                  <label
                    htmlFor="description3"
                    className="block mb-2 text-sm font-medium leading-6 text-gray-900 capitalize xl:text-lg"
                  >
                    <span className="">Conclusion</span>
                  </label>
                  <div className="">
                    <textarea
                      id="description3"
                      onChange={handleChange}
                      name="description3"
                      rows={3}
                      className="block p-7 w-full h-[300px]  rounded-2xl border-0 text-gray-900 lg ring-1 ring-inset outline-none ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#b67a3d] sm:text-sm sm:leading-6"
                      defaultValue={""}
                    />
                  </div>
                  <p className="px-4 mt-3 text-sm leading-6 text-gray-600">
                    Number of words {presoData?.description3.length}
                  </p>
                </div>
                {/* image1 */}
                <div
                  className="px-4 border-2 border-gray-300 border-dashed lg col-span-full"
                  onDrop={(e) => handleDrop(e, "image")}
                  onDragOver={handleDragOver}
                >
                  <label
                    htmlFor="cover-photo"
                    className="block py-2 mb-2 text-sm font-medium text-gray-900 uppercase xl:text-lg"
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
                  className="px-4 border-2 border-gray-300 border-dashed lg col-span-full"
                  onDrop={(e) => handleDrop(e, "image2")}
                  onDragOver={handleDragOver}
                >
                  <label
                    htmlFor="cover-photo"
                    className="block py-2 mb-2 text-sm font-medium text-gray-900 uppercase xl:text-lg"
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
              className="px-5 py-1 bg-[#b67a3d] text-white rounded-3xl"
            >
              {loading ? (
                <RefreshCw className="animate-spin" />
              ) : (
                <>
                  <span className="relative z-10 text-sm"> Add</span>
                </>
              )}
            </motion.button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}

export default PresidentSect;
