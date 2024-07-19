import { createContext, useEffect, useState } from "react";
import axiosInstance from "./axiosInstance";

const UserContext = createContext();

export function UserProvider({ children }) {
  const [users, setUsers] = useState([]);
  const [open, setOpen] = useState(true);
  const [userId, setId] = useState("");
  const [show, setShow] = useState(false);

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
    <UserContext.Provider
      value={{ users, open, show, setOpen, setId, setShow, userId }}
    >
      {children}
    </UserContext.Provider>
  );
}

export default UserContext;
