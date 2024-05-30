import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { agratas, cetpa, gitHub, internshala, microsoft, samsung } from "../assets";
import { abesit, akhilesh, dme, drona, gcet, gniot, iimt, its, km, mewar, srm, zk, akgec, glbajaj, iec, ims, niet, sharda, abesec } from "../assets";
import { partnerBack } from '../assets';

const Partners = () => {
  const Colleges = [
    abesit, akhilesh, dme, drona, gcet, gniot, iimt, its, km, mewar, srm, zk, abesec,
    akgec, glbajaj, ims, niet, sharda
  ];

  const Company = [ microsoft, samsung , gitHub, internshala,agratas,cetpa ] ;

  const itemVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.1 },
  };

  const spring = {
    type: "spring",
    stiffness: 500,
    damping: 30
  };

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 5000,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 500,
    arrows:false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const textRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (textRef.current) {
        const topPosition = textRef.current.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;
        if (topPosition < screenHeight * 0.8 && !isVisible) { // Animation starts if it's not already visible
          setIsVisible(true);
        } else if (topPosition >= screenHeight * 2 && isVisible) { // Reset animation if scrolled out of view
          setIsVisible(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isVisible]);

  return (
    <div className="relative h-auto w-full p-8" style={{ 
      backgroundImage: `url(${partnerBack})`, 
      opacity: 0.9
    }}>
      
      <motion.div className="text-center text-5xl mt-3 text-white font-bold mb-8 "   ref={textRef}
        initial={{ opacity: 0, y: -110 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -50 }} // Apply animation if isVisible is true
        transition={{ duration: 1 }}>
        Our Collaborative Network: Partner Colleges
      </motion.div>
      <Slider {...sliderSettings} className='lg:-top-20'>
        {Colleges.map((image, index) => (
          <motion.div 
            key={index} 
            className="flex justify-center items-center glassy"
            whileHover="hover"
            variants={itemVariants}
            transition={spring}
          >
            <img src={image} alt={`Partner College ${index + 1}`} className=" w-52 object-cover rounded-lg" />
          </motion.div>
        ))}
      </Slider>
      <motion.div 
        className="text-center lg:-mt-32 text-5xl text-white border-t-white font-bold"
        ref={textRef}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -100 }} // Apply animation if isVisible is true
        transition={{ duration: 0.6 }}
      >
        Partners In Progress: Our Collaborative Companies
      </motion.div>
      <Slider {...sliderSettings} className='lg:-top-8 lg:-mb-20'>
        {Company.map((image, index) => (
          <motion.div 
            key={index} 
            className="flex justify-center items-center glassy"
            whileHover="hover"
            variants={itemVariants}
            transition={spring}
          >
            <img src={image} alt={`Partner Company ${index + 1}`} className=" w-52 object-cover rounded-lg" />
          </motion.div>
        ))}
      </Slider>
    </div>
  );
};

export default Partners;
