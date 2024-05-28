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
  ButtonBg,
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

  const settings1 = {
    dots: false,
    infinite: true,
    speed: 900,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    swipeToSlide: true,
    appendDots: (dots) => (
      <div style={{ position: 'relative', bottom: '20px' }}>
        <ul style={{ margin: 0 }}>{dots}</ul>
      </div>
    ),
    customPaging: function (i) {
      return (
        <button
          style={{
            width: "10px",
            height: "10px",
            borderRadius: "100%",
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
  const settings2 = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
  };
  const items = [
    { id: 1, content: 'Event 1' },
    { id: 2, content: 'Event 2' },
    { id: 3, content: 'Event 3' },
    { id: 4, content: 'Event 4' },
    { id: 5, content: 'Event 5' },
  ];

  return (
    <div className="relative p-3 h-screen bg-gradient-to-t from-[50rem] from-blue-50 to-white flex items-center justify-center">
      
      <motion.div
        className="absolute top-[1rem] left-[0rem] w-[35rem] h-[35rem] spinning-background"
        style={{
          backgroundImage: `url(${bgVytoflowLogo})`,
          backgroundAttachment: "fixed",
          backgroundSize: "500px",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          borderRadius: "50%",
        }}
      ></motion.div>
      <div className="absolute bottom-40 right-[8rem] text-2xl text-n-7 p-3">
        <motion.button
          className="bg-gradient-to-br absolute right-[31.5.5rem] top-3  z-10 ml-0 font-sans font-semibold text-white px-6 py-[0.4rem] backdrop-blur-sm rounded-2xl shadow-xl"
          whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
          style={{
            marginTop: '92px',
          }}
        >
          <span className="absolute inset-0 bg-gradient-to-br from-red-500 via-red-400 to-red-300 rounded-2xl" />
          <span
            className="absolute inset-1 bg-cover bg-no-repeat left-[0.1rem]"
            style={{
              backgroundImage: `url(${ButtonBg})`,
              backgroundSize: 'contain',
              backgroundPosition: 'left',
            }}
          />
          <span style={{ left: '20px' }} className="relative z-20 text-[1.2rem]">Register</span>
        </motion.button>
        <h2>
          <span className="block">Claim Your Seat At The Table: </span>
          <span className="block py-3">Don't Miss Out, Register Today for the Unforgettable</span>
        </h2>
      </div>

      <div className="relative p-8 w-full h-full bg-transparent" ref={ref}>
        <motion.h1
          className="text-6xl flex mt-20 text-black font-semibold"
          initial="hidden"
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0, transition: { duration: 0.9 } },
            hidden: { opacity: 0, y: -50, transition: { duration: 0.9 } },
          }}
        >
          Through The Lens: 
        </motion.h1>
        <motion.h1
          className="mt-7 text-5xl text-black font-bold font-grotesk mb-32"
          initial="hidden"
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            hidden: { opacity: 0, y: -50, transition: { duration: 0.6 } },
          }}
        >
          Our Events
        </motion.h1>

        <h4 className="-mt-[9.6rem] py-12 ml-14 flex justify-end -mr-7 ">
          <motion.div
            className="-mt-[12.14rem] py-12 ml:9 flex justify-end  ml-[40rem]"
            initial="hidden"
            animate={controls}
            variants={{
              visible: { opacity: 1, x: 0, transition: { delay: 0.1, duration: 1 } },
              hidden: { opacity: 0, x: 84, transition: { duration: 1 } },
            }}
          >
            <div
              style={{
                padding: "13px",
              }}
            >
              <p
                style={{
                  maxHeight: "7rem",
                  overflow: "none",
                  lineHeight: "1.5",
                  color: "#161a1d",
                }}
              >
                Immerse Yourself In Vibrant Experiences And Position Yourself To Win Prestigious Awards By Actively Participating In An Extensive Array Of Exciting, Diverse, And Enriching Events Designed To Showcase Your Talents And Achievements.
              </p>
            </div>
          </motion.div>
        </h4>
        <div className="relative">
          <Slider {...settings1} className="carousel-container">
            <motion.div
              className="p-4 h-96 mb-12 mt-5 carousel-item max-w-3xl rounded-3xl shadow-xl relative"
              whileHover={{ scale: 1.1 }}
            >
              <div className="hover-slide-down">
                <img src={gdBanner2023} className="w-full shadow-xl h-[13rem] rounded-3xl" />
                <style>
                  {`
                    .hover-slide-down img {
                      transition: transform 0.2s ease-in-out;
                    }

                    .hover-slide-down:hover img {
                      transform: translateY(-40px);
                    }

                    .hover-slide-down button {
                      position: absolute;
                      bottom: 10px; 
                      left: 50%;
                      transform: translateX(-50%);

                      z-index: 5;
                      transition: opacity 0.2s ease-in-out, transform 0.2s ease-in-out, width 0.2s ease-in-out, height 0.2s ease-in-out;
                      opacity: 0;
                      width: 100px; /* initial width */
                      height: 3px; /* initial height */
                    }

                    .hover-slide-down:hover button {
                      opacity: 1;
                      width: 100px; /* increased width on hover */
                      height: 40px; /* increased height on hover */
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
                    .carousel-container {
                      position: absolute;
                      top: -10rem;
                      right: -2rem;
                      width: 830px;
                      height: 900px;
                    }
                    .carousel-item {
                      width: 100px; /* Adjust the width as needed */
                      height: 240px; /* Adjust the height as needed */
                    }
                    .carousel2-container {
                    }
                    .slick-slide {
                      padding: 100px 20px; /* Adjust the padding around each slide */
                    }
                  `}
                </style>

                <button className="bg-gradient-to-br text-xs shadow-xl from-red-500 via-red-400 to-red-300 font-semibold text-white max-w-xl px-4 py-2  rounded-full ">
                  View more
                </button>
              </div>
              <img
                src={gdBg}
                className="w-full h-full shadow-xl object-cover rounded-3xl extra-image"
              />
            </motion.div>

            <motion.div
              className="p-4 h-96 mb-12 mt-5 shadow-xl max-w-xl bg-transparent carousel-item rounded-3xl  relative"
              whileHover={{ scale: 1.1 }}
            >
              <div className="hover-slide-down">
                <img
                  src={ppBanner2024}
                  className=" w-full h-[13rem] object-cover rounded-3xl"
                />

                <button className="bg-gradient-to-br text-xs from-blue-500 via-blue-300 to-blue-200 font-semibold text-white px-4 py-2 rounded-full ">
                  View more
                </button>
              </div>
              <img
                src={ppBg}
                className="w-full h-full object-cover rounded-3xl extra-image"
              />
            </motion.div>
          </Slider>
          <div className="absolute bottom-0 -left-15 w-full flex justify-start p-3">
            <div className="w-3/4 md:w-2/3 lg:w-[44rem] h-96 md:h-128 lg:h-36">
              <Slider {...settings2} className="carousel2-container">
                {items.map(item => (
                  <div key={item.id} className="p-4 h-[30rem]">
                    <div className="bg-white p-6 rounded-3xl shadow-lg w-[40rem] h-full flex flex-col justify-center">
                      <h3 className="text-xl font-semibold mb-4">{item.content}</h3>
                      <p className="text-gray-600">Details about {item.content}</p>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
