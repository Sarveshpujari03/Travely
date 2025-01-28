import React from "react";
import Header from "../../Components/Layout/Header/Header";
import Footer from "../../Components/Layout/Footer/Footer";
import HeroSection from "./Sections/HeroSection";
import AboutSection from "./Sections/AboutSection/AboutSection";
import FeaturesSection from "./Sections/FeaturesSection/FeaturesSection";
import { ScrollProvider } from "../../store/ScrollContext";

const Home = () => {
  return (
    <>
      <ScrollProvider>
        <div className="font-gilroy">
          <Header />
          <div className="px-10 h-screen font-gilroy">
            <HeroSection />
            <AboutSection />
            <FeaturesSection />
            <Footer />
          </div>
        </div>
      </ScrollProvider>
    </>
  );
};

export default Home;
