import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePageDataProvider } from "./Context/HomePageContext";
import NavBar from "./Components.jsx/NavBar";
import HomePage from "./Pages/HomePage";
import Footer from "./Components.jsx/Footer";
import PageNotFound from "./Components.jsx/PageNotFound";
import ScrollToTopButton from "./Components.jsx/FloatingButton";
import Gallery from "./Screens/Gallery";
import HATPresident from "./Screens/HATPresident";
import AboutHAT from "./Screens/AboutHAT";
import Announcements from "./Screens/Announcements";

function App() {
  return (
    <div className="flex flex-col justify-between min-h-screen overflow-x-hidden">
      <HomePageDataProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="AboutUs/" element={<AboutHAT />} />
            <Route path="President/" element={<HATPresident />} />
            <Route path="Gallery/" element={<Gallery />} />
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
