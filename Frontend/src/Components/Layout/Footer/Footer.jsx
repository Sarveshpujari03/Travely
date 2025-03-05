import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-10">
    <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center px-4">
      <p className="text-sm">&copy; {new Date().getFullYear()} AI Trip Planner. All rights reserved.</p>
      <nav className="flex space-x-4 mt-3 md:mt-0">
        <a href="#" className="text-sm hover:text-gray-400">Privacy Policy</a>
        <a href="#" className="text-sm hover:text-gray-400">Terms of Service</a>
        <a href="#" className="text-sm hover:text-gray-400">Contact Us</a>
      </nav>
    </div>
  </footer>
  );
};

export default Footer;
