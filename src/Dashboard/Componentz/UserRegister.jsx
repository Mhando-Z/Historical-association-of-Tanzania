import React, { useState } from "react";
import axiosInstance from "../../Context/axiosInstance";
import logo from "../../Assets/Images/Logo3.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const UserRegister = ({ handleRegistration }) => {
  const [error, setError] = useState([]);
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
    password2: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError([]);
    try {
      const response = await axiosInstance.post(
        "hat-users/register/",
        formData
      );

      console.log("User registered:", response.data);
      // Optionally, redirect or show a success message
    } catch (error) {
      setError(error.response.data);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center  ">
      <div className="flex flex-col xl:p-20 p-10 w-full xl:max-w-xl rounded-2xl shadow-2xl bg-slate-100">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img className="mx-auto h-10 w-auto" src={logo} alt="Hat logo" />
          <h2 className="mt-3 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Create User account
          </h2>
        </div>
        <form onSubmit={handleSubmit} className="gap-y-5 flex flex-col">
          <div className="">
            <label htmlFor="email" className="block text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full py-2 rounded-3xl ring-1 ring-[#b67a3d] px-10  border-gray-300 shadow-sm"
              required
            />
            <div className="mt-1 w-full text-red-600 flex lg:items-end justify-end">
              <p>{error?.email ? error?.email[0] : ""}</p>
            </div>
          </div>
          <div className="">
            <label htmlFor="username" className="block text-gray-700">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="mt-1 py-2 ring-1 ring-[#b67a3d] px-10 outline-none rounded-3xl  block w-full  border-gray-300"
              required
            />
            <div className="mt-1 w-full text-red-600 flex lg:items-end justify-end">
              <p>{error?.username ? error?.username[0] : ""}</p>
            </div>
          </div>
          <div className="">
            <label htmlFor="password" className="block text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="mt-1 block w-full py-2 px-10 outline-none ring-1 ring-[#b67a3d] rounded-3xl border-gray-300 shadow-sm"
              required
            />
            <div className="mt-1 w-full flex text-red-600 lg:items-end justify-end">
              <p>{error?.password ? error?.password[0] : ""}</p>
            </div>
          </div>
          <div className="">
            <label htmlFor="password2" className="block text-gray-700">
              Confirm Password
            </label>
            <input
              type="password"
              id="password2"
              name="password2"
              value={formData.password2}
              onChange={handleChange}
              className="mt-1 block w-full outline-none ring-1 ring-[#b67a3d] rounded-3xl py-2 px-10 border-gray-300 shadow-sm"
              required
            />
            <div className="mt-1 w-full flex text-red-600 lg:items-end justify-end">
              <p>{error?.password ? error?.password[0] : ""}</p>
            </div>
          </div>
          <div className="flex gap-y-5 flex-col-reverse justify-between  md:flex-row w-full md:items-end">
            <div className="flex lg:flex-row flex-col gap-y-2 items-center gap-x-2">
              <h1>Already have an Account?</h1>
              <Link onClick={handleRegistration}>
                <h1 className="text-blue-700 font-medium">Log-in</h1>
              </Link>
            </div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.8 }}
              transition={{ type: "spring", ease: "easeOut" }}
              className="flex flex-col w-full md:w-auto"
            >
              <button className="bg-[#b67a3d] rounded-3xl text-white px-6 py-2 hover:bg-[#d79f67] transition-colors">
                Register
              </button>
            </motion.div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserRegister;
