import React from "react";
import { useContext } from "react";
import { ScrollContext } from "../../store/ScrollContext";

const Navbar = () => {
  const { aboutRef, featureRef, scrollToSection } = useContext(ScrollContext);
  return (
    <div>
      <ul className="flex gap-10">
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
        <li className="font-gilroy border-b-4 border-white  hover:border-orange-400 cursor-pointer">
          Reviews
        </li>
        <li className="font-gilroy border-b-4 border-white  hover:border-orange-400 cursor-pointer">
          FAQ
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
