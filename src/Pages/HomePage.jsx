import React from "react";
import HeroSection from "./HeroSection";
import PresidentSpeech from "./PresidentSpeech";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import Staffs from "./Staffs";
import FAQSection from "./FAQ";
import PromoSect from "../Components/PromoSection";
import CallForAction from "../Components/CallForAction";
import Countdown from "../Components/TimeRemainingStats";
import Partners from "../Components/Partners";
import TestMonials from "./TestMonials";
import Contact from "./Cp";

function HomePage() {
  return (
    <div className="flex flex-col justify-between overflow-x-hidden font-roboto">
      {/* herosection */}
      <HeroSection />
      {/* president Speech */}
      <PresidentSpeech />
      {/* AboutUs Section */}
      <AboutUs />
      {/* Conference and Events Alerts */}
      <PromoSect />
      <Countdown />
      {/* Membership promotion */}
      <CallForAction />
      {/* Staffs section */}
      <Staffs />
      <div className="mt-16"></div>
      <FAQSection />
      {/* testimonials */}
      <TestMonials />
      <div className="mt-20"></div>
      <ContactUs />
      <Contact />
      <div className="mt-20"></div>
      <Partners />
    </div>
  );
}

export default HomePage;
