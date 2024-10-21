import { PhotoIcon } from "@heroicons/react/20/solid";
import React, { useContext, useState } from "react";
import HomePageContext from "../../Context/HomePageContext";
import Table from "../Componentz/Table";
import { motion } from "framer-motion";
import axiosInstance from "../../Context/axiosInstance";
import { toast } from "react-toastify";
import { useDropzone } from "react-dropzone";
import { MdCreateNewFolder } from "react-icons/md";
import { RefreshCw } from "lucide-react";

function GallerySect() {
  const { gallerySect, setGallery } = useContext(HomePageContext);
  const [previewURL, setPreviewURL] = useState(null);
  const [loading, setLoading] = useState(false);
  const [picture, setData] = useState({
    title: "",
    image: null,
  });

  const handleDrop = (acceptedFiles) => {
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
    onDrop: handleDrop,
    accept: "image/*",
    maxSize: 10 * 1024 * 1024, // 10MB
  });

  async function postGallerydata() {
    const formData = new FormData();
    formData.append("title", picture.title);
    formData.append("image", picture.image);

    try {
      const { data } = await axiosInstance.post("hat-api/Gallery/", formData);
      const vibes = [data, ...gallerySect];
      setGallery(vibes);
      setPreviewURL(null);
      setLoading(false);
      toast.success("Image upload was a success");
    } catch (error) {
      console.error(error.response.data);
      setLoading(false);
      toast.error("Image upload failed");
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handlePost = () => {
    if (picture.title !== "" && picture.image !== null) {
      postGallerydata();
      setLoading(true);
    } else {
      toast.error("Fill all sections");
    }
  };

  return (
    <div className="container flex flex-col mx-auto mb-20">
      <div className="mt-10 mb-10 shadow bg-slate-100">
        <Table data={gallerySect} />
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
        <form onSubmit={handleSubmit}>
          <div className="mt-5 space-y-12">
            <div className="pb-12">
              <h1 className="px-4 py-3 font-bold uppercase md:text-lg">
                <MdCreateNewFolder className="text-3xl" />
                <span className="">Add/Create</span>
                <br />
                <span className="text-sm text-gray-600 capitalize ">
                  To this section you can add more pictures which will appear on
                  the gallery section
                </span>
              </h1>

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
                      onChange={(e) =>
                        setData((data) => ({ ...data, title: e.target.value }))
                      }
                      name="title"
                      id="title"
                      required
                      autoComplete="given-name"
                      className="block w-full rounded border-0 py-2 px-7 outline-none text-gray-900 shadow ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#b67a3d] sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                {/* image */}
                <div className="px-4 shadow col-span-full">
                  <label
                    htmlFor="cover-photo"
                    className="block mb-2 text-sm font-medium leading-6 text-gray-900 capitalize xl:text-lg"
                  >
                    <span className="">Photo</span>
                  </label>
                  <div
                    {...getRootProps({
                      className:
                        "mt-4 relative flex justify-center rounded-lg border border-dashed border-gray-900 px-6 py-10",
                    })}
                  >
                    <input {...getInputProps()} />
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
                        Name: {picture?.image?.name}
                      </p>
                      <p className="text-xs leading-5 text-gray-600">
                        Size: {picture?.image?.size}
                      </p>
                      <p className="text-xs leading-5 text-gray-600">
                        Type: {picture?.image?.type}
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
          <div className="flex flex-col items-end justify-end px-4 mb-4">
            <motion.button
              onClick={handlePost}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.8 }}
              transition={{ type: "spring", ease: "easeOut" }}
              className="px-5 py-1.5 bg-[#b67a3d] text-white rounded-3xl"
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

export default GallerySect;
