import React, { useState, useContext, useEffect } from "react";
import { motion } from "framer-motion";
import { FaEdit, FaTrash } from "react-icons/fa";
import { toast } from "react-toastify";
import { Dots } from "react-activity";
import axiosInstance from "../../Context/axiosInstance";
import ProfilePictures from "./ProfilePicture";
import ProfileOverview from "./ProfileOverview";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import UserContext from "../../Context/UserContext";
import { useNavigate } from "react-router-dom";
import UserEditDrawer from "../Users/Components/UserEditDrawer";

const UserProfile = () => {
  const { userData } = useContext(UserContext);
  const [open, setOpen] = useState(false);
  const [notification, setNotification] = useState(false);
  const [value, setValue] = useState(13);

  // custom functions hooks
  const navigate = useNavigate();

  const getRandomValue = () => {
    const randomValue = Math.floor(Math.random() * 10) + 10; // Generates a random number between 10 and 19
    setValue(randomValue);
  };

  useEffect(() => {
    getRandomValue();
  }, []);

  const handleDeleteUserAccount = () => {
    setNotification(true);
  };

  const handleDelete = () => {
    handleDeleteAccount();
  };
  // handle profileEdit
  const handleEdit = () => {
    setOpen(!open);
  };

  const handleDeleteAccount = async () => {
    try {
      await axiosInstance.delete("hat-users/delete-account/", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      // remove the invalid token then relocate user to login page
      localStorage.removeItem("token");
      navigate("/Login/", { replace: true });
      // notification
      toast.success("Account deleted successfully");
    } catch (error) {
      toast.error("Error deleting account");
    }
  };

  if (!userData)
    return (
      <div className="flex flex-col items-center justify-center min-h-screen ">
        <Dots color="#b67a3d" size={35} speed={0.7} animating={true} />
      </div>
    );
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-col w-full gap-y-10 gap-x-10">
        <div className="flex-col w-full felx">
          <img
            src={`https://picsum.photos/id/${value}/1200/800`}
            alt="Bg-picha"
            className="w-full object-cover rounded-3xl h-[18rem] md:h-[25rem]"
          />
          <div className="flex flex-col items-center justify-center py-5 gap-y-10 md:px-10 md:justify-between rounded-3xl bg-slate-100 md:flex-row">
            <ProfilePictures data={userData} />

            {/* Action buttons */}
            <div className="flex flex-col gap-y-3">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.8 }}
                transition={{ type: "spring", ease: "easeOut" }}
                onClick={handleEdit}
                className="py-2 border-none flex flex-row items-center justify-center text-white bg-[#b67a3d] px-3 rounded-3xl"
              >
                <FaEdit className="mr-2" /> Edit Acc
              </motion.button>
              <motion.button
                onClick={handleDeleteUserAccount}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.8 }}
                transition={{ type: "spring", ease: "easeOut" }}
                className="flex flex-row items-center justify-center px-5 py-2 text-white bg-red-600 border-none rounded-3xl"
              >
                <FaTrash className="mr-2" /> Account
              </motion.button>
            </div>
          </div>
        </div>

        <div className="relative flex flex-grow">
          <ProfileOverview data={userData} />
          {notification ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1, ease: "easeInOut", type: "spring" }}
              className="absolute top-0 bottom-0 left-0 right-0 items-center justify-center w-full p-20 bg-black bg-opacity-15"
            >
              <div className="px-4 py-4 bg-white shadow-xl md:p-10 rounded-xl">
                <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 mx-auto bg-red-100 rounded-full sm:mx-0 sm:h-10 sm:w-10">
                  <ExclamationTriangleIcon
                    aria-hidden="true"
                    className="w-6 h-6 text-red-600"
                  />
                </div>
                <p className="text-sm">
                  Are you sure you want to delete this Account? note all data
                  will be permanently removed. This action cannot be undone.
                </p>
                <div className="px-4 py-3 bg-gray-50 sm:flex sm:flex-row-reverse sm:px-6">
                  <motion.button
                    initial={{ opacity: 0, y: 90, scale: 0 }}
                    animate={{ opacity: 1, scale: [1, 0, 1], y: 1 }}
                    transition={{
                      duration: 0.5,
                      ease: "easeOut",
                      type: "spring",
                    }}
                    type="button"
                    onClick={handleDelete}
                    className="inline-flex justify-center w-full px-3 py-2 text-sm font-semibold text-white bg-red-600 rounded-md shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                  >
                    Delete
                  </motion.button>
                  <motion.button
                    initial={{ opacity: 0, y: 90, scale: 0 }}
                    animate={{ opacity: 1, scale: [1, 0, 1], y: 1 }}
                    transition={{
                      duration: 0.5,
                      ease: "easeOut",
                      type: "spring",
                    }}
                    type="button"
                    onClick={() => setNotification(false)}
                    data-autofocus
                    className="inline-flex justify-center w-full px-3 py-2 mt-3 text-sm font-semibold text-gray-900 bg-white rounded-md shadow-sm ring-1 ring-inset ring-black hover:bg-gray-50 sm:mt-0 sm:w-auto"
                  >
                    Cancel
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="max-w-6xl p-6 mx-auto mt-20 rounded-lg shadow-lg ">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <UserEditDrawer open={open} setOpen={setOpen} />
        </motion.div>
      </div>
    </div>
  );
};

export default UserProfile;
