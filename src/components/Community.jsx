import React from 'react';
import { motion } from 'framer-motion'; // Import motion from Framer Motion
import { ansh, suraj, siddhant, linkedinBlue, shapeani } from '../assets';
import styled from 'styled-components'; // Import styled-components
import Slider from 'react-slick'; // Import the react-slick carousel
import 'slick-carousel/slick/slick.css'; // Import slick carousel CSS
import 'slick-carousel/slick/slick-theme.css'; // Import slick carousel theme CSS
import {
  gdBanner2023,
  gdBg,
  ppBanner2024,
  ppBg,
  bgVytoflowLogo,
  ButtonBg,
  gdOne,
  gdThree,
  gdTwo,
  pqOne,
  pqTwo,
} from "../assets";

// Styled components for styling
const Container = styled.div`
  overflow-x: hidden; /* Hide horizontal scrollbar */
  background-image: url(${shapeani}); /* Set background image */
  background-size: cover; /* Cover the entire container */
  background-color: #bfdbf7;
  background-position: center; /* Center the background image */
`;

const CarouselContainer = styled.div`
  width: 70vw; /* Reduce carousel width */
  background-color: #ced4da; /* Set background color to white */
  padding: 5px; /* Add padding for spacing */
  border-radius: 10px; /* Add border radius for rounded corners */
  height: 23vw;

  .slick-slide {
    display: flex;
    justify-content: center; /* Center align images */
    align-items: center; /* Center align images */
    height: 168px; /* Reduce height */
    margin: 3px;

  }

  img {
    max-width: 100%; /* Ensure images don't exceed container width */
    max-height: 100%; /* Ensure images don't exceed container height */
  
  }
`;

const Community = () => {
  // Carousel settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <Container className="h-auto bg-white flex flex-col justify-start items-center">
      <div className="relative top-20 right-0 m-4 text-n-5 text-8xl">Founder:</div>
      <div className="flex flex-row mt-24 ml-8">
        <div className="flex flex-col items-center">
          <img src={ansh} alt="Founder" className="w-56 border-4 border-slate-300 h-full" />
          <motion.div initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="bg-gray-100 backdrop-blur-md bg-opacity-10 p-3 h-auto rounded-lg mt-2 text-black border-2 border-cyan-950 text-lg flex items-center">
            Ansh Singh
            <a href="https://www.linkedin.com/in/ansh-singh-0a5a01226/" target="_blank" rel="noopener noreferrer">
              <img src={linkedinBlue} alt="LinkedIn" className="ml-2 w-8 h-8" />
            </a>
          </motion.div>
        </div>
        <div className="ml-5 w-full max-w-full">
          {/* Wrap with motion component and add animation properties */}
          <motion.div initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="bg-gray-100 backdrop-blur-md bg-opacity-10 p-5 h-auto rounded-lg mr-7 text-black border-2 border-cyan-950 text-xl">
            This is a large text box next to the image. You can add more content here as needed.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt laborum est ipsa, labore error vel accusamus, obcaecati rerum dolorem sapiente fugit adipisci nam iusto quo cupiditate totam tenetur nostrum impedit. This is a large text box next to the image. You can add more content here as needed.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt laborumrem ipsum dolor sit amet obcaecati rerum sapiente fugit adipisci nam iusto quo cupiditate totam tenetur nostrum impedit. This is est ipsa, labore error vel accusamus, obcaecati rerum dolorem sapiente fugit adipisci nam iusto quo cupiditate totam tenetur nostrum impedit. This is a large text box next to the image. You can add more content here as needed.
            Loa large text box next to the image. You can add more content here as needed.
          </motion.div>
        </div>
      </div>
      {/* Text for Cores */}
      <div className="relative right-[33rem] mb-20 mt-20 text-n-5 text-5xl">Core Members</div>
      <div className="relative -mb-10 -top-12 -right-[33rem] text-n-5 text-5xl">Event Glimpses</div>
      {/* Cores Images */}
      <div className="w-full flex flex-row justify-start items-start mt-2 ml-8">
        <div className="flex flex-col items-center">
          <motion.img initial={{ opacity: 0, y: 200 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} src={siddhant} alt="Siddhant" className="w-56 border-4 h-full border-slate-300 mr-2" />
          <motion.div initial={{ opacity: 0, y: 200 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="bg-gray-100 backdrop-blur-md bg-opacity-10 p-3 h-auto rounded-lg mt-2 text-black border-2 border-cyan-950 text-lg flex items-center">
            Siddhant Singh
            <a href="https://www.linkedin.com/in/siddhant-kumar-singh/" target="_blank" rel="noopener noreferrer">
              <img src={linkedinBlue} alt="LinkedIn" className="ml-2 w-8 h-8" />
            </a>
          </motion.div>
        </div>
        <div className="flex flex-col mb-2 items-center">
          <motion.img initial={{ opacity: 0, y: 200 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} src={suraj} alt="Suraj" className="w-52 h-full mr-2 border-4  border-slate-300" />
          <motion.div initial={{ opacity: 0, y: 200 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="bg-gray-100 backdrop-blur-md bg-opacity-10 p-3 h-auto rounded-lg mt-2 text-black border-2 border-cyan-950 text-lg flex items-center">
            Suraj Kumar
            <a href="https://www.linkedin.com/in/surajkumar06022003/" target="_blank" rel="noopener noreferrer">
              <img src={linkedinBlue} alt="LinkedIn" className="ml-2 w-8 h-8" />
            </a>
          </motion.div>
        </div>
        <div className="relative bottom-2 right-0 ">
          <CarouselContainer>
          <Slider {...settings}>
  <img className='mt-32'  src={gdOne} alt="Image 1" />
  <img className='mt-32' src={gdThree} alt="Image 2" />
  <img className='mt-32' src={gdTwo} alt="Image 3" />
  <img className='mt-40' src={pqOne} alt="Image 3" />
  <img className='mt-44' src={pqTwo} alt="Image 3" />
  {/* Add more images as needed */}
</Slider>
          </CarouselContainer>
        </div>
      </div>
    </Container>
  );
};

export default Community;
