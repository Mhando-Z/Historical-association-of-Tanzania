import React from "react";
import HeroSection from "./HeroSection";
import PresidentSpeech from "./PresidentSpeech";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import Staffs from "./Staffs";
import FAQSection from "./FAQ";
import PromoSect from "../Components.jsx/PromoSection";

function HomePage() {
  return (
    <div className="flex flex-col justify-between font-roboto overflow-x-hidden">
      {/* herosection */}
      <HeroSection />
      {/* president Speech */}
      <PresidentSpeech />
      {/* AboutUs Section */}
      <AboutUs />
      <Staffs />
      <PromoSect />
      <div className="mt-16"></div>
      <FAQSection />
      <ContactUs />
    </div>
  );
}

export default HomePage;
