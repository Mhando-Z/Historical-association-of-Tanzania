import React from "react";
import { HiMiniCheckBadge } from "react-icons/hi2";
import stdprofile from "../../Assets/profiles/man.png";
import stdprofile2 from "../../Assets/profiles/woman2.png";
import manprofile from "../../Assets/profiles/man1.png";
import womanProfile from "../../Assets/profiles/woman.png";
import { FaRegCircleUser } from "react-icons/fa6";
import { motion } from "framer-motion";

function ProfilePictures({ data }) {
  return (
    <>
      <div className="flex flex-col items-center ring-[#b67a3d] justify-between w-full p-5 shadow-xl rounded-xl bg-slate-100 gap-y-7 ring-1 gap-x-5">
        <div className="items-center justify-center rounded-xl bg-slate-100">
          {/* profile images */}
          {data?.profile.profile_picture !== null ? (
            <>
              <motion.img
                initial={{ initial: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: "easeInOut", type: "spring" }}
                src={data?.profile.profile_picture}
                alt="Profile"
                className="object-cover object-top shadow-lg ring-1 size-60 md:size-60 ring-[#b67a3d] rounded max-w-screen"
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
                    className="h-32 ring-4 rounded-full   shadow-xl ring-[#b67a3d] "
                  />
                </>
              ) : data?.profile.gender === "male" ? (
                <img
                  src={manprofile}
                  alt="data profile"
                  className="h-32 ring-4 rounded-full  shadow-xl ring-[#b67a3d]"
                />
              ) : data?.profile.is_student === true &&
                data?.profile.gender === "female" ? (
                <>
                  <img
                    src={stdprofile2}
                    alt="data profile"
                    className="h-32 ring-4 rounded-full  shadow-xl ring-[#b67a3d]"
                  />
                </>
              ) : data?.profile.gender === "female" ? (
                <img
                  src={womanProfile}
                  alt="data profile"
                  className="h-32 ring-4 rounded-full  shadow-xl ring-[#b67a3d]"
                />
              ) : (
                <>
                  <FaRegCircleUser className="text-7xl" />
                </>
              )}
            </>
          )}
        </div>
        <div className="flex flex-col flex-grow">
          {/* data details and status */}
          <h1 className="text-lg font-bold text-center md:text-2xl">
            {data?.username}
          </h1>
          <h1 className="text-base font-medium text-center text-gray-700 md:text-lg">
            {data?.email}
          </h1>
          {data?.is_staff ? (
            <div className="flex flex-row items-center justify-center w-full gap-x-1">
              <>
                <h1 className="font-medium ">Admin</h1>
              </>
              <HiMiniCheckBadge className="text-blue-700 md:text-xl gap-x-10" />
            </div>
          ) : (
            <div className="flex flex-row items-center justify-center w-full gap-x-1">
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
