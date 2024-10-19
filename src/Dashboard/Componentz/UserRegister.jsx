// export default UserRegister;
import React, { useState } from "react";
import axiosInstance from "../../Context/axiosInstance";
import logo from "../../Assets/Images/Logo3.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import { Dots } from "react-activity";
import { CheckCircle, Mail, User, RefreshCw } from "lucide-react";

// export const Notifier = ({ data }) => {
//   async function resendVerificationEmail(email) {
//     try {
//       const response = await fetch("/hat-users/resend-email-verification/", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ email }),
//       });

//       const result = await response.json();

//       if (response.ok) {
//         toast.success("Verification email resent. Please check your inbox.");
//       } else {
//         toast.error(result.detail);
//       }
//     } catch (error) {
//       console.error("Error resending verification email:", error);
//       toast.error("There was an error. Please try again.");
//     }
//   }

//   // handle Resend Email Verification Link
//   const handleClick = (email) => {
//     resendVerificationEmail(email);
//   };

//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       transition={{ duration: 1, ease: "easeInOut", type: "spring" }}
//       className="absolute top-0 bottom-0 left-0 right-0 flex flex-col items-center justify-center max-w-xl bg-black rounded-2xl max-h-xl bg-opacity-30"
//     >
//       <div className="flex flex-col items-center justify-center text-sm bg-slate-100 size-72 rounded-2xl">
//         <IoMdCheckmarkCircleOutline className="text-green-600 text-8xl" />
//         <h1 className="text-lg text-green-900">Success</h1>
//         <div className="flex flex-row items-center gap-x-2">
//           <p>User:</p>
//           <p>{data?.username}</p>
//         </div>
//         <div className="flex flex-row items-center gap-x-2">
//           <p>Email:</p>
//           <p>{data?.email}</p>
//         </div>
//         <p className="font-medium text-center text-green-600">
//           was created successfully, Go check your email for verification link if
//           you didint get the email please click the button below for new
//           verification link
//         </p>
//         <button onClick={() => handleClick(data?.email)}>
//           <p className="font-medium text-blue-600">Resend Verification</p>
//         </button>
//       </div>
//     </motion.div>
//   );
// };

const MotionCheckCircle = motion(CheckCircle);

export const Notifier = ({ data, setView }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  async function resendVerificationEmail(email) {
    setIsLoading(true);
    setError(null);
    try {
      const response = await axiosInstance.post(
        "/hat-users/resend-email-verification/",
        { email }
      );

      if (response.status === 200) {
        toast.success("Verification email resent. Please check your inbox.");
      } else {
        setError(response.data.detail || "Unexpected error. Try again.");
        toast.error(response.data.detail || "Unexpected error. Try again.");
      }
    } catch (error) {
      console.error("Error resending verification email:", error);
      if (error.response) {
        // Server responded with a status code other than 2xx
        const errDetail = error.response.data.detail || "Error. Try again.";
        setError(errDetail);
        toast.error(errDetail);
      } else if (error.request) {
        // Request made but no response received
        setError("No response from the server. Please check your network.");
        toast.error("No response from the server. Please check your network.");
      } else {
        // Something else went wrong
        setError("Error: " + error.message);
        toast.error("Error: " + error.message);
      }
    } finally {
      setIsLoading(false);
    }
  }

  const handleClick = (email) => {
    resendVerificationEmail(email);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="absolute inset-0 top-0 bottom-0 left-0 right-0 z-50 flex items-center justify-center md:bg-opacity-50 md:bg-black"
    >
      <motion.div
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="w-full max-w-md p-8 mx-4 bg-white rounded-lg shadow-xl"
      >
        <div className="flex flex-col items-center text-center">
          <MotionCheckCircle
            initial={{ scale: 0 }}
            animate={{ scale: 1, rotate: 360 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="w-20 h-20 mb-4 text-green-500"
          />
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mb-2 text-2xl font-bold text-gray-800"
          >
            Success!
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mb-6 text-gray-600"
          >
            Your account has been created successfully.
          </motion.p>
          <div className="w-full mb-6 space-y-2">
            <div className="flex items-center justify-between p-3 bg-gray-100 rounded-md">
              <div className="flex items-center space-x-2">
                <User className="text-gray-500" />
                <span className="font-medium text-gray-700">Username:</span>
              </div>
              <span className="text-gray-800">{data?.username}</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-100 rounded-md">
              <div className="flex items-center space-x-2">
                <Mail className="text-gray-500" />
                <span className="font-medium text-gray-700">Email:</span>
              </div>
              <span className="text-gray-800">{data?.email}</span>
            </div>
          </div>
          <p className="mb-4 text-sm text-gray-600">
            Please check your email for the verification link. If you didn't
            receive it, you can request a new one.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleClick(data?.email)}
            className="flex items-center justify-center px-6 py-2 space-x-2 font-medium text-white transition-colors duration-300 bg-blue-500 rounded-full hover:bg-blue-600"
            disabled={isLoading}
          >
            {isLoading ? (
              <RefreshCw className="animate-spin" />
            ) : (
              <>
                <Link className="flex flex-row items-center gap-x-2">
                  <Mail className="w-4 h-4" />
                  <span>Resend Verification</span>
                  {/* <span>Login</span> */}
                </Link>
              </>
            )}
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
};

const UserRegister = ({ handleRegistration }) => {
  const navigate = useNavigate();
  const [error, setError] = useState([]);
  const [view, setView] = useState(false);
  const [loading, setLoading] = useState(false);
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
    setLoading(true);
    setError([]);
    try {
      await axiosInstance.post("hat-users/register/", formData);
      // Save generated token from back-end to local storage
      setLoading(false);
      setView(true); // Display the Notifier component
    } catch (error) {
      toast.error("User Registration failed");
      setLoading(false);
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
      className={`flex relative flex-col h-full items-center justify-center text-sm lg:text-md ${
        location.pathname === "/Register/"
          ? "min-h-screen bg-gradient-to-t via-transparent from-[#b67a3d] to-transparent"
          : ""
      }`}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1, ease: "easeInOut", type: "spring" }}
        className="flex flex-col w-full p-3 xl:p-10 xl:max-w-xl"
      >
        <div className="mb-6 sm:mx-auto sm:w-full sm:max-w-sm ">
          <img className="w-auto h-10 mx-auto" src={logo} alt="Hat logo" />
          <h2 className="mt-5 text-2xl font-bold leading-9 tracking-tight text-center text-gray-900">
            Create User account
          </h2>
        </div>
        {loading ? (
          <div className={`h-14 items-center justify-center flex `}>
            <Dots color="#b67a3d" size={35} speed={0.8} animating={true} />
          </div>
        ) : (
          ""
        )}
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
              className="mt-1 block w-full outline-none sm:py-2 py-1.5 rounded ring-1 ring-[#b67a3d] px-3 border-gray-300 focus:bg-blue-50"
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
              className="mt-1 sm:py-2 py-1.5  focus:bg-blue-50 ring-1 ring-[#b67a3d] px-3 outline-none rounded block w-full border-gray-300"
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
              className="mt-1 block w-full   focus:bg-blue-50 sm:py-2 py-1.5 px-3 outline-none ring-1 ring-[#b67a3d] rounded border-gray-300"
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
              className="mt-1 block w-full outline-none  focus:bg-blue-50 ring-1 ring-[#b67a3d] rounded sm:py-2 py-1.5 px-3 border-gray-300"
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
              <button
                // onClick={() => setLoading(true)}
                className="bg-[#98642f] rounded text-white px-6 sm:py-2 py-1.5 hover:bg-[#d79f67] transition-colors"
              >
                Register
              </button>
            </motion.div>
          </div>
        </form>
        {view && <Notifier data={formData} setView={setView} />}
      </motion.div>
    </div>
  );
};

export default UserRegister;
