import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import HamburgerMenu from "./components/HamburgerMenu.jsx";
import Banner from "./components/Banner.jsx";
import { gearBot } from "./assets/index.js";

const App = () => {
  const [theme, setTheme] = useState("light");
  return (
    <>
      <div className={"overflow-hidden"}>
        <Header theme={theme} setTheme={setTheme} />
        <Hero />
        <Banner />
        <HamburgerMenu />
      </div>
    </>
  );
};

export default App;
