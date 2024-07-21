import HomePageContext from "../../Context/HomePageContext";
import { PhotoIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import React, { useContext, useState } from "react";
import Table from "../Componentz/Table";
import axiosInstance from "../../Context/axiosInstance";
import { toast } from "react-toastify";
import { useDropzone } from "react-dropzone";

function ResourcesSect() {
  const { ResourcesSect, setResources } = useContext(HomePageContext);
  const [previewURL1, setPreviewURL1] = useState(null);
  const [previewURL2, setPreviewURL2] = useState(null);
  const [resourceData, setData] = useState({
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
    formData.append("title", resourceData.title);
    formData.append("subtitle", resourceData.subtitle);
    formData.append("description", resourceData.description);
    formData.append("image", resourceData.image);
    formData.append("image2", resourceData.image2);

    try {
      const { data } = await axiosInstance.post("hat-api/Resources/", formData);
      const vibes = [data, ...ResourcesSect];
      setResources(vibes);
      setPreviewURL1(null);
      setPreviewURL2(null);
      toast.success("Data upload was a success");
    } catch (error) {
      toast.error("Data upload was a failure");
      console.error(error);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handlePost = () => {
    if (resourceData.title !== "" && resourceData.image !== null) {
      postResourceData();
    } else {
      toast.error("Fill all sections");
    }
  };

  return (
    <div className="px-10 flex flex-col mb-20 mt-24">
      <h1 className="md:text-xl border-l-[#b67a3d] shadow-xl bg-slate-50 py-3 border-r-[#b67a3d] border-r-8 border-l-8 mb-5 font-bold uppercase">
        <span className="ml-2">Resources Section</span>
      </h1>
      <div className="mt-10 bg-slate-100 shadow-xl mb-10">
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
        className="bg-slate-100 border-b-4 border-b-[#b67a3d] shadow-2xl"
      >
        <h1 className="md:text-xl border-l-[#b67a3d] shadow-lg bg-slate-50 py-3 border-r-[#b67a3d] border-r-8 border-l-8 mb-5 font-bold uppercase">
          <span className="ml-2">Add data to Resources Section</span>
          <br />
          <span className="ml-2 mt-1 text-sm leading-6 text-gray-600">
            To this section, you can add more data to resources section
          </span>
        </h1>
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
                  <div className="mt-4 px-4">
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
                  <div className="mt-4 px-4">
                    <textarea
                      id="description"
                      onChange={handleChange}
                      name="description"
                      rows={3}
                      className="block p-7 w-full h-[300px] rounded-2xl border-0 text-gray-900 shadow-lg ring-1 ring-inset outline-none ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#b67a3d] sm:text-sm sm:leading-6"
                      defaultValue={""}
                    />
                  </div>
                  <p className="mt-3 px-4 text-sm leading-6 text-gray-600">
                    Number of words {resourceData?.description.length}
                  </p>
                </div>
                {/* image1 */}
                <div className="col-span-full shadow-lg">
                  <label
                    htmlFor="cover-photo"
                    className="block py-2 bg-slate-50 w-[200px] mb-2 shadow uppercase border-l-8 border-l-[#b67a3d] xl:text-lg text-sm font-medium leading-6 text-gray-900"
                  >
                    <span className="ml-2">Photo1</span>
                  </label>
                  <div
                    {...getRootProps1()}
                    className="mt-4 relative flex justify-center rounded-lg border border-dashed border-gray-900 px-6 py-10"
                  >
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
                          className="h-[230px] ml-40 lg:ml-0 lg:aspect-video aspect-square object-cover rounded-xl"
                        />
                      </motion.div>
                    )}
                  </div>
                </div>
                {/* image2 */}
                <div className="col-span-full shadow-lg">
                  <label
                    htmlFor="cover-photo"
                    className="block py-2 bg-slate-50 w-[200px] mb-2 shadow uppercase border-l-8 border-l-[#b67a3d] xl:text-lg text-sm font-medium leading-6 text-gray-900"
                  >
                    <span className="ml-2">Photo2</span>
                  </label>
                  <div
                    {...getRootProps2()}
                    className="mt-4 relative flex justify-center rounded-lg border border-dashed border-gray-900 px-6 py-10"
                  >
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
          <div className="flex flex-col mb-3 px-4 justify-end items-end">
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

export default ResourcesSect;
