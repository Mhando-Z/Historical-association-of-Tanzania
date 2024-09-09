import { PhotoIcon } from "@heroicons/react/20/solid";
import React, { useContext, useState } from "react";
import HomePageContext from "../../Context/HomePageContext";
import Table from "../Componentz/Table";
import { motion } from "framer-motion";
import axiosInstance from "../../Context/axiosInstance";
import { toast } from "react-toastify";
import { useDropzone } from "react-dropzone";
import { MdCreateNewFolder } from "react-icons/md";

function CompanySect() {
  const { companies, setCompany } = useContext(HomePageContext);
  const [previewURL, setPreviewURL] = useState(null);
  const [company, setData] = useState({
    title: "",
    image: null,
  });

  // handle inputs
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

  // handle synchronous functions
  async function postCompanyData() {
    const formData = new FormData();
    formData.append("title", company.title);
    formData.append("image", company.image);

    try {
      const { data } = await axiosInstance.post("hat-api/Companies/", formData);
      const updatedCompanies = [data, ...companies];
      setCompany(updatedCompanies);
      setPreviewURL(null);
      toast.success("Company data upload was a success");
    } catch (error) {
      toast.error("Company data upload failed");
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  // handlePost
  const handlePost = () => {
    if (company.title !== "" && company.image !== null) {
      postCompanyData();
    } else {
      toast.error("Fill all sections");
    }
  };

  // Drag and drop feature
  const onDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setData((data) => ({ ...data, image: file }));
      setPreviewURL(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "image/*",
  });

  return (
    <div className="container flex flex-col mx-auto mb-20">
      <div className="mt-10 mb-10 shadow bg-slate-100">
        <Table data={companies} />
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
        className="bg-slate-100  border-b-2 border-b-[#b67a3d] shadow"
      >
        {/* Title and descriptions */}
        <h1 className="px-4 py-3 mb-5 font-bold uppercase md:text-lg">
          <MdCreateNewFolder className="text-3xl" />
          <span className="">Add/Create</span>
          <br />
          <span className="text-sm text-gray-600 capitalize ">
            To this section you can add more data on Companies Section
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
                      className="block w-full rounded-2xl border-0 py-2 px-7 outline-none text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#b67a3d] sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                {/* Drag and drop feature */}
                <div className="px-4 shadow col-span-full">
                  <label
                    htmlFor="cover-photo"
                    className="block mb-2 text-sm font-medium leading-6 text-gray-900 capitalize xl:text-lg"
                  >
                    <span className="">Photo</span>
                  </label>
                  <div
                    {...getRootProps()}
                    className="relative flex justify-center px-6 py-10 mt-4 border border-gray-900 border-dashed rounded-lg"
                  >
                    <input {...getInputProps()} />
                    <div className="text-center">
                      <PhotoIcon
                        className="w-12 h-12 mx-auto text-gray-300"
                        aria-hidden="true"
                      />
                      <div className="flex mt-4 text-sm leading-6 text-gray-600">
                        <p className="text-gray-600">
                          Drag 'n' drop some files here, or click to select
                          files
                        </p>
                      </div>
                      {company.image && (
                        <div>
                          <p className="text-xs leading-5 text-gray-600">
                            Name: {company.image.name}
                          </p>
                          <p className="text-xs leading-5 text-gray-600">
                            Size: {company.image.size}
                          </p>
                          <p className="text-xs leading-5 text-gray-600">
                            Type: {company.image.type}
                          </p>
                        </div>
                      )}
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
          <div className="flex flex-col items-end justify-end px-4 mb-4">
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

export default CompanySect;
