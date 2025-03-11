import React, { useEffect } from "react";
import Header from "../../Components/Layout/Header/Header";
import Footer from "../../Components/Layout/Footer/Footer";
import HeroSection from "./Sections/HeroSection";
import AboutSection from "./Sections/AboutSection/AboutSection";
import FeaturesSection from "./Sections/FeaturesSection/FeaturesSection";
import { ScrollProvider } from "../../store/ScrollContext";
import ReviewsSection from "./Sections/ReviewsSection/ReviewsSection";
import FAQSection from "./Sections/FAQSection/FAQSection";
import TopArrow from "../../Components/Common/TopArrow/TopArrow";
import gsap from "gsap";
import { useDispatch } from "react-redux";
import { getUser } from "../../Slices/userSlice";
import { useGSAP } from "@gsap/react";

const Home = () => {

  gsap.registerPlugin(useGSAP);

  useGSAP(() => {
    
    gsap.from('#ani' , {
      duration: 1.5,
      y: -400,
      opacity :0,
    })

    gsap.to('#ani' , {
      duration: 2,
      y: 400,
      delay:2,
      opacity :0,
    })

  })


  return (
    <>
      <ScrollProvider>

        <div className="h-screen fixed flex justify-center items-center w-screen backdrop-blur " id="ani">
          <img src="./src/assets/HeroSection/Logo.png" alt="" />
        </div>
        
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
