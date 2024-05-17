import React, { createContext, useState, useContext } from 'react';

// Create the context with an initial value of undefined
const ImageContext = createContext(undefined);

// Define the provider component
const ImageProvider = ({ children }) => {
  const [imageURL, setImageURL] = useState('');

  const setImage = (newImage) => {
    setImageURL(newImage);
  };

  return (
    <ImageContext.Provider value={{ imageURL, setImage }}>
      {children}
    </ImageContext.Provider>
  );
};

// Custom hook to use the ImageContext
const useImageContext = () => {
  const context = useContext(ImageContext);
  if (!context) {
    throw new Error('useImageContext must be used within an ImageProvider');
  }
  return context;
};

export { ImageProvider, useImageContext };
export default ImageContext;
