import { jwtDecode } from "jwt-decode";
import React, { useContext, useEffect, useState } from "react";
import UserContext from "../../Context/UserContext";
import { FaUser } from "react-icons/fa";
import { BsPeopleFill } from "react-icons/bs";
import UserTable from "../Componentz/UserTable";
import BarsChart from "../Charts/BarChart";
import PieCharts from "../Charts/PieChart";

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
    <div className="flex flex-col bg-slate-50 min-h-screen justify-center items-center">
      <div className="flex flex-col container mx-auto">
        {/* Figures */}
        <div className="flex mt-32 xl:mt-24 flex-wrap gap-x-10 xl:grid-cols-4 gap-y-10 grid-cols-3 gap-2 items-center justify-center">
          <div className="size-52 shadow-xl ring-1 ring-[#b67a3d] bg-slate-100 p-10 rounded-xl">
            <FaUser className="text-4xl" />

            <h1 className="text-2xl mt-2 font-bold uppercase">Users</h1>
            <h1 className="text-7xl mt-2 text-center font-bold uppercase">
              {users?.length}
            </h1>
          </div>
          <div className="size-52 shadow-xl ring-1 ring-[#b67a3d] bg-slate-100 p-10 rounded-xl">
            <FaUser className="text-4xl" />
            <h1 className="text-2xl mt-2 font-bold uppercase">Conference</h1>
            <h1 className="text-7xl mt-2 text-center font-bold uppercase">
              {paidConferenceUsers?.length}
            </h1>
          </div>
          <div className="size-52 shadow-xl ring-1 ring-[#b67a3d] bg-slate-100 p-10 rounded-xl">
            <FaUser className="text-4xl" />
            <h1 className="text-2xl mt-2 font-bold uppercase">Students</h1>
            <h1 className="text-7xl mt-2 text-center font-bold uppercase">
              {StudentUsers?.length}
            </h1>
          </div>
          <div className="size-52 shadow-xl ring-1 ring-[#b67a3d] bg-slate-100 p-10 rounded-xl">
            <BsPeopleFill className="text-4xl" />
            <h1 className="text-2xl mt-2 font-bold uppercase">members</h1>
            <h1 className="text-7xl mt-2 text-center font-bold uppercase">
              {paidMembershipUsers?.length}
            </h1>
          </div>
        </div>
        {/* users table */}
        <div className="flex flex-col">
          <UserTable data={users} />
        </div>
        {/* Chatis */}
        <div className="flex flex-col mt-10">
          <h1 className="md:text-xl font-bold uppercase">Statistics</h1>
          <div className="flex flex-col gap-x-5 gap-y-8 md:flex-row items-center">
            <div>
              <BarsChart data={users} />
            </div>
            <>
              <PieCharts data={users} />
            </>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashHome;
