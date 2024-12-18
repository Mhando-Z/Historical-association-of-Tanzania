// export default Membership;
import React, { useState, useContext, useEffect } from "react";
import axiosInstance from "../../../Context/axiosInstance";
import UserContext from "../../../Context/UserContext";
import { toast } from "react-toastify";
// import Joi from "joi";
import { motion } from "framer-motion";
import PhoneInput from "react-phone-input-2";

// import Payment from "../Components/Payments";
import { useNavigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

// steps
const steps = [
  { id: 1, name: "INTRODUCTION" },
  { id: 2, name: "PERSONAL INFO" },
  { id: 3, name: "CONTACT INFO" },
  { id: 4, name: "WORK INFO" },
  { id: 5, name: "LOCATION INFO" },
  { id: 6, name: "STUDENT INFO" },
  { id: 7, name: "PAYMENT" },
  { id: 8, name: "SUMMARY" },
];

const Membership = () => {
  const { userData, setUserData } = useContext(UserContext);
  const { fetchUserData } = useContext(UserContext);
  const { countries } = useContext(UserContext);
  const [Regions, setRegion] = useState([]);
  const [CountryCode, setCountryCode] = useState("TZ");
  const [step, setStep] = useState(1);
  const [isStudent, setIsStudent] = useState(false);
  const navigate = useNavigate();
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
      is_paid_membership: userData?.profile?.is_paid_membership || false,
      first_name: "",
      middle_name: "",
      last_name: "",
      // profile_picture: userData?.profile?.profile_picture || null,
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevFormData) => {
      // Update the specific name field
      const updatedProfile = {
        ...prevFormData.profile,
        [name]: value,
      };

      // If any of the name fields change, update the full_name
      if (["first_name", "middle_name", "last_name"].includes(name)) {
        updatedProfile.full_name = `${updatedProfile.first_name || ""} ${
          updatedProfile.middle_name || ""
        } ${updatedProfile.last_name || ""}`.trim();
      }

      return {
        ...prevFormData,
        profile: updatedProfile,
      };
    });

    if (name === "country") {
      const selectedCountry = countries.find((dt) => dt.name === value);
      setCountryCode(selectedCountry?.iso2 || "TZ"); // Default to TZ if not found
    }
  };

  const handleSave = async () => {
    const updateData = new FormData();
    for (const key in formData.profile) {
      updateData.append(`profile.${key}`, formData.profile[key]);
    }
    if (formData.profile_picture) {
      updateData.append("profile_picture", formData.profile_picture);
    }

    try {
      const response = await axiosInstance.put(
        "/hat-users/UpdateUserProfile/",
        updateData
      );
      if (response.status === 200) {
        // Update context with new data
        setUserData((prevUserData) => ({
          ...prevUserData,
          profile: response.data.profile,
        }));
      }
      fetchUserData();
      navigate("/Dashboard/UserProfile/");
      toast.success("Profile updated successfully");
    } catch (error) {
      console.error(error.response);
      toast.error("Error updating profile");
    }
  };

  const fetchCitiesesData = async () => {
    try {
      const { data } = await axiosInstance.get(
        `https://api.countrystatecity.in/v1/countries/${CountryCode}/states`,
        {
          headers: {
            "X-CSCAPI-KEY":
              "S0RSSFRVWkg0dE5DaEFMM0FtVkJQbDRGcWNjT2JiVFY3WlpXYjNwYg==",
          },
        }
      );
      setRegion(data);
    } catch (error) {}
  };

  useEffect(() => {
    fetchCitiesesData();
  }, [CountryCode]);

  // Validation for each step
  const validateStep = () => {
    switch (step) {
      case 1: // INTRODUCTION step
        return true; // No validation for step 1

      case 2: // PERSONAL INFO step
        if (!formData.profile.full_name) {
          return (
            formData.profile.first_name &&
            formData.profile.middle_name &&
            formData.profile.last_name
          );
        }
        return true;

      case 3: // CONTACT INFO step
        return formData.profile.phone_number && formData.profile.nationality;

      case 4: // WORK INFO step
        return formData.profile.title && formData.profile.branch;

      case 5: // LOCATION INFO step
        return (
          formData.profile.country &&
          formData.profile.city &&
          formData.profile.physical_address
        );

      case 6: // STUDENT INFO step (optional if not a student)
        if (isStudent) {
          return (
            formData.profile.student_id &&
            formData.profile.institution &&
            formData.profile.course_of_study
          );
        }
        return true;

      case 7: // PAYMENT step
        return true;
      // return formData.profile.is_paid_membership;

      case 8: // SUMMARY step
        return true; // No validation for summary step

      default:
        return false;
    }
  };

  // Handle next step
  const handleNext = () => {
    if (validateStep()) {
      if (step < steps.length) {
        setStep(step + 1);
      }
    } else {
      toast.error("Please fill in all required fields for this step.");
    }
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };
  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <>
            <h2 className="text-2xl font-semibold md:text-3xl">
              Hello, {userData?.username || "User"}!
            </h2>
            <p className="max-w-4xl mt-4 text-sm sm:text-lg">
              Welcome to the Historical Association of Tanzania! We are excited
              to have you join us as a valued member. Before we can officially
              welcome you aboard, there are a few important steps in the
              registration process that you'll need to complete.
              <span className="font-semibold">What are those steps?</span>
              Don't worry, we'll guide you through them. Just click "Next" to
              begin your journey and become an official member!
            </p>
          </>
        );
      case 2:
        return (
          <div className="flex flex-col py-10 gap-y-5">
            <div>
              <h2 className="mb-2 text-2xl font-semibold text-start md:text-3xl">
                Get to Know You
              </h2>
              <p className="text-sm text-start sm:text-lg">
                We’d love to learn more about you! Please share your full name,
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-y-3 gap-x-4">
              <input
                type="text"
                name="first_name"
                placeholder="First Name"
                onChange={handleChange}
                className="block p-2 mt-2 border relative placeholder:text-sm   focus:bg-blue-50 outline-none rounded px-7 ring-1 ring-[#b67a3d]"
              />
              <input
                type="text"
                name="middle_name"
                required
                placeholder="Middle Name"
                onChange={handleChange}
                className="block p-2 mt-2 border placeholder:text-sm  focus:bg-blue-50 outline-none rounded px-7 ring-1 ring-[#b67a3d]"
              />
              <input
                type="text"
                name="last_name"
                placeholder="Last Name"
                onChange={handleChange}
                className="block p-2 mt-2 border placeholder:text-sm  focus:bg-blue-50 outline-none rounded px-7 ring-1 ring-[#b67a3d]"
              />
            </div>
            {formData?.profile?.full_name ? (
              <>
                <h1 className="flex flex-col mt-2 text-sm font-semibold gap-y-2 md:text-md">
                  Fullname:-<>{formData?.profile?.full_name}</>
                  <span className="text-xs font-normal md:text-sm">
                    Click next, If you wish to continue using the above name{" "}
                  </span>
                </h1>
              </>
            ) : (
              ""
            )}
          </div>
        );
      case 3:
        return (
          <div className="flex flex-col py-10 gap-y-5">
            <div>
              <h2 className="mb-2 text-2xl font-semibold text-start md:text-3xl">
                Your Contact Information
              </h2>
              <p className="text-sm text-start sm:text-lg">
                Help us stay connected! Please provide your contact details and
                let us know where you’re from, so we can keep in touch and share
                important updates with you.
              </p>
            </div>
            <div className="grid items-center grid-cols-1 md:grid-cols-3 gap-y-3 gap-x-4">
              <div className="flex flex-col">
                <label htmlFor="phone" className="md:mb-1">
                  Phone Number
                </label>
                <PhoneInput
                  country={"tz"} // Default country Tanzania with code +255
                  value={formData?.profile.phone_number}
                  onChange={(phone) =>
                    setFormData((prevFormData) => ({
                      ...prevFormData,
                      profile: {
                        ...prevFormData.profile,
                        phone_number: phone, //   property name
                      },
                    }))
                  }
                  inputProps={{
                    name: "phone",
                    required: true,
                    autoFocus: false,
                    id: "phone",
                  }}
                  containerClass="!w-full !mt-2"
                  inputClass="!w-full !h-full !border-none !bg-transparent !pl-12 !pr-4 !py-3 !rounded  !ring-1 !ring-[#b67a3d] focus:!ring-1 focus:!ring-[#b67a3d] focus:!bg-blue-50 !outline-none"
                  buttonClass="!absolute !left-0 !top-0 !bottom-0 !border-none !bg-transparent !rounded-l"
                  dropdownClass="!left-0"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="nationality" className="md:mb-1">
                  Nationality
                </label>
                <input
                  type="text"
                  name="nationality"
                  value={formData?.profile.nationality}
                  placeholder="Nationality"
                  required
                  onChange={handleChange}
                  className="block capitalize p-2 mt-2 border placeholder:text-sm shadow focus:bg-blue-50 outline-none rounded px-7 ring-1 ring-[#b67a3d]"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="gender" className="md:mb-1">
                  Gender
                </label>
                <select
                  name="gender"
                  value={formData?.profile.gender}
                  onChange={handleChange}
                  required
                  className="block appearance-none p-2 mt-2 border placeholder:text-sm shadow focus:bg-blue-50 outline-none rounded px-7 ring-1 ring-[#b67a3d] bg-white"
                >
                  <option value="">Rather not Say</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
            </div>
          </div>
        );
      case 4:
        return (
          <div className="flex flex-col py-10 gap-y-5 rounded-2xl">
            <div>
              <h2 className="mb-2 text-2xl font-semibold text-start md:text-3xl">
                Your Work Information
              </h2>
              <p className="text-sm text-start sm:text-lg">
                We’d love to learn about your professional background! Please
                share your work experience and any relevant details about your
                career journey.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-y-3 gap-x-4">
              <input
                type="text"
                name="title"
                placeholder="Job Title"
                value={formData?.profile.title}
                required
                onChange={handleChange}
                className="block capitalize p-2 mt-2 border placeholder:text-sm shadow focus:bg-blue-50 outline-none rounded px-7 ring-1 ring-[#b67a3d]"
              />
              <input
                type="text"
                name="branch"
                placeholder="Institution or Organisation"
                value={formData?.profile.branch}
                required
                onChange={handleChange}
                className="block capitalize p-2 mt-2 border placeholder:text-sm shadow focus:bg-blue-50 outline-none rounded px-7 ring-1 ring-[#b67a3d]"
              />
            </div>
          </div>
        );
      case 5:
        return (
          <div className="flex flex-col py-10 gap-y-5 rounded-2xl">
            <div>
              <h2 className="mb-2 text-2xl font-semibold text-start md:text-3xl">
                Your Location
              </h2>
              <p className="text-sm text-start sm:text-lg">
                Let us know where you’re based! Please provide your current
                location so we can better understand where you're joining us
                from.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-y-3 gap-x-4">
              <select
                name="country"
                placeholder="Country"
                value={formData?.profile.country}
                onChange={handleChange}
                required
                className="block appearance-none p-2 mt-2 border placeholder:text-sm shadow focus:bg-blue-50 outline-none rounded px-7 ring-1 ring-[#b67a3d] bg-white"
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
              <select
                name="city"
                placeholder="city"
                value={formData?.profile.city}
                onChange={handleChange}
                required
                className="block p-2 appearance-none mt-2 border placeholder:text-sm shadow focus:bg-blue-50 outline-none rounded px-7 ring-1 ring-[#b67a3d] bg-white"
              >
                <option value="" disabled>
                  Select Region
                </option>
                {Regions?.map((dt) => (
                  <option key={dt.id} value={dt.name}>
                    {dt.name}
                  </option>
                ))}
              </select>

              <input
                type="text"
                name="physical_address"
                placeholder="Physical Address"
                value={formData?.profile.physical_address}
                required
                onChange={handleChange}
                className="block p-2 mt-2 border placeholder:text-sm shadow focus:bg-blue-50 outline-none rounded px-7 ring-1 ring-[#b67a3d]"
              />
            </div>
          </div>
        );
      case 6:
        return (
          <div className="flex flex-col py-10 gap-y-5 rounded-2xl">
            <div>
              <h1 className="text-2xl font-semibold md:text-3xl">
                Hey there! We’d Love to Know More...
              </h1>
              <h2 className="mt-2 text-md">
                Are you a student? If so, please take a moment to fill out the
                form below with your details.
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-3 gap-x-4">
              <label className="flex items-center">
                <span className="mr-4">Are you a student?</span>
                <div
                  className={`relative w-14 h-8 ${
                    isStudent ? "bg-green-500" : "bg-gray-300"
                  } rounded-full cursor-pointer transition-colors duration-300`}
                  onClick={() => {
                    setIsStudent(!isStudent);
                    setFormData((prevFormData) => ({
                      ...prevFormData,
                      profile: {
                        ...prevFormData.profile,
                        is_student: !isStudent,
                      },
                    }));
                  }}
                >
                  <motion.div
                    layout
                    className={`absolute top-1 h-6 w-6 rounded-full bg-white transform ${
                      isStudent ? "translate-x-6" : "translate-x-0"
                    } transition-transform duration-300 ease-in-out`}
                  />
                </div>
              </label>

              <AnimatePresence>
                {isStudent && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.5 }}
                    className="grid col-span-3 mt-4 gap-y-4"
                  >
                    <motion.input
                      type="text"
                      name="student_id"
                      placeholder="Student ID"
                      value={formData?.profile.student_id}
                      onChange={handleChange}
                      className="block p-2 border placeholder:text-sm shadow focus:bg-blue-50 outline-none rounded px-7 ring-1 ring-[#b67a3d]"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                    <motion.input
                      type="text"
                      name="course_of_study"
                      placeholder="Course of Study"
                      value={formData?.profile.course_of_study}
                      onChange={handleChange}
                      className="block p-2 border placeholder:text-sm shadow focus:bg-blue-50 outline-none rounded px-7 ring-1 ring-[#b67a3d]"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                    />
                    <motion.input
                      type="text"
                      name="institution"
                      placeholder="Institution"
                      value={formData?.profile.institution}
                      onChange={handleChange}
                      className="block p-2 border placeholder:text-sm shadow focus:bg-blue-50 outline-none rounded px-7 ring-1 ring-[#b67a3d]"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3, delay: 0.2 }}
                    />
                    <motion.input
                      type="text"
                      name="college"
                      placeholder="College"
                      value={formData?.profile.college}
                      onChange={handleChange}
                      className="block p-2 border placeholder:text-sm shadow focus:bg-blue-50 outline-none rounded px-7 ring-1 ring-[#b67a3d]"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3, delay: 0.3 }}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        );

      case 7:
        return (
          <div className="flex flex-col py-10 gap-y-5 rounded-2xl">
            {/* <Payment /> */}
            <div>
              <h2 className="mb-2 text-2xl font-semibold text-start md:text-3xl">
                Payments Section
              </h2>
              <p className="text-sm text-start sm:text-lg">
                Please complete your registration by contributing a small fee.
              </p>
            </div>
          </div>
        );
      case 8:
        return (
          <div className="flex flex-col py-10 gap-y-5 rounded-2xl">
            <div>
              <h1 className="flex flex-col py-3 text-2xl md:text-2xl text-start bg-slate-50 ">
                <span className="ml-2 font-semibold">
                  Review before you Save
                </span>
                <span className="ml-2 text-sm capitalize text-start sm:text-lg">
                  Please review all the details you have entered. If everything
                  is correct, click "Confirm" to complete the registration.{" "}
                </span>
              </h1>
            </div>
            <div className="grid grid-cols-1 ml-2 md:grid-cols-3 gap-x-4">
              <div className="flex flex-col gap-y-2">
                <div className="flex flex-col justify-end w-full"></div>
                <label className="font-semibold">Full Name:</label>
                <p>{formData.profile.full_name}</p>
                <label className="font-semibold">Phone Number:</label>
                <p>{formData.profile.phone_number}</p>
                <label className="font-semibold">Nationality:</label>
                <p>{formData.profile.nationality}</p>
                <label className="font-semibold">Gender:</label>
                <p>{formData.profile.gender}</p>
                <label className="font-semibold">Job Title:</label>
                <p>{formData.profile.title}</p>
                <label className="font-semibold">Country:</label>
                <p>{formData.profile.country}</p>
                <label className="font-semibold">City:</label>
                <p>{formData.profile.city}</p>
                {isStudent && (
                  <>
                    <label className="font-semibold">Student ID:</label>
                    <p>{formData.profile.student_id}</p>
                    <label className="font-semibold">Course of Study:</label>
                    <p>{formData.profile.course_of_study}</p>
                    <label className="font-semibold">Institution:</label>
                    <p>{formData.profile.institution}</p>
                  </>
                )}
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="mt-16">
      {/* Steps Navigation */}
      <div className="mb-6 sm:mb-8">
        <div className="flex flex-wrap items-center justify-between sm:justify-start">
          {steps.map((stp, index) => (
            <React.Fragment key={stp.id}>
              <div className="flex items-center mb-2 sm:mb-0">
                <motion.div
                  className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs sm:text-sm ${
                    stp.id <= step
                      ? "bg-green-500 text-white"
                      : "bg-gray-300 text-gray-600"
                  }`}
                  initial={{ scale: 0.8 }}
                  animate={{ scale: stp.id === step ? 1.1 : 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {stp.id < step ? (
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    stp.id
                  )}
                </motion.div>
                <span className="hidden ml-2 text-xs font-medium xl:text-sm xl:inline">
                  {stp.name}
                </span>
              </div>
              {index < steps.length - 1 && (
                <div className="flex-1 hidden h-px mx-2 bg-gray-300 sm:block" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Form Fields */}
      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          {renderStep()}
        </motion.div>
      </AnimatePresence>

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-6 sm:mt-8">
        {step > 1 && (
          <button
            onClick={handleBack}
            className="px-3 py-2 text-sm text-gray-700 bg-gray-200 rounded-md sm:px-4 sm:py-2 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            BACK
          </button>
        )}
        {step < steps.length && (
          <button
            onClick={handleNext}
            className="px-3 py-2 ml-auto text-sm text-white bg-green-500 rounded-md sm:px-4 sm:py-2 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            NEXT
          </button>
        )}
        {step === steps.length && (
          <>
            <button
              onClick={handleSave}
              className="px-3 py-2 ml-2 text-sm text-white bg-green-500 rounded-md sm:px-4 sm:py-2 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              Confirm
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Membership;
