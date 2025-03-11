import React from "react";
import { useContext } from "react";
import '../../assets/HeroSection/MainBG.jpg'
import { ScrollContext } from "../../store/ScrollContext";
import animation from "../../Utility/GSAP";

const Navbar = () => {
  const { aboutRef, featureRef, scrollToSection, reviewRef, faqRef } = useContext(ScrollContext);

  // animation('#btns' , {
  //   opacity:0,
  //   y: -100,
  //   duration: 1
  // })


  return (
    <div>
      <ul className="flex gap-10" id="btns">
        <li
          className="font-gilroy border-b-4 border-white  hover:border-orange-400 cursor-pointer"
          onClick={() => scrollToSection(aboutRef)}
        >
          About
        </li>
        <li
          className="font-gilroy border-b-4 border-white  hover:border-orange-400 cursor-pointer"
          onClick={() => scrollToSection(featureRef)}
        >
          Features
        </li>
        <li className="font-gilroy border-b-4 border-white  hover:border-orange-400 cursor-pointer"
          onClick={() => scrollToSection(reviewRef)}>
          Reviews
        </li>
        <li className="font-gilroy border-b-4 border-white  hover:border-orange-400 cursor-pointer"
        onClick={() => scrollToSection(faqRef)}
        >
          FAQ
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
