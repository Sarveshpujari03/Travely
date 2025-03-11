import React from "react";
import { useContext } from "react";
import animation from "../../../../Utility/GSAP";
import { ScrollContext } from "../../../../store/ScrollContext";
import {
  Calendar,
  Map,
  Hotel,
  Plane,
  UtensilsCrossed,
  Camera,
  Clock,
  Wallet,
} from "lucide-react";

const FeaturesSection = () => {
  const { featureRef } = useContext(ScrollContext);

  animation('#featureAni',{
    opacity:1,
    x : -300,
    scrollTrigger: {
      trigger: '#sec2',
      start: "top 70%",
      end: "bottom 70%",
      scrub: 1,
    },
    ease: "power2"
  })

  return (
    <div className="min-h-screen bg-gray-50 py-20 px-4" ref={featureRef} id="sec2">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Powerful Features for Seamless Travel Planning
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our AI-powered platform offers everything you need to plan the
            perfect trip, from itinerary creation to budget management.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" id="featureAni">
          {/* Itinerary Planning */}
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="h-12 w-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
              <Calendar className="text-orange-500 h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Smart Itinerary Planning
            </h3>
            <p className="text-gray-600">
              Generate personalized day-by-day itineraries based on your
              interests, pace, and travel style.
            </p>
          </div>

          {/* Route Optimization */}
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="h-12 w-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
              <Map className="text-orange-500 h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Route Optimization
            </h3>
            <p className="text-gray-600">
              Get the most efficient routes between attractions, saving you time
              and maximizing your exploration.
            </p>
          </div>

          {/* Accommodation Finder */}
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="h-12 w-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
              <Hotel className="text-orange-500 h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Smart Accommodation
            </h3>
            <p className="text-gray-600">
              Find and book the perfect stays matching your preferences and
              budget in ideal locations.
            </p>
          </div>

          {/* Flight Booking */}
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="h-12 w-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
              <Plane className="text-orange-500 h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Flight Intelligence
            </h3>
            <p className="text-gray-600">
              Discover the best flight deals with price predictions and flexible
              date recommendations.
            </p>
          </div>

          {/* Restaurant Recommendations */}
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="h-12 w-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
              <UtensilsCrossed className="text-orange-500 h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Dining Suggestions
            </h3>
            <p className="text-gray-600">
              Get personalized restaurant recommendations based on your cuisine
              preferences and dietary requirements.
            </p>
          </div>

          {/* Budget Tracking */}
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="h-12 w-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
              <Wallet className="text-orange-500 h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Budget Tracking
            </h3>
            <p className="text-gray-600">
              Keep track of your expenses and get smart suggestions to optimize
              your travel budget.
            </p>
          </div>
        </div>

        {/* <div className="mt-16 text-center">
          <button className="bg-gray-900 hover:bg-gray-800 text-white font-semibold py-3 px-8 rounded-lg transition-colors">
            Explore All Features
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default FeaturesSection;
