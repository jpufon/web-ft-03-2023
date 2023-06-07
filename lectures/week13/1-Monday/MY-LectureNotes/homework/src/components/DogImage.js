import React, { useEffect, useState } from 'react';

const DogImage = () => {
  const [imageUrl, setImageUrl] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const fetchRandomDogImage = async () => {
    try {
      setIsLoading(true);
      const response = await fetch('https://dog.ceo/api/breeds/image/random');
      const data = await response.json();
      setImageUrl(data.message);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching dog image:', error);
    }
  };

  useEffect(() => {
    fetchRandomDogImage();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {imageUrl && <img src={imageUrl} alt="Dog" />}
      <button onClick={fetchRandomDogImage}>Load New Dog Image</button>
    </div>
  );
};

export default DogImage;