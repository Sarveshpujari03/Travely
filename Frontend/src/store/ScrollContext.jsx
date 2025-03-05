import React, { createContext, useContext, useRef } from "react";

export const ScrollContext = createContext();

export const ScrollProvider = ({ children }) => {
  const aboutRef = useRef(null);
  const featureRef = useRef(null);
  const reviewRef = useRef(null);
  const faqRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <ScrollContext.Provider
      value={{
        aboutRef,
        featureRef,
        reviewRef,
        faqRef,
        scrollToSection,
      }}
    >
      {children}
    </ScrollContext.Provider>
  );
};
