import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { gdBanner2023, ppBanner2024 } from "../assets";

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    swipeToSlide: true,
    appendDots: (dots) => <ul style={{ margin: 0 }}>{dots}</ul>,
    customPaging: function (i) {
      return (
        <button
          style={{
            width: "10px", // Customize dot size
            height: "10px",
            borderRadius: "90%", // Make the dot round
            backgroundColor: "#dee2e6", // Change dot color
            margin: "5px 5px", // Adjust dot spacing
            border: "none ", // Remove dot border
            // Remove outline
            cursor: "pointer", // Add cursor pointer
          }}
        ></button>
      );
    },
  };

  return (
    <div className="p-3 h-screen bg-blue-50 flex items-center justify-center">
      <div className="p-8 w-full h-full bg-transparent">
        <h1 className="text-6xl flex mt-20 text-neutral-900 font-bold mb-4">
          Event Registration:
        </h1>
        <h1 className="py-5  text-5xl text-neutral-900 font-bold mb-4">
          Engage In The Buzz, Become Involved!
        </h1>

        <h4 className="text-black -mt-[8.3rem] py-12 ml:9 flex justify-end mr-10 ml-[65rem]">
          <p
            style={{
              maxHeight: "7rem",
              overflow: "hidden",
              lineHeight: "1.5",
            }}
          >
            Dive into vibrant experiences,and position yourself to win
            prestigious awards.
          </p>
        </h4>
        <style>
          {`
          .hover-slide-down img {
            transition: transform 0.3s ease-in-out;
            position: relative;
            z-index: 10;
          }

          .hover-slide-down:hover img {
            transform: translateY(60px);
          }

          .hover-slide-down button {
            position: absolute;
            top: 20px; 
            left: 50%;
            transform: translateX(-50%);
            z-index: 5;
            transition: opacity 0.2s ease-in-out;
            opacity: 0;
          }

          .hover-slide-down:hover button {
            opacity: 1; 
          }
        `}
        </style>

        <Slider {...settings}>
          <div className="p-4 h-96 mx-7 mb-12 mt-5 max-w-2xl bg-cyan-100 backdrop-blur-3xl rounded-3xl shadow-xl hover-slide-down">
            <img
              src={gdBanner2023}
              className="w-full h-full object-cover rounded-3xl"
            />
            <button className="bg-cyan-600 text-white px-4 py-2 backdrop-blur-3xl rounded-full shadow-xl">
              View more
            </button>
          </div>

          <div className="p-4 h-96 mb-12 mt-5 max-w-2xl mx-7 backdrop-blur-3xl  bg-red-100 rounded-3xl hover-slide-down shadow-xl">
            <img
              src={ppBanner2024}
              className="w-full h-full object-cover rounded-3xl"
            />
            <button className="bg-red-500 text-white px-4 py-2 backdrop-blur-3xl rounded-full shadow-xl">
              View more
            </button>
          </div>
          {/*Add more items here*/}
        </Slider>
      </div>
    </div>
  );
};

export default Banner;
