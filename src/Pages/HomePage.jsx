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

function HomePage() {
  return (
    <div className="flex flex-col justify-between font-roboto overflow-x-hidden">
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
      <ContactUs />
      <Partners />
    </div>
  );
}

export default HomePage;
