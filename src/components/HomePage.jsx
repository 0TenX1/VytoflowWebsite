// src/components/Home.js
import React from 'react'
import Hero from "./Hero.jsx";
import Projects from './Projects.jsx';
import Partners from './Partners.jsx';

const HomePage = () => {
  return (
    <div>     
      <Hero />  
      <Projects/>
      <Partners/>  
    </div>
  );
};
export default HomePage;

