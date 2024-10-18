import React, { useContext, useState } from "react";
import HomePageContext from "../../Context/HomePageContext";
import axiosInstance from "../../Context/axiosInstance";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import Table from "../Componentz/Table";

function ResourceSect() {
  const { Resources, setResourceSect } = useContext(HomePageContext);
  const [ResourceData, setData] = useState({
    title: "",
    author: "",
    description: "",
    document: null,
  });

  const handleChange = (e) => {
    const { name, files, value } = e.target;

    if (name === "document") {
      // Handle document (PDF)
      const file = files[0];
      if (file) {
        setData((data) => ({ ...data, document: file })); // Save the file in state as a Blob
      }
    } else {
      setData((data) => ({ ...data, [name]: value }));
    }
  };

  async function postdata() {
    const formData = new FormData();
    formData.append("title", ResourceData.title);
    formData.append("author", ResourceData.author);
    formData.append("description", ResourceData.description);
    if (ResourceData.document) {
      formData.append("document", ResourceData.document);
    }

    try {
      const { data } = await axiosInstance.post("/hat-api/Resource/", formData);
      const updatedResources = [data, ...Resources];
      setResourceSect(updatedResources);
      toast.success("Data upload was successful");
    } catch (error) {
      toast.error("Data upload failed");
      console.error(error);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handlePost = () => {
    if (ResourceData.title !== "" && ResourceData.description !== "") {
      postdata();
    } else {
      toast.error("Fill all sections");
    }
  };

  return (
    <div className="container flex flex-col mx-auto mb-20">
      <div className="mt-10 mb-10 bg-gray-100 ">
        <Table data={Resources} />
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 0.3,
          duration: 1,
          ease: "easeOut",
          stiffness: 140,
          type: "spring",
        }}
        className="bg-slate-100 border-b-2 border-b-[#b67a3d]  "
      >
        {/* Title and descriptions */}
        <h1 className="px-4 py-3 mb-5 font-bold uppercase md:text-lg">
          <span className="">Add/Create</span>
          <br />
          <span className="text-sm text-gray-600 capitalize ">
            To this section you can add more data on Resource Section
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
                      name="title"
                      required
                      onChange={(e) =>
                        setData((data) => ({
                          ...data,
                          [e.target.name]: e.target.value,
                        }))
                      }
                      id="title"
                      autoComplete="given-name"
                      className="block w-full rounded border-0 py-2 px-7 outline-none text-gray-900   ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#b67a3d] sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="px-4 sm:col-span-3">
                  <label
                    htmlFor="author"
                    className="block mb-2 text-sm font-medium leading-6 text-gray-900 capitalize xl:text-lg"
                  >
                    <span className="">author</span>
                  </label>
                  <div className="">
                    <input
                      type="text"
                      name="author"
                      required
                      onChange={(e) =>
                        setData((data) => ({
                          ...data,
                          [e.target.name]: e.target.value,
                        }))
                      }
                      id="author"
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
                      onChange={(e) =>
                        setData((data) => ({
                          ...data,
                          [e.target.name]: e.target.value,
                        }))
                      }
                      name="description"
                      rows={3}
                      className="block p-7 w-full h-[300px] rounded-2xl border-0 text-gray-900  -lg ring-1 ring-inset outline-none ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#b67a3d] sm:text-sm sm:leading-6"
                      defaultValue={""}
                    />
                  </div>
                  <p className="px-4 mt-3 text-sm leading-6 text-gray-600">
                    Number of words {ResourceData?.description.length}
                  </p>
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

export default ResourceSect;
