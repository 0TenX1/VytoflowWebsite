import React from 'react';
import { motion } from 'framer-motion';
import { ansh, suraj, siddhant, linkedinBlue, shapeani } from '../assets';
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
  hinstagram
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
  margin-left: 50px;
  border-radius: 10px
`;

const Image2 = styled(motion.img)`
  max-width: 50%;
  max-height: 100%;
  border-radius: 10px;
`;






const Community = () => {
  return (
    <Container className="h-auto w-auto bg-white flex flex-col justify-start items-center">
      {/* Row of 5 white boxes */}
      <div className="relative top-28 text-n-5 text-7xl">Previous Events Glimpses</div>
      <div className="relative top-32 text-n-5 mt-10  text-4xl">Programming Quiz Competition</div>
      <div className="flex justify-between w-full px-8 mt-52">
        {/* Image 1 */}
        <ImageContainer>
          <Image src={pqOne} alt="Image 1" whileHover={{ scale: 1.3 }} />
        </ImageContainer>

        {/* Image 2 */}
        <ImageContainer>
          <Image src={pqTwo} alt="Image 2"whileHover={{ scale: 1.3 }} />
        </ImageContainer>

        {/* Image 3 */}
        <ImageContainer>
          <Image src={ppBanner2024} alt="Image 3" whileHover={{ scale: 1.8 }} />
        </ImageContainer>

        {/* Image 4 */}
        <ImageContainer>
          <Image src={pqThree} alt="Image 4" whileHover={{ scale: 1.3 }} />
        </ImageContainer>

        {/* Image 5 */}
        <ImageContainer>
          <Image src={pqFour} alt="Image 5" whileHover={{ scale: 1.3 }} />
        </ImageContainer>
      </div>
      <div className="relative top-32 text-n-5 -mt-10 text-4xl">Group Discussion Competition</div>
      <div className="flex justify-between w-full px-8 mt-52">
        {/* Image 1 */}
        <ImageContainer>
          <Image src={gdOne} alt="Image 1" whileHover={{ scale: 1.3 }} />
        </ImageContainer>

        {/* Image 2 */}
        <ImageContainer>
          <Image src={gdTwo} alt="Image 2"whileHover={{ scale: 1.3 }} />
        </ImageContainer>

        {/* Image 3 */}
        <ImageContainer>
          <Image src={gdBanner2023} alt="Image 3" whileHover={{ scale: 2 }} />
        </ImageContainer>

        {/* Image 4 */}
        <ImageContainer>
          <Image src={gdThree} alt="Image 4" whileHover={{ scale: 1.3 }} />
        </ImageContainer>

        {/* Image 5 */}
        <ImageContainer>
          <Image src={pqFour} alt="Image 5" whileHover={{ scale: 1.3 }} />
        </ImageContainer>
      </div>

      {/* Founder section */}
      <div className="relative top-16 right-0 mb-8 text-n-5 text-6xl">Founder:</div>
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
          <motion.div initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="bg-gray-100 backdrop-blur-md bg-opacity-10 p-5 h-auto rounded-lg mr-7 text-black border-2 border-cyan-950 text-xl">
            This is a large text box next to the image. You can add more content here as needed.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt laborum est ipsa, labore error vel accusamus, obcaecati rerum dolorem sapiente fugit adipisci nam iusto quo cupiditate totam tenetur nostrum impedit. This is a large text box next to the image. You can add more content here as needed.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt laborumrem ipsum dolor sit amet obcaecati rerum sapiente fugit adipisci nam iusto quo cupiditate totam tenetur nostrum impedit. This is est ipsa, labore error vel accusamus, obcaecati rerum dolorem sapiente fugit adipisci nam iusto quo cupiditate totam tenetur nostrum impedit. This is a large text box next to the image. You can add more content here as needed.
            Loa large text box next to the image. You can add more content here as needed.
          </motion.div>
        </div>
      </div>

      {/* Core Members section */}
      <div className="relative right-[33rem] mb-8 mt-16 text-n-5 text-5xl">Core Members</div>
      <div className="w-full flex flex-row justify-start items-start mt-2 ml-8">
        <div className="flex flex-col items-center">
          <motion.img initial={{ opacity: 0, y: 200 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} src={siddhant} alt="Siddhant" className="w-56 border-4 h-full border-slate-300 mr-2" />
          <motion.div initial={{ opacity: 0, y: 200 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="bg-gray-100 backdrop-blur-md bg-opacity-10 p-3 h-auto rounded-lg mt-2 mr-2 text-black border-2 border-cyan-950 text-lg flex items-center">
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
        
        <div className="flex justify-end w-full ">
          

        {/* Image 1 */}
        <a href='https://chat.whatsapp.com/IOhhnEWX8eG8tvFZMtMDvj'>
        <ImageContainer2>
          <Image2 src={squarewhat} alt="Image 1" className='relative -top-16 ml-14' />
          <h6 className='text-black relative left-5 -ml-44 mt-28'>Join Our Community On Whatsapp For Exclusive Sessions,Resources!</h6>
        </ImageContainer2>
        </a>

        {/* Image 2 */}
        <a href='https://github.com/Vytoflow-Tech'>
        <ImageContainer2 >
          <Image2 src={code3} alt="Image 1" className='relative -top-16 ml-14' />
          <h6 className='text-black relative left-5 -ml-44 mr-2 mt-28'>Join Our Github Community For Contributing In Projects!</h6>
        </ImageContainer2>
        </a>

        {/* Image 3 */}
        <a href='https://www.linkedin.com/company/vytoflow-tech/'>
        <ImageContainer2>
          <Image2 src={linkedinBlue} alt="Image 1" className='relative -top-16 ml-14' />
          <h6 className='text-black relative left-5 -ml-44 mr-2 mt-28'>Join Our Community On Linkedin To Be Updated About Us!</h6>
        </ImageContainer2>
        </a>

        {/* Image 4 */}
        <a href='https://www.instagram.com/vytoflow_tech/'>
        <ImageContainer2 >
          <Image2 src={hinstagram} alt="Image 1" className='relative -top-16 ml-14' />
          <h6 className='text-black relative left-5 -ml-44 mr-2 mt-28'>Join Our Community On Instagram! </h6>
        </ImageContainer2>
        </a>
      </div>
        <div className="relative bottom-2 right-0 "></div>
      </div>
    </Container>
  );
};

export default Community;
