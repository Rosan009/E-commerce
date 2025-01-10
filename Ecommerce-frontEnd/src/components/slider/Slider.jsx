import React, { useState } from 'react';
import '../slider/slider.css';

export const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
   ' /image/pexels-olly-3769747.jpg', // Replace with actual image paths
    '/image/AdobeStock_938135477_Preview.jpeg',
    '/image/AdobeStock_963234489_Preview.jpeg',
    '/image/AdobeStock_1069189619_Preview.jpeg',
    '/image/AdobeStock_1142939674_Preview.jpeg',
    '/image/AdobeStock_1157143760_Preview.jpeg'
  ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="slider-container">
      <button className="left" onClick={handlePrev}>
        <i className="fas fa-chevron-left"></i>
      </button>
      <div className="slider-images" >
        <img src={images[currentIndex]} alt="slider" />
      </div>
      <button className="right" onClick={handleNext}>
        <i className="fas fa-chevron-right"></i>
      </button>
    </div>
  );
};
