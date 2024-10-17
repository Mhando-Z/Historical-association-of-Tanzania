import { createContext, useEffect, useState } from "react";
import axiosInstance from "./axiosInstance";

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
  const [PolicieSect, setPolicy] = useState([]);
  const [companies, setCompany] = useState([]);
  const [TermsSect, setTermsService] = useState([]);
  const [ConferenceSect, setConference] = useState([]);
  const [ResourcesSect, setResources] = useState([]);
  const [Resources, setResourceSect] = useState([]);
  const [visible, setVisible] = useState("");

  // API CALLS
  // axios.defaults.headers.common["x-auth-token"] = localStorage.getItem("token");
  async function getHerodata() {
    try {
      const { data } = await axiosInstance.get("hat-api/heroSect");
      setHero(data);
    } catch (exp) {}
  }

  async function getResourcedata() {
    try {
      const { data } = await axiosInstance.get("hat-api/Resources");
      setResources(data);
    } catch (exp) {}
  }
  async function getResourceSectdata() {
    try {
      const { data } = await axiosInstance.get("hat-api/Resource");
      setResourceSect(data);
    } catch (exp) {}
  }

  async function getCompanydata() {
    try {
      const { data } = await axiosInstance.get("/hat-api/Companies");
      setCompany(data);
    } catch (exp) {}
  }

  async function getTerms() {
    try {
      const { data } = await axiosInstance.get("/hat-api/TermsofServices");
      setTermsService(data);
    } catch (exp) {}
  }
  async function getPoliciesdata() {
    try {
      const { data } = await axiosInstance.get("/hat-api/Policies");
      setPolicy(data);
    } catch (exp) {}
  }

  async function getAnnounce() {
    try {
      const { data } = await axiosInstance.get("/hat-api/Announce/");
      setAnnounce(data);
    } catch (exp) {}
  }

  async function getGallery() {
    try {
      const { data } = await axiosInstance.get("/hat-api/Gallery/");
      setGallery(data);
    } catch (exp) {}
  }

  async function getFooter() {
    try {
      const { data } = await axiosInstance.get("/hat-api/Footer/");
      setFooter(data);
    } catch (exp) {}
  }

  async function getPresident() {
    try {
      const { data } = await axiosInstance.get("/hat-api/President/");
      setPresident(data);
    } catch (exp) {}
  }

  async function getAboutUs() {
    try {
      const { data } = await axiosInstance.get("/hat-api/AboutUs/");
      setAboutUs(data);
    } catch (exp) {}
  }

  async function getContacts() {
    try {
      const { data } = await axiosInstance.get("/hat-api/Contact/");
      setContacts(data);
    } catch (exp) {}
  }

  async function getStaffs() {
    try {
      const { data } = await axiosInstance.get("/hat-api/Staffs/");
      setStaffs(data);
    } catch (exp) {}
  }

  async function getConference() {
    try {
      const { data } = await axiosInstance.get("/hat-api/Conference/");
      setConference(data);
    } catch (error) {}
  }
  useEffect(() => {
    getResourceSectdata();
    getResourcedata();
    getCompanydata();
    getTerms();
    getPoliciesdata();
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
        PolicieSect,
        TermsSect,
        companies,
        ResourcesSect,
        visible,
        Resources,
        setResourceSect,
        setVisible,
        setConference,
        setCompany,
        setResources,
        setTermsService,
        setPolicy,
        setHero,
        setPresident,
        setContacts,
        setGallery,
        setStaffs,
        setAnnounce,
        setAboutUs,
      }}
    >
      {children}
    </HomePageContext.Provider>
  );
}

export default HomePageContext;
