import { GiCheckMark } from "react-icons/gi";
import { FaXmark } from "react-icons/fa6";

const formatDate = (dateString) => {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

const UserDetailsTable = ({ user }) => (
  <table className="shadow w-xl ">
    <tbody>
      <tr className="cursor-pointer hover:bg-gray-200">
        <td className="py-2 border-b px-7">Username</td>
        <td className="py-2 border-b px-7">{user[0]?.username}</td>
      </tr>
      <tr className="cursor-pointer hover:bg-gray-200">
        <td className="py-2 border-b px-7">Email</td>
        <td className="py-2 border-b px-7">{user[0]?.email}</td>
      </tr>
      <tr className="cursor-pointer hover:bg-gray-200">
        <td className="py-2 border-b px-7">Full Name</td>
        <td className="py-2 border-b px-7">{user[0]?.profile.full_name}</td>
      </tr>
      <tr className="cursor-pointer hover:bg-gray-200">
        <td className="py-2 border-b px-7">Phone Number</td>
        <td className="py-2 border-b px-7">
          {user[0]?.profile.phone_number || "N/A"}
        </td>
      </tr>
      <tr className="cursor-pointer hover:bg-gray-200">
        <td className="py-2 border-b px-7">Nationality</td>
        <td className="py-2 border-b px-7">
          {user[0]?.profile.nationality || "N/A"}
        </td>
      </tr>
      <tr className="cursor-pointer hover:bg-gray-200">
        <td className="py-2 border-b px-7">is_student</td>
        <td className="py-2 border-b px-7">
          {user[0]?.profile.is_student ? (
            <GiCheckMark className="text-green-600" />
          ) : (
            <FaXmark className="text-red-600" />
          )}
        </td>
      </tr>
      <tr className="cursor-pointer hover:bg-gray-200">
        <td className="py-2 border-b px-7">is_Member</td>
        <td className="py-2 border-b px-7">
          {user[0]?.profile.is_paid_membership ? (
            <GiCheckMark className="text-green-600" />
          ) : (
            <FaXmark className="text-red-600" />
          )}
        </td>
      </tr>
      <tr className="cursor-pointer hover:bg-gray-200">
        <td className="py-2 border-b px-7">is_Conference</td>
        <td className="py-2 border-b px-7">
          {user[0]?.profile.is_paid_conference ? (
            <GiCheckMark className="text-green-600" />
          ) : (
            <FaXmark className="text-red-600" />
          )}
        </td>
      </tr>
      <tr className="cursor-pointer hover:bg-gray-200">
        <td className="py-2 border-b px-7">Date Registered</td>
        <td className="py-2 border-b px-7">
          {formatDate(user[0]?.profile?.date_registered)}
        </td>
      </tr>
      <tr className="cursor-pointer hover:bg-gray-200">
        <td className="py-2 border-b px-7">Last Login</td>
        <td className="py-2 border-b px-7">
          {formatDate(user[0]?.profile?.last_login)}
        </td>
      </tr>
      <tr className="cursor-pointer hover:bg-gray-200">
        <td className="py-2 border-b px-7">Institution</td>
        <td className="py-2 border-b px-7">
          {user[0]?.profile.institution || "N/A"}
        </td>
      </tr>
      <tr className="cursor-pointer hover:bg-gray-200">
        <td className="py-2 border-b px-7">Course of Study</td>
        <td className="py-2 border-b px-7">
          {user[0]?.profile.course_of_study || "N/A"}
        </td>
      </tr>
      <tr className="cursor-pointer hover:bg-gray-200">
        <td className="py-2 border-b px-7">Branch</td>
        <td className="py-2 border-b px-7">
          {user[0]?.profile.branch || "N/A"}
        </td>
      </tr>
      <tr className="cursor-pointer hover:bg-gray-200">
        <td className="py-2 border-b px-7">Title</td>
        <td className="py-2 border-b px-7">
          {user[0]?.profile.title || "N/A"}
        </td>
      </tr>
      <tr className="cursor-pointer hover:bg-gray-200">
        <td className="py-2 border-b px-7">Address</td>
        <td className="py-2 border-b px-7">
          {user[0]?.profile.address || "N/A"}
        </td>
      </tr>
      <tr className="cursor-pointer hover:bg-gray-200">
        <td className="py-2 border-b px-7">Gender</td>
        <td className="py-2 border-b px-7">
          {user[0]?.profile.gender || "N/A"}
        </td>
      </tr>
      <tr className="cursor-pointer hover:bg-gray-200">
        <td className="py-2 border-b px-7">College</td>
        <td className="py-2 border-b px-7">
          {user[0]?.profile.college || "N/A"}
        </td>
      </tr>
    </tbody>
  </table>
);

export default UserDetailsTable;
