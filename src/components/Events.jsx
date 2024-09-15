import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ansh, suraj, siddhant, linkedinBlue, shapeani, Adi,vishal,anshika, aditya,Dhiya, Garvit, Harsh, Ishika, Lavi, Rahul, Ritik, Shubham, Swait, Vaibhav, Vanshika, artist, combat, culture, hackClash, quiz, register } from '../assets';
import styled from 'styled-components';
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
  pqThree,
  pqFour,
  pqTwo,
  squarewhat,
  code3,
  hinstagram,
  gdFour
} from "../assets";


const Container = styled.div`
  overflow-x: hidden;
  background-image: url(${shapeani});
  background-size: fit;
  background-color: #bfdbf7;
`;
const ImageContainer = styled.div`
  width: 290px;
  height: 230px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: 2px solid #000000;
  border-radius: 10px;
`;

const Image = styled(motion.img)`
  max-width: 100%;
  max-height: 100%;
  border-radius: 10px;
`;

const ImageContainer2 = styled.div`
  width: 220px;
  height: 320px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-left: 20px;
  margin-top: 10px;
  border-radius: 10px;

`;

const Image2 = styled(motion.img)`
  max-width: 50%;
  max-height: 100%;
  border-radius: 10px;
`;






const Events = () => {
  return (
    <Container className="h-auto w-auto bg-white flex flex-col justify-start items-center">
      {/* Row of 5 white boxes */}
      <div className="relative top-28 text-n-5 vytoflow-font mb-8 text-7xl">Vyto Blitz 1.0


      </div>
      <motion.button
  className=" bg-gradient-to-br from-red-500 top-5 via-red-400 to-red-300 font-sans font-semibold text-xl text-white ml-3 px-7 py-3 w-60 h-20 backdrop-blur-sm rounded-2xl shadow-xl relative"
  whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
  style={{ marginTop: '92px' }}
  onClick={() => window.location.href = 'https://linktr.ee/Vytoblitz_1.0'} // Replace with your link
>
  Register Now!
</motion.button>

      <div className="flex flex-col mt-14 ml-1 sm:flex-row sm:ml-0">
    <div className="flex flex-col items-center sm:items-start sm:w-56">
        <img src={artist} alt="Founder" className="lg:w-full lg:mt-5 lg:ml-2 h-auto border-4 border-slate-300" />
        <motion.div initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="bg-gray-100 backdrop-blur-md bg-opacity-10 p-3 h-auto rounded-lg mt-2 text-black border-2 border-cyan-950 text-lg flex items-center lg:ml-3 justify-center sm:justify-start">
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSecoLxjFr8iDfvFOXG6HV7nn4lyPRaR3UiKokoKweuyStGK6g/viewform?pli=1" target="_blank" rel="noopener noreferrer" className="flex items-center">
                Artistry Arena
                <img src={register} alt="LinkedIn" className="w-8 h-8 ml-2" />
            </a>
        </motion.div>
    </div>
    <div className=" mt-5 ml-7 sm:w-full max-w-full">
        <motion.div initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="bg-gray-100 backdrop-blur-md bg-opacity-10 p-5 h-auto rounded-lg mr-7 text-black border-2 border-cyan-950 text-xl">
            A Canva Designing Competition is an event where participants showcase their creativity and design skills using Canva, a popular graphic design platform. Competitors are typically tasked with creating visually appealing designs, such as posters, social media graphics, or presentations, within a set theme or criteria. Judging is based on creativity, originality, visual impact to the competition guidelines. This event will be conducted offline on device and will have individual participation, often with a time limit to add a challenge. It's a great way to challenge design abilities and compete for recognition or prizes.
        </motion.div>
    </div>
</div>

<div className="flex flex-col mt-8 ml-1 sm:flex-row sm:ml-0">
    <div className="flex flex-col items-center sm:items-start sm:w-56">
        <img src={quiz} alt="Founder" className="lg:w-full lg:mt-5 lg:ml-2 h-auto border-4 border-slate-300" />
        <motion.div initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="bg-gray-100 backdrop-blur-md bg-opacity-10 p-3 h-auto rounded-lg mt-2 text-black border-2 border-cyan-950 text-lg flex items-center lg:ml-3 justify-center sm:justify-start">
            
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSennmxrcn987g62oDflfCB-UvP-kKEJRQbYAFoGYMGuvXNK_Q/viewform" target="_blank" rel="noopener noreferrer" className="flex items-center">
                    Algo-Quizathon
                <img src={register} alt="LinkedIn" className="w-8 h-8" />
            </a>
        </motion.div>
    </div>
    <div className="ml-7 mt-5 sm:ml-5 sm:w-full max-w-full">
        <motion.div initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="bg-gray-100 backdrop-blur-md bg-opacity-10 p-5 h-auto rounded-lg mr-7 text-black border-2 border-cyan-950 text-xl">
        A programming quiz event is a competitive and engaging activity designed to test participants' knowledge and skills in programming concepts. Typically, participants answer a series of questions from languages such as C, Python, SQL, Java, JavaScript, and HTML/CSS. The questions range from basic to advanced levels and cover coding syntax and problem-solving techniques. The event is usually conducted offline and individually, often with a time limit to add a challenge. It provides an excellent opportunity for learners to assess their proficiency, improve their coding skills, and compete for recognition or prizes.
        </motion.div>
    </div>
    
</div>
<div className="flex flex-col mt-8 ml-1 sm:flex-row sm:ml-0">
    <div className="flex flex-col items-center sm:items-start sm:w-56">
        <img src={combat} alt="Founder" className="lg:w-full lg:mt-5 lg:ml-2 h-auto border-4 border-slate-300" />
        <motion.div initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="bg-gray-100 backdrop-blur-md bg-opacity-10 p-3 h-auto rounded-lg mt-2 text-black border-2 border-cyan-950 text-lg flex items-center lg:ml-3 justify-center sm:justify-start">
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSffImNvpVJOtebp9T4S4AbewhNO6y64dlWn5qg032Dv8XRVXw/viewform" target="_blank" rel="noopener noreferrer" className="flex items-center">
            Elite Combat Cup
                <img src={register} alt="LinkedIn" className="w-8 h-8" />
            </a>
        </motion.div>
    </div>
    <div className="ml-7  mt-5 sm:ml-5 sm:w-full max-w-full">
        <motion.div initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="bg-gray-100 backdrop-blur-md bg-opacity-10 p-5 h-auto rounded-lg mr-7 text-black border-2 border-cyan-950 text-xl">

        A PUBG gaming tournament is a competitive event where players or teams face off in PlayerUnknown's Battlegrounds (PUBG), a popular battle royale game. Participants aim to be the last player or team standing by outlasting and outgunning opponents in a shrinking battlefield. These tournaments often feature multiple rounds, with points awarded based on performance in each match. They can be held online or in-person, attracting both amateur and professional players, and often offer cash prizes or other rewards for top performers.
        </motion.div>
    </div>
    
</div>
<div className="flex flex-col mt-8 ml-1 sm:flex-row sm:ml-0">
    <div className="flex flex-col items-center sm:items-start sm:w-56">
        <img src={hackClash} alt="Founder" className="lg:w-full lg:mt-5 lg:ml-2 h-auto border-4 border-slate-300" />
        <motion.div initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="bg-gray-100 backdrop-blur-md bg-opacity-10 p-3 h-auto rounded-lg mt-2 text-black border-2 border-cyan-950 text-lg flex items-center lg:ml-3 justify-center sm:justify-start">
            
            <a href="https://unstop.com/hackathons/vyto-hackclash-10-vyto-blitz-10-its-engineering-college-itsec-greater-noida-1148685?lb=wGNy1ZDh&utm_medium=Share&utm_source=shortUrl" target="_blank" rel="noopener noreferrer" className="flex items-center">
            Vyto-HackClash
                <img src={register} alt="LinkedIn" className="w-8 h-8" />
            </a>
        </motion.div>
    </div>
    <div className="ml-7  mt-5 sm:ml-5 sm:w-full max-w-full">
        <motion.div initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="bg-gray-100 backdrop-blur-md bg-opacity-10 p-5 h-auto rounded-lg mr-7 text-black border-2 border-cyan-950 text-xl">
        Vyto HackClash is a 36-hour hackathon at ITS Engineering College, organized by the Vytoflow Community. It brings together students in teams of 2 to 4 to solve challenging problems through creativity and innovation. Participants work on projects judged on originality, complexity, feasibility, sustainability, and user experience. The event features an on-site competition where top teams present their solutions for prizes and recognition. Additionally, Vyto HackClash includes workshops and networking opportunities, providing a platform for learning, skill development, and building professional connections in a competitive yet supportive environment.
        </motion.div>
    </div>
    
</div>
<div className="flex flex-col mt-8 ml-1 sm:flex-row sm:ml-0">
    <div className="flex flex-col items-center sm:items-start sm:w-56">
        <img src={culture} alt="Founder" className="lg:w-full lg:mt-5 lg:ml-2 h-auto border-4 border-slate-300" />
        <motion.div initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="bg-gray-100 backdrop-blur-md bg-opacity-10 p-3 h-auto rounded-lg mt-2 text-black border-2 border-cyan-950 text-lg flex items-center lg:ml-3 justify-center sm:justify-start">
            
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSeD6KybT5O47-yeCwwU3iLL512i3aBBbYjUgZF_FFAetbrYkQ/viewform" target="_blank" rel="noopener noreferrer" className="flex items-center">
            Culture Carnival
                <img src={register} alt="LinkedIn" className="w-8 h-8" />
            </a>
        </motion.div>
    </div>
    <div className="ml-7  mt-5 sm:ml-5 sm:w-full max-w-full">
        <motion.div initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="bg-gray-100 backdrop-blur-md bg-opacity-10 p-5 h-auto rounded-lg mr-7 text-black border-2 border-cyan-950 text-xl">
        The Cultural Carnival is a vibrant event hosted at ITS Engineering College, organized by the Vytoflow Community. It celebrates diverse cultures through a series of performances, exhibitions, and interactive activities. Participants can engage in dance, music , Singing and culinary showcases from various cultural backgrounds. The carnival aims to promote cultural exchange, creativity, and community spirit. Attendees have the opportunity to explore different traditions, enjoy live entertainment, and connect with fellow participants in a festive and inclusive environment.
        </motion.div>
    </div>
    
</div>



         {/* Core Members section */}
         <div className="relative mb-8 mt-16 text-n-5 dancing-script font-bold  text-6xl">Event Coordinators</div>
      <div class="w-full flex flex-col md:flex-row justify-center md:justify-start items-center md:items-start mt-2 md:ml-8">
  <div class="flex flex-col   md:mr-8">
    <motion.img initial={{ opacity: 0, y: 200 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} src={Ishika}  class="w-44 border-4 ml-3 mt-3 h-full border-slate-300 mr-2" />
    <motion.div initial={{ opacity: 0, y: 200 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} class="bg-gray-100 backdrop-blur-md ml-4  bg-opacity-10 p-3 h-auto rounded-lg mt-2 mr-2 text-black border-2 border-cyan-950 text-lg flex items-center">
      Ishika 
    </motion.div>
    <motion.img initial={{ opacity: 0, y: 200 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} src={anshika}  class="w-44  border-4 ml-3 mt-3 h-full border-slate-300 mr-2" />
    <motion.div initial={{ opacity: 0, y: 200 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} class="bg-gray-100 backdrop-blur-md ml-4  bg-opacity-10 p-3 h-auto rounded-lg mt-2 mr-2 text-black border-2 border-cyan-950 text-lg flex items-center">
      Anshika 
    </motion.div>
  </div>
  <div class="flex flex-col items-center mt-2 md:mb-2 md:items-start">
    <motion.img initial={{ opacity: 0, y: 200 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} src={aditya} class="w-44 h-full   border-4  border-slate-300" />
    <motion.div initial={{ opacity: 0, y: 200 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} class="bg-gray-100 lg:ml-6 backdrop-blur-md bg-opacity-10 p-3 h-auto rounded-lg mt-2 text-black border-2 border-cyan-950 text-lg flex items-center">
      Aditya
    </motion.div>
    <motion.img initial={{ opacity: 0, y: 200 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} src={Dhiya} class="w-44 h-full lg:mr-8 sm:mr-0 border-4 mt-3  border-slate-300" />
    <motion.div initial={{ opacity: 0, y: 200 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} class="bg-gray-100 lg:ml-6 backdrop-blur-md bg-opacity-10 p-3 h-auto rounded-lg mt-2 text-black border-2 border-cyan-950 text-lg flex items-center">
      Dhiya
    </motion.div>


</div>
<div class="flex flex-col items-center mt-2 md:mb-2 md:items-start">
    <motion.img initial={{ opacity: 0, y: 200 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} src={Swait} class="w-44  h-full lg:mr-8 sm:mr-0 border-4  border-slate-300" />
    <motion.div initial={{ opacity: 0, y: 200 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} class="bg-gray-100 lg:ml-2 backdrop-blur-md  bg-opacity-10 p-3 h-auto rounded-lg mt-2 text-black border-2 border-cyan-950 text-lg flex items-center">
      Swati
    </motion.div>
    <motion.img initial={{ opacity: 0, y: 200 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} src={Shubham} class="w-44 h-full lg:mr-8 sm:mr-0 mt-3 border-4  border-slate-300" />
    <motion.div initial={{ opacity: 0, y: 200 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} class="bg-gray-100 lg:ml-2 backdrop-blur-md  bg-opacity-10 p-3 h-auto rounded-lg mt-2 text-black border-2 border-cyan-950 text-lg flex items-center">
      Shubham
    </motion.div>

</div>
<div class="flex flex-col items-center mt-2 md:mb-2 md:items-start">
    <motion.img initial={{ opacity: 0, y: 200 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} src={Harsh} class="w-44 h-full lg:mr-8 sm:mr-0 border-4  border-slate-300" />
    <motion.div initial={{ opacity: 0, y: 200 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} class="bg-gray-100 lg:ml-8 backdrop-blur-md  bg-opacity-10 p-3 h-auto rounded-lg mt-2 text-black border-2 border-cyan-950 text-lg flex items-center">
      Harsh
    </motion.div>
    <motion.img initial={{ opacity: 0, y: 200 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} src={Vanshika} class="w-44 h-full lg:mr-8 sm:mr-0 mt-3  border-4  border-slate-300" />
    <motion.div initial={{ opacity: 0, y: 200 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} class="bg-gray-100 lg:ml-8 backdrop-blur-md  bg-opacity-10 p-3 h-auto rounded-lg mt-2 text-black border-2 border-cyan-950 text-lg flex items-center">
      Vanshika
    </motion.div>
</div>
<div class="flex flex-col items-center mt-2 md:mb-2 md:items-start">
    <motion.img initial={{ opacity: 0, y: 200 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} src={Garvit} class="w-44 h-full lg:mr-8 sm:mr-0  border-4  border-slate-300" />
    <motion.div initial={{ opacity: 0, y: 200 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} class="bg-gray-100 lg:ml-8 backdrop-blur-md  bg-opacity-10 p-3 h-auto rounded-lg mt-2 text-black border-2 border-cyan-950 text-lg flex items-center">
      Garvit
    </motion.div>
    <motion.img initial={{ opacity: 0, y: 200 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} src={Lavi} class="w-44 h-full lg:mr-8 sm:mr-0 mt-3 border-4  border-slate-300" />
    <motion.div initial={{ opacity: 0, y: 200 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} class="bg-gray-100 lg:ml-8 backdrop-blur-md  bg-opacity-10 p-3 h-auto rounded-lg mt-2 text-black border-2 border-cyan-950 text-lg flex items-center">
      Lavi
    </motion.div>
</div>
<div class="flex flex-col items-center mt-2 md:mb-2 md:items-start">
    <motion.img initial={{ opacity: 0, y: 200 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} src={Rahul} class="w-44 lg:mr-8 sm:mr-0 h-full border-4  border-slate-300" />
    <motion.div initial={{ opacity: 0, y: 200 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} class="bg-gray-100 lg:ml-8 backdrop-blur-md  bg-opacity-10 p-3 h-auto rounded-lg mt-2 text-black border-2 border-cyan-950 text-lg flex items-center">
      Rahul
    </motion.div>
    <motion.img initial={{ opacity: 0, y: 200 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} src={Ritik} class="w-44 lg:mr-8 sm:mr-0 h-full mt-3 border-4  border-slate-300" />
    <motion.div initial={{ opacity: 0, y: 200 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} class="bg-gray-100 lg:ml-8 backdrop-blur-md  bg-opacity-10 p-3 h-auto rounded-lg mt-2 text-black border-2 border-cyan-950 text-lg flex items-center">
      Ritik
    </motion.div>
</div>
<div class="flex flex-col items-center mt-2 md:mb-2 md:items-start">
    <motion.img initial={{ opacity: 0, y: 200 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} src={Vaibhav} class="w-44 lg:mr-8 sm:mr-0 h-full  border-4  border-slate-300" />
    <motion.div initial={{ opacity: 0, y: 200 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} class="bg-gray-100 lg:ml-8 backdrop-blur-md  bg-opacity-10 p-3 h-auto rounded-lg mt-2 text-black border-2 border-cyan-950 text-lg flex items-center">
      Vaibhav
    </motion.div>
    <motion.img initial={{ opacity: 0, y: 200 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} src={vishal} class="w-44 h-full mt-3 border-4  border-slate-300" />
    <motion.div initial={{ opacity: 0, y: 200 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} class="bg-gray-100 lg:ml-8 backdrop-blur-md  bg-opacity-10 p-3 h-auto rounded-lg mt-2 text-black border-2 border-cyan-950 text-lg flex items-center">
      Vishal
    </motion.div>
    
</div>
<div class="flex flex-col items-center mt-2 md:mb-2 md:items-start">
    <motion.img initial={{ opacity: 0, y: 200 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} src={Adi} class="w-44 lg:mr-8 sm:mr-0 h-full  border-4  border-slate-300" />
    <motion.div initial={{ opacity: 0, y: 200 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} class="bg-gray-100 lg:ml-8 backdrop-blur-md  bg-opacity-10 p-3 h-auto rounded-lg mt-2 text-black border-2 border-cyan-950 text-lg flex items-center">
      Aditya
    </motion.div>
    
</div>


        




        <div className="flex justify-between flex-wrap py-2 lg:px-8 px-28 ">   
      </div>
        <div className="relative bottom-2 right-0 "></div>
      </div>
      <style>
      {`
   /* Import the fonts */
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Serif+Text:ital@0;1&family=Fjalla+One&family=Russo+One&family=Saira:ital,wght@0,100..900;1,100..900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&display=swap');
.vytoflow-font {
  font-family: 'DM Serif Text', serif;
}

.russo-one-font {
  font-family: 'Russo One', sans-serif;
}

        

    
.saira-font {
  font-family: 'Saira', sans-serif;
}
.bebas-neue-regular {
  font-family: "Bebas Neue", sans-serif;
  font-weight: 200;
  font-style: normal;
}
.stroke-text {

  color: white; /* Text color */
  -webkit-text-stroke: 0.5px #023e8a; /* Stroke size and color */
  text-shadow: 
    -1px -1px 0 black,  
    1px -1px 0 black,
    -1px 1px 0 black,
    1px 1px 0 black; /* Shadow directions and color */
}
    .dancing-script {
  font-family: "Dancing Script", cursive;
  font-optical-sizing: auto;
  font-weight: <weight>;
  font-style: normal;
}

    `}
    </style>
    </Container>
  );
};

export default Events;
