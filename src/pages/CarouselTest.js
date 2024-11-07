import React from "react";
import FridayService from "../resources/serviceImages/FridayService.jpg";
import SundaySchool from "../resources/serviceImages/SundaySchool.jpg";
import SundayService from "../resources/serviceImages/SundayService.jpg";
import {
  BsChevronCompactLeft,
  BsChevronBarRight,
  BsChevronCompactRight,
} from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import { useState, useEffect } from "react";
// import ServicesCarousel from "../compnents/ServicesCarousel.js";

const slides = [
  { img: FridayService, className: "services_img" },
  { img: SundaySchool, className: "services_img" },
  { img: SundayService, className: "services_img" },
];

const CarouselTest = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const nextSlide = () => {
    const isLastSlide = currentIndex === 2;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000);

    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carouselTest_Container">
      <div
        className="carousel_background"
        style={{ backgroundImage: `url(${slides[currentIndex].img})` }}
      ></div>

      {/* left arrow */}
      <div>
        <BsChevronCompactLeft
          onClick={prevSlide}
          className="carousel-arrow left-arrow"
          size={30}
        />
      </div>

      {/* right arrow */}
      <div>
        <BsChevronCompactRight
          onClick={nextSlide}
          className="carousel-arrow right-arrow"
          size={30}
        />
      </div>
      <div className="carousel_dots">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className="dots"
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarouselTest;
