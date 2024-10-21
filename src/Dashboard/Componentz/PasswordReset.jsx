import React, { useState } from "react";
import { toast } from "react-toastify";
import logo from "../../Assets/Images/Logo3.png";
import { Link, useNavigate, useParams } from "react-router-dom";
import axiosInstance from "../../Context/axiosInstance";
import { motion } from "framer-motion";
import { KeyRound, Mail, RefreshCw } from "lucide-react";

const PasswordResetRequest = () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");

  const handleSend = (e) => {
    setLoading(true);
    if (email !== "") {
      handleSubmit(e);
    } else {
      toast.error("Email is Required");
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axiosInstance.post("hat-users/Password_Reset/", { email });
      toast.success("Password reset email sent.");
      setLoading(false);
    } catch (error) {
      toast.error(
        "Failed to send reset email. Please check the email provided."
      );
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center relative justify-center min-h-screen bg-gradient-to-t from-[#b67a3d] via-transparent via-90% to-transparent">
      <div className="relative w-full max-w-md p-8 md:shadow-2xl md:bg-white md:rounded-3xl">
        <img className="w-auto h-10 mx-auto mb-2" src={logo} alt="Hat logo" />
        <h2 className="text-2xl font-semibold text-center text-gray-900">
          Reset Password
        </h2>
        <form onSubmit={handleSubmit} className="mt-6 space-y-6">
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
                placeholder="Enter your Email"
                name="email"
                required
                onChange={(e) => setEmail(e.target.value)}
                className="block w-full rounded-2xl border-0 py-2 px-7 outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#b67a3d] sm:text-sm"
              />
            </div>
          </div>
          <div>
            <motion.button
              type="submit"
              className="w-full py-2 px-4 bg-[#b67a3d] text-white rounded-3xl hover:bg-[#a46931] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#b67a3d] transition duration-150 ease-in-out"
            >
              {loading ? (
                <RefreshCw className="animate-spin" />
              ) : (
                <>
                  <Link
                    onClick={handleSend}
                    className="flex flex-row items-center justify-center gap-x-2"
                  >
                    <Mail className="w-4 h-4" />
                    <span> Send Reset Link</span>
                  </Link>
                </>
              )}
            </motion.button>
          </div>
        </form>
      </div>
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.8 }}
        transition={{ type: "spring", ease: "easeOut" }}
        className="absolute left-10 top-6"
      >
        <Link
          to={"/Login/"}
          className="px-4 py-1.5 md:py-2 text-sm font-medium bg-[#a46931] rounded-3xl text-white"
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
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSend = (e) => {
    setLoading(true);
    handleReset(e);
  };

  const handleReset = async (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      toast.error("Passwords do not match.");
      return;
    }
    try {
      await axiosInstance.post(
        `/hat-users/password_reset_confirm/${uid}/${token}/`,
        {
          new_password: newPassword,
        }
      );

      toast.success("Password reset successfully.");
      navigate("/login/");
    } catch (error) {
      setLoading(false);
      toast.error("Failed to reset password.");
    }
  };

  return (
    <div className="flex flex-col bg-gradient-to-t from-[#b67a3d] via-transparent via-90% to-transparent items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 md:shadow-lg md:bg-white md:rounded-3xl">
        <img className="w-auto h-10 mx-auto mb-2" src={logo} alt="Hat logo" />
        <h2 className="text-2xl font-semibold text-center text-gray-900">
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
            <motion.button
              type="submit"
              className="w-full py-2 px-4 bg-[#b67a3d] text-white rounded-3xl hover:bg-[#a46931] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#b67a3d] transition duration-150 ease-in-out"
            >
              {loading ? (
                <RefreshCw className="animate-spin" />
              ) : (
                <>
                  <Link
                    onClick={handleSend}
                    className="flex flex-row items-center justify-center gap-x-2"
                  >
                    <KeyRound className="w-4 h-4" />
                    <span> Reset Password</span>
                  </Link>
                </>
              )}
            </motion.button>
          </div>
        </form>
      </div>
    </div>
  );
};

export { PasswordResetRequest, PasswordResetConfirm };
