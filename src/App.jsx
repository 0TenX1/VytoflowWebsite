import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";

const App = () => {
  const [theme, setTheme] = useState("light");
  return (
    <>
      <div className={"overflow-hidden"}>
        <Header theme={theme} setTheme={setTheme} />
        <Hero />
      </div>
    </>
  );
};

export default App;
