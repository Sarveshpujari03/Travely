import React from "react";
import { useContext } from "react";
import { ScrollContext } from "../../../../store/ScrollContext";import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "How does the AI trip planner work?",
    answer: "Our AI trip planner uses machine learning to analyze your preferences and suggests personalized itineraries, including accommodations, attractions, and travel routes."
  },
  {
    question: "Is the trip planner free to use?",
    answer: "Yes! Our basic trip planning features are free. However, we offer premium features like exclusive deals and advanced recommendations for a small fee."
  },
  {
    question: "Can I customize my itinerary?",
    answer: "Absolutely! You can edit, add, or remove places from your itinerary to better suit your preferences."
  },
  {
    question: "Does the AI consider budget constraints?",
    answer: "Yes, you can set your budget range, and our AI will tailor recommendations accordingly."
  },
  {
    question: "Can I share my trip plan with others?",
    answer: "Of course! You can generate a shareable link or invite friends to collaborate on your itinerary."
  }
];

const FAQSection = () => {  
  
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };


  const { faqRef } = useContext(ScrollContext);

  return (
  
    <div ref={faqRef} className=" bg-gray-50 py-10 px-4">

      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-16">

          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't know something about our AI travel planner? Check out our
            frequently asked questions below.
          </p>
          </div>

          <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-300 pb-2">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left flex justify-between items-center p-3 bg-gray-100 rounded-lg hover:bg-gray-200"
            >
              <span className="font-medium">{faq.question}</span>
              {openIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>
            {openIndex === index && (
              <p className="mt-2 text-gray-700 p-3 bg-gray-50 rounded-lg">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>

      </div>
    </div>
  )
};

export default FAQSection;
