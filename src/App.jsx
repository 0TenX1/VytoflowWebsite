import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero"; 
import Partners from "./components/Partners.jsx";
import End from "./components/End.jsx";
import Community from "./components/Community.jsx";
import HamburgerMenu from "./components/HamburgerMenu.jsx";

import { bgVytoflowLogo } from "./assets";
import Events from "./components/Events.jsx";

const App = () => {
  const [theme, setTheme] = useState("light");

  
  const appStyle = {
    backgroundImage: `url(${bgVytoflowLogo})`,
    backgroundRepeat: "no-repeat",
  };
  return (
    <>
      <div style={appStyle}>
        <Header theme={theme} setTheme={setTheme} />
        <Hero />
        <Events />
        <Partners />
        <End/>
        <Community/>
        <HamburgerMenu />

      </div>
    </>
  );
};

export default App;
