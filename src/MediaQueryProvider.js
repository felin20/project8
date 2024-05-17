import React, { createContext, useContext, useEffect, useState } from "react";

const MediaQueryContext = createContext();

export const useMediaQuery = () => {
  const context = useContext(MediaQueryContext);
  if (!context) {
    throw new Error("useMediaQuery must be used within a MediaQueryProvider");
  }
  return context;
};

const MediaQueryProvider = ({ children }) => {
  const [matches, setMatches] = useState({
    small: false,
    medium: false,
    large: false,
  });

  useEffect(() => {
    const handleResize = () => {
      setMatches({
        small: window.matchMedia("(max-width: 768px)").matches,
        medium: window.matchMedia("(min-width: 769px) and (max-width: 1024px)").matches,
        large: window.matchMedia("(min-width: 1025px)").matches,
      });
    };

    handleResize(); // Initial check

    const resizeListener = () => {
      handleResize();
    };

    window.addEventListener("resize", resizeListener);

    return () => {
      window.removeEventListener("resize", resizeListener);
    };
  }, []); // Empty dependency array

  return (
    <MediaQueryContext.Provider value={matches}>
      {children}
    </MediaQueryContext.Provider>
  );
};

export default MediaQueryProvider;
