import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
  TransitionChild,
} from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useContext, useEffect, useState } from "react";
import HomePageContext from "../../Context/HomePageContext";
import axiosInstance from "../../Context/axiosInstance";
import { toast } from "react-toastify";
//

// Fuction Component
export default function Drawer({ open, setOpen, dataId, datas }) {
  // sections imports
  const { heroSect, setHero } = useContext(HomePageContext);
  const { PresidentSect, setPresident } = useContext(HomePageContext);
  const { AnnounceSect, setAnnounce } = useContext(HomePageContext);
  const { StaffsSect, setStaffs } = useContext(HomePageContext);
  const { AboutUSSect, setAboutUs } = useContext(HomePageContext);
  const { ResourcesSect, setResources } = useContext(HomePageContext);
  const { companies, setCompany } = useContext(HomePageContext);

  //
  const locations = useLocation();
  //
  const [company, setCompny] = useState({
    name: "",
    image: null,
  });
  const [resourceData, setResource] = useState({
    title: "",
    subtitle: "",
    author: "",
    description: "",
    video_url: "",
    ref1: "",
    ref2: "",
    ref3: "",
    ref4: "",
    ref5: "",
  });

  const [heroUpdate, setHeros] = useState({
    title: "",
    subtitle: "",
    description: "",
  });
  const [AboutUsdata, setAboutus] = useState({
    title: "",
    subtitle: "",
    description: "",
  });
  const [presoData, setPresoData] = useState({
    title: "",
    subtitle: "",
    description: "",
    description2: "",
    description3: "",
    name: "",
    cheo: "",
  });
  const [AnnounceData, setAnnounceData] = useState({
    title: "",
    description: "",
  });
  const [staffs, setStaffData] = useState({
    name: "",
    position: "",
    contact1: "",
    contact2: "",
    contact3: "",
    description: "",
  });

  // data id allocaton
  const data = datas?.filter((dt) => {
    return dt.id === dataId;
  });

  useEffect(() => {
    if (locations?.pathname === "/Dashboard/Partners/") {
      if (dataId) {
        const data = datas.find((dt) => dt.id === dataId);
        if (data) {
          setCompny({
            title: data.title,
          });
        }
      }
    }
    if (locations?.pathname === "/Dashboard/heroSect/") {
      if (dataId) {
        const data = datas.find((dt) => dt.id === dataId);
        if (data) {
          setHeros({
            title: data.title,
            subtitle: data.subtitle,
            description: data.description,
          });
        }
      }
    }
    if (locations?.pathname === "/Dashboard/PresoSect/") {
      if (dataId) {
        const data = datas.find((dt) => dt.id === dataId);
        if (data) {
          setPresoData({
            title: data.title,
            subtitle: data.subtitle,
            name: data.name,
            cheo: data.cheo,
            description: data.description,
            description2: data.description2,
            description3: data.description3,
          });
        }
      }
    }
    if (locations?.pathname === "/Dashboard/Announcement/") {
      if (dataId) {
        const data = datas.find((dt) => dt.id === dataId);
        if (data) {
          setAnnounceData({
            title: data.title,
            description: data.description,
          });
        }
      }
    }
    if (locations?.pathname === "/Dashboard/StaffsSect/") {
      if (dataId) {
        const data = datas.find((dt) => dt.id === dataId);
        if (data) {
          setStaffData({
            name: data.name,
            position: data.position,
            description: data.description,
            contact1: data.contact1,
            contact2: data.contact2,
            contact3: data.contact3,
          });
        }
      }
    }
    if (locations?.pathname === "/Dashboard/AboutSect/") {
      if (dataId) {
        const data = datas.find((dt) => dt.id === dataId);
        if (data) {
          setAboutus({
            title: data.title,
            subtitle: data.subtitle,
            description: data.description,
          });
        }
      }
    }
    if (locations?.pathname === "/Dashboard/Research&publications/") {
      if (dataId) {
        const data = datas.find((dt) => dt.id === dataId);
        if (data) {
          setResource({
            title: data.title,
            subtitle: data.subtitle,
            description: data.description,
            references: data.references,
            video_url: data.video_url,
            author: data.author,
          });
        }
      }
    }
  }, [dataId, datas, locations]);

  // handle input values assignment
  const handleChange = (e) => {
    const { name, value } = e.target;

    if (locations?.pathname === "/Dashboard/Partners/") {
      setCompny((data) => {
        return { ...data, [name]: value };
      });
    }
    if (locations?.pathname === "/Dashboard/heroSect/") {
      setHeros((data) => {
        return { ...data, [name]: value };
      });
    }
    if (locations?.pathname === "/Dashboard/PresoSect/") {
      setPresoData((data) => {
        return { ...data, [name]: value };
      });
    }
    if (locations?.pathname === "/Dashboard/Announcement/") {
      setAnnounceData((data) => {
        return { ...data, [name]: value };
      });
    }
    if (locations?.pathname === "/Dashboard/StaffsSect/") {
      setStaffData((data) => {
        return { ...data, [name]: value };
      });
    }
    if (locations?.pathname === "/Dashboard/AboutSect/") {
      setAboutus((data) => {
        return { ...data, [name]: value };
      });
    }
    if (locations?.pathname === "/Dashboard/Research&publications/") {
      setResource((data) => {
        return { ...data, [name]: value };
      });
    }
  };

  // Asynchronous functions to update data
  // updates Resource Data
  async function updateResource(dataId) {
    const formData = new FormData();
    formData.append("title", resourceData.title);
    formData.append("subtitle", resourceData.subtitle);
    formData.append("author", resourceData.author);
    formData.append("description", resourceData.description);
    formData.append("ref1", resourceData.ref1);
    formData.append("ref2", resourceData.ref2);
    formData.append("ref3", resourceData.ref3);
    formData.append("ref4", resourceData.ref4);
    formData.append("ref5", resourceData.ref5);
    formData.append("video_url", resourceData.video_url);

    try {
      const response = await axiosInstance.put(
        `hat-api/Resources_Details/${dataId}/`,
        formData
      );
      // Update local state immediately after a successful update
      const updatedResource = ResourcesSect.map((Resource) =>
        Resource.id === dataId ? response.data : Resource
      );
      toast.success("Updates Applied");
      setResources(updatedResource);
      setOpen(false); // Close the drawer after update
    } catch (error) {
      toast.error("Updates Failed");
      console.error("Error updating the resource section:", error);
    }
  }

  async function updateHeroSect() {
    const formData = new FormData();
    formData.append("title", heroUpdate.title);
    formData.append("subtitle", heroUpdate.subtitle);
    formData.append("description", heroUpdate.description);

    try {
      const response = await axiosInstance.put(
        `hat-api/Hero_Details/${dataId}/`,
        formData
      );
      // Update local state immediately after a successful update
      const updatedHeroSect = heroSect.map((hero) =>
        hero.id === dataId ? response.data : hero
      );
      toast.success("Updates Applied");
      setHero(updatedHeroSect);
      setOpen(false); // Close the drawer after update
    } catch (error) {
      toast.error("Updates Failed");
      console.error("Error updating the hero section:", error);
    }
  }

  // async function fpr president
  async function updatePresidentSect() {
    const formData = new FormData();
    formData.append("title", presoData.title);
    formData.append("subtitle", presoData.subtitle);
    formData.append("description", presoData.description);

    try {
      const response = await axiosInstance.put(
        `hat-api/President_Details/${dataId}/`,
        formData
      );
      // Update local state immediately after a successful update
      const updatedPresoSect = PresidentSect.map((preso) =>
        preso.id === dataId ? response.data : preso
      );
      toast.success("Updates Applied");
      setPresident(updatedPresoSect);
      // Close the drawer after update
      setOpen(false);
    } catch (error) {
      toast.error("Updates Failed");
      console.error("Error updating the president section:", error);
    }
  }
  // async function fpr Announcements
  async function UpdateAnnounceSect() {
    const formData = new FormData();
    formData.append("title", AnnounceData.title);
    formData.append("description", AnnounceData.description);

    try {
      const response = await axiosInstance.put(
        `hat-api/Announce_Details/${dataId}/`,
        formData
      );
      // Update local state immediately after a successful update
      const updatedAnnounce = AnnounceSect.map((Announce) =>
        Announce.id === dataId ? response.data : Announce
      );
      setAnnounce(updatedAnnounce);
      // Close the drawer after update
      setOpen(false);
      toast.success("Updates Applied");
    } catch (error) {
      toast.error("Updates Failed");
      console.error("Error updating the Announcement section:", error);
    }
  }
  // async function for AboutUs
  async function UpdateCompany() {
    const formData = new FormData();
    formData.append("title", company.title);

    try {
      const response = await axiosInstance.put(
        `hat-api/Companies_Details/${dataId}/`,
        formData
      );
      // Update local state immediately after a successful update
      const update = companies.map((company) =>
        company.id === dataId ? response.data : company
      );
      setCompany(update);
      // Close the drawer after update
      setOpen(false);
      toast.success("Updates Applied");
    } catch (error) {
      console.error("Error updating the AboutUs section:", error);
      toast.error("Updates Failed");
    }
  }
  // async function for AboutUs
  async function UpdateAboutUs() {
    const formData = new FormData();
    formData.append("title", AboutUsdata.title);
    formData.append("subtitle", AboutUsdata.subtitle);
    formData.append("description", AboutUsdata.description);

    try {
      const response = await axiosInstance.put(
        `hat-api/About_Details/${dataId}/`,
        formData
      );
      // Update local state immediately after a successful update
      const updateAboutus = AboutUSSect.map((aboutus) =>
        aboutus.id === dataId ? response.data : aboutus
      );
      setAboutUs(updateAboutus);
      // Close the drawer after update
      setOpen(false);
      toast.success("Updates Applied");
    } catch (error) {
      console.error("Error updating the AboutUs section:", error);
      toast.error("Updates Failed");
    }
  }
  // async function fpr president
  async function updateStaffSect() {
    const formData = new FormData();
    formData.append("name", staffs.name);
    formData.append("position", staffs.position);
    formData.append("contact1", staffs.contact1);
    formData.append("contact2", staffs.contact2);
    formData.append("contact3", staffs.contact3);
    formData.append("description", staffs.description);

    try {
      const response = await axiosInstance.put(
        `hat-api/Staffs_Details/${dataId}/`,
        formData
      );
      // Update local state immediately after a successful update
      const updateStaffSect = StaffsSect.map((staff) =>
        staff.id === dataId ? response.data : staff
      );
      setStaffs(updateStaffSect);
      // Close the drawer after update
      setOpen(false);
      toast.success("Updates Applied");
    } catch (error) {
      console.error("Error updating the Staff section:", error);
      toast.error("Updates failed");
    }
  }

  const handleUpdate = (e) => {
    e.preventDefault();

    if (locations?.pathname === "/Dashboard/Partners/") {
      UpdateCompany();
    }
    if (locations?.pathname === "/Dashboard/heroSect/") {
      updateHeroSect();
    }
    if (locations?.pathname === "/Dashboard/Research&publications/") {
      updateResource();
    }
    if (locations?.pathname === "/Dashboard/PresoSect/") {
      updatePresidentSect();
    }
    if (locations?.pathname === "/Dashboard/StaffsSect/") {
      updateStaffSect();
    }
    if (locations?.pathname === "/Dashboard/Announcement/") {
      UpdateAnnounceSect();
    }
    if (locations?.pathname === "/Dashboard/AboutSect/") {
      UpdateAboutUs();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  // image url
  const IMAGE_BASE_URL = "https://hat-dashboard.onrender.com";

  return (
    <Dialog open={open} onClose={setOpen} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity duration-500 ease-in-out data-[closed]:opacity-0"
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut", type: "spring" }}
        className="fixed inset-0 overflow-hidden"
      >
        <div className="absolute inset-0 overflow-hidden">
          <div className="fixed inset-y-0 right-0 flex max-w-full pl-10 pointer-events-none">
            <DialogPanel
              transition
              className="pointer-events-auto relative w-screen max-w-3xl transform transition duration-500 ease-in-out data-[closed]:translate-x-full sm:duration-700"
            >
              <TransitionChild>
                <div className="absolute left-0 top-0 -ml-8 flex pr-2 pt-4 duration-500 ease-in-out data-[closed]:opacity-0 sm:-ml-10 sm:pr-4">
                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    className="relative text-gray-300 rounded-md hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                  >
                    <span className="absolute -inset-2.5" />
                    <span className="sr-only">Close panel</span>
                    <XMarkIcon aria-hidden="true" className="w-6 h-6" />
                  </button>
                </div>
              </TransitionChild>
              <div className="flex flex-col h-full py-6 overflow-y-scroll bg-white shadow-xl">
                <div className="px-4 sm:px-6">
                  <DialogTitle className="text-base font-semibold leading-6 text-gray-900">
                    Panel title
                  </DialogTitle>
                </div>
                <div className="relative flex-1 px-2 mt-6">
                  {/* "/Dashboard/heroSect/" */}
                  {locations?.pathname === "/Dashboard/heroSect/" ? (
                    <div className="flex flex-col">
                      <div className="p-10 bg-slate-100 rounded-3xl">
                        <form onSubmit={handleSubmit}>
                          <div className="mt-5 space-y-12">
                            <div className="pb-12">
                              <h2 className="text-base font-semibold leading-7 text-gray-900 xl:text-xl">
                                HeroSection Section
                              </h2>
                              <p className="mt-1 text-sm leading-6 text-gray-600">
                                Perfom CRUD to this section
                              </p>

                              <div className="grid grid-cols-1 mt-10 gap-x-6 gap-y-8 sm:grid-cols-6">
                                <div className="sm:col-span-3">
                                  <label
                                    htmlFor="title"
                                    className="block text-sm font-medium leading-6 text-gray-900 xl:text-lg"
                                  >
                                    Title
                                  </label>
                                  <div className="mt-2">
                                    <input
                                      onChange={handleChange}
                                      defaultValue={data[0]?.title}
                                      type="text"
                                      name="title"
                                      id="title"
                                      autoComplete="given-name"
                                      className="block w-full rounded-2xl border-0 py-2 px-7 outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#b67a3d] sm:text-sm sm:leading-6"
                                    />
                                  </div>
                                </div>
                                <div className="sm:col-span-3">
                                  <label
                                    htmlFor="subtitle"
                                    className="block text-sm font-medium leading-6 text-gray-900 xl:text-lg"
                                  >
                                    Subtitle
                                  </label>
                                  <div className="mt-2">
                                    <input
                                      defaultValue={data[0]?.subtitle}
                                      onChange={handleChange}
                                      type="text"
                                      name="subtitle"
                                      id="subtitle"
                                      autoComplete="given-name"
                                      className="block w-full rounded-2xl border-0 py-2 px-7 outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#b67a3d] sm:text-sm sm:leading-6"
                                    />
                                  </div>
                                </div>

                                <div className="col-span-full">
                                  <label
                                    htmlFor="about"
                                    className="block text-sm font-medium leading-6 text-gray-900 xl:text-lg"
                                  >
                                    Description
                                  </label>
                                  <div className="mt-2">
                                    <textarea
                                      defaultValue={data[0]?.description}
                                      onChange={handleChange}
                                      id="description"
                                      name="description"
                                      rows={3}
                                      className="block overflow-y-auto w-full h-[300px] rounded-2xl border-0 p-7 text-gray-900 shadow-sm ring-1 ring-inset outline-none ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#b67a3d] sm:text-sm sm:leading-6"
                                    />
                                  </div>
                                </div>
                                <div className="rounded-xl md:w-[680px] sm:w-[450px] w-full h-[300px]">
                                  <img
                                    src={`${IMAGE_BASE_URL}${data[0]?.image}`}
                                    alt={data[0]?.title}
                                    className="size-40 h-[300px] object-cover rounded-xl w-full object-center"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col items-end justify-end">
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
                  {/* "/Dashboard/Research&publications/" */}
                  {locations?.pathname ===
                  "/Dashboard/Research&publications/" ? (
                    <div className="flex flex-col">
                      <div className="p-10 bg-slate-100 rounded-3xl">
                        <form onSubmit={handleSubmit}>
                          <div className="mt-5 space-y-12">
                            <div className="pb-12">
                              <h2 className="text-base font-semibold leading-7 text-gray-900 xl:text-xl">
                                Resources Section
                              </h2>
                              <p className="mt-1 text-sm leading-6 text-gray-600">
                                Perform CRUD operations in this section
                              </p>

                              <div className="grid grid-cols-1 mt-10 gap-x-6 gap-y-8 sm:grid-cols-6">
                                <div className="sm:col-span-3">
                                  <label
                                    htmlFor="title"
                                    className="block text-sm font-medium leading-6 text-gray-900 xl:text-lg"
                                  >
                                    Title
                                  </label>
                                  <div className="mt-2">
                                    <input
                                      onChange={handleChange}
                                      defaultValue={data[0]?.title}
                                      type="text"
                                      name="title"
                                      id="title"
                                      autoComplete="given-name"
                                      className="block w-full rounded-2xl border-0 py-2 px-7 outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#b67a3d] sm:text-sm sm:leading-6"
                                    />
                                  </div>
                                </div>
                                <div className="sm:col-span-3">
                                  <label
                                    htmlFor="subtitle"
                                    className="block text-sm font-medium leading-6 text-gray-900 xl:text-lg"
                                  >
                                    Subtitle
                                  </label>
                                  <div className="mt-2">
                                    <input
                                      defaultValue={data[0]?.subtitle}
                                      onChange={handleChange}
                                      type="text"
                                      name="subtitle"
                                      id="subtitle"
                                      autoComplete="given-name"
                                      className="block w-full rounded-2xl border-0 py-2 px-7 outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#b67a3d] sm:text-sm sm:leading-6"
                                    />
                                  </div>
                                </div>
                                <div className="sm:col-span-3">
                                  <label
                                    htmlFor="author"
                                    className="block text-sm font-medium leading-6 text-gray-900 xl:text-lg"
                                  >
                                    Author
                                  </label>
                                  <div className="mt-2">
                                    <input
                                      defaultValue={data[0]?.author}
                                      onChange={handleChange}
                                      type="text"
                                      name="author"
                                      id="author"
                                      autoComplete="given-name"
                                      className="block w-full rounded-2xl border-0 py-2 px-7 outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#b67a3d] sm:text-sm sm:leading-6"
                                    />
                                  </div>
                                </div>
                                <div className="sm:col-span-3">
                                  <label
                                    htmlFor="video_url"
                                    className="block text-sm font-medium leading-6 text-gray-900 xl:text-lg"
                                  >
                                    Video URL
                                  </label>
                                  <div className="mt-2">
                                    <input
                                      defaultValue={data[0]?.video_url}
                                      onChange={handleChange}
                                      type="text"
                                      name="video_url"
                                      id="video_url"
                                      autoComplete="given-name"
                                      className="block w-full rounded-2xl border-0 py-2 px-7 outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#b67a3d] sm:text-sm sm:leading-6"
                                    />
                                  </div>
                                </div>
                                {/* reference zone */}
                                <div className="sm:col-span-3">
                                  <label
                                    htmlFor="ref1"
                                    className="block text-sm font-medium leading-6 text-gray-900 xl:text-lg"
                                  >
                                    ref1
                                  </label>
                                  <div className="mt-2">
                                    <input
                                      defaultValue={data[0]?.ref1}
                                      onChange={handleChange}
                                      type="text"
                                      name="ref1"
                                      id="ref1"
                                      autoComplete="given-name"
                                      className="block w-full rounded-2xl border-0 py-2 px-7 outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#b67a3d] sm:text-sm sm:leading-6"
                                    />
                                  </div>
                                </div>
                                <div className="sm:col-span-3">
                                  <label
                                    htmlFor="ref2"
                                    className="block text-sm font-medium leading-6 text-gray-900 xl:text-lg"
                                  >
                                    ref2
                                  </label>
                                  <div className="mt-2">
                                    <input
                                      defaultValue={data[0]?.ref2}
                                      onChange={handleChange}
                                      type="text"
                                      name="ref2"
                                      id="ref2"
                                      autoComplete="given-name"
                                      className="block w-full rounded-2xl border-0 py-2 px-7 outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#b67a3d] sm:text-sm sm:leading-6"
                                    />
                                  </div>
                                </div>
                                <div className="sm:col-span-3">
                                  <label
                                    htmlFor="ref3"
                                    className="block text-sm font-medium leading-6 text-gray-900 xl:text-lg"
                                  >
                                    ref3
                                  </label>
                                  <div className="mt-2">
                                    <input
                                      defaultValue={data[0]?.ref3}
                                      onChange={handleChange}
                                      type="text"
                                      name="ref3"
                                      id="ref3"
                                      autoComplete="given-name"
                                      className="block w-full rounded-2xl border-0 py-2 px-7 outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#b67a3d] sm:text-sm sm:leading-6"
                                    />
                                  </div>
                                </div>
                                <div className="sm:col-span-3">
                                  <label
                                    htmlFor="ref4"
                                    className="block text-sm font-medium leading-6 text-gray-900 xl:text-lg"
                                  >
                                    ref4
                                  </label>
                                  <div className="mt-2">
                                    <input
                                      defaultValue={data[0]?.ref4}
                                      onChange={handleChange}
                                      type="text"
                                      name="ref4"
                                      id="ref4"
                                      autoComplete="given-name"
                                      className="block w-full rounded-2xl border-0 py-2 px-7 outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#b67a3d] sm:text-sm sm:leading-6"
                                    />
                                  </div>
                                </div>
                                <div className="sm:col-span-3">
                                  <label
                                    htmlFor="ref5"
                                    className="block text-sm font-medium leading-6 text-gray-900 xl:text-lg"
                                  >
                                    ref5
                                  </label>
                                  <div className="mt-2">
                                    <input
                                      defaultValue={data[0]?.ref5}
                                      onChange={handleChange}
                                      type="text"
                                      name="ref5"
                                      id="ref5"
                                      autoComplete="given-name"
                                      className="block w-full rounded-2xl border-0 py-2 px-7 outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#b67a3d] sm:text-sm sm:leading-6"
                                    />
                                  </div>
                                </div>

                                <div className="col-span-full">
                                  <label
                                    htmlFor="about"
                                    className="block text-sm font-medium leading-6 text-gray-900 xl:text-lg"
                                  >
                                    Description
                                  </label>
                                  <div className="mt-2">
                                    <textarea
                                      defaultValue={data[0]?.description}
                                      onChange={handleChange}
                                      id="description"
                                      name="description"
                                      rows={3}
                                      className="block overflow-y-auto w-full h-[300px] rounded-2xl border-0 p-7 text-gray-900 shadow-sm ring-1 ring-inset outline-none ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#b67a3d] sm:text-sm sm:leading-6"
                                    />
                                  </div>
                                </div>
                                <div className="rounded-xl md:w-[680px] sm:w-[450px] w-full h-[300px]">
                                  <img
                                    src={`${IMAGE_BASE_URL}${data[0]?.image}`}
                                    alt={data[0]?.title}
                                    className="size-40 h-[300px] object-cover rounded-xl w-full object-center"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col items-end justify-end">
                            <motion.button
                              onClick={() => updateResource(data[0]?.id)}
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
                      <div className="p-10 bg-slate-100 rounded-3xl">
                        <form onSubmit={handleSubmit}>
                          <div className="mt-5 space-y-12">
                            <div className="pb-12">
                              <h2 className="text-base font-semibold leading-7 text-gray-900 xl:text-xl">
                                AboutUS Section
                              </h2>
                              <p className="mt-1 text-sm leading-6 text-gray-600">
                                Perfom CRUD to this section
                              </p>

                              <div className="grid grid-cols-1 mt-10 gap-x-6 gap-y-8 sm:grid-cols-6">
                                <div className="sm:col-span-3">
                                  <label
                                    htmlFor="title"
                                    className="block text-sm font-medium leading-6 text-gray-900 xl:text-lg"
                                  >
                                    Title
                                  </label>
                                  <div className="mt-2">
                                    <input
                                      onChange={handleChange}
                                      defaultValue={data[0]?.title}
                                      type="text"
                                      name="title"
                                      id="title"
                                      autoComplete="given-name"
                                      className="block w-full rounded-2xl border-0 py-2 px-7 outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#b67a3d] sm:text-sm sm:leading-6"
                                    />
                                  </div>
                                </div>
                                <div className="sm:col-span-3">
                                  <label
                                    htmlFor="subtitle"
                                    className="block text-sm font-medium leading-6 text-gray-900 xl:text-lg"
                                  >
                                    Subtitle
                                  </label>
                                  <div className="mt-2">
                                    <input
                                      defaultValue={data[0]?.subtitle}
                                      onChange={handleChange}
                                      type="text"
                                      name="subtitle"
                                      id="subtitle"
                                      autoComplete="given-name"
                                      className="block w-full rounded-2xl border-0 py-2 px-7 outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#b67a3d] sm:text-sm sm:leading-6"
                                    />
                                  </div>
                                </div>

                                <div className="col-span-full">
                                  <label
                                    htmlFor="about"
                                    className="block text-sm font-medium leading-6 text-gray-900 xl:text-lg"
                                  >
                                    Description
                                  </label>
                                  <div className="mt-2">
                                    <textarea
                                      defaultValue={data[0]?.description}
                                      onChange={handleChange}
                                      id="description"
                                      name="description"
                                      rows={3}
                                      className="block overflow-y-auto w-full h-[300px] rounded-2xl border-0 p-7 text-gray-900 shadow-sm ring-1 ring-inset outline-none ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#b67a3d] sm:text-sm sm:leading-6"
                                    />
                                  </div>
                                </div>
                                <div className="rounded-xl md:w-[680px] sm:w-[450px] w-full h-[300px]">
                                  <img
                                    src={`${IMAGE_BASE_URL}${data[0]?.image}`}
                                    alt={data[0]?.title}
                                    className="size-40 h-[300px] object-cover rounded-xl w-full object-center"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col items-end justify-end">
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
                      <div className="p-10 bg-slate-100 rounded-3xl">
                        <form onSubmit={handleSubmit}>
                          <div className="mt-5 space-y-12">
                            <div className="pb-12">
                              <h2 className="text-base font-bold leading-7 text-gray-900 xl:text-2xl">
                                President Section
                              </h2>
                              <p className="mt-1 text-sm leading-6 text-gray-600">
                                Perfom CRUD to this section
                              </p>

                              <div className="grid grid-cols-1 mt-10 gap-x-6 gap-y-8 sm:grid-cols-6">
                                <div className="sm:col-span-3">
                                  <label
                                    htmlFor="title"
                                    className="block text-sm font-medium leading-6 text-gray-900 xl:text-lg"
                                  >
                                    Title
                                  </label>
                                  <div className="mt-2">
                                    <input
                                      defaultValue={data[0]?.title}
                                      type="text"
                                      name="title"
                                      onChange={handleChange}
                                      id="title"
                                      autoComplete="given-name"
                                      className="block w-full rounded-2xl border-0 py-2 px-7 outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#b67a3d] sm:text-sm sm:leading-6"
                                    />
                                  </div>
                                </div>
                                <div className="sm:col-span-3">
                                  <label
                                    htmlFor="name"
                                    className="block text-sm font-medium leading-6 text-gray-900 xl:text-lg"
                                  >
                                    Name
                                  </label>
                                  <div className="mt-2">
                                    <input
                                      defaultValue={data[0]?.name}
                                      type="text"
                                      name="name"
                                      onChange={handleChange}
                                      id="name"
                                      autoComplete="given-name"
                                      className="block w-full rounded-2xl border-0 py-2 px-7 outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#b67a3d] sm:text-sm sm:leading-6"
                                    />
                                  </div>
                                </div>
                                <div className="sm:col-span-3">
                                  <label
                                    htmlFor="cheo"
                                    className="block text-sm font-medium leading-6 text-gray-900 xl:text-lg"
                                  >
                                    Position
                                  </label>
                                  <div className="mt-2">
                                    <input
                                      defaultValue={data[0]?.cheo}
                                      type="text"
                                      name="cheo"
                                      onChange={handleChange}
                                      id="cheo"
                                      autoComplete="given-name"
                                      className="block w-full rounded-2xl border-0 py-2 px-7 outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#b67a3d] sm:text-sm sm:leading-6"
                                    />
                                  </div>
                                </div>
                                <div className="sm:col-span-3">
                                  <label
                                    htmlFor="subtitle"
                                    className="block text-sm font-medium leading-6 text-gray-900 xl:text-lg"
                                  >
                                    Subtitle
                                  </label>
                                  <div className="mt-2">
                                    <input
                                      defaultValue={data[0]?.subtitle}
                                      type="text"
                                      onChange={handleChange}
                                      name="subtitle"
                                      id="subtitle"
                                      autoComplete="given-name"
                                      className="block w-full rounded-2xl border-0 py-2 px-7 outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#b67a3d] sm:text-sm sm:leading-6"
                                    />
                                  </div>
                                </div>
                                <div className="col-span-full">
                                  <label
                                    htmlFor="description"
                                    className="block text-sm font-medium leading-6 text-gray-900 xl:text-lg"
                                  >
                                    Description
                                  </label>
                                  <div className="mt-2">
                                    <textarea
                                      defaultValue={data[0]?.description}
                                      onChange={handleChange}
                                      id="description"
                                      name="description"
                                      rows={3}
                                      className="block overflow-y-auto w-full h-[300px] rounded-2xl border-0 p-7 text-gray-900 shadow-sm ring-1 ring-inset outline-none ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#b67a3d] sm:text-sm sm:leading-6"
                                    />
                                  </div>
                                </div>
                                <div className="col-span-full">
                                  <label
                                    htmlFor="description2"
                                    className="block text-sm font-medium leading-6 text-gray-900 xl:text-lg"
                                  >
                                    Main-Body
                                  </label>
                                  <div className="mt-2">
                                    <textarea
                                      defaultValue={data[0]?.description2}
                                      onChange={handleChange}
                                      id="description2"
                                      name="description2"
                                      rows={3}
                                      className="block overflow-y-auto w-full h-[300px] rounded-2xl border-0 p-7 text-gray-900 shadow-sm ring-1 ring-inset outline-none ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#b67a3d] sm:text-sm sm:leading-6"
                                    />
                                  </div>
                                </div>
                                <div className="col-span-full">
                                  <label
                                    htmlFor="description3"
                                    className="block text-sm font-medium leading-6 text-gray-900 xl:text-lg"
                                  >
                                    Conclusion
                                  </label>
                                  <div className="mt-2">
                                    <textarea
                                      defaultValue={data[0]?.description3}
                                      onChange={handleChange}
                                      id="description3"
                                      name="description3"
                                      rows={3}
                                      className="block overflow-y-auto w-full h-[300px] rounded-2xl border-0 p-7 text-gray-900 shadow-sm ring-1 ring-inset outline-none ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#b67a3d] sm:text-sm sm:leading-6"
                                    />
                                  </div>
                                </div>
                                <div className="rounded-xl flex flex-row sm:w-[400px] gap-x-2 w-full h-[300px]">
                                  <img
                                    src={`${IMAGE_BASE_URL}${data[0]?.image}`}
                                    alt={data[0]?.title}
                                    className="size-40 h-[300px] object-cover aspect-square rounded-xl w-full object-center"
                                  />
                                  <img
                                    src={`${IMAGE_BASE_URL}${data[0]?.image2}`}
                                    alt={data[0]?.title}
                                    className="size-40 h-[300px] object-cover aspect-square rounded-xl w-full object-center"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col items-end justify-end">
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
                      <div className="p-10 bg-slate-100 rounded-3xl">
                        <form onSubmit={handleSubmit}>
                          <div className="mt-5 space-y-12">
                            <div className="pb-12">
                              <h2 className="text-base font-bold leading-7 text-gray-900 xl:text-2xl">
                                Announcement Section
                              </h2>
                              <p className="mt-1 text-sm leading-6 text-gray-600">
                                Perfom CRUD to this section
                              </p>

                              <div className="grid grid-cols-1 mt-10 gap-x-6 gap-y-8 sm:grid-cols-6">
                                <div className="sm:col-span-3">
                                  <label
                                    htmlFor="title"
                                    className="block text-sm font-medium leading-6 text-gray-900 xl:text-lg"
                                  >
                                    Title
                                  </label>
                                  <div className="mt-2">
                                    <input
                                      defaultValue={data[0]?.title}
                                      type="text"
                                      name="title"
                                      onChange={handleChange}
                                      id="title"
                                      autoComplete="given-name"
                                      className="block w-full rounded-2xl border-0 py-2 px-7 outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#b67a3d] sm:text-sm sm:leading-6"
                                    />
                                  </div>
                                </div>
                                <div className="col-span-full">
                                  <label
                                    htmlFor="description"
                                    className="block text-sm font-medium leading-6 text-gray-900 xl:text-lg"
                                  >
                                    Description
                                  </label>
                                  <div className="mt-2">
                                    <textarea
                                      defaultValue={data[0]?.description}
                                      onChange={handleChange}
                                      id="description"
                                      name="description"
                                      rows={3}
                                      className="block overflow-y-auto w-full h-[300px] rounded-2xl border-0 p-7 text-gray-900 shadow-sm ring-1 ring-inset outline-none ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#b67a3d] sm:text-sm sm:leading-6"
                                    />
                                  </div>
                                </div>
                                <div className="rounded-xl flex flex-row sm:w-[400px] gap-x-2 w-full h-[300px]">
                                  <img
                                    src={`${IMAGE_BASE_URL}${data[0]?.image}`}
                                    alt={data[0]?.title}
                                    className="size-40 h-[300px] object-cover aspect-square rounded-xl w-full object-center"
                                  />
                                  <img
                                    src={`${IMAGE_BASE_URL}${data[0]?.image2}`}
                                    alt={data[0]?.title}
                                    className="size-40 h-[300px] object-cover aspect-square rounded-xl w-full object-center"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col items-end justify-end">
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
                  {/* Company section */}
                  {locations?.pathname === "/Dashboard/Partners/" ? (
                    <div className="flex flex-col">
                      <div className="p-10 bg-slate-100 rounded-3xl">
                        <form onSubmit={handleSubmit}>
                          <div className="mt-5 space-y-12">
                            <div className="pb-12">
                              <h2 className="text-base font-bold leading-7 text-gray-900 xl:text-2xl">
                                Company Section
                              </h2>
                              <p className="mt-1 text-sm leading-6 text-gray-600">
                                Perfom CRUD to this section
                              </p>
                              <div className="grid grid-cols-1 mt-10 gap-x-6 gap-y-8">
                                <div className="sm:col-span-3">
                                  <label
                                    htmlFor="title"
                                    className="block text-sm font-medium leading-6 text-gray-900 xl:text-lg"
                                  >
                                    Title
                                  </label>
                                  <div className="mt-2">
                                    <input
                                      defaultValue={data[0]?.title}
                                      type="text"
                                      onChange={handleChange}
                                      name="title"
                                      id="title"
                                      autoComplete="given-name"
                                      className="block w-full rounded-2xl border-0 py-2 px-7 outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#b67a3d] sm:text-sm sm:leading-6"
                                    />
                                  </div>
                                </div>
                                <div className="rounded-xl md:w-[680px] sm:w-[450px] w-full h-[300px]">
                                  <img
                                    src={`${IMAGE_BASE_URL}${data[0]?.image}`}
                                    alt={data[0]?.title}
                                    className="size-40 h-[300px] object-cover rounded-xl w-full object-center"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col items-end justify-end">
                            <motion.button
                              onClick={handleUpdate}
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.8 }}
                              transition={{ type: "spring", ease: "easeOut" }}
                              className="px-7 py-2 bg-[#b67a3d] text-white rounded-3xl"
                            >
                              Back
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
                      <div className="p-10 bg-slate-100 rounded-3xl">
                        <form onSubmit={handleSubmit}>
                          <div className="mt-5 space-y-12">
                            <div className="pb-12">
                              <h2 className="text-base font-bold leading-7 text-gray-900 xl:text-2xl">
                                Gallery Section
                              </h2>
                              <p className="mt-1 text-sm leading-6 text-gray-600">
                                Perfom CRUD to this section
                              </p>
                              <div className="grid grid-cols-1 mt-10 gap-x-6 gap-y-8">
                                <div className="sm:col-span-3">
                                  <label
                                    htmlFor="title"
                                    className="block text-sm font-medium leading-6 text-gray-900 xl:text-lg"
                                  >
                                    Title
                                  </label>
                                  <div className="mt-2">
                                    <input
                                      defaultValue={data[0]?.title}
                                      type="text"
                                      onChange={handleChange}
                                      name="title"
                                      id="title"
                                      autoComplete="given-name"
                                      className="block w-full rounded-2xl border-0 py-2 px-7 outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#b67a3d] sm:text-sm sm:leading-6"
                                    />
                                  </div>
                                </div>
                                <div className="rounded-xl md:w-[680px] sm:w-[450px] w-full h-[300px]">
                                  <img
                                    src={`${IMAGE_BASE_URL}${data[0]?.image}`}
                                    alt={data[0]?.title}
                                    className="size-40 h-[300px] object-cover rounded-xl w-full object-center"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col items-end justify-end">
                            <motion.button
                              onClick={() => setOpen(false)}
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.8 }}
                              transition={{ type: "spring", ease: "easeOut" }}
                              className="px-7 py-2 bg-[#b67a3d] text-white rounded-3xl"
                            >
                              Back
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
                      <div className="p-10 bg-slate-100 rounded-3xl">
                        <form onSubmit={handleSubmit}>
                          <div className="mt-5 space-y-12">
                            <div className="pb-12">
                              <h2 className="text-base font-bold leading-7 text-gray-900 xl:text-2xl">
                                Staffs Section
                              </h2>
                              <p className="mt-1 text-sm leading-6 text-gray-600">
                                Perfom CRUD to this section
                              </p>

                              <div className="grid grid-cols-1 mt-10 gap-x-6 gap-y-8 sm:grid-cols-6">
                                <div className="sm:col-span-3">
                                  <label
                                    htmlFor="name"
                                    className="block text-sm font-medium leading-6 text-gray-900 xl:text-lg"
                                  >
                                    Name
                                  </label>
                                  <div className="mt-2">
                                    <input
                                      defaultValue={data[0]?.name}
                                      type="text"
                                      name="name"
                                      onChange={handleChange}
                                      id="name"
                                      autoComplete="given-name"
                                      className="block w-full rounded-2xl border-0 py-2 px-7 outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#b67a3d] sm:text-sm sm:leading-6"
                                    />
                                  </div>
                                </div>
                                <div className="sm:col-span-3">
                                  <label
                                    htmlFor="position"
                                    className="block text-sm font-medium leading-6 text-gray-900 xl:text-lg"
                                  >
                                    Position
                                  </label>
                                  <div className="mt-2">
                                    <input
                                      defaultValue={data[0]?.position}
                                      type="text"
                                      name="position"
                                      onChange={handleChange}
                                      id="position"
                                      autoComplete="given-name"
                                      className="block w-full rounded-2xl border-0 py-2 px-7 outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#b67a3d] sm:text-sm sm:leading-6"
                                    />
                                  </div>
                                </div>
                                <div className="sm:col-span-3">
                                  <label
                                    htmlFor="contact1"
                                    className="block text-sm font-medium leading-6 text-gray-900 xl:text-lg"
                                  >
                                    Email
                                  </label>
                                  <div className="mt-2">
                                    <input
                                      defaultValue={data[0]?.contact1}
                                      type="email"
                                      onChange={handleChange}
                                      name="contact1"
                                      id="contact1"
                                      autoComplete="given-name"
                                      className="block w-full rounded-2xl border-0 py-2 px-7 outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#b67a3d] sm:text-sm sm:leading-6"
                                    />
                                  </div>
                                </div>
                                <div className="sm:col-span-3">
                                  <label
                                    htmlFor="contact2"
                                    className="block text-sm font-medium leading-6 text-gray-900 xl:text-lg"
                                  >
                                    Phone Number
                                  </label>
                                  <div className="mt-2">
                                    <input
                                      defaultValue={data[0]?.contact2}
                                      type="text"
                                      onChange={handleChange}
                                      name="contact2"
                                      id="contact2"
                                      autoComplete="given-name"
                                      className="block w-full rounded-2xl border-0 py-2 px-7 outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#b67a3d] sm:text-sm sm:leading-6"
                                    />
                                  </div>
                                </div>
                                <div className="sm:col-span-3">
                                  <label
                                    htmlFor="contact3"
                                    className="block text-sm font-medium leading-6 text-gray-900 xl:text-lg"
                                  >
                                    Social Media
                                  </label>
                                  <div className="mt-2">
                                    <input
                                      defaultValue={data[0]?.contact3}
                                      type="text"
                                      onChange={handleChange}
                                      name="contact3"
                                      id="contact3"
                                      autoComplete="given-name"
                                      className="block w-full rounded-2xl border-0 py-2 px-7 outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#b67a3d] sm:text-sm sm:leading-6"
                                    />
                                  </div>
                                </div>

                                <div className="col-span-full">
                                  <label
                                    htmlFor="description"
                                    className="block text-sm font-medium leading-6 text-gray-900 xl:text-lg"
                                  >
                                    Description
                                  </label>
                                  <div className="mt-2">
                                    <textarea
                                      defaultValue={data[0]?.description}
                                      onChange={handleChange}
                                      id="description"
                                      name="description"
                                      rows={3}
                                      className="block overflow-y-auto w-full h-[300px] rounded-2xl border-0 p-7 text-gray-900 shadow-sm ring-1 ring-inset outline-none ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#b67a3d] sm:text-sm sm:leading-6"
                                    />
                                  </div>
                                </div>
                                <div className="rounded-xl md:w-[680px] sm:w-[450px] w-full h-[300px]">
                                  <img
                                    src={`${IMAGE_BASE_URL}${data[0]?.image}`}
                                    alt={data[0]?.title}
                                    className="size-40 h-[300px] object-cover rounded-xl w-full object-center"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col items-end justify-end">
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
      </motion.div>
    </Dialog>
  );
}
