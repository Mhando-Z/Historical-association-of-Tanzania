import moment from "moment";
import React from "react";
import { FaXmark } from "react-icons/fa6";
import { GiCheckMark } from "react-icons/gi";
import { MdOutlinePersonPin } from "react-icons/md";
import { MdOutlineContactPhone } from "react-icons/md";
import { PiStudentFill } from "react-icons/pi";

const formatDate = (dateString) => {
  return moment(dateString).format("MMMM D, YYYY [at] h:mm:ss A");
};

function ProfileOverview({ data }) {
  return (
    <div className="flex flex-col justify-center w-full gap-10 md:flex-row bg-slate-100 ">
      {/* section 1 user bried info */}
      <div className="w-full p-2 bg-slate-100 rounded-xl ">
        <div className="flex flex-col justify-between px-2 divide-y-2 gap-y-5 ">
          <h1 className="flex flex-row items-center py-3 mb-5 font-bold uppercase gap-x-2 lg md:text-xl">
            <MdOutlinePersonPin className="text-3xl" />
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
        <div className="w-full p-2 mt-10 md:mt-0 rounded-xl ">
          <div className="flex flex-col justify-between px-2 divide-y-2 gap-y-5 ">
            <h1 className="flex flex-row items-center py-3 mb-5 font-bold uppercase gap-x-2 lg md:text-xl ">
              <PiStudentFill className="text-3xl" />
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
      <div className="w-full p-2 mt-10 md:mt-0 bg-slate-100 xl rounded-xl ">
        <div className="flex flex-col justify-between px-2 divide-y-2 gap-y-5 ">
          <h1 className="flex flex-row items-center py-3 mb-5 font-bold uppercase gap-x-2 lg md:text-xl">
            <MdOutlineContactPhone className="text-3xl" />
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
