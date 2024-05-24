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
        <div className="flex py-4 items-center px-2 lg:px-8 xl:px-10 max-lg:py-4">
          <a
            className="block xl:mr-8 "
            href="#hero"
            style={{ marginTop: "-1rem", marginLeft: "-1rem" }}
          >
            <img
              src={vytoflowLogo}
              width={165}
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
              className="relative bg-gradient-to-r from-slate-100 via-slate-50 to-slate-50 shadow-md justify-center rounded-3xl h-12 backdrop-blur-3xl lg:bg-blue-50 z-90 flex flex-col items-center mx-auto lg:flex-row"
              style={{ marginTop: "-20px" }}
            >
              {navigation.map((item) => (
                <a
                  key={item.id}
                  href={item.url}
                  /* work with text styles in this class */
                  className={`block relative font-code text-2xl text-n-1 transition-colors hover:text-cyan-800 ${
                    item.onlyMobile ? "lg:hidden" : ""
                  }px-6 py-6 md:py-8 lg:py-3 lg:-mr-0.25 text-[1.060rem] lg:font-serif hover:underline hover:underline-offset-[0.968rem] hover:decoration-[0.19rem] ${
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
            className="hidden lg:flex items-center backdrop-blur-3xl bg-gradient-to-r h-12 from-slate-100 via-slate-50 to-slate-50 shadow-md p-6 px-4 py-0 rounded-3xl ml-2 text-black"
            style={{ marginTop: "-22px" }}
          >
            <input
              type="text"
              placeholder=""
              className="p-1 bg-transparent backdrop-blur-3xl lg:max-w-36 lg:h-10 outline-0 text-[0.99rem] font-sans h-10 "
            />
            {/* Search icon*/}
            <img
              src={theme == "light" ? searchDay : searchNight}
              alt="Search_Icon"
              className="hidden lg:flex w-[1.8rem] cursor-pointer -mr-2"
            />
          </div>
          {/* theme */}
          <img
            onClick={() => {
              toggle_mode();
            }}
            src={theme == "light" ? night : day}
            alt=""
            className="hidden z-87  lg:flex w-[2rem] cursor-pointer lg:-mr-4 ml-1"
            style={{ marginTop: "-25px", marginRight: "-1.5rem" }}
          />
        </div>
        {/* Add border below header container for small devices */}
      </div>
      <div className="lg:hidden border-b-2 mt-[-17px] w-full border-gray-200"></div>
    </div>
  );
};

export default Header;
