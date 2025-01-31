import React from "react";
import Button from "../../../Components/Common/Button/Button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <div className=" h-[90%] flex justify-between items-center rounded-3xl  ">
      <div>
        <h1 className="text-6xl w-[34rem] ">
          "Your Journey, Perfectly Planned" – Powered by AI.
        </h1>

        <div className="flex flex-col gap-10 ">
          <p className="text-2xl ">Plan your trip with ease</p>
          <div>
            <Button className="inline-flex items-center bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
              Plan Your Trip
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>

      <img
        src="src/assets/HeroSection/HomeImage.jpg"
        alt=""
        srcset=""
        className="h-[80%] "
      />
    </div>
  );
};

export default HeroSection;
