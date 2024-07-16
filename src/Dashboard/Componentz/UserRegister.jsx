import React, { useState } from "react";
import axios from "axios";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    first_name: "",
    last_name: "",
    username: "",
    is_student: false,
    institution: "",
    branch: "",
    title: "",
    phone_number: "",
    nationality: "",
    address: "",
    profile_picture: null,
    is_paid_membership: false,
    is_paid_conference: false,
    student_id: "",
    course_of_study: "",
    college: "",
    gender: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      profile_picture: e.target.files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    for (const key in formData) {
      data.append(key, formData[key]);
    }
    console.log(formData);

    try {
      const { data: datas } = await axios.post(
        "http://127.0.0.1:8000/hat-users/register/",
        formData
      );
      console.log(datas);
      console.log("User Created Successfully");
      // handle successful registration (e.g., show a message or redirect)
    } catch (ex) {
      console.log(ex.response.data);
      // handle registration error (e.g., show an error message)
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-xl shadow-md">
      <h2 className="text-2xl font-bold text-center mb-6">Register</h2>
      <form onSubmit={handleSubmit}>
        {[
          { label: "Email", type: "email", name: "email" },
          { label: "First Name", type: "text", name: "first_name" },
          { label: "Last Name", type: "text", name: "last_name" },
          { label: "Username", type: "text", name: "username" },
          { label: "Institution", type: "text", name: "institution" },
          { label: "Branch", type: "text", name: "branch" },
          { label: "Title", type: "text", name: "title" },
          { label: "Phone Number", type: "text", name: "phone_number" },
          { label: "Nationality", type: "text", name: "nationality" },
          { label: "Address", type: "text", name: "address" },
          { label: "Student ID", type: "text", name: "student_id" },
          { label: "Course of Study", type: "text", name: "course_of_study" },
          { label: "College", type: "text", name: "college" },
          { label: "Password", type: "password", name: "password" },
        ].map((input) => (
          <div key={input.name} className="mb-4">
            <label className="block text-gray-700">{input.label}</label>
            <input
              type={input.type}
              name={input.name}
              value={formData[input.name]}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded-lg"
            />
          </div>
        ))}
        <div className="mb-4">
          <label className="block text-gray-700">Profile Picture</label>
          <input
            type="file"
            name="profile_picture"
            onChange={handleFileChange}
            className="w-full mt-1 p-2 border rounded-lg"
          />
        </div>
        <div className="mb-4">
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              name="is_student"
              checked={formData.is_student}
              onChange={handleChange}
              className="form-checkbox"
            />
            <span className="ml-2 text-gray-700">Is Student</span>
          </label>
        </div>
        <div className="mb-4">
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              name="is_paid_membership"
              checked={formData.is_paid_membership}
              onChange={handleChange}
              className="form-checkbox"
            />
            <span className="ml-2 text-gray-700">Paid Membership</span>
          </label>
        </div>
        <div className="mb-4">
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              name="is_paid_conference"
              checked={formData.is_paid_conference}
              onChange={handleChange}
              className="form-checkbox"
            />
            <span className="ml-2 text-gray-700">Paid Conference</span>
          </label>
        </div>
        <button
          type="submit"
          className="w-full bg-[#b67a3d] text-white py-2 rounded-lg hover:bg-[#a0652f]"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;
