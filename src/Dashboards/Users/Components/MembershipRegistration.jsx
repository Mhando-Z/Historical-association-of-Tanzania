import React, { useState } from "react";
import { motion } from "framer-motion";
import axiosInstance from "../../../Context/axiosInstance";
import { toast } from "react-toastify";

const MemberRegister = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    nationality: "",
    gender: "",
    phone: "",
    is_student: false,
    registrationNumber: "",
    institution: "",
    courseOfStudy: "",
    college: "",
    country: "",
    city: "",
    address: "",
  });

  //   const profile = {
  //     full_name: user?.profile?.full_name || "",
  //     reviews: user?.profile?.reviews || "",
  //     is_student: user?.profile?.is_student || false,
  //     student_id: user?.profile?.student_id || "",
  //     course_of_study: user?.profile?.course_of_study || "",
  //     institution: user?.profile?.institution || "",
  //     branch: user?.profile?.branch || "",
  //     title: user?.profile?.title || "",
  //     phone_number: user?.profile?.phone_number || "",
  //     nationality: user?.profile?.nationality || "",
  //     physical_address: user?.profile?.physical_address || "",
  //     gender: user?.profile?.gender || "",
  //     college: user?.profile?.college || "",
  //     is_paid_membership: user?.profile?.is_paid_membership || false,
  //     is_paid_conference: user?.profile?.is_paid_conference || false,
  //   };

  const first = formData.firstName;
  const second = formData.middleName;
  const last = formData.lastName;
  const fullname = first + " " + second + " " + last;

  const update1 = {
    full_name: fullname,
    nationality: formData.nationality,
    phone_number: formData.phone,
    gender: formData.gender.toLowerCase(),
  };
  const phaseOne = async () => {
    try {
      const { data } = await axiosInstance.put(
        "/hat-users/UpdateUserProfile/",
        update1
      );

      toast.success("Profile updated successfully");
    } catch (error) {
      console.error(error.response);
      toast.error("Error updating profile");
    }
  };

  const handleNext = () => {
    if (step === 2) {
      phaseOne();
    }
    setStep(step + 1);
  };
  const handleBack = () => {
    setStep(step - 1);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleComplete = () => {
    // console.log(formData);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col p-10 bg-white shadow-xl gap-y-4 rounded-xl"
          >
            <h2 className="text-4xl font-bold">
              Hello, {formData.firstName || "User"}!
            </h2>
            <p className="max-w-xl text-sm sm:text-lg">
              Welcome to the Historical Association of Tanzania.We will be happy
              to have you as a Member,there are some few things you need to know
              To be our member, there are few registration processes you need to
              pass through.
              <span className="font-bold">What are those steps?...</span>well if
              you want to know then please Click next to start the registration.
            </p>
            <div className="flex justify-end w-full">
              <button
                className="px-6 py-1 mt-4 text-white rounded-2xl shadow-xl bg-[#b67a3d]  "
                onClick={handleNext}
              >
                Next
              </button>
            </div>
          </motion.div>
        );
      case 2:
        return (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col p-10 bg-white shadow-xl gap-y-5 rounded-xl"
          >
            <div>
              <h2 className="mb-2 text-2xl font-bold text-center md:text-start md:text-4xl">
                Get to know you
              </h2>
              <p className="text-sm text-center md:text-start sm:text-lg">
                Tell us more about you, how can we contact you, where are you
                from..
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-4 ">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                onChange={handleChange}
                className="block p-2 mt-2 border placeholder:text-sm shadow-xl focus:bg-blue-100 outline-none rounded-3xl px-7 ring-1 ring-[#b67a3d]"
              />
              <input
                type="text"
                name="middleName"
                placeholder="Middle Name"
                onChange={handleChange}
                className="block p-2 mt-2 border placeholder:text-sm shadow-xl focus:bg-blue-100 outline-none rounded-3xl px-7 ring-1 ring-[#b67a3d]"
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                onChange={handleChange}
                className="block p-2 mt-2 border placeholder:text-sm shadow-xl focus:bg-blue-100 outline-none rounded-3xl px-7 ring-1 ring-[#b67a3d]"
              />
            </div>
            <div className="grid w-full grid-cols-1 md:grid-cols-3 gap-x-4 ">
              <input
                type="text"
                name="nationality"
                placeholder="Nationality"
                onChange={handleChange}
                className="block p-2 mt-2 border placeholder:text-sm shadow-xl focus:bg-blue-100 outline-none rounded-3xl px-7 ring-1 ring-[#b67a3d]"
              />
              <input
                type="text"
                name="gender"
                placeholder="Gender"
                onChange={handleChange}
                className="block p-2 mt-2 border placeholder:text-sm shadow-xl focus:bg-blue-100 outline-none rounded-3xl px-7 ring-1 ring-[#b67a3d]"
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                onChange={handleChange}
                className="block p-2 mt-2 border placeholder:text-sm shadow-xl focus:bg-blue-100 outline-none rounded-3xl px-7 ring-1 ring-[#b67a3d]"
              />
            </div>
            <div className="flex flex-col-reverse justify-end mt-6 text-sm md:flex-row gap-x-5">
              <button
                className="px-6 py-1 mt-4 text-white rounded-2xl shadow-xl bg-[#482ea8]  "
                onClick={handleBack}
              >
                Back
              </button>
              <button
                className="px-6 py-1 mt-4 text-white rounded-2xl shadow-xl bg-[#b67a3d]  "
                onClick={handleNext}
              >
                Next
              </button>
            </div>
          </motion.div>
        );
      case 3:
        return (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col p-10 bg-white shadow-xl gap-y-4 rounded-xl"
          >
            <div>
              <h1 className="text-2xl font-bold sm:text-4xl">
                Hey! tell us More..
              </h1>
              <h2 className="text-lg font-bold">
                Are you a student? if yes please fillout the following form
              </h2>
            </div>
            <label>
              <input
                type="radio"
                name="is_student"
                value="yes"
                onChange={() => setFormData({ ...formData, is_student: true })}
              />{" "}
              Yes
            </label>
            <label>
              <input
                type="radio"
                name="is_student"
                value="no"
                onChange={() => setFormData({ ...formData, is_student: false })}
              />{" "}
              No
            </label>
            {formData?.is_student === true ? (
              <div className="mt-4">
                <div className="grid w-full grid-cols-1 gap-x-10 gap-y-4 md:grid-cols-2">
                  <input
                    type="text"
                    name="registrationNumber"
                    placeholder="Registration Number"
                    onChange={handleChange}
                    className="block p-2 mt-2 border placeholder:text-sm shadow-xl focus:bg-blue-100 outline-none rounded-3xl px-7 ring-1 ring-[#b67a3d]"
                  />
                  <input
                    type="text"
                    name="institution"
                    placeholder="Institution"
                    onChange={handleChange}
                    className="block p-2 mt-2 border placeholder:text-sm shadow-xl focus:bg-blue-100 outline-none rounded-3xl px-7 ring-1 ring-[#b67a3d]"
                  />
                  <input
                    type="text"
                    name="courseOfStudy"
                    placeholder="Course of Study"
                    onChange={handleChange}
                    className="block p-2 mt-2 border placeholder:text-sm shadow-xl focus:bg-blue-100 outline-none rounded-3xl px-7 ring-1 ring-[#b67a3d]"
                  />
                  <input
                    type="text"
                    name="college"
                    placeholder="College"
                    onChange={handleChange}
                    className="block p-2 mt-2 border placeholder:text-sm shadow-xl focus:bg-blue-100 outline-none rounded-3xl px-7 ring-1 ring-[#b67a3d]"
                  />
                </div>
                <label className="block max-w-lg text-sm md:text-lg mt-9">
                  <input type="checkbox" required /> I declare that the provided
                  information is valid and if they are not valid, I am ready to
                  receive any punishment that HAT will issue.
                </label>
              </div>
            ) : (
              ""
            )}
            <div className="flex flex-col-reverse justify-end text-sm md:flex-row gap-x-5">
              <button
                className="px-6 py-1 mt-4 text-white rounded-2xl shadow-xl bg-[#482ea8]  "
                onClick={handleBack}
              >
                Back
              </button>
              <button
                className="px-6 py-1 mt-4 text-white rounded-2xl shadow-xl bg-[#b67a3d]  "
                onClick={handleNext}
              >
                Next
              </button>
            </div>
          </motion.div>
        );
      case 4:
        return (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col p-10 bg-white shadow-xl gap-y-4 rounded-xl"
          >
            <h2 className="text-2xl font-bold md:text-4xl">
              Don't get tired, we are almost there..!!
            </h2>
            <p className="md:text-lg">
              HAT would like to know your current residence
            </p>
            <input
              type="text"
              name="country"
              placeholder="Country"
              onChange={handleChange}
              className="block p-2 mt-2 border placeholder:text-sm shadow-xl focus:bg-blue-100 outline-none rounded-3xl px-7 ring-1 ring-[#b67a3d]"
            />
            <input
              type="text"
              name="city"
              placeholder="City"
              onChange={handleChange}
              className="block p-2 mt-2 border placeholder:text-sm shadow-xl focus:bg-blue-100 outline-none rounded-3xl px-7 ring-1 ring-[#b67a3d]"
            />
            <input
              type="text"
              name="address"
              placeholder="Physical Address"
              onChange={handleChange}
              className="block p-2 mt-2 border placeholder:text-sm shadow-xl focus:bg-blue-100 outline-none rounded-3xl px-7 ring-1 ring-[#b67a3d]"
            />
            <div className="flex flex-col-reverse justify-end mt-6 text-sm md:flex-row gap-x-5">
              <button
                className="px-6 py-1 mt-4 text-white rounded-2xl shadow-xl bg-[#482ea8]  "
                onClick={handleBack}
              >
                Back
              </button>
              <button
                className="px-6 py-1 mt-4 text-white rounded-2xl shadow-xl bg-[#b67a3d]  "
                onClick={handleNext}
              >
                Next
              </button>
            </div>
          </motion.div>
        );
      case 5:
        return (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col p-10 bg-white shadow-xl gap-y-4 rounded-xl"
          >
            <h2 className="text-2xl font-bold md:text-4xl">Final stage</h2>
            <p className="max-w-lg">
              To complete membership registration, you are required to pay a
              small fee which will help with the running of the organization.
              Please make the payment to complete the registration.
            </p>
            <div className="flex flex-col-reverse justify-end mt-6 text-sm md:flex-row gap-x-5">
              <button
                className="px-6 py-1 mt-4 text-white rounded-2xl shadow-xl bg-[#482ea8]  "
                onClick={handleBack}
              >
                Back
              </button>
              <button
                className="px-6 py-1 mt-4 text-white bg-green-500 shadow-xl rounded-2xl "
                onClick={handleComplete}
              >
                Back
              </button>
            </div>
          </motion.div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex mx-auto container flex-col bg-gradient-to-r from-[#b67a3d] to via-70% via-transparent to to-transparent items-center justify-center min-h-screen p-6   bg-white border-none  shadow-md">
      {renderStep()}
    </div>
  );
};

export default MemberRegister;
