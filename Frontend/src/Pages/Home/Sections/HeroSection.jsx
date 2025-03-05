import React from "react";
import Button from "../../../Components/Common/Button/Button";
import { ArrowRight } from "lucide-react";
import '../../../StyleSheets/Herosection.css'
import { useGSAP } from '@gsap/react'
import gsap from "gsap";
// import bg from '../../../assets/HeroSection/'

const HeroSection = () => {

  gsap.registerPlugin(useGSAP);

  useGSAP(() => {

    gsap.from('#main' , {
      duration: 1,
      y: 300,
      opacity :0,
      ease: "power2.inOut",
    })

  })

  return (
    <div className="h-[90%] herSec flex justify-between items-center w-full">

      <div className="p-9 w-1/2  flex justify-center flex-col items-center">
        <h1 className="text-6xl w-[34rem] font-medium" id="main">
          "Your Journey, Perfectly Planned" – Powered by AI.
        </h1>

        <div className="flex flex-col gap-10">
          <p className="text-2xl text-center w-full">Plan your trip with ease</p>
          <div>
            <Button className="inline-flex items-center bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
              Plan Your Trip
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* <img
        src="src/assets/HeroSection/HomeImage.jpg"
        alt=""
        srcset=""
        className="h-[80%] "
      /> */}
    </div>
  );
};

export default HeroSection;
