import React, { useContext } from "react";
import UserContext from "../../../Context/UserContext";
import { motion } from "framer-motion";
import { Dots } from "react-activity";
import { Link } from "react-router-dom";
import GreetingsTimer from "../../Componentz/GreetingsTimer";
import Announcements from "../../../Screens/Announcements";
import ResourcePublication from "../../../Screens/ResourcePublication";

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
              Welcome to the Historical Association of Tanzania! 🎉 We're
              thrilled to have you as a valued member of our community. Your
              membership opens the door to a rich network of history enthusiasts
              and professionals, and we can't wait to see the unique
              contributions you'll make. Whether you're here to explore, learn,
              or share knowledge, we're happy to have you with us on this
              exciting journey!, click next to continue with the Registration
              process.
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
