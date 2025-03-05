import React from "react";
import Navbar from "../../UI/Navbar";
import { useNavigate, useNavigation } from "react-router-dom";
import Button from "../../Common/Button/Button";

const Header = () => {

  const navigate = useNavigate()

  return (
    <div className="px-10 py-5 flex justify-between items-center border-b-[1px] border-black">
      <p>
        <img src="./src/assets/HeroSection/Logo.png" alt="" className="h-6" />
      </p>
      <Navbar />
      <Button
        onClick={() => navigate('/login')}
        className="px-4 py-1 text-white bg-orange-500 border-2 border-black rounded-md  "
      >
        Sign Up/Login
      </Button>
    </div>
  );
};

export default Header;
