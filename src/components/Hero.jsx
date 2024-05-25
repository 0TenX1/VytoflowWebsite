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
  const { scrollY } = useScroll();

  const textY = useTransform(scrollY, [0, 300], [0, -40]);
  const buildingOneY = useTransform(scrollY, [0, 300], [0, 20]);
  const buildingTwoY = useTransform(scrollY, [0, 100], [0, 10]);
  const buildingThreeY = useTransform(scrollY, [0, 300], [0, 100]);

  return (
    <section className="flex h-screen bg-gradient-to-b from-blue-200 via-blue-200 to-white relative overflow-hidden items-center justify-center">
      <motion.div
        className="relative  mx-auto text-center "
        style={{ y: textY }}
      >
        <h1 className="h1 lg:top-60 relative opacity-100 text-8xl z-10">
          VytoFlow Tech
        </h1>
        <h2 className="h2 lg:top-[17rem] relative lg:py-6 text-4xl z-10">
          Connect The Virtual
        </h2>
        <img
          src={backClouds}
          width={75}
          height={34}
          className="absolute top-[4rem] left-[-50rem] z-2 animate-move-left-to-right"
        />
        <img
          src={backClouds2}
          width={65}
          height={34}
          className="absolute top-[10rem] left-[-4rem] z-2 animate-move-left-to-right"
        />
        <motion.img
          src={buildingsTwo}
          alt=""
          className="absolute w-full bottom-0 z-3"
          style={{ y: buildingOneY }}
        />
        <motion.img
          src={buildingsOne}
          alt=""
          className="absolute w-full bottom-0 z-2"
          style={{ y: buildingTwoY }}
        />
        <motion.img
          src={buildingsThree}
          alt=""
          className="relative top-[-15rem] z-1 opacity-20 "
          style={{ y: buildingThreeY }}
        />
      </motion.div>
    </section>
  );
};

export default Hero;
