import React from "react";
import {
  backClouds,
  backClouds2,
  buildingsOne,
  buildingsThree,
  buildingsTwo,
} from "../assets";
import { motion, useScroll, useTransform } from "framer-motion";
import CountUp from "react-countup";

const Hero = () => {
  const { scrollY } = useScroll();

  const textY = useTransform(scrollY, [0, 300], [0, -40]);
  const buildingOneY = useTransform(scrollY, [0, 300], [0, 20]);
  const buildingTwoY = useTransform(scrollY, [0, 100], [0, 10]);
  const buildingThreeY = useTransform(scrollY, [0, 300], [0, 100]);

  return (
    <section className="flex h-auto bg-gradient-to-b from-blue-200 via-blue-200 to-white relative overflow-hidden items-center justify-center">
      <motion.div className="relative mx-auto text-center " style={{ y: textY }}>
      <h1 className="relative opacity-100 text-5xl top-40 md:text-8xl z-10">VytoFlow Tech</h1>
      <h2 className="relative py-20 md:py-6 text-2xl top-24 md:top-44 lg:top-44 md:text-4xl z-10">Connect The Virtual</h2>

          <div className="relative md:top-[17rem] top-[6rem] lg:top-[27rem]">
          <div style={{ zIndex: 50 }} className="absolute md:-left-32 -left-32 right-1/3  bottom-1/3 text-md md:text-2xl lg:text-3xl text-center">
            <h2>Collaborators:</h2>
            <CountUp end={50} duration={5} />
            +
            </div>
            <div style={{ zIndex: 50 }} className="absolute md:left-0 md:right-0 left-0 right-0 lg:left-0 lg:right-0 bottom-1/3 text-md md:text-2xl lg:text-3xl text-center">
            <h2>Projects:</h2>
            <CountUp end={60} duration={5} />
            +
            </div>
            <div style={{ zIndex: 50 }} className="absolute md:-right-32 -right-32 left-1/3  bottom-1/3 text-md md:text-2xl lg:text-3xl text-center">
            <h2>Trusted Members:</h2>
            <CountUp end={2000} duration={5} />
            +
            </div>
            </div>
          
          
       
        <img
          src={backClouds}
          width={75}
          height={34}
          className="absolute top-[4rem] left-[-50rem] md:w-[90px] z-2 w-[40px] animate-move-left-to-right"
        />
        <img
          src={backClouds2}
          width={65}
          height={34}
          className="absolute top-[10rem]  left-[-4rem] md:w-[80px] w-[40px] z-2 animate-move-left-to-right"
        />
        <motion.img
          src={buildingsTwo}
          alt=""
          className="absolute bottom-[4rem] w-full lg:top-[30rem] md:top-[22rem] lg:bottom-0 z-3"
          style={{ y: buildingOneY }}
        />
        <motion.img
          src={buildingsOne}
          alt=""
          className="absolute top-[11rem] lg:top-[10rem] md:top-[10rem] w-full bottom-0 z-2"
          style={{ y: buildingTwoY }}
        />
        <motion.img
          src={buildingsThree}
          alt=""
          className="relative top-[-10rem] md:top-[-12rem] lg:top-[-15rem] z-1 opacity-20 "
          style={{ y: buildingThreeY }}
        />
      </motion.div>
    </section>
  );
};

export default Hero;
