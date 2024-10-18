import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import { useContext } from "react";
import HomePageContext from "../../Context/HomePageContext";
import { useLocation } from "react-router-dom";
import axiosInstance from "../../Context/axiosInstance";
import { toast } from "react-toastify";

export default function Notification({ open, setOpen, dataId }) {
  // herosecttion
  const { setHero, heroSect } = useContext(HomePageContext);
  // president section
  const { PresidentSect, setPresident } = useContext(HomePageContext);
  // gallery section
  const { gallerySect, setGallery } = useContext(HomePageContext);
  // Staffs Section
  const { StaffsSect, setStaffs } = useContext(HomePageContext);
  // Announcement section
  const { AnnounceSect, setAnnounce } = useContext(HomePageContext);
  //AboutUs section
  const { AboutUSSect, setAboutUs } = useContext(HomePageContext);
  //Resources section
  const { ResourcesSect, setResources } = useContext(HomePageContext);
  //Companies section
  const { companies, setCompany } = useContext(HomePageContext);
  // Resources
  const { Resources, setResourceSect } = useContext(HomePageContext);

  // routing
  const locations = useLocation();

  //  Resources section
  async function deleteResourceSect() {
    const original = Resources;
    const del = Resources?.filter((pt) => pt.id !== dataId);
    setResourceSect(del);
    try {
      await axiosInstance.delete(`/hat-api/resources_details/${dataId}/`);
      toast.success("Deleted Successfully");
    } catch (error) {
      toast.error("Action Delete Failed");
      setResourceSect(original);
    }
  }
  //  Companies section
  async function deleteCompany() {
    const original = companies;
    const del = companies?.filter((pt) => pt.id !== dataId);
    setCompany(del);
    try {
      await axiosInstance.delete(`/hat-api/Companies_Details/${dataId}/`);
      toast.success("Deleted Successfully");
    } catch (error) {
      toast.error("Action Delete Failed");
      setCompany(original);
    }
  }
  // Resources and publications
  async function deleteResource() {
    const original = ResourcesSect;
    const Reso = ResourcesSect?.filter((pt) => pt.id !== dataId);
    setResources(Reso);
    try {
      await axiosInstance.delete(`/hat-api/Resources_Details/${dataId}/`);
      toast.success("Deleted Successfully");
    } catch (error) {
      toast.error("Action Delete Failed");
      setResources(original);
    }
  }
  // Hero Section of landing page
  async function deleteHeroSect() {
    const original = heroSect;
    const hero = heroSect?.filter((pt) => pt.id !== dataId);
    setHero(hero);
    try {
      await axiosInstance.delete(`/hat-api/Hero_Details/${dataId}/`);
      toast.success("Deleted Successfully");
    } catch (error) {
      toast.error("Action Delete Failed");
      setHero(original);
    }
  }
  // Announcements Section
  async function deleteAnnouncement() {
    const original = AnnounceSect;
    const Announce = AnnounceSect?.filter((pt) => pt.id !== dataId);
    setAnnounce(Announce);
    try {
      await axiosInstance.delete(`/hat-api/Announce_Details/${dataId}/`);
      toast.success("Deleted Successfully");
    } catch (error) {
      toast.error("Action Delete Failed");
      setAnnounce(original);
    }
  }

  // Staffs Section
  async function deleteStaff() {
    const original = StaffsSect;
    const staff = StaffsSect?.filter((pt) => pt.id !== dataId);
    setStaffs(staff);
    try {
      await axiosInstance.delete(`/hat-api/Staffs_Details/${dataId}/`);
      toast.success("Deleted Successfully");
    } catch (error) {
      toast.error("Action Delete Failed");
      setStaffs(original);
    }
  }

  // Gallery section
  async function deletePicturesSect() {
    const original = gallerySect;
    const pictures = gallerySect?.filter((pt) => pt.id !== dataId);
    setGallery(pictures);
    try {
      await axiosInstance.delete(`/hat-api/Gallery_Details/${dataId}/`);
      toast.success("Deleted Successfully");
    } catch (error) {
      toast.error("Action Delete Failed");
      setGallery(original);
    }
  }

  // AboutUs section
  async function deleteAboutUsSect() {
    const original = AboutUSSect;
    const aboutUs = AboutUSSect?.filter((pt) => pt.id !== dataId);
    setAboutUs(aboutUs);
    try {
      await axiosInstance.delete(`/hat-api/About_Details/${dataId}/`);
      toast.success("Deleted Successfully");
    } catch (error) {
      setAboutUs(original);
      toast.error("Action Delete Failed");
    }
  }

  // preso function
  async function deletePresoSect() {
    const original = PresidentSect;
    const preso = PresidentSect?.filter((pt) => pt.id !== dataId);
    setPresident(preso);
    try {
      await axiosInstance.delete(`/hat-api/President_Details/${dataId}/`);
      toast.success("Deleted Successfully");
    } catch (error) {
      setPresident(original);
      toast.error("Action Delete Failed");
    }
  }

  // delete Logic
  const handleDelete = () => {
    if (locations?.pathname === "/Dashboard/Partners/") {
      deleteCompany();
    }
    if (locations?.pathname === "/Dashboard/Research&publications/") {
      deleteResource();
    }
    if (locations?.pathname === "/Dashboard/heroSect/") {
      deleteHeroSect();
    }
    if (locations?.pathname === "/Dashboard/PresoSect/") {
      deletePresoSect();
    }
    if (locations?.pathname === "/Dashboard/GallerySect/") {
      deletePicturesSect();
    }
    if (locations?.pathname === "/Dashboard/StaffsSect/") {
      deleteStaff();
    }
    if (locations?.pathname === "/Dashboard/Announcement/") {
      deleteAnnouncement();
    }
    if (locations?.pathname === "/Dashboard/AboutSect/") {
      deleteAboutUsSect();
    }
    if (locations?.pathname === "/Dashboard/ResourceSect/") {
      deleteResourceSect();
    }
    setOpen(false);
  };

  return (
    <Dialog open={open} onClose={setOpen} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex items-end justify-center min-h-full p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
          >
            <div className="px-4 pt-5 pb-4 bg-white sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 mx-auto bg-red-100 rounded-full sm:mx-0 sm:h-10 sm:w-10">
                  <ExclamationTriangleIcon
                    aria-hidden="true"
                    className="w-6 h-6 text-red-600"
                  />
                </div>
                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                  <DialogTitle
                    as="h3"
                    className="text-base font-semibold leading-6 text-gray-900"
                  >
                    Delete data
                  </DialogTitle>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Are you sure you want to delete? note your data will be
                      permanently removed. This action cannot be undone.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-4 py-3 bg-gray-50 sm:flex sm:flex-row-reverse sm:px-6">
              <button
                type="button"
                onClick={handleDelete}
                className="inline-flex justify-center w-full px-3 py-2 text-sm font-semibold text-white bg-red-600 rounded-md shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
              >
                Delete
              </button>
              <button
                type="button"
                data-autofocus
                onClick={() => setOpen(false)}
                className="inline-flex justify-center w-full px-3 py-2 mt-3 text-sm font-semibold text-gray-900 bg-white rounded-md shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
              >
                Cancel
              </button>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
