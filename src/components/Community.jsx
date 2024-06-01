import React from 'react';
import { motion } from "framer-motion"; // Import motion from Framer Motion
import { ansh, suraj, siddhant ,shapeani} from "../assets";
import styled from 'styled-components'; // Import styled-components

// Styled components for styling
const Container = styled.div`
  overflow-x: hidden; /* Hide horizontal scrollbar */
  background-image: url(${shapeani}); /* Set background image */
  background-size: fit; /* Cover the entire container */
  background-color: #bfdbf7;
  background-position: center; /* Center the background image */
`;

const Community = () => {
  return (
    <Container className="h-auto bg-white flex flex-col justify-start items-center">
      <div className="relative top-20 right-0 m-4 text-n-5 text-8xl">Founder:</div>
      <div className="flex flex-row mt-24 ml-8">
        <img src={ansh} alt="Founder" className="w-96 border-4 border-slate-300 h-auto" />
        <div className="ml-5 w-full max-w-full">
          {/* Wrap with motion component and add animation properties */}
          <motion.div initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="bg-gray-100 backdrop-blur-sm bg-opacity-45 p-5 h-full rounded-lg mr-7 text-black border-2 border-cyan-950 text-xl">
            This is a large text box next to the image. You can add more content here as needed.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt laborum est ipsa, labore error vel accusamus, obcaecati rerum dolorem sapiente fugit adipisci nam iusto quo cupiditate totam tenetur nostrum impedit.This is a large text box next to the image. You can add more content here as needed.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt laborum est ipsa, labore error vel accusamus, obcaecati rerum dolorem sapiente fugit adipisci nam iusto quo cupiditate totam tenetur nostrum impedit.This is a large text box next to the image. You can add more content here as needed.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt laborum est ipsa, labore error vel accusamus, obcaecati rerum dolorem sapiente fugit adipisci nam iusto quo cupiditate totam tenetur nostrum impedit.This is a large text box next to the image. You can add more content here as needed.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt laborum est ipsa, labore error vel accusamus, obcaecati rerum dolorem sapiente fugit adipisci nam iusto quo cupiditate totam tenetur nostrum impedit.This is a large text box next to the image. You can add more content here as needed.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt laborum est ipsa, labore error vel accusamus, obcaecati rerum dolorem sapiente fugit adipisci nam iusto quo cupiditate totam tenetur nostrum impedit.
          </motion.div>
        </div>
      </div>
      {/* Text for Cores */}
      <div className="ml-8 mb-20 mt-20 text-n-5 text-6xl">Members Of Our Core Team</div>
      {/* Cores Images */}
      <div className="flex flex-row mt-2 ml-8">
        <div className="w-full max-w-full">
          <motion.div initial={{ opacity: 0, x: -100 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="bg-gray-100 mr-7 h-full p-5 bg-opacity-40 backdrop-blur-sm rounded-lg text-black border-2 border-cyan-950 text-xl">
            This is a large text box next to the image. You can add more content here as needed.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt laborum est ipsa, labore error vel accusamus, obcaecati rerum dolorem sapiente fugit adipisci nam iusto quo cupiditate totam tenetur nostrum impedit.
          </motion.div>
        </div>
        
        <motion.img initial={{ opacity: 0, y: 200 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} src={siddhant} alt="Siddhant" className="w-80 border-4 h-full border-blue-300 mr-2" />
        <motion.img initial={{ opacity: 0, y: 200 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} src={suraj} alt="Suraj" className="w-72 h-full mr-2 border-4 border-blue-300" />
        <div className="ml-5 w-full max-w-full">
        <motion.div initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="bg-gray-100 p-5 rounded-lg h-full bg-opacity-40 backdrop-blur-sm text-black border-2 border-cyan-950 text-xl">
            This is a large text box next to the image. You can add more content here as needed.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt laborum est ipsa, labore error vel accusamus, obcaecati rerum dolorem sapiente fugit adipisci nam iusto quo cupiditate totam tenetur nostrum impedit.
          </motion.div>
        </div>
      </div>
      {/* Text boxes below images */}
    </Container>
  );
};

export default Community;
