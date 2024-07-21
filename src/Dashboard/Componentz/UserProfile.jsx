import React, { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { FaEdit, FaSave, FaCamera, FaUser } from "react-icons/fa";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axiosInstance from "../../Context/axiosInstance";

const UserProfile = () => {
  const [userData, setUserData] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [profilePicture, setProfilePicture] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axiosInstance.get("hat-users/user/profile/");
        setUserData(response.data);
      } catch (error) {
        console.error("Error fetching user data", error);
      }
    };
    fetchUserData();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleProfileInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      profile: { ...userData.profile, [name]: value },
    });
  };

  const handleProfilePictureChange = (e) => {
    setProfilePicture(e.target.files[0]);
  };

  const handleSave = async () => {
    const formData = new FormData();
    for (const key in userData) {
      if (key === "profile") {
        for (const profileKey in userData.profile) {
          formData.append(
            `profile.${profileKey}`,
            userData.profile[profileKey]
          );
        }
      } else {
        formData.append(key, userData[key]);
      }
    }
    if (profilePicture) {
      formData.append("profile_picture", profilePicture);
    }

    try {
      const response = await axiosInstance.put(
        "/user/profile/update/",
        formData
      );
      setUserData(response.data);
      setIsEditing(false);
      toast.success("Profile saved successfully");
    } catch (error) {
      console.error("Error saving user data", error);
      toast.error("Failed to save profile");
    }
  };

  const handlePasswordChange = async () => {
    try {
      await axios.post("/user/profile/change-password/", {
        new_password: newPassword,
      });
      toast.success("Password changed successfully");
    } catch (error) {
      console.error("Error changing password", error);
      toast.error("Failed to change password");
    }
  };

  if (!userData) return <div>Loading...</div>;

  return (
    <div className="max-w-5xl mt-10 mx-auto p-6 bg-white rounded-lg shadow-lg">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold">User Profile</h2>
          {isEditing ? (
            <button
              onClick={handleSave}
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 flex items-center"
            >
              <FaSave className="mr-2" /> Save
            </button>
          ) : (
            <button
              onClick={() => setIsEditing(true)}
              className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 flex items-center"
            >
              <FaEdit className="mr-2" /> Edit
            </button>
          )}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex items-center">
            <div className="mr-4">
              {userData.profile.profile_picture ? (
                <img
                  src={userData.profile.profile_picture}
                  alt="Profile"
                  className="w-24 h-24 rounded-full"
                />
              ) : (
                <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center">
                  <FaUser className="text-4xl text-gray-500" />
                </div>
              )}
              {isEditing && (
                <div className="flex items-center mt-2">
                  <input type="file" onChange={handleProfilePictureChange} />
                  <FaCamera className="ml-2 text-xl text-gray-500" />
                </div>
              )}
            </div>
            <div>
              <div className="mb-2">
                <label className="block text-sm font-medium">Username</label>
                <input
                  type="text"
                  name="username"
                  value={userData.username}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  className="w-full px-4 py-2 border rounded-md"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Email</label>
                <input
                  type="email"
                  name="email"
                  value={userData.email}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  className="w-full px-4 py-2 border rounded-md"
                />
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">User Details Overview</h3>
            {[
              { label: "Full Name", name: "full_name", type: "text" },
              { label: "Reviews", name: "reviews", type: "text" },
              { label: "Is Student", name: "is_student", type: "checkbox" },
              { label: "Student ID", name: "student_id", type: "text" },
              {
                label: "Course of Study",
                name: "course_of_study",
                type: "text",
              },
              { label: "Institution", name: "institution", type: "text" },
              { label: "Branch", name: "branch", type: "text" },
              { label: "Title", name: "title", type: "text" },
              { label: "Phone Number", name: "phone_number", type: "text" },
              { label: "Nationality", name: "nationality", type: "text" },
              {
                label: "Last Login",
                name: "last_login",
                type: "text",
                readOnly: true,
              },
              { label: "Address", name: "address", type: "text" },
              { label: "Gender", name: "gender", type: "text" },
              { label: "College", name: "college", type: "text" },
              {
                label: "Date Registered",
                name: "date_registered",
                type: "text",
                readOnly: true,
              },
            ].map((field, index) => (
              <div key={index} className="mb-2">
                <label className="block text-sm font-medium">
                  {field.label}
                </label>
                <input
                  type={field.type}
                  name={field.name}
                  value={userData.profile[field.name]}
                  onChange={handleProfileInputChange}
                  disabled={!isEditing || field.readOnly}
                  className="w-full px-4 py-2 border rounded-md"
                />
              </div>
            ))}
          </div>
        </div>
        {isEditing && (
          <div className="mt-6">
            <h3 className="text-xl font-bold">Change Password</h3>
            <input
              type="password"
              name="new_password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-md mt-2"
              placeholder="New Password"
            />
            <button
              onClick={handlePasswordChange}
              className="px-4 py-2 mt-4 bg-red-500 text-white rounded-md hover:bg-red-600"
            >
              Change Password
            </button>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default UserProfile;
