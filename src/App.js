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

function App() {
  return (
    <div className="flex flex-col font-roboto justify-between min-h-screen overflow-x-hidden">
      <HomePageDataProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="AboutUs/" element={<AboutHAT />} />
            <Route path="President/" element={<HATPresident />} />
            <Route path="Gallery/" element={<Gallery />} />
            <Route path="Login/" element={<UserLogin />} />
            <Route path="Register/" element={<RegisterUser />} />
            <Route path="Announcements/" element={<Announcements />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
          <ScrollToTopButton />
          <Footer />
        </BrowserRouter>
      </HomePageDataProvider>
    </div>
  );
}

export default App;
