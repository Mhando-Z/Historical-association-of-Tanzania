import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePageDataProvider } from "./Context/HomePageContext";
import NavBar from "./Components/NavBar";
import HomePage from "./Pages/HomePage";
import Footer from "./Components/Footer";
import PageNotFound from "./Components/PageNotFound";
import ScrollToTopButton from "./Components/FloatingButton";
import Gallery from "./Screens/Gallery";
import HATPresident from "./Screens/HATPresident";
import AboutHAT from "./Screens/AboutHAT";
import Announcements from "./Screens/Announcements";
import UserLogin from "./Dashboard/Screens/UserLogin";
import RegisterUser from "./Dashboard/Screens/RegisterUser";
import MainPage from "./Dashboard/Page/MainPage";
import DashHome from "./Dashboard/Screens/DashHome";
import HeroSect from "./Dashboard/Sections/HeroSect";
import ContactUsSect from "./Dashboard/Sections/ContactUsSect";
import GallerySect from "./Dashboard/Sections/GallerySect";
import PresidentSect from "./Dashboard/Sections/PresidentSect";
import AboutUsSect from "./Dashboard/Sections/AboutUsSect";
import StaffsSect from "./Dashboard/Sections/StaffsSect";
import AnnouncementsSect from "./Dashboard/Sections/AnnouncementsSect";
import Researchpublications from "./Dashboard/Sections/Research&publications";
import PoliciesTerms from "./Dashboard/Sections/PoliciesTerms";
import { UserProvider } from "./Context/UserContext";
import RegistrationForm from "./Dashboard/Componentz/UserRegister";
import "react-activity/dist/library.css";
import ResourcePublication from "./Screens/ResourcePublication";

function App() {
  return (
    <div className="flex flex-col font-roboto justify-between min-h-screen overflow-x-hidden">
      <HomePageDataProvider>
        <UserProvider>
          <BrowserRouter>
            <NavBar />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="AboutUs/" element={<AboutHAT />} />
              <Route path="President/" element={<HATPresident />} />
              <Route path="Gallery/" element={<Gallery />} />
              <Route path="Login/" element={<UserLogin />} />
              <Route path="Research/" element={<ResourcePublication />} />
              <Route path="Register/" element={<RegisterUser />} />
              <Route path="UserRegister/" element={<RegistrationForm />} />
              <Route path="Announcements/" element={<Announcements />} />
              <Route path="*" element={<PageNotFound />} />
              <Route path="Dashboard/" element={<MainPage />}>
                <Route index element={<DashHome />} />
                <Route path="heroSect/" element={<HeroSect />} />
                <Route path="Announcement/" element={<AnnouncementsSect />} />
                <Route path="AboutSect/" element={<AboutUsSect />} />
                <Route path="PresoSect/" element={<PresidentSect />} />
                <Route path="GallerySect/" element={<GallerySect />} />
                <Route path="StaffsSect/" element={<StaffsSect />} />
                <Route path="ContactUsSect/" element={<ContactUsSect />} />
                <Route path="PoliciesTerms/" element={<PoliciesTerms />} />
                <Route
                  path="Research&publications/"
                  element={<Researchpublications />}
                />
              </Route>
            </Routes>
            <ScrollToTopButton />
            <Footer />
          </BrowserRouter>
        </UserProvider>
      </HomePageDataProvider>
    </div>
  );
}

export default App;
