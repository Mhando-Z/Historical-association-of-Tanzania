import axios from "axios";
import { createContext, useEffect, useState } from "react";

const UserContext = createContext();

export function UserProvider({ children }) {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState([]);

  console.log(user);

  async function getUsers() {
    const { data } = await axios.get("http://127.0.0.1:8000/hat-users/users/");
    setUsers(data);
  }
  useEffect(() => {
    getUsers();
  }, []);
  console.log(users);
  return (
    <UserContext.Provider value={{ setUser, user }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserContext;
