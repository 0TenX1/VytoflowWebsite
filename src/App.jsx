import { useState } from "react";
import Header from "./components/Header";

const App = () => {
  const [theme, setTheme] = useState('light');
  return (
    <>
      <div className={'pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden ${theme} $container'}>
        <Header theme={theme} setTheme={setTheme}/>
      </div>
    </>
  );
};

export default App;
