import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePageDataProvider } from "./Context/HomePageContext";
import NavBar from "./Components.jsx/NavBar";
import HomePage from "./Pages/HomePage";
import Footer from "./Components.jsx/Footer";
import PageNotFound from "./Components.jsx/PageNotFound";

function App() {
  return (
    <div className="flex flex-col justify-between min-h-screen ">
      <HomePageDataProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </HomePageDataProvider>
    </div>
  );
}

export default App;
