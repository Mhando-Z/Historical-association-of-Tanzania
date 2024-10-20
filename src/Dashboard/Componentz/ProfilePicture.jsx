import React from "react";
import { HiMiniCheckBadge } from "react-icons/hi2";
import stdprofile from "../../Assets/profiles/man.png";
import stdprofile2 from "../../Assets/profiles/woman2.png";
import manprofile from "../../Assets/profiles/man1.png";
import womanProfile from "../../Assets/profiles/woman.png";
import { motion } from "framer-motion";

function ProfilePictures({ data }) {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full md:items-start md:justify-between md:flex-row rounded-2xl gap-y-7 gap-x-5">
        <div className="flex items-center justify-center ">
          {/* profile images */}
          {data?.profile.profile_picture !== null ? (
            <>
              <motion.img
                initial={{ initial: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: "easeInOut", type: "spring" }}
                src={`${data?.profile.profile_picture}`}
                alt="Profile"
                // className="object-cover object-top   ring-1 size-60 md:size-60 ring-[#b67a3d] rounded max-w-screen"
                className="md:size-20 size-24 object-cover object-top ring-4 rounded-full ring-[#b67a3d] "
              />
            </>
          ) : (
            <>
              {data?.profile.is_student === true &&
              data?.profile.gender === "male" ? (
                <>
                  <img
                    src={stdprofile}
                    alt="data profile"
                    className="h-20 ring-4 rounded-full    ring-[#b67a3d] "
                  />
                </>
              ) : data?.profile.gender === "male" ? (
                <img
                  src={manprofile}
                  alt="data profile"
                  className="h-20 ring-4 rounded-full   ring-[#b67a3d]"
                />
              ) : data?.profile.is_student === true &&
                data?.profile.gender === "female" ? (
                <>
                  <img
                    src={stdprofile2}
                    alt="data profile"
                    className="h-20 ring-4 rounded-full   ring-[#b67a3d]"
                  />
                </>
              ) : data?.profile.gender === "female" ? (
                <img
                  src={womanProfile}
                  alt="data profile"
                  className="h-20 ring-4 rounded-full   ring-[#b67a3d]"
                />
              ) : (
                <motion.img
                  className="object-cover border-4 border-green-300 rounded-full h-14"
                  src={`https://ui-avatars.com/api/?name=${data?.email}`}
                  alt="User Avatar"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5 }}
                />
              )}
            </>
          )}
        </div>
        <div className="flex flex-col flex-grow">
          {/* data details and status */}
          <h1 className="text-lg font-bold md:text-xl">{data?.username}</h1>
          <h1 className="text-base font-medium text-gray-700 md:text-lg">
            {data?.email}
          </h1>
          {data?.is_staff ? (
            <div className="flex flex-row items-center w-full gap-x-1">
              <>
                <h1 className="font-medium ">Admin</h1>
              </>
              <HiMiniCheckBadge className="text-blue-700 md:text-xl gap-x-10" />
            </div>
          ) : (
            <div className="flex flex-row items-center w-full gap-x-1">
              <>
                <h1 className="font-medium">User</h1>
              </>
              {data?.profile.is_paid_membership === true &&
              data?.profile.is_paid_conference ? (
                <HiMiniCheckBadge className="text-xl text-green-700 gap-x-10" />
              ) : data?.profile.is_paid_membership === true ? (
                <HiMiniCheckBadge className="text-xl text-yellow-700 gap-x-10" />
              ) : data?.profile.is_paid_conference === true ? (
                <HiMiniCheckBadge className="text-xl text-purple-700 gap-x-10" />
              ) : (
                <HiMiniCheckBadge className="text-xl text-black gap-x-10" />
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default ProfilePictures;
