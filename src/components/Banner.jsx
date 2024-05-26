import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { gdBanner2023, gdBg, ppBanner2024, ppBg } from "../assets";

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 900,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
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
            border: "none", // Remove dot border
            cursor: "pointer", // Add cursor pointer
          }}
        ></button>
      );
    },
    arrows: false,
  };

  return (
    <div className="p-3 h-screen bg-gradient-to-t from-[50rem] from-blue-50 to-white flex items-center justify-center">
      <div className="p-8 w-full h-full bg-transparent">
        <h1 className="text-6xl flex mt-20 text-neutral-900 font-bold mb-4">
          Event Registration:
        </h1>
        <h1 className="py-5 text-5xl text-neutral-900 font-bold mb-4">
          Engage In The Buzz, Become Involved!
        </h1>

        <h4 className="-mt-[12.14rem] py-12 ml:9 flex justify-end mr-10 ml-[65rem]">
          <div
            style={{
              border: "2px solid #03045e",
              padding: "13px",
              borderRadius: "13px",
            }}
          >
            <p
              style={{
                maxHeight: "7rem",
                overflow: "hidden",
                lineHeight: "1.5",
                color: "#161a1d",
              }}
            >
              Dive into vibrant experiences, and position yourself to win
              prestigious awards.
            </p>
          </div>
        </h4>

        <Slider {...settings}>
          <div className="p-4 h-96 mx-7 mb-12 mt-5 max-w-2xl bg-transparent rounded-3xl shadow-xl relative">
            <div className="hover-slide-down">
              <img src={gdBanner2023} className="w-full h-full  rounded-3xl" />
              <style>
                {`
          .hover-slide-down img {
            transition: transform 0.2s ease-in-out;
          }

          .hover-slide-down:hover img {
            transform: translateY(60px);
          }

          .hover-slide-down button {
            position: absolute;
            top: 13px; 
            left: 50%;
            transform: translateX(-50%);
            z-index: 5;
            transition: opacity 0.2s ease-in-out, transform 0.2s ease-in-out, width 0.2s ease-in-out, height 0.2s ease-in-out;
            opacity: 0;
            width: 120px; /* initial width */
            height: 10px; /* initial height */
          }
          
          .hover-slide-down:hover button {
            opacity: 1;
            width: 120px; /* increased width on hover */
            height: 50px; /* increased height on hover */
          }
          

          .extra-image {
            position: absolute;
            bottom: 0;
            left: 0;
            z-index: -1;
          }
          `}
              </style>

              <button className="bg-gradient-to-br from-red-500 via-red-400 to-red-300 font-semibold text-white px-4 py-2 backdrop-blur-3xl rounded-full shadow-xl">
                View more
              </button>
            </div>
            <img
              src={gdBg}
              className="w-full h-full object-cover shadow-xl rounded-3xl extra-image"
            />
          </div>

          <div className="p-4 h-96 mx-7 mb-12 mt-5 max-w-2xl bg-transparent rounded-3xl shadow-xl relative">
            <div className="hover-slide-down">
              <img
                src={ppBanner2024}
                className=" w-full h-[22.4rem] object-cover rounded-3xl"
              />

              <button className="bg-gradient-to-br from-blue-500 via-blue-300 to-blue-200 font-semibold text-white px-4 py-2 backdrop-blur-3xl rounded-full shadow-xl">
                View more
              </button>
            </div>
            <img
              src={ppBg}
              className="w-full h-full object-cover shadow-xl rounded-3xl extra-image"
            />
          </div>

          {/* Add more items here */}
        </Slider>
      </div>
    </div>
  );
};

export default Banner;
