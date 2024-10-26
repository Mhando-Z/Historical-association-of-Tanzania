import HomePageContext from "../../Context/HomePageContext";
import { PhotoIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import React, { useContext, useState } from "react";
import Table from "../Componentz/Table";
import axiosInstance from "../../Context/axiosInstance";
import { toast } from "react-toastify";
import { useDropzone } from "react-dropzone";
import { MdCreateNewFolder } from "react-icons/md";
import { RefreshCw } from "lucide-react";

function Researchpublications() {
  const { ResourcesSect, setResources } = useContext(HomePageContext);
  const { getResourcedata } = useContext(HomePageContext);
  const [previewURL1, setPreviewURL1] = useState(null);
  const [previewURL2, setPreviewURL2] = useState(null);
  const [loading, setLoading] = useState(false);
  const [resourceData, setData] = useState({
    title: "",
    subtitle: "",
    author: "",
    description: "",
    ref1: "",
    ref2: "",
    ref3: "",
    ref4: "",
    ref5: "",
    video_url: "",
    document: null,
    image: null,
    image2: null,
  });

  const handleChange = (e) => {
    const { name, files, value } = e.target;

    if (name === "document") {
      // Handle document (PDF)
      const file = files[0];
      if (file) {
        setData((data) => ({ ...data, document: file })); // Save the file in state as a Blob
      }
    } else if (name === "image" || name === "image2") {
      // Handle images
      const file = files[0];
      const reader = new FileReader();

      reader.onloadend = () => {
        setData((data) => ({ ...data, [name]: file }));

        if (name === "image") {
          setPreviewURL1(reader.result);
        } else if (name === "image2") {
          setPreviewURL2(reader.result);
        }
      };
      if (file) {
        reader.readAsDataURL(file);
      }
    } else {
      setData((data) => ({ ...data, [name]: value }));
    }
  };

  const handleDrop = (acceptedFiles, name) => {
    const file = acceptedFiles[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setData((data) => ({ ...data, [name]: file }));

      if (name === "image") {
        setPreviewURL1(reader.result);
      } else if (name === "image2") {
        setPreviewURL2(reader.result);
      }
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const { getRootProps: getRootProps1, getInputProps: getInputProps1 } =
    useDropzone({
      onDrop: (acceptedFiles) => handleDrop(acceptedFiles, "image"),
      accept: "image/*",
    });

  const { getRootProps: getRootProps2, getInputProps: getInputProps2 } =
    useDropzone({
      onDrop: (acceptedFiles) => handleDrop(acceptedFiles, "image2"),
      accept: "image/*",
    });

  async function postResourceData() {
    const formData = new FormData();
    // Append non-null values to formData
    formData.append("title", resourceData.title);
    formData.append("subtitle", resourceData.subtitle);
    formData.append("author", resourceData.author);
    formData.append("description", resourceData.description);
    // Add references
    formData.append("ref1", resourceData.ref1 || "");
    formData.append("ref2", resourceData.ref2 || "");
    formData.append("ref3", resourceData.ref3 || "");
    formData.append("ref4", resourceData.ref4 || "");
    formData.append("ref5", resourceData.ref5 || "");
    // Add video URL
    formData.append("video_url", resourceData.video_url || "");
    // Conditionally append files (only if they exist)
    if (resourceData.document) {
      formData.append("document", resourceData.document);
    }
    if (resourceData.image) {
      formData.append("image", resourceData.image);
    }
    if (resourceData.image2) {
      formData.append("image2", resourceData.image2);
    }

    try {
      const { data } = await axiosInstance.post("hat-api/Resources/", formData);
      const vibes = [data, ...ResourcesSect];
      setResources(vibes);
      setPreviewURL1(null);
      setPreviewURL2(null);
      setLoading(false);
      getResourcedata();
      toast.success("Data upload was a success");
    } catch (error) {
      toast.error(`Data upload was a failure`);
      console.error(error?.response?.data);
      setLoading(false);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handlePost = () => {
    if (resourceData.title !== "" && resourceData.description !== "") {
      postResourceData();
      setLoading(true);
    } else {
      toast.error("Fill all sections");
    }
  };

  return (
    <div className="container flex flex-col mx-auto mb-20">
      <div className="mt-10 mb-10 shadow bg-slate-100">
        <Table data={ResourcesSect} />
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
        className="bg-slate-100 border-b-2 border-b-[#b67a3d] shadow"
      >
        {/* Title and descriptions */}
        <h1 className="px-4 py-3 mb-5 font-bold uppercase md:text-lg">
          <MdCreateNewFolder className="text-3xl" />
          <span className="">Add/Create</span>
          <br />
          <span className="text-sm text-gray-600 capitalize ">
            To this section you can add more data on Publication Section
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
                      required
                      onChange={handleChange}
                      id="title"
                      autoComplete="given-name"
                      className="block w-full rounded border-0 py-2 px-7 outline-none text-gray-900   ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#b67a3d] sm:text-sm sm:leading-6"
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
                      onChange={handleChange}
                      id="subtitle"
                      autoComplete="given-name"
                      className="block w-full rounded border-0 py-2 px-7 outline-none text-gray-900   ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#b67a3d] sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="px-4 sm:col-span-3">
                  <label
                    htmlFor="author"
                    className="block py-2 mb-2 text-sm font-medium leading-6 text-gray-900 capitalize xl:text-lg"
                  >
                    <span className="">author</span>
                  </label>
                  <div className="">
                    <input
                      type="text"
                      name="author"
                      onChange={handleChange}
                      id="author"
                      autoComplete="given-name"
                      className="block w-full rounded border-0 py-2 px-7 outline-none text-gray-900   ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#b67a3d] sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="px-4 sm:col-span-3">
                  <label
                    htmlFor="video_url"
                    className="block py-2 mb-2 text-sm font-medium leading-6 text-gray-900 capitalize xl:text-lg"
                  >
                    <span className="">video_url</span>
                  </label>
                  <div className="">
                    <input
                      type="text"
                      name="video_url"
                      onChange={handleChange}
                      id="video_url"
                      autoComplete="given-name"
                      className="block w-full rounded border-0 py-2 px-7 outline-none text-gray-900   ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#b67a3d] sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="px-4 sm:col-span-3">
                  <label
                    htmlFor="document"
                    className="block py-2 mb-2 text-sm font-medium leading-6 text-gray-900 capitalize xl:text-lg"
                  >
                    <span className="">Upload document</span>
                  </label>
                  <div className="">
                    <input
                      type="file"
                      name="document"
                      onChange={handleChange}
                      id="document"
                      accept=".pdf"
                      className="block w-full rounded border-0 py-2 px-7 outline-none text-gray-900   ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#b67a3d] sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="px-4 col-span-full">
                  <label
                    htmlFor="description"
                    className="block py-2 mb-2 text-sm font-medium leading-6 text-gray-900 capitalize xl:text-lg"
                  >
                    <span className="">Description</span>
                  </label>
                  <div className="">
                    <textarea
                      id="description"
                      onChange={handleChange}
                      name="description"
                      rows={3}
                      className="block p-7 w-full h-[300px] rounded-2xl border-0 text-gray-900   ring-1 ring-inset outline-none ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#b67a3d] sm:text-sm sm:leading-6"
                      defaultValue={""}
                    />
                  </div>
                  <p className="px-4 mt-3 text-sm leading-6 text-gray-600">
                    Number of words {resourceData?.description.length}
                  </p>
                </div>
                {/* reference zone */}

                <div className="px-4 sm:col-span-3">
                  <label
                    htmlFor="ref1"
                    className="block py-2 mb-2 text-sm font-medium leading-6 text-gray-900 capitalize xl:text-lg"
                  >
                    <span className="">ref1</span>
                  </label>
                  <div className="">
                    <input
                      type="text"
                      name="ref1"
                      onChange={handleChange}
                      id="ref1"
                      autoComplete="given-name"
                      className="block w-full rounded border-0 py-2 px-7 outline-none text-gray-900   ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#b67a3d] sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="px-4 sm:col-span-3">
                  <label
                    htmlFor="ref2"
                    className="block py-2 mb-2 text-sm font-medium leading-6 text-gray-900 capitalize xl:text-lg"
                  >
                    <span className="">ref2</span>
                  </label>
                  <div className="">
                    <input
                      type="text"
                      name="ref2"
                      onChange={handleChange}
                      id="ref2"
                      autoComplete="given-name"
                      className="block w-full rounded border-0 py-2 px-7 outline-none text-gray-900   ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#b67a3d] sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="px-4 sm:col-span-3">
                  <label
                    htmlFor="ref3"
                    className="block py-2 mb-2 text-sm font-medium leading-6 text-gray-900 capitalize xl:text-lg"
                  >
                    <span className="">ref3</span>
                  </label>
                  <div className="">
                    <input
                      type="text"
                      name="ref3"
                      onChange={handleChange}
                      id="ref3"
                      autoComplete="given-name"
                      className="block w-full rounded border-0 py-2 px-7 outline-none text-gray-900   ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#b67a3d] sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="px-4 sm:col-span-3">
                  <label
                    htmlFor="ref4"
                    className="block py-2 mb-2 text-sm font-medium leading-6 text-gray-900 capitalize xl:text-lg"
                  >
                    <span className="">ref4</span>
                  </label>
                  <div className="">
                    <input
                      type="text"
                      name="ref4"
                      onChange={handleChange}
                      id="ref4"
                      autoComplete="given-name"
                      className="block w-full rounded border-0 py-2 px-7 outline-none text-gray-900   ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#b67a3d] sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="px-4 sm:col-span-3">
                  <label
                    htmlFor="ref5"
                    className="block py-2 mb-2 text-sm font-medium leading-6 text-gray-900 capitalize xl:text-lg"
                  >
                    <span className="">ref5</span>
                  </label>
                  <div className="">
                    <input
                      type="text"
                      name="ref5"
                      onChange={handleChange}
                      id="ref5"
                      autoComplete="given-name"
                      className="block w-full rounded border-0 py-2 px-7 outline-none text-gray-900   ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#b67a3d] sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                {/* image1 */}
                <div className="px-4 col-span-full">
                  <label
                    htmlFor="cover-photo"
                    className="block py-2 mb-2 text-sm font-medium leading-6 text-gray-900 capitalize xl:text-lg"
                  >
                    <span className="">Photo1</span>
                  </label>
                  <div
                    {...getRootProps1()}
                    className="relative flex justify-center px-6 py-10 mt-4 border border-gray-900 border-dashed rounded-lg"
                  >
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
                            {...getInputProps1()}
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
                        Name: {resourceData?.image?.name}
                      </p>
                      <p className="text-xs leading-5 text-gray-600">
                        Size: {resourceData?.image?.size}
                      </p>
                      <p className="text-xs leading-5 text-gray-600">
                        Type: {resourceData?.image?.type}
                      </p>
                    </div>
                    {previewURL1 && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                          delay: 0.3,
                          duration: 1,
                          ease: "easeOut",
                          type: "spring",
                        }}
                        className="absolute right-0 top-0 bottom-0 h-full rounded-2xl w-[400px] size-20"
                      >
                        <img
                          src={previewURL1}
                          alt="Preview"
                          className="h-[230px] ml-40 lg:ml-0 lg:aspect-video aspect-square object-cover rounded-xl"
                        />
                      </motion.div>
                    )}
                  </div>
                </div>
                {/* image2 */}
                <div className="px-4 col-span-full">
                  <label
                    htmlFor="cover-photo"
                    className="block py-2 mb-2 text-sm font-medium leading-6 text-gray-900 capitalize xl:text-lg"
                  >
                    <span className="">Photo2</span>
                  </label>
                  <div
                    {...getRootProps2()}
                    className="relative flex justify-center px-6 py-10 mt-4 border border-gray-900 border-dashed rounded-lg"
                  >
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
                            {...getInputProps2()}
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
                        Name: {resourceData?.image2?.name}
                      </p>
                      <p className="text-xs leading-5 text-gray-600">
                        Size: {resourceData?.image2?.size}
                      </p>
                      <p className="text-xs leading-5 text-gray-600">
                        Type: {resourceData?.image2?.type}
                      </p>
                    </div>
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
                          className="h-[230px] ml-40 lg:ml-0 lg:aspect-video aspect-square object-cover rounded-xl"
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
                  <span className="relative z-10">Add</span>
                </>
              )}
            </motion.button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}

export default Researchpublications;
