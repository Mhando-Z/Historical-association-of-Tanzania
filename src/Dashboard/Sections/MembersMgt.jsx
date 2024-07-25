import React, { useContext } from "react";
import UserContext from "../../Context/UserContext";
import { Gauge, gaugeClasses } from "@mui/x-charts/Gauge";
import RegistrationStats from "../Charts/LineChart";
import BarsChart from "../Charts/BarChart";
import { motion } from "framer-motion";
import AdminUserManagement from "../Componentz/UserEdit";

function MembersMgt() {
  const { users } = useContext(UserContext);

  return (
    <div className="container relative flex flex-col min-h-screen mx-auto mt-16 mb-20 overflow-x-hidden py-9">
      <div className="flex flex-col w-full">
        <h1 className="md:text-xl border-l-[#b67a3d] shadow-xl bg-slate-50 py-3   border-r-8  border-l-8 mb-5 font-bold uppercase">
          <span className="ml-2">User Management</span>
        </h1>

        <div className="flex flex-col items-center justify-between w-full md:flex-row">
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
      </div>
      {/* Gauge valuator */}
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
              fontSize: 60,
              fontFamily: "inherit",
              fontWeight: "bold",
              color: "red",
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
      <div>
        {/* Administratot table */}
        <AdminUserManagement />
      </div>
    </div>
  );
}

export default MembersMgt;
