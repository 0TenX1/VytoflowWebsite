import React from "react";
import Section from "./Section";

const Hero = () => {
  return (
    <Section
      className="pt-[12rem] lg:-mt-[9.3rem]"
      crosses=""
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings=""
      id="hero"
    >
      <div className="container relative">
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[4rem] md:mb-20 lg:mb:[6rem]">
          <h1 className="h1 mb-6">Connect the virtual</h1>
          <span className="inline-block relative">Vytoflow</span>
        </div>
      </div>
    </Section>
  );
};

export default Hero;
