import React from "react";
import { useContext } from "react";
import { ArrowRight, Globe, Clock, Sparkles } from "lucide-react";
import { ScrollContext } from "../../../../store/ScrollContext";
import Button from "../../../../Components/Common/Button/Button";
const AboutSection = () => {
  const { aboutRef } = useContext(ScrollContext);
  return (
    <div
      className="min-h-screen bg-white py-16 px-4 font-gilroy"
      ref={aboutRef}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Your Personal AI Travel Companion
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experience seamless travel planning powered by artificial
            intelligence. We transform your ideas into perfectly crafted
            itineraries.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-orange-50 p-6 rounded-xl">
            <Globe className="w-12 h-12 text-orange-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Global Expertise
            </h3>
            <p className="text-gray-600">
              Access insights from millions of destinations worldwide, curated
              specifically for your preferences and travel style.
            </p>
          </div>

          <div className="bg-orange-50 p-6 rounded-xl">
            <Clock className="w-12 h-12 text-orange-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Real-Time Planning
            </h3>
            <p className="text-gray-600">
              Get instant itineraries and recommendations, with real-time
              updates for weather, events, and local conditions.
            </p>
          </div>

          <div className="bg-orange-50 p-6 rounded-xl">
            <Sparkles className="w-12 h-12 text-orange-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Personalized Magic
            </h3>
            <p className="text-gray-600">
              Our AI learns your preferences to suggest experiences that
              perfectly match your unique travel style and interests.
            </p>
          </div>
        </div>

        <div className="bg-gray-900 text-white rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Start Your Journey?
          </h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Join thousands of happy travelers who have discovered their perfect
            adventures with our AI travel planner.
          </p>
          <Button className="inline-flex items-center bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
            Plan Your Trip
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
