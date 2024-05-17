import React, { createContext, useState, useContext, ReactNode } from 'react';

// Define the shape of the context's value
interface ImageContextType {
  imageURL: string;
  setImage: (newImage: string) => void;
}

// Create the context with an initial value of undefined
const ImageContext = createContext<ImageContextType | undefined>(undefined);

// Define the props for the provider component
interface ImageProviderProps {
  children: ReactNode;
}

// Define the provider component
export const ImageProvider: React.FC<ImageProviderProps> = ({ children }) => {
  const [imageURL, setImageURL] = useState<string>('');

  const setImage = (newImage: string) => {
    setImageURL(newImage);
  };

  return (
    <ImageContext.Provider value={{ imageURL, setImage }}>
      {children}
    </ImageContext.Provider>
  );
};

// Custom hook to use the ImageContext
export const useImageContext = (): ImageContextType => {
  const context = useContext(ImageContext);
  if (!context) {
    throw new Error('useImageContext must be used within an ImageProvider');
  }
  return context;
};

// Export default context for potential future use
export default ImageContext;
