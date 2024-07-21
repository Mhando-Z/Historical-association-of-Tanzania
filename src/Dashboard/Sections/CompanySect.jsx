import { PhotoIcon } from "@heroicons/react/20/solid";
import React, { useContext, useState } from "react";
import HomePageContext from "../../Context/HomePageContext";
import Table from "../Componentz/Table";
import { motion } from "framer-motion";
import axiosInstance from "../../Context/axiosInstance";
import { toast } from "react-toastify";
import { useDropzone } from "react-dropzone";

function CompanySect() {
  const { companies, setCompany } = useContext(HomePageContext);
  const [previewURL, setPreviewURL] = useState(null);
  const [company, setData] = useState({
    name: "",
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
    formData.append("name", company.name);
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
    if (company.name !== "" && company.image !== null) {
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
    <div className="px-10 flex flex-col mb-20 mt-24">
      <h1 className="md:text-xl border-l-[#b67a3d] shadow-xl bg-slate-50 py-3  border-r-[#b67a3d] border-r-8  border-l-8 mb-5 font-bold uppercase">
        <span className="ml-2">Companies</span>
      </h1>
      <div className="mt-10 bg-slate-100 mb-10 shadow-xl">
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
        className="bg-slate-100  border-b-4 border-b-[#b67a3d] shadow-2xl"
      >
        <form onSubmit={handleSubmit}>
          <div className="space-y-12 mt-5">
            <div className="pb-12">
              <h1 className="md:text-xl border-l-[#b67a3d] shadow-md bg-slate-50 py-3  border-r-[#b67a3d] border-r-8  border-l-8 mb-5 font-bold uppercase">
                <span className="ml-2">
                  Add/post more company data to Company Section
                </span>
                <br />
                <span className="ml-2 mt-1 text-sm leading-6 text-gray-600">
                  Add more company details to this section
                </span>
              </h1>

              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label
                    htmlFor="name"
                    className="block py-2 bg-slate-50 w-[200px] mb-2 shadow uppercase border-l-8 border-l-[#b67a3d] xl:text-lg text-sm font-medium leading-6 text-gray-900"
                  >
                    <span className="ml-2">Name</span>
                  </label>
                  <div className="mt-4 px-4">
                    <input
                      type="text"
                      onChange={handleChange}
                      name="name"
                      id="name"
                      required
                      autoComplete="given-name"
                      className="block w-full rounded-2xl border-0 py-2 px-7 outline-none text-gray-900 shadow-lg ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#b67a3d] sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                {/* Drag and drop feature */}
                <div className="col-span-full shadow-lg">
                  <label
                    htmlFor="image"
                    className="block py-2 bg-slate-50 w-[200px] mb-2 shadow uppercase border-l-8 border-l-[#b67a3d] xl:text-lg text-sm font-medium leading-6 text-gray-900"
                  >
                    <span className="ml-2">Photo</span>
                  </label>
                  <div
                    {...getRootProps()}
                    className="mt-4 relative flex justify-center rounded-lg border border-dashed border-gray-900 px-6 py-10"
                  >
                    <input {...getInputProps()} />
                    <div className="text-center">
                      <PhotoIcon
                        className="mx-auto h-12 w-12 text-gray-300"
                        aria-hidden="true"
                      />
                      <div className="mt-4 flex text-sm leading-6 text-gray-600">
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
          <div className="flex flex-col mb-4 px-4 justify-end items-end">
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
