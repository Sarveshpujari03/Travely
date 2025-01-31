import React from "react";
import Navbar from "../../UI/Navbar";
import Button from "../../Common/Button/Button";

const Header = () => {
  return (
    <div className="px-10 py-5 flex justify-between items-center border-b-[1px] border-black">
      <p>
        <img src="./src/assets/HeroSection/Logo.png" alt="" className="h-6" />
      </p>
      <Navbar />
      <Button
        onClick={() => console.log("hello")}
        className="px-4 py-1 text-white bg-orange-500 border-2 border-black rounded-md  "
      >
        Sign Up
      </Button>
    </div>
  );
};

export default Header;
