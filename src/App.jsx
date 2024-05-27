import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import HamburgerMenu from "./components/HamburgerMenu.jsx";
import Banner from "./components/Banner.jsx";
import { bgVytoflowLogo } from "./assets";
import Events from "./components/Events.jsx";

const App = () => {
  const [theme, setTheme] = useState("light");

  const appStyle = {
    backgroundImage: `url(${bgVytoflowLogo})`,
  };
  return (
    <>
      <div style={appStyle}>
        <Header theme={theme} setTheme={setTheme} />
        <Hero />
        <Banner />
        <HamburgerMenu />
      </div>
    </>
  );
};

export default App;
