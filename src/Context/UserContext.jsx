import { createContext, useEffect, useState } from "react";
import axiosInstance from "./axiosInstance";

const UserContext = createContext();

export function UserProvider({ children }) {
  const [users, setUsers] = useState([]);

  async function getUsers() {
    try {
      const { data } = await axiosInstance.get("/hat-users/users/");
      setUsers(data);
    } catch (error) {}
  }

  // synchronous Action
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <UserContext.Provider value={{ users }}>{children}</UserContext.Provider>
  );
}

export default UserContext;
