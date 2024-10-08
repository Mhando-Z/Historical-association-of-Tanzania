import React, { useContext } from "react";
import UserContext from "../../../Context/UserContext";
import { motion } from "framer-motion";
import { Dots } from "react-activity";
import { Link } from "react-router-dom";
import GreetingsTimer from "../../Componentz/GreetingsTimer";
import Announcements from "../../../Screens/Announcements";
import ResourcePublication from "../../../Screens/ResourcePublication";
import { IoArrowBack } from "react-icons/io5";

function UserHome() {
  const { userData } = useContext(UserContext);

  if (!userData)
    return (
      <div className="flex flex-col items-center justify-center min-h-screen overflow-hidden">
        <Dots color="" size={35} speed={0.7} animating={true} />
      </div>
    );

  return (
    <div className="container flex flex-col min-h-screen mx-auto mt-10">
      {userData?.profile?.is_paid_membership === false &&
      userData?.profile?.is_paid_conference === false ? (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, x: [-400, 400, 0] }}
            transition={{
              duration: 1.3,
              ease: "easeOut",
              type: "spring",
            }}
            className="flex flex-col p-2 mt-16 md:p-10 gap-y-4 rounded-2xl"
          >
            <>
              <GreetingsTimer Username={userData.username || ""} />
            </>
            <p className="max-w-4xl text-sm sm:text-md">
              Welcome to, Historical Association of Tanzania.We are happy to
              have you as a Member, there are few things you need to know. To be
              our member, there are few registration processes you need to pass
              through.
              <span className="font-bold">What are those steps?...</span> well
              if you want to know then please Click next to start the
              registration.
            </p>
            <div className="flex justify-end w-full">
              <Link to={"/Dashboard/Membership/"}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.8 }}
                  transition={{ type: "spring", ease: "easeOut" }}
                  className="px-6 py-1 mt-4 text-white rounded-2xl  text-sm  bg-[#b67a3d]"
                >
                  Next
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </>
      ) : (
        <>
          <Announcements />
          <ResourcePublication />
        </>
      )}
    </div>
  );
}

export default UserHome;
