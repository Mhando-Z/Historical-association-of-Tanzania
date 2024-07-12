import { createContext, useEffect, useState } from "react";
import axios from "axios";

const HomePageContext = createContext();

export function HomePageDataProvider({ children }) {
  const [heroSect, setHero] = useState([]);
  const [PresidentSect, setPresident] = useState([]);
  const [AboutUSSect, setAboutUs] = useState([]);
  const [ContactSect, setContacts] = useState([]);
  const [StaffsSect, setStaffs] = useState([]);
  const [footerSect, setFooter] = useState([]);
  const [gallerySect, setGallery] = useState([]);
  const [AnnounceSect, setAnnounce] = useState([]);
  const [ConferenceSect, setConference] = useState([]);

  // API CALLS
  async function getHerodata() {
    const { data } = await axios.get("http://127.0.0.1:8000/hat-api/heroSect");
    setHero(data);
  }

  async function getAnnounce() {
    const { data } = await axios.get("http://127.0.0.1:8000/hat-api/Announce/");
    setAnnounce(data);
  }

  async function getGallery() {
    const { data } = await axios.get("http://127.0.0.1:8000/hat-api/Gallery/");
    setGallery(data);
  }

  async function getFooter() {
    const { data } = await axios.get("http://127.0.0.1:8000/hat-api/Footer/");
    setFooter(data);
  }

  async function getPresident() {
    const { data } = await axios.get(
      "http://127.0.0.1:8000/hat-api/President/"
    );
    setPresident(data);
  }

  async function getAboutUs() {
    const { data } = await axios.get("http://127.0.0.1:8000/hat-api/AboutUs/");
    setAboutUs(data);
  }

  async function getContacts() {
    const { data } = await axios.get("http://127.0.0.1:8000/hat-api/Contact/");
    setContacts(data);
  }

  async function getStaffs() {
    const { data } = await axios.get("http://127.0.0.1:8000/hat-api/Staffs/");
    setStaffs(data);
  }

  async function getConference() {
    const { data } = await axios.get(
      "http://127.0.0.1:8000/hat-api/Conference/"
    );
    setConference(data);
  }
  useEffect(() => {
    getAnnounce();
    getGallery();
    getFooter();
    getConference();
    getStaffs();
    getContacts();
    getAboutUs();
    getPresident();
    getHerodata();
  }, []);
  return (
    <HomePageContext.Provider
      value={{
        heroSect,
        PresidentSect,
        AnnounceSect,
        AboutUSSect,
        ContactSect,
        StaffsSect,
        ConferenceSect,
        footerSect,
        gallerySect,
        setHero,
        setPresident,
        setContacts,
        setGallery,
      }}
    >
      {children}
    </HomePageContext.Provider>
  );
}

export default HomePageContext;
