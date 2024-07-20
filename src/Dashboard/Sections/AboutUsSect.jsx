import { PhotoIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Table from "../Componentz/Table";
import { useContext, useState } from "react";
import HomePageContext from "../../Context/HomePageContext";
import axiosInstance from "../../Context/axiosInstance";
import { toast } from "react-toastify";

export default function AboutUsSect() {
  const { AboutUSSect, setAboutUs } = useContext(HomePageContext);
  const [AboutData, setData] = useState({
    title: "",
    subtitle: "",
    description: "",
    image: null,
  });

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

  console.log(AboutData);

  // Asynchronous Fuctions
  async function postData() {
    const formData = new FormData();
    formData.append("title", AboutData.title);
    formData.append("subtitle", AboutData.subtitle);
    formData.append("description", AboutData.description);
    formData.append("image", AboutData.image);
    console.log(formData);

    try {
      const { data } = await axiosInstance.post(
        "/hat-api/About_Details/",
        formData
      );
      const vibes = [data, ...AboutUSSect];
      setAboutUs(vibes);
      toast.success("Image Posted Successfully");
    } catch (error) {
      toast.error("Image upload failed");
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handlePost = () => {
    if (AboutData.title !== "" && AboutData.image !== null) {
      postData();
    } else {
      toast.error("Fill all seactions");
    }
  };

  return (
    <div className="px-10 flex flex-col mb-20 mt-24">
      <h1 className="md:text-xl border-l-[#b67a3d] shadow-xl bg-slate-50 py-3  border-r-[#b67a3d] border-r-8  border-l-8 mb-5 font-bold uppercase">
        <span className="ml-2">AboutUs Section</span>
      </h1>
      <div className="mt-10 bg-slate-100 shadow-xl mb-10 ">
        <Table data={AboutUSSect} />
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
        {/* title and secriptions */}
        <h1 className="md:text-xl border-l-[#b67a3d] shadow-lg bg-slate-50 py-3  border-r-[#b67a3d] border-r-8  border-l-8 mb-5 font-bold uppercase">
          <span className="ml-2">Add/create more AboutUs Sections</span>
          <br />
          <span className="ml-2 mt-1 text-sm leading-6 text-gray-600">
            To this section you can add more data to aboutus section
          </span>
        </h1>
        <form onSubmit={handleSubmit} className=" ">
          <div className="space-y-12 mt-5">
            <div className="pb-12">
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label
                    htmlFor="title"
                    className="block py-2 bg-slate-50 w-[200px] mb-2 shadow uppercase border-l-8 border-l-[#b67a3d] xl:text-lg text-sm font-medium leading-6 text-gray-900"
                  >
                    <span className="ml-2">title</span>
                  </label>
                  <div className="mt-4 px-4">
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
                  <div className="mt-4 px-4">
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
                  <div className="mt-4 px-4">
                    <textarea
                      id="description"
                      onChange={handleChange}
                      name="description"
                      rows={3}
                      className="block w-full h-[300px] rounded-2xl border-0 p-7 text-gray-900 shadow-lg ring-1 ring-inset outline-none ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#b67a3d] sm:text-sm sm:leading-6"
                    />
                  </div>
                  <p className="mt-3 px-4 text-sm leading-6 text-gray-600">
                    number of words {AboutData?.description.length}
                  </p>
                </div>

                <div className="col-span-full">
                  <label
                    htmlFor="cover-photo"
                    className="block py-2 bg-slate-50 w-[200px] mb-2 shadow uppercase border-l-8 border-l-[#b67a3d] xl:text-lg text-sm font-medium leading-6 text-gray-900"
                  >
                    <span className="ml-2">photo</span>
                  </label>
                  <div className="mt-4 flex justify-center rounded-lg border border-dashed border-gray-900 px-6 py-10">
                    <div className="text-center">
                      <PhotoIcon
                        className="mx-auto h-12 w-12 text-gray-300"
                        aria-hidden="true"
                      />
                      <div className="mt-4 flex flex-row text-sm items-center gap-x-4 leading-6 text-gray-600">
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
                            required
                            className="sr-only"
                          />
                        </label>
                        <p className="text-xs leading-5 text-gray-600">
                          PNG, JPG, GIF up to 10MB
                        </p>
                      </div>
                      <p className="text-xs leading-5 text-gray-600">
                        Name: {AboutData?.image?.name}
                      </p>
                      <p className="text-xs leading-5 text-gray-600">
                        Size: {AboutData?.image?.size}
                      </p>
                      <p className="text-xs leading-5 text-gray-600">
                        Type: {AboutData?.image?.type}
                      </p>
                    </div>
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
