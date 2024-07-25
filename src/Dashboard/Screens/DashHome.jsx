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
    <div className="container flex flex-col items-center justify-center min-h-screen mx-auto mt-10 mb-40 bg-slate-50">
      {userData?.is_staff === true ? (
        <div className="container flex flex-col mx-auto">
          {/* Figures */}
          <div className="flex flex-wrap items-center justify-center grid-cols-3 gap-2 mt-32 xl:mt-24 gap-x-10 xl:grid-cols-4 gap-y-10">
            <motion.div
              initial={{ opacity: 0, scale: 0, x: "-100%" }}
              animate={{ opacity: 1, scale: [1, 0, 1], x: 1 }}
              transition={{
                duration: 0.5,
                type: "spring",
                stiffness: 140,
                ease: "easeOut",
                delay: 0,
              }}
              whileHover={{ y: -30 }}
              className="size-52 shadow-xl ring-1 ring-[#b67a3d] bg-slate-100 p-10 rounded-xl"
            >
              <FaUser className="text-4xl" />
              <h1 className="mt-2 text-2xl font-bold uppercase">Users</h1>
              <h1 className="mt-2 font-bold text-center uppercase text-7xl">
                {users?.length}
              </h1>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0, x: "-100%" }}
              animate={{ opacity: 1, scale: [1, 0, 1], x: 1 }}
              transition={{
                duration: 0.5,
                type: "spring",
                stiffness: 140,
                ease: "easeOut",
                delay: 0.5,
              }}
              whileHover={{ y: -30 }}
              className="size-52 shadow-xl ring-1 ring-[#b67a3d] bg-slate-100 p-10 rounded-xl"
            >
              <FaUser className="text-4xl" />
              <h1 className="mt-2 text-2xl font-bold uppercase">Conference</h1>
              <h1 className="mt-2 font-bold text-center uppercase text-7xl">
                {paidConferenceUsers?.length}
              </h1>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0, x: "-100%" }}
              animate={{ opacity: 1, scale: [1, 0, 1], x: 1 }}
              transition={{
                duration: 0.5,
                type: "spring",
                stiffness: 140,
                ease: "easeOut",
                delay: 1,
              }}
              whileHover={{ y: -30 }}
              className="size-52 shadow-xl ring-1 ring-[#b67a3d] bg-slate-100 p-10 rounded-xl"
            >
              <FaUser className="text-4xl" />
              <h1 className="mt-2 text-2xl font-bold uppercase">Students</h1>
              <h1 className="mt-2 font-bold text-center uppercase text-7xl">
                {StudentUsers?.length}
              </h1>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0, x: "-100%" }}
              animate={{ opacity: 1, scale: [1, 0, 1], x: 1 }}
              transition={{
                duration: 0.5,
                type: "spring",
                stiffness: 140,
                ease: "easeOut",
                delay: 1.5,
              }}
              whileHover={{ y: -30 }}
              className="size-52 shadow-xl ring-1 ring-[#b67a3d] bg-slate-100 p-10 rounded-xl"
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
            className="flex flex-col mt-16 shadow-xl bg-slate-100 mb-14"
          >
            <h1 className="md:text-xl border-l-[#b67a3d] shadow-xl bg-slate-50 py-3  border-r-[#b67a3d] border-r-8  border-l-8 mb-5 font-bold uppercase">
              <span className="ml-2">User Registration statistics</span>
            </h1>

            <div className="flex flex-col items-center gap-x-5 gap-y-8 md:flex-row">
              {/* Barchart */}
              <motion.div
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 1, opacity: 1 }}
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
                transition={{
                  duration: 0.7,
                  type: "spring",
                  ease: "easeOut",
                  stiffness: 140,
                }}
                className="flex w-full"
              >
                <PieCharts data={users} />
              </motion.div>
            </div>
            <div className="flex flex-col mt-7 md:flex-row">
              <RegistrationStats registrations={users} />
              <BarChart1 registrations={users} />
            </div>
          </motion.div>
          {/* users table */}
          <div className="shadow-xl">
            <UserTable data={users} />
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default DashHome;
