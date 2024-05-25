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
          width={125}
          height={34}
          className="absolute top-[-16rem] right-[3rem] transform -translate-x-1/2 z-0 "
        />
        <img
          src={backClouds2}
          width={95}
          height={34}
          className="absolute top-[-9rem] left-[-1rem]  z-5 "
        />
      </div>

      <img
        src={buildingsTwo}
        alt=""
        className="absolute w-full transform opacity-100 bottom-0 z-2 "
      />
      <img
        src={buildingsOne}
        alt=""
        className="absolute w-full bottom-0 z-1 "
      />
      <img
        src={buildingsThree}
        alt=""
        className="absolute z-0 transform  opacity-20"
      />
    </section>
  );
};

export default Hero;
