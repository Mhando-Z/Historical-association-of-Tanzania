import HomePageContext from "../../Context/HomePageContext";
import { PhotoIcon } from "@heroicons/react/24/solid";
import React, { useContext, useState } from "react";
import Table from "../Componentz/Table";
import { motion } from "framer-motion";
import axiosInstance from "../../Context/axiosInstance";
import { toast } from "react-toastify";
import { MdCreateNewFolder } from "react-icons/md";

function StaffsSect() {
  const { StaffsSect, setStaffs } = useContext(HomePageContext);
  const [previewURL, setPreviewURL] = useState(null);
  const [staffs, setData] = useState({
    name: "",
    description: "",
    image: null,
    position: "",
    contact1: "",
    contact2: "",
    contact3: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      handleFileChange(files[0]);
    } else {
      setData((data) => ({ ...data, [name]: value }));
    }
  };

  const handleFileChange = (file) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      setData((data) => ({ ...data, image: file }));
      setPreviewURL(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const file = e.dataTransfer.files[0];
    handleFileChange(file);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  async function postStaffsdata() {
    const formData = new FormData();
    formData.append("name", staffs.name);
    formData.append("image", staffs.image);
    formData.append("position", staffs.position);
    formData.append("contact1", staffs.contact1);
    formData.append("contact2", staffs.contact2);
    formData.append("contact3", staffs.contact3);
    formData.append("description", staffs.description);

    try {
      const { data } = await axiosInstance.post("hat-api/Staffs/", formData);
      const vibes = [data, ...StaffsSect];
      setStaffs(vibes);
      setPreviewURL(null);
      toast.success("Data upload was a success");
    } catch (error) {
      toast.error("Data upload failed");
    }
  }

  const handlePost = () => {
    if (staffs.name !== "" && staffs.image !== null) {
      postStaffsdata();
    } else {
      toast.error("Fill all sections");
    }
  };

  return (
    <div className="container flex flex-col mx-auto mb-20">
      <div className="mt-10 mb-10 shadow bg-slate-100">
        <Table data={StaffsSect} />
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 0.5,
          duration: 1,
          ease: "easeOut",
          stiffness: 140,
          type: "spring",
        }}
        className="bg-slate-100 border-b-4 border-b-[#b67a3d]"
      >
        {/* Title and descriptions */}
        <h1 className="px-4 py-3 mb-5 font-bold uppercase md:text-lg">
          <MdCreateNewFolder className="text-3xl" />
          <span className="">Add more staff members</span>
          <br />
          <span className="mt-1 text-sm leading-6 text-gray-600">
            To this section you can add new staff members
          </span>
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="mt-5 space-y-12">
            <div className="pb-12">
              <div className="grid grid-cols-1 mt-10 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="px-4 sm:col-span-3">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium leading-6 text-gray-900 capitalize xl:text-lg"
                  >
                    <span className="">Name</span>
                  </label>
                  <div className="">
                    <input
                      type="text"
                      required
                      onChange={handleChange}
                      name="name"
                      id="name"
                      autoComplete="given-name"
                      className="block w-full rounded-2xl border-0 py-2 px-7 outline-none text-gray-900 shadow ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#b67a3d] sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="px-4 sm:col-span-3">
                  <label
                    htmlFor="position"
                    className="block text-sm font-medium leading-6 text-gray-900 capitalize xl:text-lg"
                  >
                    <span className="">Position</span>
                  </label>
                  <div className="">
                    <input
                      type="text"
                      onChange={handleChange}
                      name="position"
                      id="position"
                      autoComplete="given-name"
                      className="block w-full rounded-2xl border-0 py-2 px-7 outline-none text-gray-900 shadow ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#b67a3d] sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="px-4 sm:col-span-3">
                  <label
                    htmlFor="contact1"
                    className="block text-sm font-medium leading-6 text-gray-900 capitalize xl:text-lg"
                  >
                    <span className="">Email</span>
                  </label>
                  <div className="">
                    <input
                      type="email"
                      onChange={handleChange}
                      name="contact1"
                      id="contact1"
                      autoComplete="given-name"
                      className="block w-full rounded-2xl border-0 py-2 px-7 outline-none text-gray-900 shadow ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#b67a3d] sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="px-4 sm:col-span-3">
                  <label
                    htmlFor="contact2"
                    className="block text-sm font-medium leading-6 text-gray-900 capitalize xl:text-lg"
                  >
                    <span className="">Phone Number</span>
                  </label>
                  <div className="">
                    <input
                      type="text"
                      onChange={handleChange}
                      name="contact2"
                      id="contact2"
                      autoComplete="given-name"
                      className="block w-full rounded-2xl border-0 py-2 px-7 outline-none text-gray-900 shadow ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#b67a3d] sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="px-4 sm:col-span-3">
                  <label
                    htmlFor="contact3"
                    className="block text-sm font-medium leading-6 text-gray-900 capitalize xl:text-lg"
                  >
                    <span className="">Social Media</span>
                  </label>
                  <div className="">
                    <input
                      type="text"
                      onChange={handleChange}
                      name="contact3"
                      id="contact3"
                      autoComplete="given-name"
                      className="block w-full rounded-2xl border-0 py-2 px-7 outline-none text-gray-900 shadow ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#b67a3d] sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="px-4 col-span-full">
                  <label
                    htmlFor="description"
                    className="block text-sm font-medium leading-6 text-gray-900 capitalize xl:text-lg"
                  >
                    <span className="">Biography</span>
                  </label>
                  <div className="">
                    <textarea
                      id="description"
                      onChange={handleChange}
                      name="description"
                      rows={3}
                      className="block w-full h-[300px] rounded-2xl border-0 p-7 text-gray-900 shadow-lg ring-1 ring-inset outline-none ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#b67a3d] sm:text-sm sm:leading-6"
                      defaultValue={""}
                    />
                  </div>
                  <p className="px-4 mt-3 text-sm leading-6 text-gray-600">
                    Number of words: {staffs?.description.length}
                  </p>
                </div>
                <div
                  className="relative px-4 border-gray-300 border-dashed shadow-lg col-span-full"
                  onDrop={handleDrop}
                  onDragOver={handleDragOver}
                >
                  <label
                    htmlFor="image"
                    className="block text-sm font-medium leading-6 text-gray-900 capitalize xl:text-lg"
                  >
                    <span className="">Image</span>
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
                            className="sr-only"
                          />
                        </label>
                        <p className="text-xs leading-5 text-gray-600">
                          PNG, JPG, GIF up to 10MB
                        </p>
                      </div>
                      <p className="text-xs leading-5 text-gray-600">
                        Name: {staffs?.image?.name}
                      </p>
                      <p className="text-xs leading-5 text-gray-600">
                        Size: {staffs?.image?.size}
                      </p>
                      <p className="text-xs leading-5 text-gray-600">
                        Type: {staffs?.image?.type}
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
              Add
            </motion.button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}

export default StaffsSect;
