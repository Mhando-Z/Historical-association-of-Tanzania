import React, { useContext, useEffect } from "react";
import UserTable from "./../Componentz/UserTable";
import UserContext from "../../Context/UserContext";
import { IoPerson } from "react-icons/io5";
import { GiCheckMark } from "react-icons/gi";
import { FaXmark } from "react-icons/fa6";
import { Gauge, gaugeClasses } from "@mui/x-charts/Gauge";
import RegistrationStats from "../Charts/LineChart";
import BarsChart from "../Charts/BarChart";
import moment from "moment";
import axiosInstance from "../../Context/axiosInstance";
import { motion } from "framer-motion";
import logo from "../../Assets/Images/3dlogo.png";
import { RxCrossCircled } from "react-icons/rx";

// Date formatter component
const formatDate = (dateString) => {
  return moment(dateString).format("MMMM D, YYYY [at] h:mm:ss A");
};

function MembersMgt() {
  const { users } = useContext(UserContext);
  const { userId } = useContext(UserContext);
  const { setShow, show } = useContext(UserContext);

  async function userUpdate() {
    try {
      const { data } = await axiosInstance.put("/hat-users/UpdateUserProfile/");
      console.log(data);
    } catch (error) {
      console.log(error.response);
    }
  }
  useEffect(() => {
    userUpdate();
  }, []);

  const user = users?.filter((dt) => {
    return dt.id === userId;
  });

  return (
    <div
      onClick={() => setShow(!show)}
      className="min-h-screen mt-16 mb-20 flex flex-col px-6 py-9 relative"
    >
      <div className="flex flex-col w-full">
        <h1 className="md:text-xl border-l-[#b67a3d] border-l-8 mb-5 font-bold uppercase">
          <span className="ml-2">User Management</span>
        </h1>
        <div className="w-full flex flex-col md:flex-row items-center justify-between">
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 1, opacity: 1 }}
            transition={{
              duration: 0.7,
              type: "spring",
              ease: "easeOut",
              stiffness: 140,
            }}
            className="flex flex-grow"
          >
            <RegistrationStats registrations={users} />
          </motion.div>
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 1, opacity: 1 }}
            transition={{
              duration: 0.7,
              type: "spring",
              ease: "easeOut",
              stiffness: 140,
            }}
            className="flex flex-grow"
          >
            <BarsChart data={users} />
          </motion.div>
        </div>
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 1, opacity: 1 }}
          transition={{
            duration: 0.5,
            type: "spring",
            ease: "easeOut",
            stiffness: 140,
          }}
          className="shadow-xl relative"
        >
          <UserTable data={users} />

          {show ? (
            <motion.div
              initial={{ opacity: 0, scale: 0, y: -100 }}
              animate={{ opacity: 1, scale: 1, y: 1 }}
              transition={{ duration: 1, ease: "easeOut", type: "spring" }}
              exit={{ x: -100, opacity: 0 }}
              className="flex flex-col absolute top-0 right-0 left-0 bottom-0 ring-1 ring-[#b67a3d] bg-slate-100 shadow-xl rounded-3xl mt-10"
            >
              <div name="UserDetails" className="flex gap-x-14 flex-row p-20">
                <div className="size-20  flex-col bg-slate-200 shadow-xl ring-[#b67a3d] rounded-xl justify-center ring-2 items-center flex">
                  <IoPerson className="text-7xl " />
                </div>
                <div className="flex flex-col shadow-lg">
                  <table className="w-lg">
                    <tbody>
                      <tr className="hover:bg-gray-200 cursor-pointer">
                        <td className="py-2 px-4 border-b">Username</td>
                        <td className="py-2 px-4 border-b">
                          {user[0]?.username}
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-200 cursor-pointer">
                        <td className="py-2 px-4 border-b">Email</td>
                        <td className="py-2 px-4 border-b">{user[0]?.email}</td>
                      </tr>
                      <tr className="hover:bg-gray-200 cursor-pointer">
                        <td className="py-2 px-4 border-b">is_student</td>
                        <td className="py-2 px-4 border-b">
                          {user[0]?.profile.is_student ? (
                            <>
                              <GiCheckMark className="text-green-600" />
                            </>
                          ) : (
                            <>
                              <FaXmark className="text-red-600" />
                            </>
                          )}
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-200 cursor-pointer">
                        <td className="py-2 px-4 border-b">is_Member</td>
                        <td className="py-2 px-4 border-b">
                          {user[0]?.profile.is_paid_membership ? (
                            <>
                              <GiCheckMark className="text-green-600" />
                            </>
                          ) : (
                            <>
                              <FaXmark className="text-red-600" />
                            </>
                          )}
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-200 cursor-pointer">
                        <td className="py-2 px-4 border-b">is_Conference</td>
                        <td className="py-2 px-4 border-b">
                          {user[0]?.profile.is_paid_conference ? (
                            <>
                              <GiCheckMark className="text-green-600" />
                            </>
                          ) : (
                            <>
                              <FaXmark className="text-red-600" />
                            </>
                          )}
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-200 cursor-pointer">
                        <td className="py-2 px-4 border-b">Date Registerd</td>
                        <td className="py-2 px-4 border-b">
                          {formatDate(user[0]?.profile?.date_registered)}
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-200 cursor-pointer">
                        <td className="py-2 px-4 border-b">Last Login</td>
                        <td className="py-2 px-4 border-b">
                          {formatDate(user[0]?.profile?.last_login)}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div
                  onClick={() => setShow(!show)}
                  className="absolute top-2 items-center flex justify-center bg-slate-300 shadow-md ring-1 ring-[#b67a3d] size-10 right-2 rounded-full"
                >
                  <RxCrossCircled className="text-4xl text-center text-red-600" />
                </div>
                <div className="absolute bottom-2 left-5 opacity-30">
                  <img src={logo} alt="3dHATLogo" className="h-28" />
                </div>
              </div>
            </motion.div>
          ) : (
            ""
          )}
        </motion.div>
      </div>
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 1, opacity: 1 }}
        transition={{
          duration: 0.7,
          type: "spring",
          ease: "easeOut",
          stiffness: 140,
        }}
        className="absolute right-5 top-5 min-h-20 w-44"
      >
        <Gauge
          width={200}
          height={150}
          value={users?.length}
          sx={(theme) => ({
            [`& .${gaugeClasses.valueText}`]: {
              fontSize: 40,
            },
            [`& .${gaugeClasses.valueArc}`]: {
              fill: "purple",
            },
            [`& .${gaugeClasses.referenceArc}`]: {
              fill: theme.palette.text.disabled,
            },
          })}
        />
      </motion.div>
    </div>
  );
}

export default MembersMgt;
