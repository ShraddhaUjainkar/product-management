import React, { useState } from 'react';
import {BsArrowLeftCircleFill, BsArrowRightCircleFill} from 'react-icons/bs';
import './Slider.css';
const Slider = ({ images }) => {
  const [slide,setSlide] = useState(0);
  const nextSlide = () => {
    setSlide (slide === images.length - 1 ? 0: slide + 1);
    };
    const prevSlide = () => {
    setSlide (slide === 0 ? images.length - 1 : slide - 1);
    };
 return (
<div className="carousel">
  <BsArrowLeftCircleFill className="arrow arrow-left" onClick={prevSlide} />
  <div className="slides-container">
    {images.map((url, index) => (
      <img key={index} src={url} alt={`Image ${index}`} className={slide === index ? "slide" : "slide-hidden"} />
    ))}
  </div>
  <BsArrowRightCircleFill className="arrow arrow-right" onClick={nextSlide}/>
  
</div>


  );
};

export default Slider;
