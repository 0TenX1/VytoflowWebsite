import { vytoflowLogo, searchDay, searchNight, night, day } from "../assets";
import { navigation } from "../constants";
import { useLocation } from "react-router-dom";
import clsx from "clsx";

const Header = ({ theme, setTheme }) => {
  const pathname = useLocation();
  const toggle_mode = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <div className="flex flex-col">
      <div className="fixed bg-transparent z-50 lg:top-0 -top-1 left-0 lg:w-full lg:h-[4.56rem] ${container}">
        <div className="flex py-4 items-center px-2 lg:px-8 xl:px-10 max-lg:py-4">
          <a
            className="block xl:mr-8 "
            href="/"
            style={{ marginTop: "-1rem", marginLeft: "-1rem" }}
          >
            <img
              src={vytoflowLogo}
              width={165}
              height={80}
              alt="Vytoflowtech"
            />
          </a>
          <nav className="hidden fixed top-[5rem] lg:static lg:flex lg:mx-auto justify-center lg:bg-transparent">
            <div
              className="relative bg-gradient-to-r from-slate-100 via-slate-50 to-slate-50 shadow-md justify-center rounded-3xl h-12 backdrop-blur-3xl z-90 flex flex-col items-center mx-auto lg:flex-row"
              style={{ marginTop: "-20px" }}
            >
              {navigation.map((item) => (
                <a
                  key={item.id}
                  href={item.url}
                  className={clsx(
                    "block relative font-mono text-2xl text-n-1 transition-colors px-6 py-6 md:py-8 lg:py-3 lg:-mr-0.25 text-[1.060rem] lg:font-serif hover:text-cyan-800",
                    item.onlyMobile && "lg:hidden",
                    item.url === pathname.hash
                      ? "z-2 lg:text-cyan-700"
                      : "lg:text-n-4",
                    "group"
                  )}
                >
                  {item.title}
                  <span className="absolute top-[3.09rem] left-[1.6rem] w-full h-[0.2rem] bg-cyan-800 transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-50"></span>
                </a>
              ))}
            </div>
          </nav>
          <div
            className="hidden lg:flex items-center backdrop-blur-3xl bg-gradient-to-r h-12 from-slate-100 via-slate-50 to-slate-50 shadow-md p-6 px-4 py-0 rounded-3xl ml-2 text-black"
            style={{ marginTop: "-22px" }}
          >
            <input
              type="text"
              placeholder=""
              className="p-1 bg-transparent backdrop-blur-3xl lg:max-w-36 lg:h-10 outline-0 text-[0.99rem] font-sans h-10 "
            />
            <img
              src={theme === "light" ? searchDay : searchNight}
              alt="Search_Icon"
              className="hidden lg:flex w-[1.8rem] cursor-pointer -mr-2"
            />
          </div>
          <img
            onClick={toggle_mode}
            src={theme === "light" ? night : day}
            alt=""
            className="hidden z-87  lg:flex w-[2rem] cursor-pointer lg:-mr-4 ml-1"
            style={{ marginTop: "-25px", marginRight: "-1.5rem" }}
          />
        </div>
      </div>
      <div className="lg:hidden border-b-2 mt-[-17px] w-full border-gray-200"></div>
    </div>
  );
};

export default Header;
