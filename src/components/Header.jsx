import { vytoflowLogo, searchDay, searchNight, night, day } from "../assets";
import { navigation } from "../constants";
import { useLocation } from "react-router-dom";

const Header = ({ theme, setTheme }) => {
  const pathname = useLocation();
  const toggle_mode = () => {
    theme == "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    /* Main Header div*/
    <div className="flex  flex-col">
      <div
        className={
          "fixed bg-transparent z-50 lg:top-0 -top-1 left-0 lg:w-full lg:h-[4.56rem] ${container}"
        }
      >
        {/* For vytoflow logo in Header*/}
        <div className="flex py-4  items-center px-2 lg:px-8 xl:px-10 max-lg:py-4">
          <a
            className="block w-[12rem] xl:mr-8 "
            href="#hero"
            style={{ marginTop: "-0.8rem" }}
          >
            <img
              src={vytoflowLogo}
              width={135}
              height={80}
              alt="Vytoflowtech"
            />
          </a>
          {/* main box for placing items*/}
          <nav
            className={
              "hidden fixed top-[5rem] bottom-0 lg:static lg:flex lg:mr-auto lg:ml-auto justify-center lg:bg-transparent"
            }
          >
            {/* Inner div for shaping box and placing items */}
            <div
              className="relative justify-center rounded-2xl h-8 backdrop-blur-sm lg:bg-blue-50 z-2 flex flex-col items-center mx-auto lg:flex-row"
              style={{ marginTop: "-20px" }}
            >
              {navigation.map((item) => (
                <a
                  key={item.id}
                  href={item.url}
                  /* work with text styles in this class */
                  className={`block relative font-code text-2xl text-n-1 transition-colors hover:text-cyan-800 ${
                    item.onlyMobile ? "lg:hidden" : ""
                  }px-6 py-6 md:py-8 lg:py-3 lg:-mr-0.25 text-sm lg:font-serif hover:underline hover:underline-offset-8 hover:decoration-4 ${
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
          {/* div for search bar placeholder */}
          <div
            className="hidden lg:flex items-center bg-blue-50 px-4 py-0 rounded-2xl ml-2 text-black"
            style={{ marginTop: "-24px" }}
          >
            <input
              type="text"
              placeholder=""
              className="p-1 bg-transparent lg:max-w-36 lg:h-7 outline-0 text-xs font-sans h-10 "
            />
            {/* Search icon*/}
            <img
              src={theme == "light" ? searchDay : searchNight}
              alt="Search_Icon"
              className="hidden lg:flex w-[1.4rem] cursor-pointer -mr-2"
            />
          </div>
          {/* theme */}
          <img
            onClick={() => {
              toggle_mode();
            }}
            src={theme == "light" ? night : day}
            alt=""
            className="hidden lg:flex w-6 cursor-pointer lg:-mr-4 ml-1"
            style={{ marginTop: "-25px" }}
          />
        </div>
        {/* Add border below header container for small devices */}
      </div>
      <div className="lg:hidden border-b-2 mt-[-17px] w-full border-gray-200"></div>
    </div>
  );
};

export default Header;
