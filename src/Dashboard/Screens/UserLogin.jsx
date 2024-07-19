import logo from "../../Assets/Images/Logo3.png";
import axiosInstance from "../../Context/axiosInstance";
import HomePageContext from "../../Context/HomePageContext";
import UserRegister from "../Componentz/UserRegister";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Dots } from "react-activity";

export default function UserLogin() {
  const { gallerySect } = useContext(HomePageContext);
  const [value, setValue] = useState(0);
  const [direction, setDirection] = useState(1);
  const [error, setError] = useState(null);
  const [present, setPresent] = useState(false);
  const [Register, setRegister] = useState(false);

  const handleRegistration = () => {
    setRegister(!Register);
  };
  const [Login, setData] = useState({
    email: "",
    password: "",
  });

  async function getUser() {
    try {
      const { data } = await axiosInstance?.post(
        "hat-users/users/login/",
        Login
      );
      const { access } = data;
      try {
        // savetoken to local storage
        localStorage.setItem("token", access);
        window.location = "/Dashboard/";
        setPresent(false);
      } catch (error) {}
    } catch (ex) {
      setError(
        ex.response.data?.detail ||
          "Server Error please contact our administrator for support"
      );
      setPresent(true);
    }
  }

  const handleLogin = () => {
    if (Login.email.length !== 0 && Login.password.length !== 0) {
      getUser();
      setPresent(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setValue((prevValue) => {
        if (direction === 1) {
          if (prevValue >= gallerySect?.length - 1) {
            setDirection(-1);
            return prevValue - 1;
          } else {
            return prevValue + 1;
          }
        } else {
          if (prevValue <= 0) {
            setDirection(1);
            return prevValue + 1;
          } else {
            return prevValue - 1;
          }
        }
      });
    }, 100000);
    // Interval duration 10000 means 10 seconds timer will execute code

    return () => clearInterval(interval);
    // Cleanup the interval on unmount
  }, [direction, gallerySect.length]);

  return (
    <div className="flex flex-row min-h-screen overflow-y-hidden">
      <div className="h-screen relative hidden md:flex xl:w-[900px] lg:w-[600px] lg:flex bg-gradient-to-r from-[#b67a3d] to-transparent">
        {gallerySect?.length === 0 ? (
          <div className="absolute hidden lg:flex top-0 right-0 left-0 bottom-0  items-center justify-center ">
            <Dots color="black" size={40} speed={0.7} animating={true} />
          </div>
        ) : (
          <img
            src={`http://127.0.0.1:8000/${gallerySect[value]?.image}`}
            alt={gallerySect[1]?.title}
            className="h-screen w-full object-cover object-center"
          />
        )}
      </div>
      {Register ? (
        <div className="flex bg-gradient-to-t from-[#b67a3d]   to-transparent min-h-screen flex-1 flex-col relative justify-center px-6 py-12 lg:px-8">
          <UserRegister handleRegistration={handleRegistration} />
        </div>
      ) : (
        <div className="flex bg-gradient-to-t from-[#b67a3d] via-transparent  to-transparent min-h-screen flex-1 flex-col relative justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img className="mx-auto h-10 w-auto" src={logo} alt="Hat logo" />
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Sign in to your account
            </h2>
          </div>
          {present ? (
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                type: "spring",
                ease: "easeOut",
                duration: 0.5,
              }}
              className={`mt-5 h-20 items-center justify-center flex `}
            >
              <div className="bg-red-50 py-7 rounded-md lg:px-3 px-5 ring-2 ring-red-700">
                <p className="text-red-600 font-bold">{error}</p>
              </div>
            </motion.div>
          ) : (
            <div className={`mt-5 h-20 items-center justify-center flex `}>
              <Dots color="#b67a3d" size={35} speed={0.7} animating={true} />
            </div>
          )}
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-black"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    onChange={handleChange}
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="block w-full rounded-md border-0 py-2 px-3 scroll-px-3.5 outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-amber-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6 text-black"
                  >
                    Password
                  </label>
                  <div className="text-sm">
                    <Link
                      href="#"
                      className="font-semibold text-indigo-600 hover:text-indigo-500"
                    >
                      Forgot password?
                    </Link>
                  </div>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    onChange={handleChange}
                    type="password"
                    autoComplete="current-password"
                    required
                    className="block w-full rounded-md border-0 py-2 outline-none px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-amber-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <button
                  onClick={handleLogin}
                  className="flex w-full justify-center rounded-md bg-[#b67a3d] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-amber-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign in
                </button>
              </div>
            </form>

            <p className="mt-10 text-center text-sm text-black font-bold ">
              Not a member
              <Link
                onClick={handleRegistration}
                className="font-semibold ml-2 leading-6 text-indigo-600 hover:text-indigo-500"
              >
                Register
              </Link>
            </p>
          </div>
          <Link to={"/"}>
            <div className="absolute top-5 text-white font-bold cursor-pointer bg-[#b67a3d] rounded-3xl px-7 py-2 ring-inset ring-2 ring-white">
              Back
            </div>
          </Link>
        </div>
      )}
    </div>
  );
}
