// export default Membership;
import React, { useState, useContext } from "react";
import { toast } from "react-toastify";
import axiosInstance from "../../../Context/axiosInstance";
import UserContext from "../../../Context/UserContext";
import { Dots } from "react-activity";
// import Joi from "joi";
import { motion } from "framer-motion";
import {
  PDFDownloadLink,
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";
import { useNavigate } from "react-router-dom";
// import Payment from "../Components/Payments";

const Membership = () => {
  const { userData, setUserData } = useContext(UserContext);
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
      profile_picture: userData?.profile?.profile_picture || null,
    },
  });

  //   const schema = Joi.object({
  //     profile: Joi.object({
  //       full_name: Joi.string().required(),
  //       reviews: Joi.string().optional(),
  //       is_student: Joi.boolean().required(),
  //       student_id: Joi.string().optional(),
  //       course_of_study: Joi.string().optional(),
  //       institution: Joi.string().optional(),
  //       branch: Joi.string().required(),
  //       country: Joi.string().required(),
  //       city: Joi.string().required(),
  //       title: Joi.string().required(),
  //       phone_number: Joi.string().required(),
  //       nationality: Joi.string().required(),
  //       physical_address: Joi.string().required(),
  //       gender: Joi.string().required(),
  //       college: Joi.string().required(),
  //       is_paid_membership: Joi.boolean().required(),
  //     }),
  //   });

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

  const handleFileChange = (e) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      profile_picture: e.target.files[0],
    }));
    console.log(e);
  };

  const handleSave = async () => {
    // const { error } = schema.validate(formData, { abortEarly: false });
    // if (error) {
    //   toast.error("Please fill out all required fields.");
    //   return;
    // }

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
      navigate("/Dashboard/UserProfile/");
      toast.success("Profile updated successfully");
    } catch (error) {
      console.log(error.response);
      toast.error("Error updating profile");
    }
  };

  const handleNext = () => {
    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="flex flex-col p-10 bg-white shadow-xl gap-y-5 rounded-2xl">
            <div>
              <h2 className="mb-2 text-2xl font-bold text-center md:text-start md:text-4xl">
                Personal Information
              </h2>
              <p className="text-sm text-center md:text-start sm:text-lg">
                Please fill out your personal information.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-4">
              <input
                type="text"
                name="first_name"
                placeholder="First Name"
                onChange={handleChange}
                className="block p-2 mt-2 border relative placeholder:text-sm shadow-xl focus:bg-blue-100 outline-none rounded-3xl px-7 ring-1 ring-[#b67a3d]"
              />
              <input
                type="text"
                name="middle_name"
                required
                placeholder="Middle Name"
                onChange={handleChange}
                className="block p-2 mt-2 border placeholder:text-sm shadow-xl focus:bg-blue-100 outline-none rounded-3xl px-7 ring-1 ring-[#b67a3d]"
              />
              <input
                type="text"
                name="last_name"
                placeholder="Last Name"
                onChange={handleChange}
                className="block p-2 mt-2 border placeholder:text-sm shadow-xl focus:bg-blue-100 outline-none rounded-3xl px-7 ring-1 ring-[#b67a3d]"
              />
              <input
                type="file"
                name="profile_picture"
                placeholder="profile picture"
                onChange={handleFileChange}
                className="block p-2 mt-2 border placeholder:text-sm shadow-xl focus:bg-blue-100 outline-none rounded-3xl px-7 ring-1 ring-[#b67a3d]"
              />
            </div>
            <div className="flex flex-col-reverse justify-end mt-6 text-sm md:flex-row gap-x-5">
              <button
                className="px-6 py-1 mt-4 text-white rounded-2xl shadow-xl bg-[#482ea8]"
                onClick={handleBack}
              >
                Back
              </button>
              <button
                className="px-6 py-1 mt-4 text-white rounded-2xl shadow-xl bg-[#b67a3d]"
                onClick={() => {
                  setFormData((prevFormData) => ({
                    ...prevFormData,
                    profile: {
                      ...prevFormData.profile,
                      full_name: `${prevFormData.profile.first_name} ${prevFormData.profile.middle_name} ${prevFormData.profile.last_name}`,
                    },
                  }));
                  handleNext();
                }}
              >
                Next
              </button>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="flex flex-col p-10 bg-white shadow-xl gap-y-5 rounded-2xl">
            <div>
              <h2 className="mb-2 text-2xl font-bold text-center md:text-start md:text-4xl">
                Contact Information
              </h2>
              <p className="text-sm text-center md:text-start sm:text-lg">
                Tell us more about you, how can we contact you, where are you
                from...
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-4">
              <input
                type="text"
                name="phone_number"
                value={formData.profile.phone_number}
                required
                placeholder="Phone Number"
                onChange={handleChange}
                className="block p-2 mt-2 border placeholder:text-sm shadow-xl focus:bg-blue-100 outline-none rounded-3xl px-7 ring-1 ring-[#b67a3d]"
              />
              <input
                type="text"
                name="nationality"
                value={formData.profile.nationality}
                placeholder="Nationality"
                required
                onChange={handleChange}
                className="block p-2 mt-2 border placeholder:text-sm shadow-xl focus:bg-blue-100 outline-none rounded-3xl px-7 ring-1 ring-[#b67a3d]"
              />
              <input
                type="text"
                name="gender"
                value={formData.profile.gender}
                placeholder="Gender"
                required
                onChange={handleChange}
                className="block p-2 mt-2 border placeholder:text-sm shadow-xl focus:bg-blue-100 outline-none rounded-3xl px-7 ring-1 ring-[#b67a3d]"
              />
            </div>
            <div className="flex flex-col-reverse justify-end mt-6 text-sm md:flex-row gap-x-5">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.8 }}
                transition={{ type: "spring", ease: "easeOut" }}
                className="px-6 py-1 mt-4 text-white rounded-2xl shadow-xl bg-[#482ea8]"
                onClick={handleBack}
              >
                Back
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.8 }}
                transition={{ type: "spring", ease: "easeOut" }}
                className="px-6 py-1 mt-4 text-white rounded-2xl shadow-xl bg-[#b67a3d]"
                onClick={handleNext}
              >
                Next
              </motion.button>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="flex flex-col p-10 bg-white shadow-xl gap-y-5 rounded-2xl">
            <div>
              <h2 className="mb-2 text-2xl font-bold text-center md:text-start md:text-4xl">
                Work Information
              </h2>
              <p className="text-sm text-center md:text-start sm:text-lg">
                Please tell us about your work experience.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-4">
              <input
                type="text"
                name="title"
                placeholder="Job Title"
                value={formData.profile.title}
                required
                onChange={handleChange}
                className="block p-2 mt-2 border placeholder:text-sm shadow-xl focus:bg-blue-100 outline-none rounded-3xl px-7 ring-1 ring-[#b67a3d]"
              />
              <input
                type="text"
                name="branch"
                placeholder="Branch"
                value={formData.profile.branch}
                required
                onChange={handleChange}
                className="block p-2 mt-2 border placeholder:text-sm shadow-xl focus:bg-blue-100 outline-none rounded-3xl px-7 ring-1 ring-[#b67a3d]"
              />
            </div>
            <div className="flex flex-col-reverse justify-end mt-6 text-sm md:flex-row gap-x-5">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.8 }}
                transition={{ type: "spring", ease: "easeOut" }}
                className="px-6 py-1 mt-4 text-white rounded-2xl shadow-xl bg-[#482ea8]"
                onClick={handleBack}
              >
                Back
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.8 }}
                transition={{ type: "spring", ease: "easeOut" }}
                className="px-6 py-1 mt-4 text-white rounded-2xl shadow-xl bg-[#b67a3d]"
                onClick={handleNext}
              >
                Next
              </motion.button>
            </div>
          </div>
        );
      case 4:
        return (
          <div className="flex flex-col p-10 bg-white shadow-xl gap-y-5 rounded-2xl">
            <div>
              <h2 className="mb-2 text-2xl font-bold text-center md:text-start md:text-4xl">
                Location
              </h2>
              <p className="text-sm text-center md:text-start sm:text-lg">
                Please tell us where are you located.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-4">
              <input
                type="text"
                name="country"
                placeholder="Country"
                value={formData.profile.country}
                required
                onChange={handleChange}
                className="block p-2 mt-2 border placeholder:text-sm shadow-xl focus:bg-blue-100 outline-none rounded-3xl px-7 ring-1 ring-[#b67a3d]"
              />
              <input
                type="text"
                name="city"
                placeholder="City"
                value={formData.profile.city}
                required
                onChange={handleChange}
                className="block p-2 mt-2 border placeholder:text-sm shadow-xl focus:bg-blue-100 outline-none rounded-3xl px-7 ring-1 ring-[#b67a3d]"
              />
              <input
                type="text"
                name="physical_address"
                placeholder="Physical Address"
                value={formData.profile.physical_address}
                required
                onChange={handleChange}
                className="block p-2 mt-2 border placeholder:text-sm shadow-xl focus:bg-blue-100 outline-none rounded-3xl px-7 ring-1 ring-[#b67a3d]"
              />
            </div>
            <div className="flex flex-col-reverse justify-end mt-6 text-sm md:flex-row gap-x-5">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.8 }}
                transition={{ type: "spring", ease: "easeOut" }}
                className="px-6 py-1 mt-4 text-white rounded-2xl shadow-xl bg-[#482ea8]"
                onClick={handleBack}
              >
                Back
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.8 }}
                transition={{ type: "spring", ease: "easeOut" }}
                className="px-6 py-1 mt-4 text-white rounded-2xl shadow-xl bg-[#b67a3d]"
                onClick={handleNext}
              >
                Next
              </motion.button>
            </div>
          </div>
        );
      case 5:
        return (
          <div className="flex flex-col p-10 bg-white shadow-xl gap-y-5 rounded-2xl">
            <div>
              <h2 className="mb-2 text-2xl font-bold text-center md:text-start md:text-4xl">
                Academic Information
              </h2>
              <p className="text-sm text-center md:text-start sm:text-lg">
                Please provide your academic information if you are a student.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-4">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="is_student"
                  checked={isStudent}
                  onChange={() => {
                    setIsStudent(!isStudent);
                    setFormData((prevFormData) => ({
                      ...prevFormData,
                      profile: {
                        ...prevFormData.profile,
                        is_student: !isStudent,
                      },
                    }));
                  }}
                  className="mr-2"
                />
                Are you a student?
              </label>
              {isStudent && (
                <>
                  <input
                    type="text"
                    name="student_id"
                    placeholder="Student ID"
                    value={formData.profile.student_id}
                    onChange={handleChange}
                    className="block p-2 mt-2 border placeholder:text-sm shadow-xl focus:bg-blue-100 outline-none rounded-3xl px-7 ring-1 ring-[#b67a3d]"
                  />
                  <input
                    type="text"
                    name="course_of_study"
                    placeholder="Course of Study"
                    value={formData.profile.course_of_study}
                    onChange={handleChange}
                    className="block p-2 mt-2 border placeholder:text-sm shadow-xl focus:bg-blue-100 outline-none rounded-3xl px-7 ring-1 ring-[#b67a3d]"
                  />
                  <input
                    type="text"
                    name="institution"
                    placeholder="Institution"
                    value={formData.profile.institution}
                    onChange={handleChange}
                    className="block p-2 mt-2 border placeholder:text-sm shadow-xl focus:bg-blue-100 outline-none rounded-3xl px-7 ring-1 ring-[#b67a3d]"
                  />
                  <input
                    type="text"
                    name="college"
                    placeholder="college"
                    value={formData.profile.college}
                    onChange={handleChange}
                    className="block p-2 mt-2 border placeholder:text-sm shadow-xl focus:bg-blue-100 outline-none rounded-3xl px-7 ring-1 ring-[#b67a3d]"
                  />
                </>
              )}
            </div>
            <div className="flex flex-col-reverse justify-end mt-6 text-sm md:flex-row gap-x-5">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.8 }}
                transition={{ type: "spring", ease: "easeOut" }}
                className="px-6 py-1 mt-4 text-white rounded-2xl shadow-xl bg-[#482ea8]"
                onClick={handleBack}
              >
                Back
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.8 }}
                transition={{ type: "spring", ease: "easeOut" }}
                className="px-6 py-1 mt-4 text-white rounded-2xl shadow-xl bg-[#b67a3d]"
                onClick={handleNext}
              >
                Next
              </motion.button>
            </div>
          </div>
        );
      case 6:
        return (
          <div className="flex flex-col p-10 bg-white shadow-xl gap-y-5 rounded-2xl">
            {/* <Payment /> */}
            <div>
              <h2 className="mb-2 text-2xl font-bold text-center md:text-start md:text-4xl">
                Payments Section
              </h2>
              <p className="text-sm text-center md:text-start sm:text-lg">
                Please complete your registration by contributing a small fee.
              </p>
            </div>

            <div className="flex flex-col-reverse justify-end mt-6 text-sm md:flex-row gap-x-5">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.8 }}
                transition={{ type: "spring", ease: "easeOut" }}
                className="px-6 py-1 mt-4 text-white rounded-2xl shadow-xl bg-[#482ea8]"
                onClick={handleBack}
              >
                Back
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.8 }}
                transition={{ type: "spring", ease: "easeOut" }}
                className="px-6 py-1 mt-4 text-white rounded-2xl shadow-xl bg-[#b67a3d]"
                onClick={handleNext}
              >
                Next
              </motion.button>
            </div>
          </div>
        );
      case 7:
        return (
          <div className="flex flex-col p-10 bg-white shadow-xl gap-y-5 rounded-2xl">
            <div>
              <h1 className="md:text-3xl flex-col flex text-2xl text-center  md:text-start border-l-[#b67a3d] shadow-xl bg-slate-50 py-3  border-r-[#b67a3d] border-r-8  border-l-8 mb-5 font-bold  ">
                <span className="ml-2"> Review before you Save</span>
                <span className="ml-2 text-sm font-medium text-center capitalize md:text-start sm:text-lg">
                  Please review your information before saving.
                </span>
              </h1>
            </div>
            <div className="grid grid-cols-1 ml-2 md:grid-cols-3 gap-x-4">
              <div className="flex flex-col gap-y-2">
                <div className="flex flex-col justify-end w-full">
                  {/* hat pdf header */}
                  {/* <div>
                    <img src={logo} alt="hat logo" className="h-[]" />
                  </div> */}
                </div>
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
            <div className="flex flex-col-reverse justify-end mt-6 text-sm md:flex-row gap-x-5">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.8 }}
                transition={{ type: "spring", ease: "easeOut" }}
                className="px-6 py-1 mt-4 text-white rounded-2xl shadow-xl bg-[#482ea8]"
                onClick={handleBack}
              >
                Back
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.8 }}
                transition={{ type: "spring", ease: "easeOut" }}
                className="px-6 py-1 mt-4 text-white rounded-2xl shadow-xl bg-[#b67a3d]"
                onClick={handleSave}
              >
                Save
              </motion.button>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  const MyDocument = () => (
    <Document>
      <Page style={styles.body}>
        {/* Header */}
        <View style={styles.header}>
          <Image style={styles.logo} src="" />
          <View style={styles.contactDetails}>
            <Text style={styles.companyName}>
              Historical Association of Tanzania
            </Text>
            <Text>Contact: +255 123 456 789</Text>
            <Text>Email: info@historicalassociation.tz</Text>
          </View>
        </View>
        <View style={styles.divider} />

        {/* Personal Information Section */}
        <View style={styles.section}>
          <Text style={styles.heading}>PERSONAL INFORMATION</Text>
          <View style={styles.divider} />
          <View style={styles.table}>
            <View style={styles.tableRow}>
              <Text style={styles.tableCellLabel}>Full Name</Text>
              <Text style={styles.tableCell}>{formData.profile.full_name}</Text>
            </View>
            <View style={styles.tableRow}>
              <Text style={styles.tableCellLabel}>Nationality</Text>
              <Text style={styles.tableCell}>
                {formData.profile.nationality}
              </Text>
            </View>
            <View style={styles.tableRow}>
              <Text style={styles.tableCellLabel}>Gender</Text>
              <Text style={styles.tableCell}>{formData.profile.gender}</Text>
            </View>
            <View style={styles.tableRow}>
              <Text style={styles.tableCellLabel}>Phone Number</Text>
              <Text style={styles.tableCell}>
                {formData.profile.phone_number}
              </Text>
            </View>
          </View>
        </View>

        {/* Academic Information Section (if student) */}
        {isStudent && (
          <View style={styles.section}>
            <Text style={styles.heading}>ACADEMIC INFORMATION</Text>
            <View style={styles.divider} />
            <View style={styles.table}>
              <View style={styles.tableRow}>
                <Text style={styles.tableCellLabel}>Student ID</Text>
                <Text style={styles.tableCell}>
                  {formData.profile.student_id}
                </Text>
              </View>
              <View style={styles.tableRow}>
                <Text style={styles.tableCellLabel}>Course of Study</Text>
                <Text style={styles.tableCell}>
                  {formData.profile.course_of_study}
                </Text>
              </View>
              <View style={styles.tableRow}>
                <Text style={styles.tableCellLabel}>Institution</Text>
                <Text style={styles.tableCell}>
                  {formData.profile.institution}
                </Text>
              </View>
            </View>
          </View>
        )}

        {/* Work Information Section */}
        <View style={styles.section}>
          <Text style={styles.heading}>WORK INFORMATION</Text>
          <View style={styles.divider} />
          <View style={styles.table}>
            <View style={styles.tableRow}>
              <Text style={styles.tableCellLabel}>Job Title</Text>
              <Text style={styles.tableCell}>{formData.profile.title}</Text>
            </View>
          </View>
        </View>

        {/* Location Information Section */}
        <View style={styles.section}>
          <Text style={styles.heading}>LOCATION INFORMATION</Text>
          <View style={styles.divider} />
          <View style={styles.table}>
            <View style={styles.tableRow}>
              <Text style={styles.tableCellLabel}>Country</Text>
              <Text style={styles.tableCell}>{formData.profile.country}</Text>
            </View>
            <View style={styles.tableRow}>
              <Text style={styles.tableCellLabel}>City</Text>
              <Text style={styles.tableCell}>{formData.profile.city}</Text>
            </View>
            <View style={styles.tableRow}>
              <Text style={styles.tableCellLabel}>Physical Address</Text>
              <Text style={styles.tableCell}>{formData.profile.address}</Text>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );

  const styles = StyleSheet.create({
    body: {
      padding: 20,
      fontFamily: "roboto",
    },
    header: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 20,
    },
    logo: {
      width: 100,
      height: 70,
    },
    contactDetails: {
      textAlign: "right",
    },
    companyName: {
      fontSize: 20,
      fontWeight: "bold",
      color: "#b67a3d",
    },
    divider: {
      borderBottomWidth: 2,
      borderBottomColor: "#b67a3d",
      marginVertical: 10,
    },
    section: {
      marginBottom: 20,
    },
    heading: {
      fontSize: 14,
      marginBottom: 5,
      fontWeight: "black",
      color: "#b67a3d",
    },
    table: {
      display: "table",
      width: "auto",
    },
    tableRow: {
      flexDirection: "row",
    },
    tableCellLabel: {
      width: "40%",
      fontSize: 12,
      fontWeight: "bold",
      padding: 5,
      border: "none",
    },
    tableCell: {
      width: "60%",
      fontSize: 12,
      textAlign: "left",
      padding: 5,
      border: "none",
    },
  });

  return (
    <div className="container flex flex-col min-h-screen py-20 mx-auto mt-10">
      {renderStep()}

      <div className="mt-4">
        <PDFDownloadLink
          document={<MyDocument />}
          fileName="Membership_form.pdf"
        >
          {({ loading }) =>
            loading ? (
              <Dots size={14} color="#482ea8" />
            ) : (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.8 }}
                transition={{ type: "spring", ease: "easeOut" }}
                className="px-6 py-1 mt-4 text-white rounded-2xl shadow-xl bg-[#b67a3d]"
              >
                Download PDF
              </motion.button>
            )
          }
        </PDFDownloadLink>
      </div>
    </div>
  );
};

export default Membership;
