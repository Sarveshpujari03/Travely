import React from "react";
import Header from "../../Components/Layout/Header/Header";
import Footer from "../../Components/Layout/Footer/Footer";
import HeroSection from "./Sections/HeroSection";
import AboutSection from "./Sections/AboutSection/AboutSection";
import FeaturesSection from "./Sections/FeaturesSection/FeaturesSection";
import { ScrollProvider } from "../../store/ScrollContext";
import ReviewsSection from "./Sections/ReviewsSection/ReviewsSection";
import FAQSection from "./Sections/FAQSection/FAQSection";
import TopArrow from "../../Components/Common/TopArrow/TopArrow";

const Home = () => {
  return (
    <>
      <ScrollProvider>
        
        <div className="font-gilroy">
          <Header />
          <div className="h-screen font-gilroy">
            <HeroSection />
            <AboutSection />
            <TopArrow/> 
            <FeaturesSection />
            <ReviewsSection />
            <FAQSection />
            <Footer />
          </div>
        </div>
      </ScrollProvider>
    </>
  );
};

export default Home;
