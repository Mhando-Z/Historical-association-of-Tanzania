import { createContext, useEffect, useState } from "react";
import axiosInstance from "./axiosInstance";

const UserContext = createContext();

export function UserProvider({ children }) {
  const [userData, setUserData] = useState(null);
  const [users, setUsers] = useState([]);
  const [open, setOpen] = useState(true);
  const [userId, setId] = useState("");
  const [show, setShow] = useState(false);

  const fetchUserData = async () => {
    try {
      const { data } = await axiosInstance.get("hat-users/user/profile/");
      setUserData(data);
    } catch (error) {}
  };

  async function getUsers() {
    try {
      const { data } = await axiosInstance.get("/hat-users/users/");
      setUsers(data);
    } catch (error) {}
  }

  // synchronous Action
  useEffect(() => {
    fetchUserData();
    getUsers();
  }, []);

  return (
    <UserContext.Provider
      value={{
        users,
        open,
        show,
        userData,
        userId,
        setOpen,
        setId,
        setShow,
        setUserData,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export default UserContext;
