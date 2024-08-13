import React, { useState } from 'react';
import Pic1 from "../Images/1.jpg"
import Pic2 from "../Images/2.jpg"
import Pic3 from "../Images/3.jpg"
import Pic4 from "../Images/4.jpg"
import Pic5 from "../Images/5.jpg"
import Pic6 from "../Images/6.jpg"
import Pic7 from "../Images/7.jpg"
import Pic8 from "../Images/8.jpg"
import './ImageCarousel.css'; 

const ImageCarousel = () => {
  const images = [
    Pic1,
    Pic2,
    Pic3,
    Pic4,
    Pic5,
    Pic6,
    Pic7,
    Pic8
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % (images.length - 3));
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex - 1 + images.length - 3) % (images.length - 3)
    );
  };

  return (
    <div className="carousel">
      <button className="carousel-button prev" onClick={prevImage}>
        &#10094;
      </button>
      <div className="carousel-images">
        {images.slice(currentIndex, currentIndex + 4).map((img, index) => (
          <img key={index} src={img} alt={`carousel ${index}`} />
        ))}
      </div>
      <button className="carousel-button next" onClick={nextImage}>
        &#10095;
      </button>
    </div>
  );
};

export default ImageCarousel;
