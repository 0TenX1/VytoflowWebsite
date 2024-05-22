import React from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import "tailwindcss/tailwind.css";

const Hero = () => {
  return (
    <section className="-mt-[5.25]">
      <div className="container relative">
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[4rem] md:mb-20 lg:mb-[6rem]">
          <h1 className="h1 mb-6">Connect the virtual</h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
