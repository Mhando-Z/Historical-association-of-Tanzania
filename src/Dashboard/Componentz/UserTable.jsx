// UserTable.jsx
import React, { useState } from "react";
import moment from "moment";
import { FaXmark } from "react-icons/fa6";
import { GiCheckMark } from "react-icons/gi";

const formatDate = (dateString) => {
  return moment(dateString).format("MMMM D, YYYY [at] h:mm:ss A");
};

const UserTable = ({ data }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredData = data?.filter((item) =>
    Object.values(item).some(
      (value) =>
        value &&
        value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <div className="p-4 mt-14">
      <h1 className="md:text-xl mb-5 font-bold uppercase">User table</h1>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearch}
          className="p-2 border shadow-md outline-none focus:ring-1 focus:ring-[#b67a3d] border-gray-300 rounded w-full"
        />
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full shadow-2xl bg-slate-100 border border-gray-300">
          <thead>
            <tr className="bg-slate-200">
              <th className="py-2 px-4 text-left border-b">ID</th>
              <th className="py-2 px-4 text-left border-b">Name</th>
              <th className="py-2 px-4 text-left border-b">Email</th>
              <th className="py-2 px-4 text-left border-b">isStudent</th>
              <th className="py-2 px-4 text-left border-b">isMember</th>
              <th className="py-2 px-4 text-left border-b">PaidConference</th>
              <th className="py-2 px-4 text-left border-b">date Registerd</th>
            </tr>
          </thead>
          <tbody>
            {filteredData?.map((item) => (
              <tr key={item.id} className="hover:bg-gray-100">
                <td className="py-2 px-4 border-b">{item.id}</td>
                <td className="py-2 px-4 border-b">{item.username}</td>
                <td className="py-2 px-4 border-b">{item.email}</td>
                <td className="py-2  px-4 border-b">
                  {item.profile.is_student ? (
                    <>
                      <GiCheckMark className="text-green-600" />
                    </>
                  ) : (
                    <>
                      <FaXmark className="text-red-600" />
                    </>
                  )}
                </td>
                <td className="py-2  px-4 border-b">
                  {item.profile.is_paid_membership ? (
                    <>
                      <GiCheckMark className="text-green-600" />
                    </>
                  ) : (
                    <>
                      <FaXmark className="text-red-600" />
                    </>
                  )}
                </td>
                <td className="py-2  px-4 border-b">
                  {item.profile.is_paid_conference ? (
                    <>
                      <GiCheckMark className="text-green-600" />
                    </>
                  ) : (
                    <>
                      <FaXmark className="text-red-600" />
                    </>
                  )}
                </td>
                <td className="py-2 px-4 border-b">
                  {formatDate(item.profile.date_registered)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserTable;
