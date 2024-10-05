import React, { useContext, useState } from "react";
import { motion } from "framer-motion";
import { PhotoIcon } from "@heroicons/react/24/outline";
import Table from "../Componentz/Table";
import HomePageContext from "../../Context/HomePageContext";
import axiosInstance from "../../Context/axiosInstance";
import { toast } from "react-toastify";
import { useDropzone } from "react-dropzone";
import { MdCreateNewFolder } from "react-icons/md";

function AnnouncementsSect() {
  const { AnnounceSect, setAnnounce } = useContext(HomePageContext);
  const [previewURL1, setPreviewURL1] = useState(null);
  const [previewURL2, setPreviewURL2] = useState(null);
  const [AnnounceData, setData] = useState({
    title: "",
    description: "",
    image: null,
    image2: null,
  });

  const handleDrop = (acceptedFiles, imageIndex) => {
    const file = acceptedFiles[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      if (imageIndex === 1) {
        setData((data) => ({ ...data, image: file }));
        setPreviewURL1(reader.result);
      } else if (imageIndex === 2) {
        setData((data) => ({ ...data, image2: file }));
        setPreviewURL2(reader.result);
      }
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const { getRootProps: getRootProps1, getInputProps: getInputProps1 } =
    useDropzone({
      onDrop: (acceptedFiles) => handleDrop(acceptedFiles, 1),
      accept: "image/*",
      maxSize: 10 * 1024 * 1024, // 10MB
    });

  const { getRootProps: getRootProps2, getInputProps: getInputProps2 } =
    useDropzone({
      onDrop: (acceptedFiles) => handleDrop(acceptedFiles, 2),
      accept: "image/*",
      maxSize: 10 * 1024 * 1024, // 10MB
    });

  async function postdata() {
    const formData = new FormData();
    formData.append("title", AnnounceData.title);
    formData.append("description", AnnounceData.description);
    formData.append("image", AnnounceData.image);
    formData.append("image2", AnnounceData.image2);

    try {
      const { data } = await axiosInstance.post("/hat-api/Announce/", formData);
      const vibes = [data, ...AnnounceSect];
      setPreviewURL1(null);
      setPreviewURL2(null);
      setAnnounce(vibes);
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
    if (AnnounceData.title !== "" && AnnounceData.image !== null) {
      postdata();
    } else {
      toast.error("Fill all sections");
    }
  };

  return (
    <div className="container flex flex-col mx-auto mb-20">
      <div className="mt-10 mb-10 bg-gray-100 ">
        <Table data={AnnounceSect} />
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
          <MdCreateNewFolder className="text-3xl" />
          <span className="">Add/Create</span>
          <br />
          <span className="text-sm text-gray-600 capitalize ">
            To this section you can add more data on Announcement Section
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
                    Number of words {AnnounceData?.description.length}
                  </p>
                </div>
                {/* image1 */}
                <div className="px-4 col-span-full">
                  <label
                    htmlFor="cover-photo1"
                    className="block py-2 mb-2 text-sm font-medium leading-6 text-gray-900 capitalize xl:text-lg"
                  >
                    <span className="">Photo 1</span>
                  </label>
                  <div
                    {...getRootProps1({
                      className:
                        "mt-4 relative flex justify-center rounded-lg border border-dashed border-gray-900 px-6 py-10",
                    })}
                  >
                    <input {...getInputProps1()} />
                    <div className="text-center">
                      <PhotoIcon
                        className="w-12 h-12 mx-auto text-gray-300"
                        aria-hidden="true"
                      />
                      <div className="flex mt-4 text-sm leading-6 text-gray-600">
                        <p className="text-xs leading-5 text-gray-600">
                          Drag & drop or click to upload
                        </p>
                      </div>
                      <p className="text-xs leading-5 text-gray-600">
                        Name: {AnnounceData?.image?.name}
                      </p>
                      <p className="text-xs leading-5 text-gray-600">
                        Size: {AnnounceData?.image?.size}
                      </p>
                      <p className="text-xs leading-5 text-gray-600">
                        Type: {AnnounceData?.image?.type}
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
                <div className="px-4 col-span-full">
                  <label
                    htmlFor="cover-photo2"
                    className="block py-2 mb-2 text-sm font-medium leading-6 text-gray-900 capitalize xl:text-lg"
                  >
                    <span className="">Photo 2</span>
                  </label>
                  <div
                    {...getRootProps2({
                      className:
                        "mt-4 relative flex justify-center rounded-lg border border-dashed border-gray-900 px-6 py-10",
                    })}
                  >
                    <input {...getInputProps2()} />
                    <div className="text-center">
                      <PhotoIcon
                        className="w-12 h-12 mx-auto text-gray-300"
                        aria-hidden="true"
                      />
                      <div className="flex flex-row items-center mt-4 text-sm leading-6 text-gray-600 gap-x-4">
                        <p className="text-xs leading-5 text-gray-600">
                          Drag & drop or click to upload
                        </p>
                      </div>
                      <p className="text-xs leading-5 text-gray-600">
                        Name: {AnnounceData?.image2?.name}
                      </p>
                      <p className="text-xs leading-5 text-gray-600">
                        Size: {AnnounceData?.image2?.size}
                      </p>
                      <p className="text-xs leading-5 text-gray-600">
                        Type: {AnnounceData?.image2?.type}
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

export default AnnouncementsSect;
