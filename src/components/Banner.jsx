import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 200,
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
      <div className="p-8 w-full h-full border-4 border-gray-200 backdrop-blur-xl rounded-3xl bg-white shadow-xl">
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

        <Slider {...settings}>
          <div className="p-4 h-96 mx-7 mb-12 mt-5 max-w-2xl bg-green-100 backdrop-blur-3xl rounded-3xl shadow-xl ">
            <h2 className="text-3xl font-semibold mb-4">1001</h2>
            <p className="text-xl mb-4">growth hacking cases</p>
            <p className="text-base mb-6">
              Dive into Our Treasury of Success Stories and Case Studies To Get
              Insights for Your Own Startup
            </p>
            <p className="text-2xl font-bold">
              $200 <span className="text-base font-normal">/ full access</span>
            </p>
          </div>

          <div className="p-4 h-96 mb-12 mt-5 max-w-2xl mx-7 backdrop-blur-3xl  bg-red-100 rounded-3xl shadow-xl">
            <h2 className="text-3xl font-semibold mb-4">40</h2>
            <p className="text-xl mb-4">experts</p>
            <p className="text-base mb-6">
              Meet Our Panel of Visionaries and Innovators Who are Here to Help
              Your Grow Your Startup
            </p>
            <p className="text-2xl font-bold">
              $100 <span className="text-base font-normal">/ one query</span>
            </p>
          </div>

          <div className="p-4 h-96 mb-12 mt-5 max-w-2xl mx-7 backdrop-blur-3xl bg-yellow-100 rounded-3xl shadow-xl">
            <h2 className="text-3xl font-semibold mb-4">500+</h2>
            <p className="text-xl mb-4">strategic partners</p>
            <p className="text-base mb-6">
              Connect with Our Extensive Network of Strategic Partners to
              Accelerate Your Business Growth
            </p>
            <p className="text-2xl font-bold">
              $300 <span className="text-base font-normal">/ access</span>
            </p>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Banner;
