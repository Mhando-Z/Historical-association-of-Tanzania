import moment from "moment";
import React from "react";
import { FaXmark } from "react-icons/fa6";
import { GiCheckMark } from "react-icons/gi";

const formatDate = (dateString) => {
  return moment(dateString).format("MMMM D, YYYY [at] h:mm:ss A");
};

function ProfileOverview({ data }) {
  return (
    <div className="w-full shadow-xl bg-slate-100 ">
      <h1 className="md:text-xl border-l-[#b67a3d] shadow-xl bg-slate-50 py-3 border-r-[#b67a3d] border-r-8 border-l-8 mb-5 font-bold uppercase">
        <span className="ml-2">User Profile Overview</span>
      </h1>
      {/* section 1 user bried info */}
      <div className="w-full p-2 bg-white shadow-xl rounded-xl ring-1 ring-[#b67a3d]">
        <div className="flex flex-col justify-between px-2 divide-y-2 gap-y-5 ">
          <h1 className="py-3 mb-5 font-bold uppercase shadow-lg md:text-xl bg-slate-50">
            <span>personal info</span>
          </h1>
          <h1 className="flex flex-col">
            Full Name <span className="">{data?.profile?.full_name}</span>
          </h1>
          <h1 className="flex flex-col">
            Nationality <span className="">{data?.profile?.nationality}</span>
          </h1>
          <h1 className="flex flex-col">
            Title <span className="">{data?.profile?.title}</span>
          </h1>
          <h1 className="flex flex-col">
            Branch <span className="">{data?.profile?.branch}</span>
          </h1>
          <h1 className="flex flex-col">
            Gender <span>{data?.profile?.gender}</span>
          </h1>
          <h1 className="flex flex-col">
            Date Registered
            <span className="text-sm">
              {formatDate(data?.profile?.date_registered)}
            </span>
          </h1>
          <h1 className="flex flex-col">
            Last Login
            <span className="text-sm">
              {formatDate(data?.profile?.last_login)}
            </span>
          </h1>
          <>
            {data.profile.is_paid_membership ? (
              <div className="flex flex-row items-center justify-between">
                <h1>Paid Membership</h1>
                <GiCheckMark className="text-xl text-green-600" />
              </div>
            ) : (
              <div className="flex flex-row items-center justify-between">
                <h1>Paid Membership</h1>
                <FaXmark className="text-xl text-red-600" />
              </div>
            )}
          </>
          <div className="mb-3">
            {data.profile.is_paid_conference ? (
              <div className="flex flex-row items-center justify-between">
                <h1>Paid Conference</h1>
                <GiCheckMark className="text-xl text-green-600" />
              </div>
            ) : (
              <div className="flex flex-row items-center justify-between">
                <h1>Paid Conference</h1>
                <FaXmark className="text-xl text-red-600" />
              </div>
            )}
          </div>
        </div>
      </div>
      {/* students information */}
      {data?.profile?.is_student ? (
        <div className="w-full p-2 mt-10 bg-white rounded-xl ring-1 ring-[#b67a3d]">
          <div className="flex flex-col justify-between px-2 divide-y-2 gap-y-5 ">
            <h1 className="py-3 mb-5 font-bold uppercase shadow-lg md:text-xl bg-slate-50">
              <span>Student info</span>
            </h1>
            <h1 className="flex flex-col">
              Institution <span className="">{data?.profile?.institution}</span>
            </h1>
            <h1 className="flex flex-col">
              College <span className="">{data?.profile?.college}</span>
            </h1>
            <h1 className="flex flex-col">
              Course of Study
              <span>{data?.profile?.course_of_study}</span>
            </h1>
            <h1 className="flex flex-col">
              Student Id <span>{data?.profile?.student_id}</span>
            </h1>
          </div>
        </div>
      ) : (
        ""
      )}
      {/* other infos */}
      <div className="w-full p-2 mt-10 bg-white shadow-xl rounded-xl ring-1 ring-[#b67a3d]">
        <div className="flex flex-col justify-between px-2 divide-y-2 gap-y-5 ">
          <h1 className="py-3 mb-5 font-bold uppercase shadow-lg md:text-xl bg-slate-50">
            <span>Contacts info</span>
          </h1>
          <h1 className="flex flex-col">
            Phone Number <span className="">{data?.profile?.phone_number}</span>
          </h1>
          <h1 className="flex flex-col">
            Email <span className="">{data?.email}</span>
          </h1>
          <h1 className="flex flex-col">
            Country <span className="">{data?.profile?.country}</span>
          </h1>
          <h1 className="flex flex-col">
            City <span className="">{data?.profile?.city}</span>
          </h1>
          <h1 className="flex flex-col">
            Physical Address
            <span className="">{data?.profile?.physical_address}</span>
          </h1>
        </div>
      </div>
      <div></div>
      {/* Contact details and location */}
      <div></div>
    </div>
  );
}

export default ProfileOverview;
