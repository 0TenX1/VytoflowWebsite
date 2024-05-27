import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  gdBanner2023,
  gdBg,
  ppBanner2024,
  ppBg,
  bgVytoflowLogo,
} from "../assets";

const Banner = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

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
            width: "10px",
            height: "10px",
            borderRadius: "90%",
            backgroundColor: "#dee2e6",
            margin: "5px 5px",
            border: "none",
            cursor: "pointer",
          }}
        ></button>
      );
    },
    arrows: false,
  };

  return (
    <div className="relative p-3 h-screen bg-gradient-to-t from-[50rem] from-blue-50 to-white flex items-center justify-center">
      <motion.div
        className="absolute top-[3rem] left-[0rem] w-[35rem] h-[35rem] spinning-background"
        style={{
          backgroundImage: `url(${bgVytoflowLogo})`,
          backgroundAttachment: "fixed",
          backgroundSize: "500px",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          borderRadius: "50%",
        }}
      ></motion.div>

      <div className="relative p-8 w-full h-full bg-transparent" ref={ref}>
        <motion.h1
          className="text-6xl flex mt-15 text-neutral-900 font-bold"
          initial="hidden"
          animate={controls}
          variants={{
            visible: { opacity: 1, y: -0, transition: { duration: 0.9 } }, // Adjust duration here
            hidden: { opacity: 0, y: -50, transition: { duration: 0.9 } }, // Adjust duration here
          }}
        >
          Event Registration:
        </motion.h1>
        <motion.h1
          className="mt-10 text-5xl text-neutral-900 font-bold mb-36"
          initial="hidden"
          animate={controls}
          variants={{
            visible: { opacity: 1, y: -0, transition: { duration: 0.6 } }, // Adjust duration here
            hidden: { opacity: 0, y: -50, transition: { duration: 0.6 } }, // Adjust duration here
          }}
        >
          Engage In The Buzz, Become Involved!
        </motion.h1>

        <h4 className="-mt-[9.6rem] py-12 ml-10 flex justify-end mr-0 ">
        <motion.div
          className="-mt-[12.14rem] py-12 ml:9 flex justify-end mr-10 ml-[65rem]"
          initial="hidden"
          animate={controls}
          variants={{
            visible: { opacity: 1, x: 0, transition: { delay: 0.1, duration: 1 } }, // Slide in animation
            hidden: { opacity: 0, x: 100, transition: { duration: 1 } }, // Adjust duration here
          }}
        >
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
          </motion.div>
        </h4>

        <Slider {...settings}>
          <motion.div
            className="p-4 h-96 mx-7 mb-12 mt-5 max-w-2xl bg-transparent rounded-3xl shadow-xl relative"
            whileHover={{ scale: 1.1 }}
          >
            <div className="hover-slide-down">
              <img src={gdBanner2023} className="w-full h-full rounded-3xl" />
              <style>
                {`
                  .hover-slide-down img {
                    transition: transform 0.2s ease-in-out;
                  }

                  .hover-slide-down:hover img {
                    transform: translateY(20px);
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

                  @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                  }
                  
                  .spinning-background {
                    animation: spin 190s linear infinite;
                    will-change: transform;
                  }

                  .fade-in {
                    opacity: 1;
                    transition: opacity 1s ease-in-out;
                  }
                `}
              </style>

              <button className="bg-gradient-to-br from-red-500 via-red-400 to-red-300 font-semibold text-white max-w-2xl px-4 py-2 backdrop-blur-3xl rounded-full shadow-xl">
                View more
              </button>
            </div>
            <img
              src={gdBg}
              className="w-full h-full object-cover shadow-2xl rounded-3xl extra-image"
            />
          </motion.div>

          <motion.div
            className="p-4 h-96 mx-7 mb-12 mt-5 max-w-2xl bg-transparent rounded-3xl shadow-xl relative"
            whileHover={{ scale: 1.1 }}
          >
            <div className="hover-slide-down">
              <img
                src={ppBanner2024}
                className=" w-full h-[22.4rem] object-cover rounded-3xl"
              />

              <button className="bg-gradient-to-br  from-blue-500 via-blue-300 to-blue-200 font-semibold text-white px-4 py-2 backdrop-blur-3xl rounded-full shadow-xl">
                View more
              </button>
            </div>
            <img
              src={ppBg}
              className="w-full h-full object-cover shadow-xl rounded-3xl extra-image"
            />
          </motion.div>

          {/* Add more items here */}
        </Slider>
      </div>
    </div>
  );
};

export default Banner;
