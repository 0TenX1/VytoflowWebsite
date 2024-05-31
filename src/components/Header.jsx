import React, { useState } from "react";
import { vytoflowLogo, searchDay, searchNight, night, day } from "../assets";
import { navigation } from "../constants";
import { useLocation } from "react-router-dom";
import clsx from "clsx";
import { hinstagram,hgmail,hphone,hwhatsapp } from "../assets";

const Header = ({ theme, setTheme }) => {
  const pathname = useLocation();
  const [isExploreMenuVisible, setIsExploreMenuVisible] = useState(false);
  const [isContactMenuVisible, setIsContactMenuVisible] = useState(false);

  const toggle_mode = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  const handleExploreMouseEnter = () => {
    setIsExploreMenuVisible(true);
  };

  const handleExploreMouseLeave = () => {
    setIsExploreMenuVisible(false);
  };

  const handleContactMouseEnter = () => {
    setIsContactMenuVisible(true);
  };

  const handleContactMouseLeave = () => {
    setIsContactMenuVisible(false);
  };

  return (
    <div className="flex flex-col">
      <style>
        {`.mega-menu1 {
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s, visibility 0.3s, max-height 0.3s ease-in-out, max-width 0.3s ease-in-out;
  max-height: 0;
  max-width: 0;
  width: 0;
  width: auto;
  border-radius: 10px;
  background: linear-gradient(180deg, rgba(0, 180, 216, 0.9), rgba(0, 190, 255, 0.8)); /* Adjust the RGBA values and alpha (transparency) as needed */
  backdrop-filter: blur(10px); /* Adjust the blur amount as needed */
  opacity: 0.3; /* Adjust the opacity as needed */
  overflow: hidden;
}

.mega-menu1.visible {
  opacity: 1;
  visibility: visible;
  max-height: 500px; /* A large enough value to accommodate the content */
  max-width: 700px;  /* A large enough value to accommodate the content */
  width: auto;
  opacity: 1;
}
.logo-link:hover img {
  scale: 1.3; /* Adjust brightness to change the hover effect */
}
.mega-menu2 {
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s, visibility 0.3s, max-height 0.3s ease-in-out, max-width 0.3s ease-in-out;
  max-height: 0;
  max-width: 0;
  width: 0;
  width: auto;
  border-radius: 10px;
  
  backdrop-filter: blur(10px); /* Adjust the blur amount as needed */
  opacity: 0.3; /* Adjust the opacity as needed */
  overflow: hidden;
}

.mega-menu2.visible {
  opacity: 1;
  visibility: visible;
  max-height: 500px; /* A large enough value to accommodate the content */
  max-width: 700px;  /* A large enough value to accommodate the content */
  width: auto;
  opacity: 1;
}

`}
      </style>
      <div className="fixed bg-transparent z-50 lg:top-0 -top-1 left-0 lg:w-full lg:h-[4.56rem]">
        <div className="flex py-4 items-center px-2 lg:px-8 xl:px-10 max-lg:py-4">
          <a
            className="block xl:mr-8"
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
              className="relative border-x-cyan-600 border-r-4 border-l-4 bg-gradient-to-r from-slate-100 via-slate-50 to-slate-50 shadow-md justify-center rounded-2xl h-12 backdrop-blur-3xl z-90 flex flex-col items-center mx-auto lg:flex-row"
              style={{ marginTop: "-20px" }}
            >
              {navigation.map((item) => (
                <div
                  key={item.id}
                  onMouseEnter={item.title === "Explore" ? handleExploreMouseEnter : item.title === "Contact Us" ? handleContactMouseEnter : null}
                  onMouseLeave={item.title === "Explore" ? handleExploreMouseLeave : item.title === "Contact Us" ? handleContactMouseLeave : null}
                  className="relative"
                >
                  <span
                    className={clsx(
                      "block relative font-mono text-2xl bg- text-n-1 transition-colors px-6 py-6 md:py-8 lg:py-3 lg:-mr-0.25 text-[1.060rem] lg:font-serif hover:text-cyan-800",
                      item.onlyMobile && "lg:hidden",
                      item.url === pathname.hash
                        ? "z-2 lg:text-cyan-700"
                        : "lg:text-black",
                      "group"
                    )}
                  >
                    {item.title}
                    <span className="absolute top-[3.09rem] left-[1.6rem] w-full h-[0.2rem] bg-cyan-800 transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-50"></span>
                  </span>
                  
                  {item.title === "Explore" && (
                    <div
                      className={clsx(
                        "mega-menu2 absolute border-2 border-cyan-700 border-opacity-60 top-full left-0 bg-white shadow-lg p-6 z-50 transition-opacity duration-300",
                        isExploreMenuVisible && "visible"
                      )}
                    >
                     <div className="text-black flex">
      {/* Third Category */}
      <div className="mr-8">
        <h3 className="font-bold">Projects</h3>
        <ul className="mt-4"> {/* Add padding here */}
          <li style={{ marginBottom: '0.5rem' }}>Item 1</li>
          <li style={{ marginBottom: '0.5rem' }}>Item 2</li>
          <li style={{ marginBottom: '0.5rem' }}>Item 3</li>
          <li style={{ marginBottom: '0.5rem' }}>Item 4</li>
          <li style={{ marginBottom: '0.5rem' }}>Item 5</li> {/* Add 5 items */}
        </ul>
      </div>
      {/* First Category */}
      <div className="mr-8">
        <h3 className="font-bold">Events</h3>
        <ul className="mt-4"> {/* Add padding here */}
          <li style={{ marginBottom: '0.5rem' }}>Item 1</li>
          <li style={{ marginBottom: '0.5rem' }}>Item 2</li>
          <li style={{ marginBottom: '0.5rem' }}>Item 3</li>
          <li style={{ marginBottom: '0.5rem' }}>Item 4</li>
          <li style={{ marginBottom: '0.5rem' }}>Item 5</li> {/* Add 5 items */}
        </ul>
      </div>
      {/* Second Category */}
      <div className="mr-8 ">
        <h3 className="font-bold">Learning</h3>
        <ul className="mt-4"> {/* Add padding here */}
          <li style={{ marginBottom: '0.5rem' }}>Item 1</li>
          <li style={{ marginBottom: '0.5rem' }}>Item 2</li>
          <li style={{ marginBottom: '0.5rem' }}>Item 3</li>
          <li style={{ marginBottom: '0.5rem' }}>Item 4</li>
          <li style={{ marginBottom: '0.5rem' }}>Item 5</li> {/* Add 5 items */}
        </ul>
      </div>
    </div>
                    </div>
                  )}

                  {item.title === "Contact Us" && (
                    <div
                      className={clsx(
                        "mega-menu1 absolute  top-full left-0 bg-white shadow-lg p-6 z-50 transition-opacity duration-300",
                        isContactMenuVisible && "visible"
                      )}
                    >
                      <div className="text-black flex">
                        {/* Instagram */}
                        <div className="mr-8 ml-5 logo-link">
    <a href="https://www.instagram.com/your_instagram_handle" target="_blank" rel="noopener noreferrer">
      <img src={hinstagram} alt="Instagram" className="w-10 h-10 mr-9 inline-block" />
    </a>
  </div>
                        {/* WhatsApp */}
                        <div className="mr-10 logo-link">
    <a href="https://wa.me/your_phone_number" target="_blank" rel="noopener noreferrer">
      <img src={hwhatsapp} alt="WhatsApp" className="w-10 h-10 mr-9 inline-block" />
    </a>
  </div>
                        {/* Gmail */}
                        <div className="mr-8 logo-link">
    <a href="mailto:your_email@example.com" target="_blank" rel="noopener noreferrer">
      <img src={hgmail} alt="Gmail" className="w-10 h-10 mr-9 inline-block" />
    </a>
  </div>
                        {/* Phone Number */}
                        <div className="mr-8 logo-link">
                          <a href="" target="blank" rel="noopener noreferrer">
                          <img src={hphone} alt="Phone" className="w-10 h-10 mr-9 inline-block" />                               
                          </a>
                        </div>
    </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </nav>
          <div
            className="hidden lg:flex items-center backdrop-blur-3xl border-l-cyan-600 border-r-cyan-600 border-l-4 border-r-4 bg-gradient-to-r h-12 from-slate-100 via-slate-50 to-slate-50 shadow-md p-6 px-4 py-0 rounded-2xl ml-2 text-black"
            style={{ marginTop: "-22px" }}
          >
            <input
              type="text"
              placeholder=""
              className="p-1 bg-transparent backdrop-blur-3xl lg:max-w-36 lg:h-10 outline-0 text-[0.99rem] font-sans h-10"
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
            className="hidden z-87 lg:flex w-[2rem] cursor-pointer lg:-mr-4 ml-1"
            style={{ marginTop: "-25px", marginRight: "-1.5rem" }}
          />
        </div>
      </div>
      <div className="lg:hidden border-b-2 mt-[-17px] w-full border-gray-200"></div>
    </div>
  );
};

export default Header;
