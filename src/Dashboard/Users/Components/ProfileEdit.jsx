// export default ProfileEdit;
import React, { useContext, useState } from "react";
import axiosInstance from "../../../Context/axiosInstance";
import UserContext from "../../../Context/UserContext";
import { Dots } from "react-activity";
import { FaEdit, FaSave } from "react-icons/fa";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

function ProfileEdit() {
  const { userData, setUserData } = useContext(UserContext);
  const [newPassword, setNewPassword] = useState("");
  const { countries } = useContext(UserContext);

  const [formData, setFormData] = useState({
    profile: {
      full_name: userData?.profile?.full_name || "",
      reviews: userData?.profile?.reviews || "",
      is_student: userData?.profile?.is_student || false,
      student_id: userData?.profile?.student_id || "",
      course_of_study: userData?.profile?.course_of_study || "",
      institution: userData?.profile?.institution || "",
      branch: userData?.profile?.branch || "",
      country: userData?.profile?.country || "",
      city: userData?.profile?.city || "",
      title: userData?.profile?.title || "",
      phone_number: userData?.profile?.phone_number || "",
      nationality: userData?.profile?.nationality || "",
      physical_address: userData?.profile?.physical_address || "",
      gender: userData?.profile?.gender || "",
      college: userData?.profile?.college || "",
    },
  });

  // password change function
  const handlePasswordChange = async () => {
    try {
      await axiosInstance.post("hat-users/Userprofile/change-password/", {
        new_password: newPassword,
      });
      toast.success("Password changed successfully");
    } catch (error) {
      toast.error("Error changing password");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Replace with your actual API endpoint
      const response = await axiosInstance.put(
        "/hat-users/UpdateUserProfile/",
        formData
      );

      if (response.status === 200) {
        // Update context with new data
        setUserData((prevUserData) => ({
          ...prevUserData,
          profile: response.data.profile,
        }));
      }

      toast.success("Profile updated successfully");
    } catch (error) {
      toast.error("Error updating profile");
      console.error("Error updating profile:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      profile: {
        ...prevFormData.profile,
        [name]: value,
      },
    }));
  };

  if (!userData)
    return (
      <div className="flex flex-col items-center justify-center min-h-screen ">
        <Dots color="#b67a3d" size={35} speed={0.7} animating={true} />
      </div>
    );

  return (
    <div>
      <div>
        <h1 className="md:text-2xl flex flex-row items-center gap-x-3 border-l-[#b67a3d] py-3  mb-5 font-medium">
          <FaEdit className="ml-3" />
          <span className="ml-1">Edit User Profile</span>
        </h1>

        <form onSubmit={handleSubmit}>
          <div className="flex flex-col w-full mb-4 ">
            <label
              htmlFor="full_name"
              className="block py-2 bg-slate-50 w-full mb-2  border-l-[#b67a3d] border-r-[#b67a3d] xl:text-lg text-sm  leading-6 text-gray-900"
            >
              <span className="ml-2">Full Name</span>
            </label>
            <input
              type="text"
              name="full_name"
              value={formData?.profile.full_name}
              required
              placeholder="Full Name"
              onChange={handleChange}
              className="block p-2 mt-2 border placeholder:text-sm -md focus:bg-blue-100 outline-none rounded-3xl px-7 ring-1 ring-[#b67a3d]"
            />
          </div>
          <div className="flex flex-col w-full mb-4 ">
            <label
              htmlFor="phone_number"
              className="block py-2 bg-slate-50 w-full mb-2  border-l-[#b67a3d] border-r-[#b67a3d] xl:text-lg text-sm  leading-6 text-gray-900"
            >
              <span className="ml-2">Phone Number</span>
            </label>
            <input
              type="text"
              name="phone_number"
              value={formData.profile.phone_number}
              required
              placeholder="Phone Number"
              onChange={handleChange}
              className="block p-2 mt-2 border placeholder:text-sm -xl focus:bg-blue-100 outline-none rounded-3xl px-7 ring-1 ring-[#b67a3d]"
            />
          </div>
          <div className="flex flex-col w-full mb-4 ">
            <label
              htmlFor="nationality"
              className="block py-2 bg-slate-50 w-full mb-2  border-l-[#b67a3d] border-r-[#b67a3d] xl:text-lg text-sm  leading-6 text-gray-900"
            >
              <span className="ml-2">Nationality</span>
            </label>
            <input
              type="text"
              name="nationality"
              value={formData.profile.nationality}
              placeholder="Nationality"
              required
              onChange={handleChange}
              className="block p-2 mt-2 border placeholder:text-sm -xl focus:bg-blue-100 outline-none rounded-3xl px-7 ring-1 ring-[#b67a3d]"
            />
          </div>
          <div className="flex flex-col w-full mb-4 ">
            <label
              htmlFor="gender"
              className="block py-2 bg-slate-50 w-full mb-2  border-l-[#b67a3d] border-r-[#b67a3d] xl:text-lg text-sm  leading-6 text-gray-900"
            >
              <span className="ml-2">gender</span>
            </label>
            <select
              name="gender"
              value={formData?.profile.gender}
              onChange={handleChange}
              required
              className="block p-2 rounded-3xl mt-2 border placeholder:text-sm shadow focus:bg-blue-50 outline-none  px-7 ring-1 ring-[#b67a3d] bg-white"
            >
              <option value="" disabled>
                Select Gender
              </option>
              <option value="male">male</option>
              <option value="female">female</option>
            </select>
          </div>

          {userData?.profile.is_student && (
            <>
              {/* Student Details */}
              <div className="flex flex-col w-full mb-4 ">
                <label
                  htmlFor="student_id"
                  className="block py-2 bg-slate-50 w-full mb-2  border-l-[#b67a3d] border-r-[#b67a3d] xl:text-lg text-sm  leading-6 text-gray-900"
                >
                  <span className="ml-2">Student Id</span>
                </label>
                <input
                  type="text"
                  name="student_id"
                  value={formData.profile.student_id}
                  placeholder="Student ID"
                  onChange={handleChange}
                  className="block p-2 mt-2 border placeholder:text-sm -xl focus:bg-blue-100 outline-none rounded-3xl px-7 ring-1 ring-[#b67a3d]"
                />
              </div>
              <div className="flex flex-col w-full mb-4 ">
                <label
                  htmlFor="course_of_study"
                  className="block py-2 bg-slate-50 w-full mb-2  border-l-[#b67a3d] border-r-[#b67a3d] xl:text-lg text-sm  leading-6 text-gray-900"
                >
                  <span className="ml-2">Course of Study</span>
                </label>
                <input
                  type="text"
                  name="course_of_study"
                  value={formData.profile.course_of_study}
                  placeholder="Course of Study"
                  onChange={handleChange}
                  className="block p-2 mt-2 border placeholder:text-sm -xl focus:bg-blue-100 outline-none rounded-3xl px-7 ring-1 ring-[#b67a3d]"
                />
              </div>
              <div className="flex flex-col w-full mb-4 ">
                <label
                  htmlFor="institution"
                  className="block py-2 bg-slate-50 w-full mb-2  border-l-[#b67a3d] border-r-[#b67a3d] xl:text-lg text-sm  leading-6 text-gray-900"
                >
                  <span className="ml-2">Institution</span>
                </label>
                <input
                  type="text"
                  name="institution"
                  value={formData.profile.institution}
                  placeholder="Institution"
                  onChange={handleChange}
                  className="block p-2 mt-2 border placeholder:text-sm -xl focus:bg-blue-100 outline-none rounded-3xl px-7 ring-1 ring-[#b67a3d]"
                />
              </div>
              <div className="flex flex-col w-full mb-4 ">
                <label
                  htmlFor="college"
                  className="block py-2 bg-slate-50 w-full mb-2  border-l-[#b67a3d] border-r-[#b67a3d] xl:text-lg text-sm  leading-6 text-gray-900"
                >
                  <span className="ml-2">College</span>
                </label>
                <input
                  type="text"
                  name="college"
                  value={formData.profile.college}
                  placeholder="College"
                  onChange={handleChange}
                  className="block p-2 mt-2 border placeholder:text-sm -xl focus:bg-blue-100 outline-none rounded-3xl px-7 ring-1 ring-[#b67a3d]"
                />
              </div>
            </>
          )}

          <div className="flex flex-col w-full mb-4 ">
            <label
              htmlFor="title"
              className="block py-2 bg-slate-50 w-full mb-2  border-l-[#b67a3d] border-r-[#b67a3d] xl:text-lg text-sm  leading-6 text-gray-900"
            >
              <span className="ml-2">Title</span>
            </label>
            <input
              type="text"
              name="title"
              value={formData.profile.title}
              placeholder="Title"
              onChange={handleChange}
              className="block p-2 mt-2 border placeholder:text-sm -xl focus:bg-blue-100 outline-none rounded-3xl px-7 ring-1 ring-[#b67a3d]"
            />
          </div>
          <div className="flex flex-col w-full mb-4 ">
            <label
              htmlFor="branch"
              className="block py-2 bg-slate-50 w-full mb-2  border-l-[#b67a3d] border-r-[#b67a3d] xl:text-lg text-sm  leading-6 text-gray-900"
            >
              <span className="ml-2">Branch</span>
            </label>
            <input
              type="text"
              name="branch"
              value={formData.profile.branch}
              placeholder="Branch"
              onChange={handleChange}
              className="block p-2 mt-2 border placeholder:text-sm -xl focus:bg-blue-100 outline-none rounded-3xl px-7 ring-1 ring-[#b67a3d]"
            />
          </div>
          <div className="flex flex-col w-full mb-4 ">
            <label
              htmlFor="country"
              className="block py-2 bg-slate-50 w-full mb-2  border-l-[#b67a3d] border-r-[#b67a3d] xl:text-lg text-sm  leading-6 text-gray-900"
            >
              <span className="ml-2">Country</span>
            </label>
            <select
              name="country"
              placeholder="Country"
              value={formData?.profile.country}
              onChange={handleChange}
              required
              className="block p-2 rounded-3xl mt-2 border placeholder:text-sm shadow focus:bg-blue-50 outline-none  px-7 ring-1 ring-[#b67a3d] bg-white"
            >
              <option value="" disabled>
                Select Country
              </option>
              {countries?.map((dt) => (
                <option key={dt.id} value={dt.name}>
                  {dt.name}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col w-full mb-4 ">
            <label
              htmlFor="city"
              className="block py-2 bg-slate-50 w-full mb-2  border-l-[#b67a3d] border-r-[#b67a3d] xl:text-lg text-sm  leading-6 text-gray-900"
            >
              <span className="ml-2">City</span>
            </label>
            <input
              type="text"
              name="city"
              value={formData.profile.city}
              placeholder="City"
              onChange={handleChange}
              className="block p-2 mt-2 border placeholder:text-sm -xl focus:bg-blue-100 outline-none rounded-3xl px-7 ring-1 ring-[#b67a3d]"
            />
          </div>
          <div className="flex flex-col w-full mb-4 ">
            <label
              htmlFor="physical_address"
              className="block py-2 bg-slate-50 w-full mb-2  border-l-[#b67a3d] border-r-[#b67a3d] xl:text-lg text-sm  leading-6 text-gray-900"
            >
              <span className="ml-2">Physical address</span>
            </label>
            <input
              type="text"
              name="physical_address"
              value={formData.profile.physical_address}
              placeholder="Physical Address"
              onChange={handleChange}
              className="block p-2 mt-2 border placeholder:text-sm -xl focus:bg-blue-100 outline-none rounded-3xl px-7 ring-1 ring-[#b67a3d]"
            />
          </div>
          <div className="flex flex-col w-full mt-5 mb-10 ">
            <label
              htmlFor="reviews"
              className="block py-2 bg-slate-50 w-full mb-2  border-l-[#b67a3d] border-r-[#b67a3d] xl:text-lg text-sm  leading-6 text-gray-900"
            >
              <span className="ml-2">Reviews</span>
            </label>
            <textarea
              type="textarea"
              cols="30"
              rows="6"
              name="reviews"
              value={formData.profile.reviews}
              placeholder="reviews"
              onChange={handleChange}
              className="block p-7 mt-2 border placeholder:text-sm -xl focus:bg-blue-100 outline-none rounded-3xl px-7 ring-1 ring-[#b67a3d]"
            />
          </div>
          <div className="flex justify-end mt-10 mb-10">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.8 }}
              transition={{ type: "spring", ease: "easeOut" }}
              type="submit"
              className="bg-[#b67a3d] flex flex-row items-center gap-x-2 text-white py-2 px-4 rounded-full -md hover:bg-[#a36a30]"
            >
              <FaSave />
              Save Changes
            </motion.button>
          </div>
        </form>
        <div className="flex flex-col w-full">
          <div className="flex flex-col w-full">
            <h3 className="py-3 mb-4 ml-2 text-xl -sm bg-slate-50">
              Change Password
            </h3>
            <input
              type="password"
              name="new_password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="block p-2 mt-2 border placeholder:text-sm -xl focus:bg-blue-100 outline-none rounded-3xl px-7 ring-1 ring-[#b67a3d]"
              placeholder="New Password"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.8 }}
              transition={{ type: "spring", ease: "easeOut" }}
              onClick={handlePasswordChange}
              className="px-4 py-2 mt-4 text-white bg-red-500 rounded-md hover:bg-red-600"
            >
              Change Password
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileEdit;
