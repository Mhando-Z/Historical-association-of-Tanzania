import React, { useContext, useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
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
  const [user, setUser] = useState([]);
  const { users } = useContext(UserContext);

  useEffect(() => {
    try {
      const usertoken = localStorage.getItem("token");
      const user = jwtDecode(usertoken);
      setUser(user);
    } catch (error) {}
  }, []);

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
    <div className="flex flex-col bg-slate-50 mb-40 mt-10 min-h-screen justify-center items-center">
      <div className="flex flex-col container mx-auto">
        {/* Figures */}
        <div className="flex mt-32 xl:mt-24 flex-wrap gap-x-10 xl:grid-cols-4 gap-y-10 grid-cols-3 gap-2 items-center justify-center">
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
            <h1 className="text-2xl mt-2 font-bold uppercase">Users</h1>
            <h1 className="text-7xl mt-2 text-center font-bold uppercase">
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
            <h1 className="text-2xl mt-2 font-bold uppercase">Conference</h1>
            <h1 className="text-7xl mt-2 text-center font-bold uppercase">
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
            <h1 className="text-2xl mt-2 font-bold uppercase">Students</h1>
            <h1 className="text-7xl mt-2 text-center font-bold uppercase">
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
            <h1 className="text-2xl mt-2 font-bold uppercase">members</h1>
            <h1 className="text-7xl mt-2 text-center font-bold uppercase">
              {paidMembershipUsers?.length}
            </h1>
          </motion.div>
        </div>
        {/* Chatis */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex flex-col mt-16 bg-slate-100 shadow-xl mb-14"
        >
          <h1 className="md:text-xl border-l-[#b67a3d] shadow-xl bg-slate-50 py-3  border-r-[#b67a3d] border-r-8  border-l-8 mb-5 font-bold uppercase">
            <span className="ml-2">User Registration statistics</span>
          </h1>

          <div className="flex flex-col gap-x-5 gap-y-8 md:flex-row items-center">
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
          <div className="mt-7 md:flex-row flex flex-col">
            <RegistrationStats registrations={users} />
            <BarChart1 registrations={users} />
          </div>
        </motion.div>
        {/* users table */}
        <div className="shadow-xl">
          <UserTable data={users} />
        </div>
      </div>
    </div>
  );
}

export default DashHome;
