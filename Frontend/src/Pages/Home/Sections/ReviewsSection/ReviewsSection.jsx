import React from "react";
import { useContext } from "react";
import { ScrollContext } from "../../../../store/ScrollContext";

const ReviewsSection = () => {

  const { reviewRef } = useContext(ScrollContext);

  return (

    <div ref={reviewRef} className=" bg-gray-50 py-10 px-4">
      
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Our Customers Say About Us
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See what our satisfied travelers have to say about our AI-powered
            platform.
          </p>
        </div>



    </div>

    {/*Writing no reviews yet */}

    <div className="text-center">
      <h3 className="text-xl font-bold text-gray-900 mb-4">
        No Reviews Yet
      </h3>
      <p className="text-lg text-gray-600">
        Be the first to leave a review!
      </p>
      <button className="px-8 py-2 text-white bg-orange-600 rounded-lg hover:bg-orange-500">
        Leave a Review
      </button>
      </div>


    </div>

  )
};

export default ReviewsSection;
