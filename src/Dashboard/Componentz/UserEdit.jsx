import React, { useState, useEffect, useContext } from "react";
import axiosInstance from "../../Context/axiosInstance";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import UserDetailsTable from "./UserDetailsTable";
import UserTable from "./UserTable";
import { IoPerson } from "react-icons/io5";
import { RxCrossCircled } from "react-icons/rx";
import moment from "moment";
import UserContext from "../../Context/UserContext";
import logo from "../../Assets/Images/3dlogo.png";
import { HiMiniCheckBadge } from "react-icons/hi2";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";

const formatDate = (dateString) => {
  return moment(dateString).format("MMMM D, YYYY [at] h:mm:ss A");
};

const AdminUserManagement = () => {
  const { userId } = useContext(UserContext);
  const { setShow, show } = useContext(UserContext);
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [notification, setNotification] = useState(false);
  const [Id, setUserId] = useState("");

  const user = users?.filter((dt) => {
    return dt.id === userId;
  });
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
        className="shadow-xl relative"
      >
        <UserTable data={users} />
        {show ? (
          <motion.div
            initial={{ opacity: 0, scale: 0, y: -100 }}
            animate={{ opacity: 1, scale: 1, y: 1 }}
            transition={{ duration: 1, ease: "easeOut", type: "spring" }}
            exit={{ x: -100, opacity: 0 }}
            className="flex flex-col xl:h-[780px] lg:h-[900px]  absolute top-20 right-0 left-0 bottom-50 ring-1 ring-[#b67a3d] bg-slate-900 bg-opacity-25 shadow-xl rounded-xl mt-10"
          >
            <div
              name="UserDetails"
              className="flex gap-x-14 flex-col gap-y-6 lg:flex-row p-10"
            >
              <div className="size-20 flex-col bg-slate-50 shadow-xl ring-[#b67a3d] rounded-xl justify-center ring-2 items-center flex">
                <IoPerson className="text-7xl " />
              </div>
              <div className="flex flex-col h-[140px] bg-slate-50 shadow-lg">
                <table className="w-lg bg-slate-50 shadow-lg shadow-black">
                  <tbody>
                    <tr className="hover:bg-gray-200 cursor-pointer">
                      <td className="py-2 px-4 border-b">Username</td>
                      <td className="py-2 px-4 border-b">
                        {user[0]?.username}
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-200 cursor-pointer">
                      <td className="py-2 px-4 border-b">Email</td>
                      <td className="py-2 px-4 border-b">{user[0]?.email}</td>
                    </tr>
                    <tr className="hover:bg-gray-200 cursor-pointer">
                      <td className="py-2 px-4 border-b">Date Registerd</td>
                      <td className="py-2 px-4 border-b">
                        {formatDate(user[0]?.profile?.date_registered)}
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-200 cursor-pointer">
                      <td className="py-2 px-4 border-b">Last Login</td>
                      <td className="py-2 px-4 border-b">
                        {formatDate(user[0]?.profile?.last_login)}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="shadow-xl bg-slate-50">
                <UserDetailsTable user={user} />
              </div>
              <div
                onClick={() => setShow(!show)}
                className="absolute top-2 items-center flex justify-center bg-red-600 shadow-md ring-1 ring-[#b67a3d] size-10 right-2 rounded-full"
              >
                <RxCrossCircled className="text-4xl text-center text-white" />
              </div>
              <div className="absolute bottom-2 left-5 opacity-30">
                <img src={logo} alt="3dHATLogo" className="h-28" />
              </div>
            </div>
          </motion.div>
        ) : (
          ""
        )}
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 90, scale: 0 }}
        animate={{ opacity: 1, scale: [1, 0, 1], y: 1 }}
        transition={{ duration: 0.5, ease: "easeOut", type: "spring" }}
        className="mt-14 py-2 bg-slate-100"
      >
        <h1 className="md:text-xl border-l-[#b67a3d] shadow-xl bg-slate-50 py-3 border-r-[#b67a3d] border-r-8 border-l-8 mb-5 font-bold uppercase">
          <span className="ml-2">Admin User Management</span>
        </h1>
        <div className="flex flex-wrap">
          <div className="w-full lg:w-1/2 p-2">
            <h1 className="md:text-xl border-l-[#b67a3d] border-l-8 mb-5 font-bold uppercase">
              <span className="ml-2">Users List</span>
            </h1>
            <ul className="bg-white relative shadow-lg rounded-lg p-4">
              {users?.map((user) => (
                <li
                  key={user.id}
                  className="flex justify-between hover:bg-slate-100 items-center p-2 border-b"
                >
                  <span>{user.username}</span>
                  <div className="flex space-x-2">
                    <span className="mr-14">
                      {user.is_staff === true ? (
                        <HiMiniCheckBadge className="text-blue-700 text-xl gap-x-10" />
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
                      className="bg-blue-600 rounded-3xl shadow-md text-white px-4 py-1"
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
                      className="bg-red-600 text-white shadow-md px-3 py-1 rounded-3xl"
                      onClick={() => deleteFunction(user.id)}
                    >
                      Delete
                    </motion.button>
                  </div>
                </li>
              ))}
              {notification ? (
                <div className="absolute items-center p-20 justify-center bottom-0 top-0 right-0 left-0  w-full bg-black bg-opacity-15">
                  <div className="bg-white p-10 h-[220px] shadow-2xl rounded-xl">
                    <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                      <ExclamationTriangleIcon
                        aria-hidden="true"
                        className="h-6 w-6 text-red-600"
                      />
                    </div>
                    <p className="text-lg">
                      Are you sure you want to delete this User? note all data
                      will be permanently removed. This action cannot be undone.
                    </p>
                    <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
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
                        className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
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
                        className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-black hover:bg-gray-50 sm:mt-0 sm:w-auto"
                      >
                        Cancel
                      </motion.button>
                    </div>
                  </div>
                </div>
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
              className="w-full lg:w-1/2 p-2"
            >
              <h1 className="md:text-xl border-l-[#b67a3d] border-l-8 mb-5 font-bold uppercase">
                <span className="ml-2">Edit Users</span>
              </h1>
              <form
                className="bg-white shadow-xl rounded-lg p-4"
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
                <div className="mb-4 flex items-center">
                  <input
                    type="checkbox"
                    name="is_active"
                    checked={formData.is_active}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  <label className="text-gray-700">Active</label>
                </div>
                <div className="mb-4 flex items-center">
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
                <div className="mb-4 flex items-center">
                  <input
                    type="checkbox"
                    name="profile.is_paid_membership"
                    checked={formData.profile.is_paid_membership}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  <label className="text-gray-700">Paid Membership</label>
                </div>
                <div className="mb-4 flex items-center">
                  <input
                    type="checkbox"
                    name="profile.is_paid_conference"
                    checked={formData.profile.is_paid_conference}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  <label className="text-gray-700">Paid Conference</label>
                </div>
                <div className="mb-4 flex items-center">
                  <input
                    type="checkbox"
                    name="profile.is_student"
                    checked={formData.profile.is_student}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  <label className="text-gray-700">Student</label>
                </div>
                <div className="w-full flex bg-slate-100 shadow-xl py-3 justify-end">
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
