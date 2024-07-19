// UserTable.jsx
import React, { useContext, useState } from "react";
import moment from "moment";
import { FaXmark } from "react-icons/fa6";
import { GiCheckMark } from "react-icons/gi";
import UserContext from "../../Context/UserContext";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

// Date formatter component
const formatDate = (dateString) => {
  return moment(dateString).format("MMMM D, YYYY [at] h:mm:ss A");
};

// Table component
const UserTable = ({ data }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const { setId } = useContext(UserContext);
  const location = useLocation();

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
  const handleUserId = (id) => {
    setId(id);
  };

  return (
    <div className="mt-14">
      <h1 className="md:text-xl border-l-black border-l-8 mb-5 font-bold uppercase">
        <span className="ml-2">User table</span>
      </h1>
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
              <motion.tr
                onClick={() => handleUserId(item.id)}
                key={item.id}
                className="hover:bg-gray-200 cursor-pointer"
              >
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
                <td className="py-2 px-4 border-b">
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
                <td className="py-2 px-4 border-b">
                  {location.pathname === "/Dashboard/MembersMgt/" ? (
                    <>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.8 }}
                        transition={{ type: "spring", ease: "easeOut" }}
                        className="bg-slate-200 rounded-3xl ring-1 ring-[#b67a3d] shadow-lg font-medium py-2 px-6"
                      >
                        Edit
                      </motion.button>
                    </>
                  ) : (
                    ""
                  )}
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserTable;
