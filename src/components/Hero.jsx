import React from "react";
import { gearBot, gearMid, gearFront, backClouds } from "../assets";

const Hero = () => {
  return (
    <section
      className="flex h-screen relative overflow-hidden items-center justify-center"
      style={{
        backgroundImage: "linear-gradient(to top, #49a49c -10%, #e0f2fe)",
      }}
    >
      <div className="relative max-w-[62rem] mx-auto text-center mb-[4rem] md:mb-20 lg:mb-[6rem]">
        <h1 className="h1 relative text-8xl z-10">VytoFlow Tech</h1>
        <h2 className="h2 relative lg:py-8 text-3xl z-10">
          Connect The Virtual
        </h2>

        <img
          src={gearBot}
          width={230}
          height={34}
          className="absolute bottom-[8rem] right-[-8.2rem] transform -translate-x-1/2 z-1 opacity-35"
        />
        <img
          src={gearMid}
          width={160}
          height={34}
          className="absolute bottom-[4rem] right-[-13rem] transform -translate-x-1/2 z-2 opacity-70"
        />
        <img
          src={gearFront}
          width={125}
          height={34}
          className="absolute bottom-[-1.9rem] right-[-6.5rem] transform -translate-x-1/2 z-3 opacity-90"
        />
        <img
          src={backClouds}
          width={125}
          height={34}
          className="absolute bottom-[-1.9rem] right-[-6.5rem] transform -translate-x-1/2 z-0 opacity-full"
        />
        <img
          src={backClouds}
          width={125}
          height={34}
          className="absolute bottom-[-1.9rem] transform z-0 opacity-full"
        />
      </div>
    </section>
  );
};

export default Hero;
