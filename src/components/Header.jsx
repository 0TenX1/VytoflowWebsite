import { vytoflowLogo } from "../assets";
import { navigation } from "../constants";
import { useLocation } from "react-router-dom";
import search_icon_light from '../assets/search-w.png'
import search_icon_dark from '../assets/search-b.png'
import toogle_light from '../assets/night.png'
import toogle_dark from '../assets/day.png'

const Header = ({theme, setTheme}) => {
  const pathname = useLocation();
  const toggle_mode = ()=>{
    theme == 'light' ? setTheme('dark') : setTheme('light');
  }

  return (
    <div className={'fixed bg-transparent lg:top-3 z-50 w-full lg:h-[4.56rem] ${container}'}>
      <div className="flex items-center px-5 lg:px-8 xl:px-10 max-lg:py-4">
        <a
          className="block w-[9rem] xl:mr-8 "
          href="#hero"
          style={{ marginTop: "-0.8rem" }}
        >
          <img src={vytoflowLogo} width={135} height={80} alt="Vytoflowtech" />
        </a>
        <nav className={'hidden fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mr-auto lg:ml-64 justify-center lg:bg-transparent'}>
          <div className="relative rounded-2xl h-10 backdrop-blur-sm border-b-2 border-b-cyan-600 lg:bg-slate-100 z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.url}
                className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-cyan-800 ${
                  item.onlyMobile ? "lg:hidden" : ""
                }px-6 py-6 md:py-8 lg:-mr-0.25 text-sm lg:font-semibold ${
                  item.url === pathname.hash
                    ? "z-2 lg:text-cyan-600"
                    : "lg:text-n-4"
                }`}
              >
                {item.title}
              </a>
            ))}
          </div>
        </nav>
        <div className="flex items-center bg-black px-4 py-0 rounded-full ml-2">
          <input type="text" placeholder=" Search" className="p-2 bg-transparent border-0 outline-0 max-w-54 text-xl font-sans h-10 " />
          <img src={theme == 'light' ? search_icon_light : search_icon_dark} alt="Search_Icon" className="w-4 cursor-pointer"/>
        </div>
        <img onClick={()=>{toggle_mode()}} src={theme == 'light' ? toogle_light : toogle_dark} alt="" className="w-10 cursor-pointer mr-0 ml-4"/>
      </div>
    </div>
  );
};

export default Header;
