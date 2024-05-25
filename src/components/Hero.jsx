import React from "react";
import {
  gearBot,
  gearMid,
  gearFront,
  backClouds,
  backClouds2,
  buildingsOne,
  buildingsThree,
  buildingsTwo,
} from "../assets";
import { motion, useScroll, useTransform } from "framer-motion";

const Hero = () => {
  return (
    <section className="flex h-screen bg-gradient-to-b from-blue-200 via-blue-200 to-white relative overflow-hidden items-center justify-center">
      <div className="relative max-w-[62rem] mx-auto text-center mb-[4rem] md:mb-20 lg:mb-[6rem]">
        <h1 className="h1 relative text-8xl z-10">VytoFlow Tech</h1>
        <h2 className="h2 relative lg:py-8 text-3xl z-10">
          Connect The Virtual
        </h2>
        <img
          src={backClouds}
          width={95}
          height={34}
          className="absolute top-[-16rem] left-[-50rem] z-2 animate-move-left-to-right "
        />
        <img
          src={backClouds2}
          width={95}
          height={34}
          className="absolute top-[-9rem] left-[-7rem] z-5 animate-move-left-to-right "
        />
      </div>

      <img
        src={buildingsTwo}
        alt=""
        className="absolute w-full transform opacity-100 bottom-0 z-3 "
      />
      <img
        src={buildingsOne}
        alt=""
        className="absolute w-full bottom-0 z-2 "
      />
      <img
        src={buildingsThree}
        alt=""
        className="absolute z-1 transform top-[-5rem]  opacity-20"
      />
    </section>
  );
};

export default Hero;
