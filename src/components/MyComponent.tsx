import React from 'react';
import { useImageContext } from './ImageContext';

const MyComponent: React.FC = () => {
  const { imageURL, setImage } = useImageContext(); // Destructure imageURL and setImage from the context

  // Explicitly define the type for the event parameter
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files[0]) {
      const newImage = files[0];
      setImage(URL.createObjectURL(newImage)); // Set image URL using setImage
    }
  };

  return (
    <div>
      <input type="file" onChange={handleImageChange} />
      {imageURL && (
        <div>
          <h2>Preview:</h2>
          <img src={imageURL} alt="Preview" />
        </div>
      )}
    </div>
  );
};

export default MyComponent;
