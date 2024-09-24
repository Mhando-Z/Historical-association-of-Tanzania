import { createContext, useEffect, useState } from "react";
import axiosInstance from "./axiosInstance";

const UserContext = createContext();

export function UserProvider({ children }) {
  const [userData, setUserData] = useState(null);
  const [users, setUsers] = useState([]);
  const [open, setOpen] = useState(true);
  const [userId, setId] = useState("");
  const [show, setShow] = useState(false);
  const [publishId, setUpPId] = useState();
  const [AnnounceID, setAnnounceId] = useState();
  const [countries, setCountry] = useState([]);
  const [Regions, setRegion] = useState([]);
  const [CountryCode, setCountryCode] = useState("AF");

  const fetchUserData = async () => {
    try {
      const { data } = await axiosInstance.get("hat-users/user/profile/");
      setUserData(data);
    } catch (error) {}
  };
  const fetchCountriesData = async () => {
    try {
      const { data } = await axiosInstance.get(
        "https://api.countrystatecity.in/v1/countries",
        {
          headers: {
            "X-CSCAPI-KEY":
              "S0RSSFRVWkg0dE5DaEFMM0FtVkJQbDRGcWNjT2JiVFY3WlpXYjNwYg==",
          },
        }
      );

      setCountry(data);
    } catch (error) {}
  };
  const fetchCitiesesData = async () => {
    try {
      const { data } = await axiosInstance.get(
        `https://api.countrystatecity.in/v1/countries/${CountryCode}/states`,
        {
          headers: {
            "X-CSCAPI-KEY":
              "S0RSSFRVWkg0dE5DaEFMM0FtVkJQbDRGcWNjT2JiVFY3WlpXYjNwYg==",
          },
        }
      );

      setRegion(data);
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
    fetchCountriesData();
    fetchCitiesesData();
  }, [CountryCode]);

  return (
    <UserContext.Provider
      value={{
        users,
        open,
        show,
        userData,
        userId,
        publishId,
        AnnounceID,
        countries,
        Regions,
        CountryCode,
        setCountryCode,
        setAnnounceId,
        setUpPId,
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
