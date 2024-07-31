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
import { UserProvider } from "./Context/UserContext";
import ResourcePublication from "./Screens/ResourcePublication";
import ProtectedRoute from "./Dashboard/Routes/ProtectedRoutes";
import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import AuthRoute from "./Dashboard/Routes/AuthRoute";
import Logout from "./Dashboard/Routes/Logout";
import MembersMgt from "./Dashboard/Sections/MembersMgt";
import { ToastContainer } from "react-toastify";
import CompanySect from "./Dashboard/Sections/CompanySect";
import UserProfile from "./Dashboard/Componentz/UserProfile";
import ConferenceSect from "./Dashboard/Sections/ConferenceSect";
import {
  PasswordResetConfirm,
  PasswordResetRequest,
} from "./Dashboard/Componentz/PasswordReset";
import "react-toastify/dist/ReactToastify.css";
import "react-activity/dist/library.css";
import UserHome from "./Dashboard/Users/Screens/UserHome";
import Membership from "./Dashboard/Users/Screens/Membership";
import UserConfernce from "./Dashboard/Users/Screens/UserConfernce";
import MyPayments from "./Dashboard/Users/Screens/MyPayments";
import Publications from "./Screens/Publications";
import logo from "../src/Assets/Images/3dlogo.png";
import { TypeAnimation } from "react-type-animation";

// stripe
// import { Elements } from "@stripe/react-stripe-js";
// import { stripePromise } from "./Context/Stripe";

// functional component Basic routing logic lies here
function App() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 2000); // Show intro for 5 seconds

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, []);

  const [users, setUser] = useState("");
  useEffect(() => {
    try {
      const usertoken = localStorage.getItem("token");
      const users = jwtDecode(usertoken);
      setUser(users);
    } catch (error) {}
  }, []);

  if (showIntro) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <img
          src={logo}
          alt="HAT Logo"
          className="md:h-auto w-[200px] md:w-[500px] transition-all animate-pulse duration-[30000ms] ease-in-out"
        />
        <TypeAnimation
          style={{
            whiteSpace: "pre-line",
            height: "100px",
            display: "block",
          }}
          className="text-xl text-center font-bold w-[200px] md:w-full opacity-50 capitalize md:text-3xl"
          sequence={[
            `Historical Association of Tanzania`,
            // actual line-break inside string literal also gets animated in new line, but ensure there are no leading spaces
            1000,
            "",
          ]}
          repeat={Infinity}
        />
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-between min-h-screen overflow-x-hidden font-roboto">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />

      <HomePageDataProvider>
        <UserProvider>
          <BrowserRouter>
            <NavBar />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="AboutUs/" element={<AboutHAT />} />
              <Route path="President/" element={<HATPresident />} />
              <Route path="Publications/" element={<Publications />} />
              <Route path="Gallery/" element={<Gallery />} />
              <Route path="Research/" element={<ResourcePublication />} />
              <Route path="Register/" element={<RegisterUser />} />
              <Route path="Announcements/" element={<Announcements />} />
              <Route path="*" element={<PageNotFound />} />
              <Route
                path="Password-reset/"
                element={<PasswordResetRequest />}
              />
              <Route
                // path="Password-Reset/confirm/:uid/:token/"
                path="Password-Reset/confirm/"
                element={<PasswordResetConfirm />}
              />
              {/* Logout Route */}
              <Route path="Logout/" element={<Logout />} />
              {/* PreventLoginRoute to restrict access to login for authenticated users */}
              <Route
                path="Login/"
                element={
                  <AuthRoute>
                    <UserLogin />
                  </AuthRoute>
                }
              />
              {/* Protected Dashboard Routes */}
              <Route
                path="Dashboard/*"
                element={
                  <ProtectedRoute user={users}>
                    <MainPage />
                  </ProtectedRoute>
                }
              >
                {/* Administrators Routes */}
                <Route index element={<DashHome />} />
                <Route path="heroSect/" element={<HeroSect />} />
                <Route path="Partners/" element={<CompanySect />} />
                <Route path="Conference/" element={<ConferenceSect />} />
                <Route path="MembersMgt/" element={<MembersMgt />} />
                <Route path="Announcement/" element={<AnnouncementsSect />} />
                <Route path="AboutSect/" element={<AboutUsSect />} />
                <Route path="UserProfile/" element={<UserProfile />} />
                <Route path="PresoSect/" element={<PresidentSect />} />
                <Route path="GallerySect/" element={<GallerySect />} />
                <Route path="StaffsSect/" element={<StaffsSect />} />
                <Route path="ContactUsSect/" element={<ContactUsSect />} />
                <Route
                  path="Research&publications/"
                  element={<Researchpublications />}
                />
                {/* Normal Users Routes */}
                <Route path="UserHome/" element={<UserHome />} />
                <Route path="Membership/" element={<Membership />} />
                <Route path="UserConference/" element={<UserConfernce />} />
                <Route path="MyPayments/" element={<MyPayments />} />
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
