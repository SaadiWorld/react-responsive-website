import React, { useState } from "react";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import MobileNavbar from "../components/MobileNavBar";
import Navbar from "../components/Navbar";
import {
  aboutSection,
  discoverSection,
  signupSection,
} from "../components/InfoSection/data";
import Services from "../components/ServiceSection";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <MobileNavbar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection data={aboutSection} />
      <InfoSection data={discoverSection} />
      <Services />
      <InfoSection data={signupSection} />
    </>
  );
};

export default Home;
