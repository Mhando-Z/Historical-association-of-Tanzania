// export default ProfileEdit;
import React, { useContext } from "react";
import { Dots } from "react-activity";
import { FaEdit } from "react-icons/fa";
import UserContext from "../../Context/UserContext";
// profile logos
import stdprofile from "../../Assets/profiles/man.png";
import { FaRegCircleUser } from "react-icons/fa6";
import stdprofile2 from "../../Assets/profiles/woman2.png";
import manprofile from "../../Assets/profiles/man1.png";
import womanProfile from "../../Assets/profiles/woman.png";
// verification badge
import { HiMiniCheckBadge } from "react-icons/hi2";

function PreviewDetails() {
  const { userId } = useContext(UserContext);
  const { users } = useContext(UserContext);

  const user = users?.filter((dt) => {
    return dt.id === userId;
  });

  if (!user || user.length === 0)
    return (
      <div className="flex flex-col items-center justify-center min-h-screen ">
        <Dots color="#b67a3d" size={35} speed={0.7} animating={true} />
      </div>
    );

  return (
    <div>
      <div>
        <h1 className="md:text-2xl flex flex-row items-center gap-x-3 border-l-[#b67a3d] shadow-xl bg-slate-50 py-3  border-r-[#b67a3d] border-r-8  border-l-8 mb-5 font-medium  ">
          <FaEdit className="ml-3" />
          <span className="ml-1">User Profile Details</span>
        </h1>

        <form>
          <div className="flex flex-row items-center justify-between w-full p-5 gap-x-5">
            <div>
              {/* profile images */}

              {user[0]?.profile?.profile_picture !== null ? (
                <>
                  <img
                    src={`http://127.0.0.1:8000/${user[0]?.profile.profile_picture}`}
                    alt="Profile"
                    className="object-cover object-top shadow-lg ring-1 size-20  ring-[#b67a3d] rounded-full max-w-screen"
                  />
                </>
              ) : user[0]?.profile.is_student === true &&
                user[0]?.profile.gender === "male" ? (
                <div>
                  <img
                    src={stdprofile}
                    alt="user[0] pprofile.rofile"
                    className="h-20 ring-4 rounded-full  shadow-xl ring-[#b67a3d] "
                  />
                </div>
              ) : user[0]?.profile.gender === "male" ? (
                <img
                  src={manprofile}
                  alt="user[0] pprofile.rofile"
                  className="h-20 ring-4 rounded-full shadow-xl ring-[#b67a3d]"
                />
              ) : user[0]?.profile.is_student === true &&
                user[0]?.profile.gender === "female" ? (
                <div>
                  <img
                    src={stdprofile2}
                    alt="user[0] pprofile.rofile"
                    className="h-20 ring-4 rounded-full shadow-xl ring-[#b67a3d]"
                  />
                </div>
              ) : user[0]?.profile.gender === "female" ? (
                <img
                  src={womanProfile}
                  alt="user[0] pprofile.rofile"
                  className="h-20 ring-4 rounded-full shadow-xl ring-[#b67a3d]"
                />
              ) : (
                <div>
                  <FaRegCircleUser className="text-7xl" />
                </div>
              )}
            </div>
            <div className="flex flex-col flex-grow">
              {/* user details and status */}
              <h1 className="text-lg font-bold lg:text-xl line-clamp-2">
                {user[0]?.username}
              </h1>
              {user[0]?.is_staff ? (
                <div className="flex flex-row items-center w-full gap-x-1">
                  <>
                    <h1 className="font-medium">Admin</h1>
                  </>
                  <HiMiniCheckBadge className="text-xl text-blue-700 gap-x-10" />
                </div>
              ) : (
                <div className="flex flex-row items-center w-full gap-x-1">
                  <>
                    <h1 className="font-medium">User</h1>
                  </>
                  {user[0]?.profile.is_paid_membership === true &&
                  user[0]?.profile.is_paid_conference === true ? (
                    <HiMiniCheckBadge className="text-xl text-green-700 gap-x-10" />
                  ) : user[0]?.profile.is_paid_membership === true ? (
                    <HiMiniCheckBadge className="text-xl text-yellow-700 gap-x-10" />
                  ) : user[0]?.profile.is_paid_conference === true ? (
                    <HiMiniCheckBadge className="text-xl text-purple-700 gap-x-10" />
                  ) : (
                    <HiMiniCheckBadge className="text-xl text-black gap-x-10" />
                  )}
                </div>
              )}
            </div>
          </div>
          <div className="flex flex-col w-full mb-4 ">
            <label
              htmlFor="full_name"
              className="block py-2 bg-slate-50 w-full mb-2 shadow border-l-[#b67a3d] border-r-[#b67a3d] xl:text-lg text-sm  leading-6 text-gray-900"
            >
              <span className="ml-2">Username</span>
            </label>
            <input
              type="text"
              readOnly
              value={user[0]?.username}
              className="block p-2 mt-2 border placeholder:text-sm shadow-md focus:bg-blue-100 outline-none rounded-3xl px-7 ring-1 ring-[#b67a3d]"
            />
          </div>
          <div className="flex flex-col w-full mb-4 ">
            <label
              htmlFor="full_name"
              className="block py-2 bg-slate-50 w-full mb-2 shadow border-l-[#b67a3d] border-r-[#b67a3d] xl:text-lg text-sm  leading-6 text-gray-900"
            >
              <span className="ml-2">Full Name</span>
            </label>
            <input
              type="text"
              readOnly
              value={user[0]?.profile.full_name}
              className="block p-2 mt-2 border placeholder:text-sm shadow-md focus:bg-blue-100 outline-none rounded-3xl px-7 ring-1 ring-[#b67a3d]"
            />
          </div>
          <div className="flex flex-col w-full mb-4 ">
            <label
              htmlFor="full_name"
              className="block py-2 bg-slate-50 w-full mb-2 shadow border-l-[#b67a3d] border-r-[#b67a3d] xl:text-lg text-sm  leading-6 text-gray-900"
            >
              <span className="ml-2">Email</span>
            </label>
            <input
              type="text"
              readOnly
              value={user[0]?.email}
              className="block p-2 mt-2 border placeholder:text-sm shadow-md focus:bg-blue-100 outline-none rounded-3xl px-7 ring-1 ring-[#b67a3d]"
            />
          </div>

          <div className="flex flex-col w-full mb-4 ">
            <label
              htmlFor="phone_number"
              className="block py-2 bg-slate-50 w-full mb-2 shadow border-l-[#b67a3d] border-r-[#b67a3d] xl:text-lg text-sm  leading-6 text-gray-900"
            >
              <span className="ml-2">Phone Number</span>
            </label>
            <input
              type="text"
              readOnly
              value={user[0]?.profile.phone_number}
              className="block p-2 mt-2 border placeholder:text-sm shadow-xl focus:bg-blue-100 outline-none rounded-3xl px-7 ring-1 ring-[#b67a3d]"
            />
          </div>
          <div className="flex flex-col w-full mb-4 ">
            <label
              htmlFor="nationality"
              className="block py-2 bg-slate-50 w-full mb-2 shadow border-l-[#b67a3d] border-r-[#b67a3d] xl:text-lg text-sm  leading-6 text-gray-900"
            >
              <span className="ml-2">Nationality</span>
            </label>
            <input
              type="text"
              readOnly
              value={user[0]?.profile.nationality}
              required
              className="block p-2 mt-2 border placeholder:text-sm shadow-xl focus:bg-blue-100 outline-none rounded-3xl px-7 ring-1 ring-[#b67a3d]"
            />
          </div>

          {user[0]?.profile.is_student && (
            <>
              {/* Student Details */}
              <div className="flex flex-col w-full mb-4 ">
                <label
                  htmlFor="student_id"
                  className="block py-2 bg-slate-50 w-full mb-2 shadow border-l-[#b67a3d] border-r-[#b67a3d] xl:text-lg text-sm  leading-6 text-gray-900"
                >
                  <span className="ml-2">Student Id</span>
                </label>
                <input
                  type="text"
                  readOnly
                  value={user[0]?.profile.student_id}
                  className="block p-2 mt-2 border placeholder:text-sm shadow-xl focus:bg-blue-100 outline-none rounded-3xl px-7 ring-1 ring-[#b67a3d]"
                />
              </div>
              <div className="flex flex-col w-full mb-4 ">
                <label
                  htmlFor="course_of_study"
                  className="block py-2 bg-slate-50 w-full mb-2 shadow border-l-[#b67a3d] border-r-[#b67a3d] xl:text-lg text-sm  leading-6 text-gray-900"
                >
                  <span className="ml-2">Course of Study</span>
                </label>
                <input
                  type="text"
                  readOnly
                  value={user[0]?.profile.course_of_study}
                  className="block p-2 mt-2 border placeholder:text-sm shadow-xl focus:bg-blue-100 outline-none rounded-3xl px-7 ring-1 ring-[#b67a3d]"
                />
              </div>
              <div className="flex flex-col w-full mb-4 ">
                <label
                  htmlFor="institution"
                  className="block py-2 bg-slate-50 w-full mb-2 shadow border-l-[#b67a3d] border-r-[#b67a3d] xl:text-lg text-sm  leading-6 text-gray-900"
                >
                  <span className="ml-2">Institution</span>
                </label>
                <input
                  type="text"
                  readOnly
                  value={user[0]?.profile.institution}
                  className="block p-2 mt-2 border placeholder:text-sm shadow-xl focus:bg-blue-100 outline-none rounded-3xl px-7 ring-1 ring-[#b67a3d]"
                />
              </div>
              <div className="flex flex-col w-full mb-4 ">
                <label
                  htmlFor="college"
                  className="block py-2 bg-slate-50 w-full mb-2 shadow border-l-[#b67a3d] border-r-[#b67a3d] xl:text-lg text-sm  leading-6 text-gray-900"
                >
                  <span className="ml-2">College</span>
                </label>
                <input
                  type="text"
                  readOnly
                  value={user[0]?.profile.college}
                  className="block p-2 mt-2 border placeholder:text-sm shadow-xl focus:bg-blue-100 outline-none rounded-3xl px-7 ring-1 ring-[#b67a3d]"
                />
              </div>
            </>
          )}

          <div className="flex flex-col w-full mb-4 ">
            <label
              htmlFor="title"
              className="block py-2 bg-slate-50 w-full mb-2 shadow border-l-[#b67a3d] border-r-[#b67a3d] xl:text-lg text-sm  leading-6 text-gray-900"
            >
              <span className="ml-2">Title</span>
            </label>
            <input
              type="text"
              readOnly
              value={user[0]?.profile.title}
              className="block p-2 mt-2 border placeholder:text-sm shadow-xl focus:bg-blue-100 outline-none rounded-3xl px-7 ring-1 ring-[#b67a3d]"
            />
          </div>
          <div className="flex flex-col w-full mb-4 ">
            <label
              htmlFor="branch"
              className="block py-2 bg-slate-50 w-full mb-2 shadow border-l-[#b67a3d] border-r-[#b67a3d] xl:text-lg text-sm  leading-6 text-gray-900"
            >
              <span className="ml-2">Branch</span>
            </label>
            <input
              type="text"
              readOnly
              value={user[0]?.profile.branch}
              className="block p-2 mt-2 border placeholder:text-sm shadow-xl focus:bg-blue-100 outline-none rounded-3xl px-7 ring-1 ring-[#b67a3d]"
            />
          </div>
          <div className="flex flex-col w-full mb-4 ">
            <label
              htmlFor="country"
              className="block py-2 bg-slate-50 w-full mb-2 shadow border-l-[#b67a3d] border-r-[#b67a3d] xl:text-lg text-sm  leading-6 text-gray-900"
            >
              <span className="ml-2">Country</span>
            </label>
            <input
              type="text"
              readOnly
              value={user[0]?.profile.country}
              className="block p-2 mt-2 border placeholder:text-sm shadow-xl focus:bg-blue-100 outline-none rounded-3xl px-7 ring-1 ring-[#b67a3d]"
            />
          </div>
          <div className="flex flex-col w-full mb-4 ">
            <label
              htmlFor="city"
              className="block py-2 bg-slate-50 w-full mb-2 shadow border-l-[#b67a3d] border-r-[#b67a3d] xl:text-lg text-sm  leading-6 text-gray-900"
            >
              <span className="ml-2">City</span>
            </label>
            <input
              type="text"
              readOnly
              value={user[0]?.profile.city}
              className="block p-2 mt-2 border placeholder:text-sm shadow-xl focus:bg-blue-100 outline-none rounded-3xl px-7 ring-1 ring-[#b67a3d]"
            />
          </div>
          <div className="flex flex-col w-full mb-4 ">
            <label
              htmlFor="physical_address"
              className="block py-2 bg-slate-50 w-full mb-2 shadow border-l-[#b67a3d] border-r-[#b67a3d] xl:text-lg text-sm  leading-6 text-gray-900"
            >
              <span className="ml-2">Physical address</span>
            </label>
            <input
              type="text"
              readOnly
              value={user[0]?.profile.physical_address}
              className="block p-2 mt-2 border placeholder:text-sm shadow-xl focus:bg-blue-100 outline-none rounded-3xl px-7 ring-1 ring-[#b67a3d]"
            />
          </div>
          <div className="flex flex-col w-full mt-5 mb-10 ">
            <label
              htmlFor="reviews"
              className="block py-2 bg-slate-50 w-full mb-2 shadow border-l-[#b67a3d] border-r-[#b67a3d] xl:text-lg text-sm  leading-6 text-gray-900"
            >
              <span className="ml-2">Reviews</span>
            </label>
            <textarea
              type="textarea"
              readOnly
              cols="30"
              rows="6"
              value={user[0]?.profile.reviews}
              className="block p-7 mt-2 border placeholder:text-sm shadow-xl focus:bg-blue-100 outline-none rounded-3xl px-7 ring-1 ring-[#b67a3d]"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default PreviewDetails;
