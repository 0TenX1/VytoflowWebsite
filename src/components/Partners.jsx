import React from 'react';
import { motion } from 'framer-motion';
import { agratas, cetpa, gitHub, internshala, microsoft, samsung } from "../assets";
import { abesit, akhilesh, dme, drona, gcet, gniot, iimt, its, km, mewar, srm, zk, akgec, glbajaj, iec, ims, niet, sharda, abesec } from "../assets";

const Partners = () => {
  // Array containing existing images
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

  return (
    <div className="relative h-auto w-full bg-gray-800 p-8">
      <h2 className="text-center text-5xl mt-4 text-white font-bold mb-8 ">
        Our Collaborative Network: Partner Colleges
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-6">
        {Colleges.map((image, index) => (
          <motion.div 
            key={index} 
            className="flex justify-center items-center"
            whileHover="hover"
            variants={itemVariants}
            transition={spring}
          >
            <img src={image} alt={`Partner College ${index + 1}`} className="h-52 w-52 object-cover rounded-lg" />
          </motion.div>
        ))}
      </div>
      <h2 className="text-center lg:mt-9 text-5xl text-white font-bold mb-8 ">
      Partners in Progress: Our Collaborative Companies
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-6">
        {Company.map((image, index) => (
          <motion.div 
            key={index} 
            className="flex justify-center items-center"
            whileHover="hover"
            variants={itemVariants}
            transition={spring}
          >
            <img src={image} alt={`Partner Company ${index + 1}`} className="h-52 w-52 object-cover rounded-lg" />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Partners;
