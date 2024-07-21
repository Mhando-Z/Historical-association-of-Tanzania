import React, { useState } from "react";
import { toast } from "react-toastify";
import { Link, useNavigate, useParams } from "react-router-dom";
import axiosInstance from "../../Context/axiosInstance";
import { motion } from "framer-motion";
import { Dots } from "react-activity";

const PasswordResetRequest = () => {
  const [loading, setLoading] = useState(false);

  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleRequest = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axiosInstance.post("hat-users/password_reset/", { email });
      toast.success("Password reset link sent to your email.");
      navigate("/login");
      setLoading(false);
    } catch (error) {
      toast.error("Failed to send password reset link.");
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center relative justify-center min-h-screen bg-gradient-to-t from-[#b67a3d] via-transparent via-90% to-transparent">
      <div className="bg-white relative p-8 rounded-3xl shadow-2xl w-full max-w-md">
        <h2 className="text-2xl font-semibold text-gray-900 text-center">
          Reset Password
        </h2>
        <form onSubmit={handleRequest} className="mt-6 space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <div className="mt-1">
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="block w-full rounded-2xl border-0 py-2 px-7 outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#b67a3d] sm:text-sm"
              />
            </div>
          </div>
          <div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.8 }}
              transition={{ type: "spring", ease: "easeOut" }}
              type="submit"
              className="w-full py-2 px-4 bg-[#b67a3d] text-white rounded-3xl hover:bg-[#a46931] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#b67a3d] transition duration-150 ease-in-out"
            >
              Send Reset Link
            </motion.button>
          </div>
        </form>
        {loading ? (
          <div className="flex absolute items-center justify-center top-0 rounded-3xl bg-opacity-25 right-0 left-0 bottom-0 bg-gray-800">
            <div className={`mt-5 h-20 items-center justify-center flex `}>
              <Dots color="green" size={35} speed={0.7} animating={true} />
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.8 }}
        transition={{ type: "spring", ease: "easeOut" }}
        className="absolute left-10 top-6"
      >
        <Link
          to={"/Login/"}
          className="px-6 py-3 font-medium bg-[#a46931] rounded-3xl text-white"
        >
          Log-in
        </Link>
      </motion.div>
    </div>
  );
};

const PasswordResetConfirm = () => {
  const { uid, token } = useParams();
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleReset = async (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      toast.error("Passwords do not match.");
      return;
    }
    try {
      await axiosInstance.post("hat-users/password_reset/confirm/", {
        uid,
        token,
        new_password: newPassword,
      });
      toast.success("Password reset successfully.");
      navigate("/login/");
    } catch (error) {
      toast.error("Failed to reset password.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-3xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold text-gray-900 text-center">
          Set New Password
        </h2>
        <form onSubmit={handleReset} className="mt-6 space-y-6">
          <div>
            <label
              htmlFor="newPassword"
              className="block text-sm font-medium text-gray-700"
            >
              New Password
            </label>
            <div className="mt-1">
              <input
                type="password"
                id="newPassword"
                name="newPassword"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
                className="block w-full rounded-2xl border-0 py-2 px-7 outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#b67a3d] sm:text-sm"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-gray-700"
            >
              Confirm Password
            </label>
            <div className="mt-1">
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="block w-full rounded-2xl border-0 py-2 px-7 outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#b67a3d] sm:text-sm"
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-[#b67a3d] text-white rounded-3xl hover:bg-[#a46931] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#b67a3d] transition duration-150 ease-in-out"
            >
              Reset Password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export { PasswordResetRequest, PasswordResetConfirm };
