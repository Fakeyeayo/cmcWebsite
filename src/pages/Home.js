import React from "react";
import cmcBanner from "../resources/cmcBanner.jpg";
import FridayService from "../resources/serviceImages/FridayService.jpg";
import SundaySchool from "../resources/serviceImages/SundaySchool.jpg";
import SundayService from "../resources/serviceImages/SundayService.jpg";
import ServicesCarousel from "../compnents/ServicesCarousel.js";
import CarouselTest from "./CarouselTest.js";

const slides = [FridayService, SundaySchool, SundayService];

const Home = () => {
  return (
    <div>
      <div className="welcome_message">
        <p>
          Welcome to Christ The Messiah Church Wuse II Abuja. At Christ The
          Messiah Church Wuse II Abuja, we are a community rooted in faith,
          hope, and love. Whether you’re exploring faith for the first time or
          looking for a new church home, we welcome you to join us in worship,
          fellowship, and service.
        </p>
      </div>
      <div className="moto">
        <p>Getting People Saved, Nurtured, and Equipped for Heaven.</p>
        <img src={cmcBanner} alt="Church Banner" className="cmcBanner" />
      </div>
      <h1>Join us for</h1>
      <CarouselTest />
    </div>
  );
};

export default Home;
