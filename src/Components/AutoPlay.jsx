import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import logo from "/logo2.png"; // make sure this path is correct
import ReactIcon from "/React.png";
import node from "/node.png";
import ex from "/ex.png";
import html from "/html.png";
import css from "/css.png";

const Carousel = () => {
  const settings = {
    infinite: true,
    speed: 2000, // Long duration
    cssEase: "linear", // Makes it scroll smoothly
    slidesToShow: 5,
    slidesToScroll: 1, // Keep this 1 for smoothness
    autoplay: true,
    autoplaySpeed: 0,
    arrows: false,
  };

  return (
    <div className="w-full  mx-auto mt-20">
      <Slider {...settings}>
        <div className="text-center">
          <img src={logo} alt="Logo" className="mx-auto h-32" />
        </div>
        <div className="text-4xl text-center text-white">
          <img src={ReactIcon} alt="Logo" className="mx-auto h-32" />
        </div>{" "}
        <div className="text-4xl text-center text-white">
          <img src={node} alt="Logo" className="mx-auto h-32" />
        </div>{" "}
        <div className="text-4xl text-center text-white">
          <img src={ex} alt="Logo" className="mx-auto h-32" />
        </div>{" "}
        <div className="text-4xl text-center text-white">
          <img src={html} alt="Logo" className="mx-auto h-32" />
        </div>
        <div className="text-4xl text-center text-white">
          <img src={css} alt="Logo" className="mx-auto h-32" />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
