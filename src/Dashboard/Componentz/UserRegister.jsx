// export default UserRegister;
import React, { useState } from "react";
import axiosInstance from "../../Context/axiosInstance";
import logo from "../../Assets/Images/Logo3.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { toast } from "react-toastify";

export const Notifier = ({ data }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: "easeInOut", type: "spring" }}
      className="absolute top-0 bottom-0 left-0 right-0 flex flex-col items-center justify-center max-w-xl bg-black rounded-2xl max-h-xl bg-opacity-30"
    >
      <div className="flex flex-col items-center justify-center text-sm bg-slate-100 size-72 rounded-2xl">
        <IoMdCheckmarkCircleOutline className="text-green-600 text-8xl" />
        <h1 className="text-lg text-green-900">Success</h1>
        <div className="flex flex-row items-center gap-x-2">
          <p>User:</p>
          <p>{data?.username}</p>
        </div>
        <div className="flex flex-row items-center gap-x-2">
          <p>Email:</p>
          <p>{data?.email}</p>
        </div>
        <p className="font-medium text-center text-green-600">
          was created successfully, click the button below to complete your
          registration
        </p>
        <a
          href={"/Dashboard/UserHome"}
          // onClick={() => window.location("/UserHome/")}
        >
          <p className="font-medium text-blue-600">Membership</p>
        </a>
      </div>
    </motion.div>
  );
};

const UserRegister = ({ handleRegistration }) => {
  const navigate = useNavigate();
  const [error, setError] = useState([]);
  const [view, setView] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
    password2: "",
  });
  const location = useLocation();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError([]);
    try {
      const { headers } = await axiosInstance.post(
        "hat-users/register/",
        formData
      );
      // Save generated token from back-end to local storage
      localStorage.setItem("token", headers["x-auth-token"]);

      setView(true); // Display the Notifier component

      // Optionally, redirect the user after a short delay
      // setTimeout(() => {
      //   navigate("/Dashboard/UserHome");
      // }, 10000); // 3-second delay before redirect
    } catch (error) {
      toast.error("User Registration failed");
      setError(error.response.data);
    }
  };

  const handleLogin = () => {
    if (location.pathname === "/Register/") {
      navigate("/Login/");
    } else {
      handleRegistration();
    }
  };

  return (
    <div
      className={`flex flex-col items-center justify-center text-sm lg:text-md ${
        location.pathname === "/Register/"
          ? "min-h-screen bg-gradient-to-t from-[#b67a3d] to-transparent"
          : ""
      }`}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1, ease: "easeInOut", type: "spring" }}
        className="relative flex flex-col w-full p-3 xl:p-10 xl:max-w-xl "
      >
        <div className="mb-6 sm:mx-auto sm:w-full sm:max-w-sm ">
          <img className="w-auto h-10 mx-auto" src={logo} alt="Hat logo" />
          <h2 className="mt-5 text-2xl font-bold leading-9 tracking-tight text-center text-gray-900">
            Create User account
          </h2>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-y-5">
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
              className="mt-1 block w-full outline-none sm:py-2 py-1.5 rounded ring-1 ring-[#b67a3d] px-10 border-gray-300 focus:bg-blue-50"
              required
            />
            <div className="flex justify-end w-full mt-1 text-red-600 lg:items-end">
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
              className="mt-1 sm:py-2 py-1.5  focus:bg-blue-50 ring-1 ring-[#b67a3d] px-10 outline-none rounded block w-full border-gray-300"
              required
            />
            <div className="flex justify-end w-full mt-1 text-red-600 lg:items-end">
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
              className="mt-1 block w-full   focus:bg-blue-50 sm:py-2 py-1.5 px-10 outline-none ring-1 ring-[#b67a3d] rounded border-gray-300"
              required
            />
            <div className="flex justify-end w-full mt-1 text-red-600 lg:items-end">
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
              className="mt-1 block w-full outline-none  focus:bg-blue-50 ring-1 ring-[#b67a3d] rounded sm:py-2 py-1.5 px-10 border-gray-300"
              required
            />
            <div className="flex justify-end w-full mt-1 text-red-600 lg:items-end">
              <p>{error?.password ? error?.password[0] : ""}</p>
            </div>
          </div>
          <div className="flex flex-col-reverse justify-between w-full gap-y-5 md:flex-row md:items-end">
            <div className="flex flex-col items-center lg:flex-row gap-y-2 gap-x-2">
              <h1>Already have an Account?</h1>
              <Link
                to={`${location.pathname === "/Register/" ? "/Login/" : ""}`}
                onClick={handleLogin}
              >
                <h1 className="font-medium text-blue-700">Log-in</h1>
              </Link>
            </div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.8 }}
              transition={{ type: "spring", ease: "easeOut" }}
              className="flex flex-col w-full md:w-auto"
            >
              <button className="bg-[#b67a3d] rounded text-white px-6 sm:py-2 py-1.5 hover:bg-[#d79f67] transition-colors">
                Register
              </button>
            </motion.div>
          </div>
        </form>
        {view && <Notifier data={formData} />}
      </motion.div>
    </div>
  );
};

export default UserRegister;
