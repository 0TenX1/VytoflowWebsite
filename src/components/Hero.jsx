import React from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import "tailwindcss/tailwind.css";

const Hero = () => {
  return (
    <section
      className="relative flex lg:top-0 justify-center align-center bg-n-7"
      style={{
        height: "100vh",
        width: "100%",
      }}
    >
      <h1>Welcome</h1>
    </section>
  );
};

export default Hero;
