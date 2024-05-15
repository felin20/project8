import React, { createContext, useState, useContext, ReactNode } from 'react';
interface ImageContextType {
    imageURL: string;
    setImage: (newImage: string) => void;
  }
  const ImageContext = createContext<ImageContextType | any>(undefined);
  interface ImageProviderProps {
    children: ReactNode;
  }
  
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
  export const useImageContext = (): ImageContextType => {
    const context = useContext(ImageContext);
    if (!context) {
      throw new Error('useImageContext must be used within an ImageProvider');
    }
    return context;
  };
      