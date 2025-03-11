import React, { useEffect, useState } from "react";
import Navbar from "../../UI/Navbar";
import { useNavigate, useNavigation } from "react-router-dom";
import Button from "../../Common/Button/Button";
import {useDispatch, useSelector} from 'react-redux'
import { getUser } from "../../../Slices/userSlice";

const Header = () => {
  const [homepageState , setHomepageState] = useState(false);
  const [navigation , setNavigation] = useState('/plantrip');
  const navigate = useNavigate()
  const isLoggedIn = localStorage.getItem('isLoggedIn')
  
  if(!isLoggedIn){
    setNavigation('/login')
  }

  return (
    <div className="px-10 py-5 flex justify-between items-center border-b-[1px] border-black">
      <p>
        <img src="./src/assets/HeroSection/Logo.png" alt="" className="h-6" />
      </p>
      <Navbar />
      <Button
        onClick={() => navigate(navigation)}
        className="px-4 py-1 text-white bg-orange-500 border-2 border-black rounded-md  "
      >
        {
          isLoggedIn ? 'Logout' : 'Login'
        }
      </Button>
    </div>
  );
};

export default Header;
