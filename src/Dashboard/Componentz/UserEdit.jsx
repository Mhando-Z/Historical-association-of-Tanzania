import React, { useState, useEffect } from "react";
import axiosInstance from "../../Context/axiosInstance";

const AdminUserManagement = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
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
      setFormData((prevState) => ({
        ...prevState,
        [name]: checked,
      }));
    } else if (name.includes("profile.")) {
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
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axiosInstance.put(
        `/hat-users/admin/users/${selectedUser.id}/`,
        formData
      );
      fetchUsers();
      setSelectedUser(null);
      alert("User updated successfully");
    } catch (error) {
      console.error("Error updating user:", error);
      alert("Error updating user");
    }
  };

  const handleDelete = async (userId) => {
    try {
      await axiosInstance.delete(`/hat-users/admin/users/${userId}/`);
      fetchUsers();
      alert("User deleted successfully");
    } catch (error) {
      console.error("Error deleting user:", error);
      alert("Error deleting user");
    }
  };

  return (
    <div className="mt-14 py-2 bg-slate-100">
      <h1 className="md:text-xl border-l-[#b67a3d] shadow-xl bg-slate-50 py-3  border-r-[#b67a3d] border-r-8  border-l-8 mb-5 font-bold uppercase">
        <span className="ml-2">Admin User Management</span>
      </h1>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 p-2">
          <h1 className="md:text-xl border-l-[#b67a3d] border-l-8 mb-5 font-bold uppercase">
            <span className="ml-2">Users List</span>
          </h1>
          <ul className="bg-white shadow-md rounded-lg p-4">
            {users?.map((user) => (
              <li
                key={user.id}
                className="flex justify-between items-center p-2 border-b"
              >
                <span>{user.username}</span>
                <div className="flex space-x-2">
                  <button
                    className="bg-blue-500 text-white px-2 py-1 rounded"
                    onClick={() => handleSelectUser(user)}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red-500 text-white px-2 py-1 rounded"
                    onClick={() => handleDelete(user.id)}
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
        {selectedUser && (
          <div className="w-full lg:w-1/2 p-2">
            <h1 className="md:text-xl border-l-[#b67a3d] border-l-8 mb-5 font-bold uppercase">
              <span className="ml-2">Edit Users</span>
            </h1>
            <form
              className="bg-white shadow-md rounded-lg p-4"
              onSubmit={handleSubmit}
            >
              <div className="mb-4">
                <label className="block text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded"
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
                  className="w-full px-3 py-2 border rounded"
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
              <h4 className="text-lg font-semibold mb-2">
                Profile Information
              </h4>
              <div className="mb-4">
                <label className="block text-gray-700">Full Name</label>
                <input
                  type="text"
                  name="profile.full_name"
                  value={formData.profile.full_name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Reviews</label>
                <textarea
                  name="profile.reviews"
                  value={formData.profile.reviews}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Student ID</label>
                <input
                  type="text"
                  name="profile.student_id"
                  value={formData.profile.student_id}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Course of Study</label>
                <input
                  type="text"
                  name="profile.course_of_study"
                  value={formData.profile.course_of_study}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Institution</label>
                <input
                  type="text"
                  name="profile.institution"
                  value={formData.profile.institution}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Branch</label>
                <input
                  type="text"
                  name="profile.branch"
                  value={formData.profile.branch}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Title</label>
                <input
                  type="text"
                  name="profile.title"
                  value={formData.profile.title}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Phone Number</label>
                <input
                  type="text"
                  name="profile.phone_number"
                  value={formData.profile.phone_number}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Nationality</label>
                <input
                  type="text"
                  name="profile.nationality"
                  value={formData.profile.nationality}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Address</label>
                <textarea
                  name="profile.address"
                  value={formData.profile.address}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded"
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
              <div className="mb-4">
                <label className="block text-gray-700">Gender</label>
                <select
                  name="profile.gender"
                  value={formData.profile.gender}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded"
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">College</label>
                <input
                  type="text"
                  name="profile.college"
                  value={formData.profile.college}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded"
                />
              </div>
              <button
                type="submit"
                className="bg-green-500 text-white px-4 py-2 rounded"
              >
                Update User
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminUserManagement;
