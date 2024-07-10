import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
  TransitionChild,
} from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useLocation } from "react-router-dom";
import { PhotoIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

export default function Drawer({ open, setOpen, dataId, datas }) {
  const locations = useLocation();

  const data = datas?.filter((dt) => {
    return dt.id === dataId;
  });
  const handleUpdate = () => {
    setOpen(false);
  };
  const changeValues = (e) => {};

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Dialog open={open} onClose={setOpen} className="relative  z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity duration-500 ease-in-out data-[closed]:opacity-0"
      />

      <div className="fixed inset-0  overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
            <DialogPanel
              transition
              className="pointer-events-auto relative w-screen max-w-3xl transform transition duration-500 ease-in-out data-[closed]:translate-x-full sm:duration-700"
            >
              <TransitionChild>
                <div className="absolute left-0 top-0 -ml-8 flex pr-2 pt-4 duration-500 ease-in-out data-[closed]:opacity-0 sm:-ml-10 sm:pr-4">
                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    className="relative rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                  >
                    <span className="absolute -inset-2.5" />
                    <span className="sr-only">Close panel</span>
                    <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                  </button>
                </div>
              </TransitionChild>
              <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                <div className="px-4 sm:px-6">
                  <DialogTitle className="text-base font-semibold leading-6 text-gray-900">
                    Panel title
                  </DialogTitle>
                </div>
                <div className="relative mt-6 flex-1 px-2">
                  {/* "/Dashboard/heroSect/" */}
                  {locations?.pathname === "/Dashboard/heroSect/" ? (
                    <div className="flex flex-col">
                      <div className="bg-slate-100 p-10 rounded-3xl">
                        <form onSubmit={handleSubmit}>
                          <div className="space-y-12 mt-5">
                            <div className="pb-12">
                              <h2 className="text-base xl:text-xl font-semibold leading-7 text-gray-900">
                                HeroSection Section
                              </h2>
                              <p className="mt-1 text-sm leading-6 text-gray-600">
                                Perfom CRUD to this section
                              </p>

                              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                <div className="sm:col-span-3">
                                  <label
                                    htmlFor="first-name"
                                    className="block xl:text-lg text-sm font-medium leading-6 text-gray-900"
                                  >
                                    Title
                                  </label>
                                  <div className="mt-2">
                                    <input
                                      defaultValue={data[0]?.title}
                                      type="text"
                                      name="first-name"
                                      id="first-name"
                                      autoComplete="given-name"
                                      className="block w-full rounded-2xl border-0 py-2 px-2 outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#b67a3d] sm:text-sm sm:leading-6"
                                    />
                                  </div>
                                </div>
                                <div className="sm:col-span-3">
                                  <label
                                    htmlFor="first-name"
                                    className="block xl:text-lg text-sm font-medium leading-6 text-gray-900"
                                  >
                                    Subtitle
                                  </label>
                                  <div className="mt-2">
                                    <input
                                      defaultValue={data[0]?.subtitle}
                                      type="text"
                                      name="first-name"
                                      id="first-name"
                                      autoComplete="given-name"
                                      className="block w-full rounded-2xl border-0 py-2 px-2 outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#b67a3d] sm:text-sm sm:leading-6"
                                    />
                                  </div>
                                </div>

                                <div className="col-span-full">
                                  <label
                                    htmlFor="about"
                                    className="block  xl:text-lg text-sm font-medium leading-6 text-gray-900"
                                  >
                                    Description
                                  </label>
                                  <div className="mt-2">
                                    <textarea
                                      defaultValue={data[0]?.description}
                                      onChange={(e) => changeValues(e)}
                                      id="about"
                                      name="about"
                                      rows={3}
                                      className="block overflow-y-auto w-full h-[300px] rounded-2xl border-0 py-2 px-2 text-gray-900 shadow-sm ring-1 ring-inset outline-none ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#b67a3d] sm:text-sm sm:leading-6"
                                    />
                                  </div>
                                  <p className="mt-3 text-sm leading-6 text-gray-600">
                                    Write a Something
                                  </p>
                                </div>
                                <div className="rounded-xl md:w-[680px] sm:w-[450px] w-full h-[300px]">
                                  <img
                                    src={`http://127.0.0.1:8000/${data[0]?.image}`}
                                    alt={data[0]?.title}
                                    className="size-40 h-[300px] object-cover rounded-xl w-full object-center"
                                  />
                                </div>

                                <div className="col-span-full">
                                  <label
                                    htmlFor="cover-photo"
                                    className="block xl:text-lg text-sm font-medium leading-6 text-gray-900"
                                  >
                                    Photo
                                  </label>
                                  <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900 px-6 py-10">
                                    <div className="text-center">
                                      <PhotoIcon
                                        className="mx-auto h-12 w-12 text-gray-300"
                                        aria-hidden="true"
                                      />
                                      <div className="mt-4 flex text-sm leading-6 text-gray-600">
                                        <label
                                          htmlFor="file-upload"
                                          className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                                        >
                                          <span>Upload a file</span>
                                          <input
                                            id="file-upload"
                                            name="file-upload"
                                            type="file"
                                            className="sr-only"
                                          />
                                        </label>
                                        <p className="pl-1">or drag and drop</p>
                                      </div>
                                      <p className="text-xs leading-5 text-gray-600">
                                        PNG, JPG, GIF up to 10MB
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col justify-end items-end">
                            <motion.button
                              onClick={handleUpdate}
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.8 }}
                              transition={{ type: "spring", ease: "easeOut" }}
                              className="px-7 py-2 bg-[#b67a3d] text-white rounded-3xl"
                            >
                              Update
                            </motion.button>
                          </div>
                        </form>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                  {/* About HAT section */}
                  {locations?.pathname === "/Dashboard/AboutSect/" ? (
                    <div className="flex flex-col">
                      <div className="bg-slate-100 p-10 rounded-3xl">
                        <form onSubmit={handleSubmit}>
                          <div className="space-y-12 mt-5">
                            <div className="pb-12">
                              <h2 className="text-base xl:text-2xl font-bold leading-7 text-gray-900">
                                About HAT Section
                              </h2>
                              <p className="mt-1 text-sm leading-6 text-gray-600">
                                Perfom CRUD to this section
                              </p>

                              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                <div className="sm:col-span-3">
                                  <label
                                    htmlFor="first-name"
                                    className="block xl:text-lg text-sm font-medium leading-6 text-gray-900"
                                  >
                                    Title
                                  </label>
                                  <div className="mt-2">
                                    <input
                                      defaultValue={data[0]?.title}
                                      type="text"
                                      name="first-name"
                                      id="first-name"
                                      autoComplete="given-name"
                                      className="block w-full rounded-2xl border-0 py-2 px-2 outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#b67a3d] sm:text-sm sm:leading-6"
                                    />
                                  </div>
                                </div>
                                <div className="sm:col-span-3">
                                  <label
                                    htmlFor="first-name"
                                    className="block xl:text-lg text-sm font-medium leading-6 text-gray-900"
                                  >
                                    Subtitle
                                  </label>
                                  <div className="mt-2">
                                    <input
                                      defaultValue={data[0]?.subtitle}
                                      type="text"
                                      name="first-name"
                                      id="first-name"
                                      autoComplete="given-name"
                                      className="block w-full rounded-2xl border-0 py-2 px-2 outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#b67a3d] sm:text-sm sm:leading-6"
                                    />
                                  </div>
                                </div>

                                <div className="col-span-full">
                                  <label
                                    htmlFor="about"
                                    className="block  xl:text-lg text-sm font-medium leading-6 text-gray-900"
                                  >
                                    Description
                                  </label>
                                  <div className="mt-2">
                                    <textarea
                                      defaultValue={data[0]?.description}
                                      onChange={(e) => changeValues(e)}
                                      id="about"
                                      name="about"
                                      rows={3}
                                      className="block overflow-y-auto w-full h-[300px] rounded-2xl border-0 py-2 px-2 text-gray-900 shadow-sm ring-1 ring-inset outline-none ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#b67a3d] sm:text-sm sm:leading-6"
                                    />
                                  </div>
                                  <p className="mt-3 text-sm leading-6 text-gray-600">
                                    Write a Something
                                  </p>
                                </div>
                                <div className="rounded-xl md:w-[680px] sm:w-[450px] w-full h-[300px]">
                                  <img
                                    src={`http://127.0.0.1:8000/${data[0]?.image}`}
                                    alt={data[0]?.title}
                                    className="size-40 h-[300px] object-cover rounded-xl w-full object-center"
                                  />
                                </div>

                                <div className="col-span-full">
                                  <label
                                    htmlFor="cover-photo"
                                    className="block xl:text-lg text-sm font-medium leading-6 text-gray-900"
                                  >
                                    Photo
                                  </label>
                                  <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900 px-6 py-10">
                                    <div className="text-center">
                                      <PhotoIcon
                                        className="mx-auto h-12 w-12 text-gray-300"
                                        aria-hidden="true"
                                      />
                                      <div className="mt-4 flex text-sm leading-6 text-gray-600">
                                        <label
                                          htmlFor="file-upload"
                                          className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                                        >
                                          <span>Upload a file</span>
                                          <input
                                            id="file-upload"
                                            name="file-upload"
                                            type="file"
                                            className="sr-only"
                                          />
                                        </label>
                                        <p className="pl-1">or drag and drop</p>
                                      </div>
                                      <p className="text-xs leading-5 text-gray-600">
                                        PNG, JPG, GIF up to 10MB
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col justify-end items-end">
                            <motion.button
                              onClick={handleUpdate}
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.8 }}
                              transition={{ type: "spring", ease: "easeOut" }}
                              className="px-7 py-2 bg-[#b67a3d] text-white rounded-3xl"
                            >
                              Update
                            </motion.button>
                          </div>
                        </form>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                  {/* President section */}
                  {locations?.pathname === "/Dashboard/PresoSect/" ? (
                    <div className="flex flex-col">
                      <div className="bg-slate-100 p-10 rounded-3xl">
                        <form onSubmit={handleSubmit}>
                          <div className="space-y-12 mt-5">
                            <div className="pb-12">
                              <h2 className="text-base xl:text-2xl font-bold leading-7 text-gray-900">
                                President Section
                              </h2>
                              <p className="mt-1 text-sm leading-6 text-gray-600">
                                Perfom CRUD to this section
                              </p>

                              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                <div className="sm:col-span-3">
                                  <label
                                    htmlFor="first-name"
                                    className="block xl:text-lg text-sm font-medium leading-6 text-gray-900"
                                  >
                                    Title
                                  </label>
                                  <div className="mt-2">
                                    <input
                                      defaultValue={data[0]?.title}
                                      type="text"
                                      name="first-name"
                                      id="first-name"
                                      autoComplete="given-name"
                                      className="block w-full rounded-2xl border-0 py-2 px-2 outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#b67a3d] sm:text-sm sm:leading-6"
                                    />
                                  </div>
                                </div>
                                <div className="sm:col-span-3">
                                  <label
                                    htmlFor="first-name"
                                    className="block xl:text-lg text-sm font-medium leading-6 text-gray-900"
                                  >
                                    Subtitle
                                  </label>
                                  <div className="mt-2">
                                    <input
                                      defaultValue={data[0]?.subtitle}
                                      type="text"
                                      name="first-name"
                                      id="first-name"
                                      autoComplete="given-name"
                                      className="block w-full rounded-2xl border-0 py-2 px-2 outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#b67a3d] sm:text-sm sm:leading-6"
                                    />
                                  </div>
                                </div>

                                <div className="col-span-full">
                                  <label
                                    htmlFor="about"
                                    className="block  xl:text-lg text-sm font-medium leading-6 text-gray-900"
                                  >
                                    Description
                                  </label>
                                  <div className="mt-2">
                                    <textarea
                                      defaultValue={data[0]?.description}
                                      onChange={(e) => changeValues(e)}
                                      id="about"
                                      name="about"
                                      rows={3}
                                      className="block overflow-y-auto w-full h-[300px] rounded-2xl border-0 py-2 px-2 text-gray-900 shadow-sm ring-1 ring-inset outline-none ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#b67a3d] sm:text-sm sm:leading-6"
                                    />
                                  </div>
                                  <p className="mt-3 text-sm leading-6 text-gray-600">
                                    Write a Something
                                  </p>
                                </div>
                                <div className="rounded-xl flex flex-row sm:w-[400px] gap-x-2 w-full h-[300px]">
                                  <img
                                    src={`http://127.0.0.1:8000/${data[0]?.image}`}
                                    alt={data[0]?.title}
                                    className="size-40 h-[300px] object-cover rounded-xl w-full object-center"
                                  />
                                  <img
                                    src={`http://127.0.0.1:8000/${data[0]?.image2}`}
                                    alt={data[0]?.title}
                                    className="size-40 h-[300px] object-cover rounded-xl w-full object-center"
                                  />
                                </div>
                                {/* image 1 */}
                                <div className="col-span-full">
                                  <label
                                    htmlFor="cover-photo"
                                    className="block xl:text-lg text-sm font-medium leading-6 text-gray-900"
                                  >
                                    Photo
                                  </label>
                                  <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900 px-6 py-10">
                                    <div className="text-center">
                                      <PhotoIcon
                                        className="mx-auto h-12 w-12 text-gray-300"
                                        aria-hidden="true"
                                      />
                                      <div className="mt-4 flex text-sm leading-6 text-gray-600">
                                        <label
                                          htmlFor="file-upload"
                                          className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                                        >
                                          <span>Upload a file</span>
                                          <input
                                            id="file-upload"
                                            name="file-upload"
                                            type="file"
                                            className="sr-only"
                                          />
                                        </label>
                                        <p className="pl-1">or drag and drop</p>
                                      </div>
                                      <p className="text-xs leading-5 text-gray-600">
                                        PNG, JPG, GIF up to 10MB
                                      </p>
                                    </div>
                                  </div>
                                </div>
                                {/* image 2 */}
                                <div className="col-span-full">
                                  <label
                                    htmlFor="cover-photo"
                                    className="block xl:text-lg text-sm font-medium leading-6 text-gray-900"
                                  >
                                    Photo
                                  </label>
                                  <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900 px-6 py-10">
                                    <div className="text-center">
                                      <PhotoIcon
                                        className="mx-auto h-12 w-12 text-gray-300"
                                        aria-hidden="true"
                                      />
                                      <div className="mt-4 flex text-sm leading-6 text-gray-600">
                                        <label
                                          htmlFor="file-upload"
                                          className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                                        >
                                          <span>Upload a file</span>
                                          <input
                                            id="file-upload"
                                            name="file-upload"
                                            type="file"
                                            className="sr-only"
                                          />
                                        </label>
                                        <p className="pl-1">or drag and drop</p>
                                      </div>
                                      <p className="text-xs leading-5 text-gray-600">
                                        PNG, JPG, GIF up to 10MB
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col justify-end items-end">
                            <motion.button
                              onClick={handleUpdate}
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.8 }}
                              transition={{ type: "spring", ease: "easeOut" }}
                              className="px-7 py-2 bg-[#b67a3d] text-white rounded-3xl"
                            >
                              Update
                            </motion.button>
                          </div>
                        </form>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                  {/* Announcement section */}
                  {locations?.pathname === "/Dashboard/Announcement/" ? (
                    <div className="flex flex-col">
                      <div className="bg-slate-100 p-10 rounded-3xl">
                        <form onSubmit={handleSubmit}>
                          <div className="space-y-12 mt-5">
                            <div className="pb-12">
                              <h2 className="text-base xl:text-2xl font-bold leading-7 text-gray-900">
                                Announcement Section
                              </h2>
                              <p className="mt-1 text-sm leading-6 text-gray-600">
                                Perfom CRUD to this section
                              </p>

                              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                <div className="sm:col-span-3">
                                  <label
                                    htmlFor="first-name"
                                    className="block xl:text-lg text-sm font-medium leading-6 text-gray-900"
                                  >
                                    Title
                                  </label>
                                  <div className="mt-2">
                                    <input
                                      defaultValue={data[0]?.title}
                                      type="text"
                                      name="first-name"
                                      id="first-name"
                                      autoComplete="given-name"
                                      className="block w-full rounded-2xl border-0 py-2 px-2 outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#b67a3d] sm:text-sm sm:leading-6"
                                    />
                                  </div>
                                </div>
                                <div className="sm:col-span-3">
                                  <label
                                    htmlFor="first-name"
                                    className="block xl:text-lg text-sm font-medium leading-6 text-gray-900"
                                  >
                                    Subtitle
                                  </label>
                                  <div className="mt-2">
                                    <input
                                      defaultValue={data[0]?.subtitle}
                                      type="text"
                                      name="first-name"
                                      id="first-name"
                                      autoComplete="given-name"
                                      className="block w-full rounded-2xl border-0 py-2 px-2 outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#b67a3d] sm:text-sm sm:leading-6"
                                    />
                                  </div>
                                </div>

                                <div className="col-span-full">
                                  <label
                                    htmlFor="about"
                                    className="block  xl:text-lg text-sm font-medium leading-6 text-gray-900"
                                  >
                                    Description
                                  </label>
                                  <div className="mt-2">
                                    <textarea
                                      defaultValue={data[0]?.description}
                                      onChange={(e) => changeValues(e)}
                                      id="about"
                                      name="about"
                                      rows={3}
                                      className="block overflow-y-auto w-full h-[300px] rounded-2xl border-0 py-2 px-2 text-gray-900 shadow-sm ring-1 ring-inset outline-none ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#b67a3d] sm:text-sm sm:leading-6"
                                    />
                                  </div>
                                  <p className="mt-3 text-sm leading-6 text-gray-600">
                                    Write a Something
                                  </p>
                                </div>
                                <div className="rounded-xl flex flex-row sm:w-[400px] gap-x-2 w-full h-[300px]">
                                  <img
                                    src={`http://127.0.0.1:8000/${data[0]?.image}`}
                                    alt={data[0]?.title}
                                    className="size-40 h-[300px] object-cover rounded-xl w-full object-center"
                                  />
                                  <img
                                    src={`http://127.0.0.1:8000/${data[0]?.image2}`}
                                    alt={data[0]?.title}
                                    className="size-40 h-[300px] object-cover rounded-xl w-full object-center"
                                  />
                                </div>
                                {/* image 1 */}
                                <div className="col-span-full">
                                  <label
                                    htmlFor="cover-photo"
                                    className="block xl:text-lg text-sm font-medium leading-6 text-gray-900"
                                  >
                                    Photo
                                  </label>
                                  <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900 px-6 py-10">
                                    <div className="text-center">
                                      <PhotoIcon
                                        className="mx-auto h-12 w-12 text-gray-300"
                                        aria-hidden="true"
                                      />
                                      <div className="mt-4 flex text-sm leading-6 text-gray-600">
                                        <label
                                          htmlFor="file-upload"
                                          className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                                        >
                                          <span>Upload a file</span>
                                          <input
                                            id="file-upload"
                                            name="file-upload"
                                            type="file"
                                            className="sr-only"
                                          />
                                        </label>
                                        <p className="pl-1">or drag and drop</p>
                                      </div>
                                      <p className="text-xs leading-5 text-gray-600">
                                        PNG, JPG, GIF up to 10MB
                                      </p>
                                    </div>
                                  </div>
                                </div>
                                {/* image 2 */}
                                <div className="col-span-full">
                                  <label
                                    htmlFor="cover-photo"
                                    className="block xl:text-lg text-sm font-medium leading-6 text-gray-900"
                                  >
                                    Photo
                                  </label>
                                  <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900 px-6 py-10">
                                    <div className="text-center">
                                      <PhotoIcon
                                        className="mx-auto h-12 w-12 text-gray-300"
                                        aria-hidden="true"
                                      />
                                      <div className="mt-4 flex text-sm leading-6 text-gray-600">
                                        <label
                                          htmlFor="file-upload"
                                          className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                                        >
                                          <span>Upload a file</span>
                                          <input
                                            id="file-upload"
                                            name="file-upload"
                                            type="file"
                                            className="sr-only"
                                          />
                                        </label>
                                        <p className="pl-1">or drag and drop</p>
                                      </div>
                                      <p className="text-xs leading-5 text-gray-600">
                                        PNG, JPG, GIF up to 10MB
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col justify-end items-end">
                            <motion.button
                              onClick={handleUpdate}
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.8 }}
                              transition={{ type: "spring", ease: "easeOut" }}
                              className="px-7 py-2 bg-[#b67a3d] text-white rounded-3xl"
                            >
                              Update
                            </motion.button>
                          </div>
                        </form>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                  {/* Gallery section */}
                  {locations?.pathname === "/Dashboard/GallerySect/" ? (
                    <div className="flex flex-col">
                      <div className="bg-slate-100 p-10 rounded-3xl">
                        <form onSubmit={handleSubmit}>
                          <div className="space-y-12 mt-5">
                            <div className="pb-12">
                              <h2 className="text-base xl:text-2xl font-bold leading-7 text-gray-900">
                                Gallery Section
                              </h2>
                              <p className="mt-1 text-sm leading-6 text-gray-600">
                                Perfom CRUD to this section
                              </p>

                              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                <div className="sm:col-span-3">
                                  <label
                                    htmlFor="first-name"
                                    className="block xl:text-lg text-sm font-medium leading-6 text-gray-900"
                                  >
                                    Title
                                  </label>
                                  <div className="mt-2">
                                    <input
                                      defaultValue={data[0]?.title}
                                      type="text"
                                      name="first-name"
                                      id="first-name"
                                      autoComplete="given-name"
                                      className="block w-full rounded-2xl border-0 py-2 px-2 outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#b67a3d] sm:text-sm sm:leading-6"
                                    />
                                  </div>
                                </div>
                                <div className="sm:col-span-3">
                                  <label
                                    htmlFor="first-name"
                                    className="block xl:text-lg text-sm font-medium leading-6 text-gray-900"
                                  >
                                    Subtitle
                                  </label>
                                  <div className="mt-2">
                                    <input
                                      defaultValue={data[0]?.subtitle}
                                      type="text"
                                      name="first-name"
                                      id="first-name"
                                      autoComplete="given-name"
                                      className="block w-full rounded-2xl border-0 py-2 px-2 outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#b67a3d] sm:text-sm sm:leading-6"
                                    />
                                  </div>
                                </div>
                                <div className="rounded-xl md:w-[680px] sm:w-[450px] w-full h-[300px]">
                                  <img
                                    src={`http://127.0.0.1:8000/${data[0]?.image}`}
                                    alt={data[0]?.title}
                                    className="size-40 h-[300px] object-cover rounded-xl w-full object-center"
                                  />
                                </div>

                                <div className="col-span-full">
                                  <label
                                    htmlFor="cover-photo"
                                    className="block xl:text-lg text-sm font-medium leading-6 text-gray-900"
                                  >
                                    Photo
                                  </label>
                                  <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900 px-6 py-10">
                                    <div className="text-center">
                                      <PhotoIcon
                                        className="mx-auto h-12 w-12 text-gray-300"
                                        aria-hidden="true"
                                      />
                                      <div className="mt-4 flex text-sm leading-6 text-gray-600">
                                        <label
                                          htmlFor="file-upload"
                                          className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                                        >
                                          <span>Upload a file</span>
                                          <input
                                            id="file-upload"
                                            name="file-upload"
                                            type="file"
                                            className="sr-only"
                                          />
                                        </label>
                                        <p className="pl-1">or drag and drop</p>
                                      </div>
                                      <p className="text-xs leading-5 text-gray-600">
                                        PNG, JPG, GIF up to 10MB
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col justify-end items-end">
                            <motion.button
                              onClick={handleUpdate}
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.8 }}
                              transition={{ type: "spring", ease: "easeOut" }}
                              className="px-7 py-2 bg-[#b67a3d] text-white rounded-3xl"
                            >
                              Update
                            </motion.button>
                          </div>
                        </form>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                  {/* Staffs section */}
                  {locations?.pathname === "/Dashboard/StaffsSect/" ? (
                    <div className="flex flex-col">
                      <div className="bg-slate-100 p-10 rounded-3xl">
                        <form onSubmit={handleSubmit}>
                          <div className="space-y-12 mt-5">
                            <div className="pb-12">
                              <h2 className="text-base xl:text-2xl font-bold leading-7 text-gray-900">
                                Staffs Section
                              </h2>
                              <p className="mt-1 text-sm leading-6 text-gray-600">
                                Perfom CRUD to this section
                              </p>

                              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                <div className="sm:col-span-3">
                                  <label
                                    htmlFor="first-name"
                                    className="block xl:text-lg text-sm font-medium leading-6 text-gray-900"
                                  >
                                    Name
                                  </label>
                                  <div className="mt-2">
                                    <input
                                      defaultValue={data[0]?.name}
                                      type="text"
                                      name="first-name"
                                      id="first-name"
                                      autoComplete="given-name"
                                      className="block w-full rounded-2xl border-0 py-2 px-2 outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#b67a3d] sm:text-sm sm:leading-6"
                                    />
                                  </div>
                                </div>
                                <div className="sm:col-span-3">
                                  <label
                                    htmlFor="first-name"
                                    className="block xl:text-lg text-sm font-medium leading-6 text-gray-900"
                                  >
                                    Position
                                  </label>
                                  <div className="mt-2">
                                    <input
                                      defaultValue={data[0]?.position}
                                      type="text"
                                      name="first-name"
                                      id="first-name"
                                      autoComplete="given-name"
                                      className="block w-full rounded-2xl border-0 py-2 px-2 outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#b67a3d] sm:text-sm sm:leading-6"
                                    />
                                  </div>
                                </div>
                                <div className="sm:col-span-3">
                                  <label
                                    htmlFor="first-name"
                                    className="block xl:text-lg text-sm font-medium leading-6 text-gray-900"
                                  >
                                    Email
                                  </label>
                                  <div className="mt-2">
                                    <input
                                      defaultValue={data[0]?.contact1}
                                      type="text"
                                      name="first-name"
                                      id="first-name"
                                      autoComplete="given-name"
                                      className="block w-full rounded-2xl border-0 py-2 px-2 outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#b67a3d] sm:text-sm sm:leading-6"
                                    />
                                  </div>
                                </div>
                                <div className="sm:col-span-3">
                                  <label
                                    htmlFor="first-name"
                                    className="block xl:text-lg text-sm font-medium leading-6 text-gray-900"
                                  >
                                    Phone Number
                                  </label>
                                  <div className="mt-2">
                                    <input
                                      defaultValue={data[0]?.contact2}
                                      type="text"
                                      name="first-name"
                                      id="first-name"
                                      autoComplete="given-name"
                                      className="block w-full rounded-2xl border-0 py-2 px-2 outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#b67a3d] sm:text-sm sm:leading-6"
                                    />
                                  </div>
                                </div>
                                <div className="sm:col-span-3">
                                  <label
                                    htmlFor="first-name"
                                    className="block xl:text-lg text-sm font-medium leading-6 text-gray-900"
                                  >
                                    Social Media
                                  </label>
                                  <div className="mt-2">
                                    <input
                                      defaultValue={data[0]?.contact3}
                                      type="text"
                                      name="first-name"
                                      id="first-name"
                                      autoComplete="given-name"
                                      className="block w-full rounded-2xl border-0 py-2 px-2 outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#b67a3d] sm:text-sm sm:leading-6"
                                    />
                                  </div>
                                </div>

                                <div className="col-span-full">
                                  <label
                                    htmlFor="about"
                                    className="block  xl:text-lg text-sm font-medium leading-6 text-gray-900"
                                  >
                                    Description
                                  </label>
                                  <div className="mt-2">
                                    <textarea
                                      defaultValue={data[0]?.description}
                                      onChange={(e) => changeValues(e)}
                                      id="about"
                                      name="about"
                                      rows={3}
                                      className="block overflow-y-auto w-full h-[300px] rounded-2xl border-0 py-2 px-2 text-gray-900 shadow-sm ring-1 ring-inset outline-none ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#b67a3d] sm:text-sm sm:leading-6"
                                    />
                                  </div>
                                  <p className="mt-3 text-sm leading-6 text-gray-600">
                                    Write a Something
                                  </p>
                                </div>
                                <div className="rounded-xl md:w-[680px] sm:w-[450px] w-full h-[300px]">
                                  <img
                                    src={`http://127.0.0.1:8000/${data[0]?.image}`}
                                    alt={data[0]?.title}
                                    className="size-40 h-[300px] object-cover rounded-xl w-full object-center"
                                  />
                                </div>

                                <div className="col-span-full">
                                  <label
                                    htmlFor="cover-photo"
                                    className="block xl:text-lg text-sm font-medium leading-6 text-gray-900"
                                  >
                                    Photo
                                  </label>
                                  <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900 px-6 py-10">
                                    <div className="text-center">
                                      <PhotoIcon
                                        className="mx-auto h-12 w-12 text-gray-300"
                                        aria-hidden="true"
                                      />
                                      <div className="mt-4 flex text-sm leading-6 text-gray-600">
                                        <label
                                          htmlFor="file-upload"
                                          className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                                        >
                                          <span>Upload a file</span>
                                          <input
                                            id="file-upload"
                                            name="file-upload"
                                            type="file"
                                            className="sr-only"
                                          />
                                        </label>
                                        <p className="pl-1">or drag and drop</p>
                                      </div>
                                      <p className="text-xs leading-5 text-gray-600">
                                        PNG, JPG, GIF up to 10MB
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col justify-end items-end">
                            <motion.button
                              onClick={handleUpdate}
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.8 }}
                              transition={{ type: "spring", ease: "easeOut" }}
                              className="px-7 py-2 bg-[#b67a3d] text-white rounded-3xl"
                            >
                              Update
                            </motion.button>
                          </div>
                        </form>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </div>
    </Dialog>
  );
}
