import React, { useContext } from "react";
import UserContext from "../../Context/UserContext";
import { FaUser } from "react-icons/fa";
import { BsPeopleFill } from "react-icons/bs";
import UserTable from "../Componentz/UserTable";
import BarsChart from "../Charts/BarChart";
import PieCharts from "../Charts/PieChart";
import RegistrationStats from "../Charts/LineChart";
import BarChart1 from "./../Charts/BarChart2";
import { motion } from "framer-motion";
import { FaChartSimple } from "react-icons/fa6";

function DashHome() {
  const { userData } = useContext(UserContext);
  const { users } = useContext(UserContext);

  const paidMembershipUsers = users?.filter(
    (user) => user.profile.is_paid_membership === true
  );
  const paidConferenceUsers = users?.filter(
    (user) => user.profile.is_paid_conference === true
  );
  const StudentUsers = users?.filter(
    (user) => user.profile.is_student === true
  );

  return (
    <div className="container flex flex-col items-center justify-center min-h-screen mx-auto mb-40">
      {userData?.is_staff === true ? (
        <div className="container flex flex-col mx-auto">
          {/* Figures */}
          <div className="flex flex-wrap items-center justify-center grid-cols-3 gap-2 mt-32 xl:mt-24 gap-x-10 xl:grid-cols-4 gap-y-10">
            <motion.div
              initial={{ opacity: 0, scale: 0, y: 30 }}
              animate={{ opacity: 1, scale: [1, 0, 1], y: 0 }}
              transition={{
                duration: 0.5,
                type: "spring",
                stiffness: 140,
                ease: "easeOut",
              }}
              whileHover={{ y: -30 }}
              className="size-52 shadow-md bg-opacity-80 ring-[#b67a3d] bg-gray-100  p-10 rounded-xl"
            >
              <FaUser className="text-4xl" />
              <h1 className="mt-2 text-2xl font-bold uppercase">Users</h1>
              <h1 className="mt-2 font-bold text-center uppercase text-7xl">
                {users?.length}
              </h1>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0, y: 30 }}
              animate={{ opacity: 1, scale: [1, 0, 1], y: 0 }}
              transition={{
                duration: 0.5,
                type: "spring",
                stiffness: 140,
                ease: "easeOut",
              }}
              whileHover={{ y: -30 }}
              className="size-52 shadow-md bg-opacity-80 ring-[#b67a3d] bg-gray-100  p-10 rounded-xl"
            >
              <FaUser className="text-4xl" />
              <h1 className="mt-2 text-2xl font-bold uppercase">Conference</h1>
              <h1 className="mt-2 font-bold text-center uppercase text-7xl">
                {paidConferenceUsers?.length}
              </h1>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0, y: 30 }}
              animate={{ opacity: 1, scale: [1, 0, 1], y: 0 }}
              transition={{
                duration: 0.5,
                type: "spring",
                stiffness: 140,
                ease: "easeOut",
              }}
              whileHover={{ y: -30 }}
              className="size-52 shadow-md bg-opacity-80 ring-[#b67a3d] bg-gray-100  p-10 rounded-xl"
            >
              <FaUser className="text-4xl" />
              <h1 className="mt-2 text-2xl font-bold uppercase">Students</h1>
              <h1 className="mt-2 font-bold text-center uppercase text-7xl">
                {StudentUsers?.length}
              </h1>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0, y: 30 }}
              animate={{ opacity: 1, scale: [1, 0, 1], y: 0 }}
              transition={{
                duration: 0.5,
                type: "spring",
                stiffness: 140,
                ease: "easeOut",
              }}
              whileHover={{ y: -30 }}
              className="size-52 shadow-md bg-opacity-80 ring-[#b67a3d] bg-gray-100  p-10 rounded-xl"
            >
              <BsPeopleFill className="text-4xl" />
              <h1 className="mt-2 text-2xl font-bold uppercase">members</h1>
              <h1 className="mt-2 font-bold text-center uppercase text-7xl">
                {paidMembershipUsers?.length}
              </h1>
            </motion.div>
          </div>
          {/* Chatis */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col mt-16 mb-14"
          >
            <h1 className="flex flex-row items-center py-3 mb-5 font-bold uppercase md:text-xl">
              <FaChartSimple className="text-xl" />
              <span className="ml-2">User statistics</span>
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-10">
              {/* Barchart */}
              <motion.div
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 1, opacity: 1 }}
                className="flex items-center w-full bg-gray-100 rounded-3xl"
                transition={{
                  duration: 0.7,
                  type: "spring",
                  ease: "easeOut",
                  stiffness: 140,
                }}
              >
                <BarsChart data={users} />
              </motion.div>
              {/* pieChart */}
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 1, opacity: 1 }}
                className="flex items-center justify-center w-full bg-gray-100 rounded-3xl"
                transition={{
                  duration: 0.7,
                  type: "spring",
                  ease: "easeOut",
                  stiffness: 140,
                }}
              >
                <PieCharts data={users} />
              </motion.div>
              {/* bar chart */}
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 1, opacity: 1 }}
                className="flex items-center justify-center w-full bg-gray-100 rounded-3xl"
                transition={{
                  duration: 0.7,
                  type: "spring",
                  ease: "easeOut",
                  stiffness: 140,
                }}
              >
                <RegistrationStats registrations={users} />
              </motion.div>
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 1, opacity: 1 }}
                className="flex items-center justify-center w-full bg-gray-100 rounded-3xl"
                transition={{
                  duration: 0.7,
                  type: "spring",
                  ease: "easeOut",
                  stiffness: 140,
                }}
              >
                <BarChart1 registrations={users} />
              </motion.div>
            </div>
          </motion.div>
          {/* users table */}
          <>
            <UserTable data={users} />
          </>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default DashHome;
