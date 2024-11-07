import React, { useState, useEffect } from "react";
import FridayService from "../resources/serviceImages/FridayService.jpg";
import SundaySchool from "../resources/serviceImages/SundaySchool.jpg";
import SundayService from "../resources/serviceImages/SundayService.jpg";
import Carousel from "react-multi-carousel";

const slides = [FridayService, SundaySchool, SundayService];

function ServicesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Cycle through slides every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000);

    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel_container">
      <div
        className="carousel_background"
        style={{ backgroundImage: `url(${slides[currentIndex]})` }}
      >
        <div className="carousel_test"></div>
      </div>
      {/* Optionally add navigation buttons */}
      <button
        onClick={() =>
          setCurrentIndex((currentIndex - 1 + slides.length) % slides.length)
        }
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white px-4 py-2 rounded-full shadow"
      >
        Prev
      </button>
      <button
        onClick={() => setCurrentIndex((currentIndex + 1) % slides.length)}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white px-4 py-2 rounded-full shadow"
      >
        Next
      </button>
    </div>
  );
}

export default ServicesCarousel;
