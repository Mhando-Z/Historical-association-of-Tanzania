import React, { useState, useEffect } from "react";
import axiosInstance from "../../Context/axiosInstance";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import UserTable from "./UserTable";
import { HiMiniCheckBadge } from "react-icons/hi2";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";

const AdminUserManagement = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [notification, setNotification] = useState(false);
  const [Id, setUserId] = useState("");

  const [formData, setFormData] = useState({
    email: "",
    username: "",
    is_active: false,
    is_staff: false,
    profile: {
      full_name: "",
      reviews: "",
      is_student: false,
      student_id: "",
      course_of_study: "",
      institution: "",
      branch: "",
      title: "",
      phone_number: "",
      nationality: "",
      address: "",
      is_paid_membership: false,
      is_paid_conference: false,
      gender: "",
      college: "",
    },
  });
  const [password, setPassword] = useState("");

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axiosInstance.get("/hat-users/admin/users/");
      setUsers(response.data);
    } catch (error) {
      console.log(error);
      console.error("Error fetching users:", error);
    }
  };

  const handleSelectUser = (user) => {
    setSelectedUser(user);
    setFormData({
      email: user.email,
      username: user.username,
      is_active: user.is_active,
      is_staff: user.is_staff,
      profile: {
        full_name: user.profile.full_name,
        reviews: user.profile.reviews,
        is_student: user.profile.is_student,
        student_id: user.profile.student_id,
        course_of_study: user.profile.course_of_study,
        institution: user.profile.institution,
        branch: user.profile.branch,
        title: user.profile.title,
        phone_number: user.profile.phone_number,
        nationality: user.profile.nationality,
        address: user.profile.address,
        is_paid_membership: user.profile.is_paid_membership,
        is_paid_conference: user.profile.is_paid_conference,
        gender: user.profile.gender,
        college: user.profile.college,
      },
    });
  };

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    if (type === "checkbox") {
      if (name.includes("profile.")) {
        const profileField = name.split("profile.")[1];
        setFormData((prevState) => ({
          ...prevState,
          profile: {
            ...prevState.profile,
            [profileField]: checked,
          },
        }));
      } else {
        setFormData((prevState) => ({
          ...prevState,
          [name]: checked,
        }));
      }
    } else {
      if (name.includes("profile.")) {
        const profileField = name.split("profile.")[1];
        setFormData((prevState) => ({
          ...prevState,
          profile: {
            ...prevState.profile,
            [profileField]: value,
          },
        }));
      } else {
        setFormData((prevState) => ({
          ...prevState,
          [name]: value,
        }));
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedData = { ...formData };
    if (password) {
      updatedData.password = password;
    }
    try {
      await axiosInstance.put(
        `/hat-users/admin/users/${selectedUser.id}/`,
        updatedData
      );
      setUsers((prevUsers) =>
        prevUsers.map((user) =>
          user.id === selectedUser.id ? { ...user, ...updatedData } : user
        )
      );
      setSelectedUser(null);
      toast.success("User updated successfully");
    } catch (error) {
      console.error("Error updating user:", error);
      toast.error("Error updating user");
    }
  };

  const deleteFunction = (userId) => {
    setNotification(!notification);
    setUserId(userId);
    if (notification === true) {
      handleDelete();
    }
  };

  const handleDelete = async () => {
    try {
      await axiosInstance.delete(`/hat-users/admin/users/${Id}/`);
      setUsers((prevUsers) => prevUsers.filter((user) => user.id !== Id));
      toast.success("User deleted successfully");
      setNotification(!notification);
    } catch (error) {
      setNotification(!notification);
      console.error("Error deleting user:", error);
      toast.error("Error deleting user");
    }
  };

  return (
    <div>
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 1, opacity: 1 }}
        transition={{
          duration: 0.5,
          type: "spring",
          ease: "easeOut",
          stiffness: 140,
        }}
        className="shadow-2xl "
      >
        <UserTable data={users} />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 90, scale: 0 }}
        animate={{ opacity: 1, scale: [1, 0, 1], y: 1 }}
        transition={{ duration: 0.5, ease: "easeOut", type: "spring" }}
        className="py-2 mt-14 bg-slate-100"
      >
        <h1 className="md:text-xl border-l-[#b67a3d] shadow-xl bg-slate-50 py-3 border-r-[#b67a3d] border-r-8 border-l-8 mb-5 font-bold uppercase">
          <span className="ml-2">Admin User Management</span>
        </h1>
        <div className="flex flex-wrap">
          <div className="w-full p-2 lg:w-1/2">
            <h1 className="md:text-xl border-l-[#b67a3d] border-l-8 mb-5 font-bold uppercase">
              <span className="ml-2">Users List</span>
            </h1>
            <ul className="relative p-4 bg-white rounded-lg shadow-lg">
              {users?.map((user) => (
                <li
                  key={user.id}
                  className="flex items-center justify-between p-2 border-b hover:bg-slate-100"
                >
                  <span>{user.username}</span>
                  <div className="flex space-x-2">
                    <span className="mr-14">
                      {user.is_staff === true ? (
                        <HiMiniCheckBadge className="text-xl text-blue-700 gap-x-10" />
                      ) : (
                        ""
                      )}
                    </span>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.8 }}
                      transition={{
                        type: "spring",
                        ease: "easeOut",
                        stiffness: 140,
                      }}
                      className="px-4 py-1 text-white bg-blue-600 shadow-md rounded-3xl"
                      onClick={() => handleSelectUser(user)}
                    >
                      Edit
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.8 }}
                      transition={{
                        type: "spring",
                        ease: "easeOut",
                        stiffness: 140,
                      }}
                      className="px-3 py-1 text-white bg-red-600 shadow-md rounded-3xl"
                      onClick={() => deleteFunction(user.id)}
                    >
                      Delete
                    </motion.button>
                  </div>
                </li>
              ))}
              {notification ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{
                    duration: 1,
                    ease: "easeInOut",
                    type: "spring",
                  }}
                  className="absolute top-0 bottom-0 left-0 right-0 items-center justify-center w-full p-20 bg-black bg-opacity-15"
                >
                  <div className="bg-white p-10 h-[220px] shadow-2xl rounded-xl">
                    <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 mx-auto bg-red-100 rounded-full sm:mx-0 sm:h-10 sm:w-10">
                      <ExclamationTriangleIcon
                        aria-hidden="true"
                        className="w-6 h-6 text-red-600"
                      />
                    </div>
                    <p className="text-lg">
                      Are you sure you want to delete this User? note all data
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
                        onClick={deleteFunction}
                        type="button"
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
            </ul>
          </div>
          {selectedUser && (
            <motion.div
              initial={{ opacity: 0, scale: 0, x: -100 }}
              animate={{ opacity: 1, scale: [1, 0, 1], x: 1 }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                stiffness: 140,
                type: "spring",
              }}
              className="w-full p-2 lg:w-1/2"
            >
              <h1 className="md:text-xl border-l-[#b67a3d] border-l-8 mb-5 font-bold uppercase">
                <span className="ml-2">Edit Users</span>
              </h1>
              <form
                className="p-4 bg-white rounded-lg shadow-xl"
                onSubmit={handleSubmit}
              >
                <div className="mb-4">
                  <label className="block text-gray-700">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 outline-none ring-1 shadow-md ring-slate-100 focus:ring-1 focus:ring-[#b67a3d] py-2 border rounded"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Username</label>
                  <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    className="w-full px-3 outline-none ring-1 shadow-md ring-slate-100 focus:ring-1 focus:ring-[#b67a3d] py-2 border rounded"
                    required
                  />
                </div>
                <div className="flex items-center mb-4">
                  <input
                    type="checkbox"
                    name="is_active"
                    checked={formData.is_active}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  <label className="text-gray-700">Active</label>
                </div>
                <div className="flex items-center mb-4">
                  <input
                    type="checkbox"
                    name="is_staff"
                    checked={formData.is_staff}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  <label className="text-gray-700">Staff</label>
                </div>
                <h1 className="md:text-xl border-l-[#b67a3d] shadow-md bg-slate-50 py-3  border-r-[#b67a3d] border-r-8  border-l-8 mb-5 font-bold uppercase">
                  <span className="ml-2"> Profile Information</span>
                </h1>
                <div className="mb-4">
                  <label className="block text-gray-700">Full Name</label>
                  <input
                    type="text"
                    name="profile.full_name"
                    value={formData.profile.full_name}
                    onChange={handleChange}
                    className="w-full px-3 outline-none ring-1 shadow-md ring-slate-100 focus:ring-1 focus:ring-[#b67a3d] py-2 border rounded"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Reviews</label>
                  <input
                    type="text"
                    name="profile.reviews"
                    value={formData.profile.reviews}
                    onChange={handleChange}
                    className="w-full px-3 outline-none ring-1 shadow-md ring-slate-100 focus:ring-1 focus:ring-[#b67a3d] py-2 border rounded"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Student ID</label>
                  <input
                    type="text"
                    name="profile.student_id"
                    value={formData.profile.student_id}
                    onChange={handleChange}
                    className="w-full px-3 outline-none ring-1 shadow-md ring-slate-100 focus:ring-1 focus:ring-[#b67a3d] py-2 border rounded"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Course of Study</label>
                  <input
                    type="text"
                    name="profile.course_of_study"
                    value={formData.profile.course_of_study}
                    onChange={handleChange}
                    className="w-full px-3 outline-none ring-1 shadow-md ring-slate-100 focus:ring-1 focus:ring-[#b67a3d] py-2 border rounded"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Institution</label>
                  <input
                    type="text"
                    name="profile.institution"
                    value={formData.profile.institution}
                    onChange={handleChange}
                    className="w-full px-3 outline-none ring-1 shadow-md ring-slate-100 focus:ring-1 focus:ring-[#b67a3d] py-2 border rounded"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Branch</label>
                  <input
                    type="text"
                    name="profile.branch"
                    value={formData.profile.branch}
                    onChange={handleChange}
                    className="w-full px-3 outline-none ring-1 shadow-md ring-slate-100 focus:ring-1 focus:ring-[#b67a3d] py-2 border rounded"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Title</label>
                  <input
                    type="text"
                    name="profile.title"
                    value={formData.profile.title}
                    onChange={handleChange}
                    className="w-full px-3 outline-none ring-1 shadow-md ring-slate-100 focus:ring-1 focus:ring-[#b67a3d] py-2 border rounded"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Phone Number</label>
                  <input
                    type="text"
                    name="profile.phone_number"
                    value={formData.profile.phone_number}
                    onChange={handleChange}
                    className="w-full px-3 outline-none ring-1 shadow-md ring-slate-100 focus:ring-1 focus:ring-[#b67a3d] py-2 border rounded"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Nationality</label>
                  <input
                    type="text"
                    name="profile.nationality"
                    value={formData.profile.nationality}
                    onChange={handleChange}
                    className="w-full px-3 outline-none ring-1 shadow-md ring-slate-100 focus:ring-1 focus:ring-[#b67a3d] py-2 border rounded"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Address</label>
                  <input
                    type="text"
                    name="profile.address"
                    value={formData.profile.address}
                    onChange={handleChange}
                    className="w-full px-3 outline-none ring-1 shadow-md ring-slate-100 focus:ring-1 focus:ring-[#b67a3d] py-2 border rounded"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Gender</label>
                  <input
                    type="text"
                    name="profile.gender"
                    value={formData.profile.gender}
                    onChange={handleChange}
                    className="w-full px-3 outline-none ring-1 shadow-md ring-slate-100 focus:ring-1 focus:ring-[#b67a3d] py-2 border rounded"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">College</label>
                  <input
                    type="text"
                    name="profile.college"
                    value={formData.profile.college}
                    onChange={handleChange}
                    className="w-full px-3 outline-none ring-1 shadow-md ring-slate-100 focus:ring-1 focus:ring-[#b67a3d] py-2 border rounded"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Password</label>
                  <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-3 outline-none ring-1 shadow-md ring-slate-100 focus:ring-1 focus:ring-[#b67a3d] py-2 border rounded"
                  />
                </div>
                <div className="flex items-center mb-4">
                  <input
                    type="checkbox"
                    name="profile.is_paid_membership"
                    checked={formData.profile.is_paid_membership}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  <label className="text-gray-700">Paid Membership</label>
                </div>
                <div className="flex items-center mb-4">
                  <input
                    type="checkbox"
                    name="profile.is_paid_conference"
                    checked={formData.profile.is_paid_conference}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  <label className="text-gray-700">Paid Conference</label>
                </div>
                <div className="flex items-center mb-4">
                  <input
                    type="checkbox"
                    name="profile.is_student"
                    checked={formData.profile.is_student}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  <label className="text-gray-700">Student</label>
                </div>
                <div className="flex justify-end w-full py-3 shadow-xl bg-slate-100">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.8 }}
                    transition={{
                      type: "spring",
                      ease: "easeOut",
                      stiffness: 140,
                    }}
                    type="submit"
                    className="bg-[#b67a3d] px-6 text-white shadow-lg py-2 rounded-3xl"
                  >
                    Update User
                  </motion.button>
                </div>
              </form>
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default AdminUserManagement;
