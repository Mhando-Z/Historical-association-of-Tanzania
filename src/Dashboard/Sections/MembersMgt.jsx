import React, { useContext } from "react";
import UserTable from "./../Componentz/UserTable";
import UserContext from "../../Context/UserContext";
import { IoPerson } from "react-icons/io5";
import { GiCheckMark } from "react-icons/gi";
import { FaXmark } from "react-icons/fa6";
import moment from "moment";
import { Gauge, gaugeClasses } from "@mui/x-charts/Gauge";
import RegistrationStats from "../Charts/LineChart";

// Date formatter component
const formatDate = (dateString) => {
  return moment(dateString).format("MMMM D, YYYY [at] h:mm:ss A");
};

function MembersMgt() {
  const { users } = useContext(UserContext);
  const { userId } = useContext(UserContext);

  const user = users?.filter((dt) => {
    return dt.id === userId;
  });

  return (
    <div className="min-h-screen mt-16 flex flex-col px-6 py-9 relative">
      <div className="flex flex-col w-full">
        <h1 className="md:text-xl border-l-black border-l-8 mb-5 font-bold uppercase">
          <span className="ml-2">User Management</span>
        </h1>
        <div className="shadow-xl">
          <UserTable data={users} />
        </div>
        <div className="flex flex-col ring-1 ring-[#b67a3d] bg-slate-100 shadow-xl rounded-3xl mt-10">
          <div className="flex gap-x-14 flex-row p-20">
            <div className="size-20 bg-slate-200 shadow-xl ring-[#b67a3d] rounded-xl justify-center ring-2 items-center flex">
              <IoPerson className="text-7xl " />
            </div>
            <div className="flex flex-col shadow-lg">
              <table className="w-lg">
                <tbody>
                  <tr className="hover:bg-gray-200 cursor-pointer">
                    <td className="py-2 px-4 border-b">Username</td>
                    <td className="py-2 px-4 border-b">{user[0]?.username}</td>
                  </tr>
                  <tr className="hover:bg-gray-200 cursor-pointer">
                    <td className="py-2 px-4 border-b">Email</td>
                    <td className="py-2 px-4 border-b">{user[0]?.email}</td>
                  </tr>
                  <tr className="hover:bg-gray-200 cursor-pointer">
                    <td className="py-2 px-4 border-b">is_student</td>
                    <td className="py-2 px-4 border-b">
                      {user[0]?.profile.is_student ? (
                        <>
                          <GiCheckMark className="text-green-600" />
                        </>
                      ) : (
                        <>
                          <FaXmark className="text-red-600" />
                        </>
                      )}
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-200 cursor-pointer">
                    <td className="py-2 px-4 border-b">is_Member</td>
                    <td className="py-2 px-4 border-b">
                      {user[0]?.profile.is_paid_membership ? (
                        <>
                          <GiCheckMark className="text-green-600" />
                        </>
                      ) : (
                        <>
                          <FaXmark className="text-red-600" />
                        </>
                      )}
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-200 cursor-pointer">
                    <td className="py-2 px-4 border-b">is_Conference</td>
                    <td className="py-2 px-4 border-b">
                      {user[0]?.profile.is_paid_conference ? (
                        <>
                          <GiCheckMark className="text-green-600" />
                        </>
                      ) : (
                        <>
                          <FaXmark className="text-red-600" />
                        </>
                      )}
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-200 cursor-pointer">
                    <td className="py-2 px-4 border-b">Date Registerd</td>
                    <td className="py-2 px-4 border-b">
                      {formatDate(user[0]?.profile?.date_registered)}
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-200 cursor-pointer">
                    <td className="py-2 px-4 border-b">Last Login</td>
                    <td className="py-2 px-4 border-b">
                      {formatDate(user[0]?.profile?.last_login)}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute right-5 top-5 min-h-20 w-44">
        <Gauge
          width={200}
          height={150}
          value={users?.length}
          sx={(theme) => ({
            [`& .${gaugeClasses.valueText}`]: {
              fontSize: 40,
            },
            [`& .${gaugeClasses.valueArc}`]: {
              fill: "#b67a3d",
            },
            [`& .${gaugeClasses.referenceArc}`]: {
              fill: theme.palette.text.disabled,
            },
          })}
        />
      </div>
      <div>
        <RegistrationStats registrations={users} />
      </div>
    </div>
  );
}

export default MembersMgt;
