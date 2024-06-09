import React, { useState } from "react";
import { vytoflowLogo, searchDay, comingSoon, hinstagram, hgmail, hphone, hwhatsapp } from "../assets";
import { useLocation, NavLink } from "react-router-dom";
import clsx from "clsx";
import { motion } from "framer-motion";

const Header = ({ theme, setTheme }) => {
  const pathname = useLocation();
  const [isExploreMenuVisible, setIsExploreMenuVisible] = useState(false);
  const [isContactMenuVisible, setIsContactMenuVisible] = useState(false);
  const [isComingSoonHovered, setIsComingSoonHovered] = useState(false);


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

  const handleComingSoonMouseEnter = () => {
    setIsComingSoonHovered(true);
  };

  const handleComingSoonMouseLeave = () => {
    setIsComingSoonHovered(false);
  };

  return (
    <div className="flex flex-col">
      <style>
        {`.mega-menu1, .mega-menu2 {
          opacity: 0;
          visibility: hidden;
          transition: opacity 0.3s, visibility 0.3s, max-height 0.3s ease-in-out, max-width 0.3s ease-in-out;
          max-height: 0;
          max-width: 0;
          width: 0;
          width: auto;
          border-radius: 10px;
          background: linear-gradient(180deg, rgba(38, 70, 83, 0.9), rgba(0, 190, 255, 0.8)); /* Adjust the RGBA values and alpha (transparency) as needed */
          backdrop-filter: blur(10px); /* Adjust the blur amount as needed */
          opacity: 0.3; /* Adjust the opacity as needed */
          overflow: hidden;
        }

        .mega-menu1.visible, .mega-menu2.visible {
          opacity: 1;
          visibility: visible;
          max-height: 500px; /* A large enough value to accommodate the content */
          max-width: 90px;  /* A large enough value to accommodate the content */
          width: auto;
          opacity: 1;
        }
        
        .logo-link:hover img {
          scale: 1.3; /* Adjust brightness to change the hover effect */
        }
        
        .mega-menu1, .mega-menu2 {
          display: flex;
          flex-direction: column; /* Change to column */
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
              {/* Home */}
              <NavLink
                to="/home"
                className={clsx("block relative font-mono text-2xl bg- text-n-1 transition-colors px-6 py-6 md:py-8 lg:py-3 lg:-mr-0.25 text-[1.060rem] lg:font-serif hover:text-cyan-800", pathname === "/" ? "z-2 lg:text-cyan-700" : "lg:text-black", "group")}
              >
                Home
                <span className="absolute top-[3.09rem] left-[1.6rem] w-full h-[0.2rem] bg-cyan-800 transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-50"></span>
              </NavLink>

              {/* Coming Soon */}
              <div
                onMouseEnter={handleComingSoonMouseEnter}
                onMouseLeave={handleComingSoonMouseLeave}
                className="relative"
              >
                <NavLink
                  to="/events"
                  className={clsx(
                    "block relative font-mono text-2xl bg- text-n-1 transition-colors px-6 py-6 md:py-8 lg:py-3 lg:-mr-0.25 text-[1.060rem] lg:font-serif hover:text-cyan-800",
                    pathname === "/explore" ? "z-2 lg:text-cyan-700" : "lg:text-black",
                    "group"
                  )}
                >
                  Coming Soon
                  <span className="absolute top-[3.09rem] left-[1.6rem] w-full h-[0.2rem] bg-cyan-800 transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-50"></span>
                </NavLink>
                {/* Show image only when hovering over Coming Soon */}
                {isComingSoonHovered && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="absolute left-1/2 transform -translate-x-1/2 mb-4"
                  >
                    <img
                      src={comingSoon}
                      alt="Coming Soon"
                      style={{ maxWidth: "400px", maxHeight: "400px",opacity: 0.9 }}
                    />
                  </motion.div>
                )}
              </div>

              {/* Community */}
              <NavLink
                to="/community"
                className={clsx("block relative font-mono text-2xl bg- text-n-1 transition-colors px-6 py-6 md:py-8 lg:py-3 lg:-mr-0.25 text-[1.060rem] lg:font-serif hover:text-cyan-800", pathname === "/community" ? "z-2 lg:text-cyan-700" : "lg:text-black", "group")}
              >
                Community
                <span className="absolute top-[3.09rem] left-[1.6rem] w-full h-[0.2rem] bg-cyan-800 transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-50"></span>
              </NavLink>

              {/* Contact Us */}
              <div
                onMouseEnter={handleContactMouseEnter}
                onMouseLeave={handleContactMouseLeave}
                className="relative"
              >
                <NavLink
                  to="/contact"
                  className={clsx("block relative font-mono text-2xl bg- text-n-1 transition-colors px-6 py-6 md:py-8 lg:py-3 lg:-mr-0.25 text-[1.060rem] lg:font-serif hover:text-cyan-800", pathname === "/contact" ? "z-2 lg:text-cyan-700" : "lg:text-black", "group")}
                >
                  Contact Us
                  <span className="absolute top-[3.09rem] bg-cyan-800 transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-50"></span>
                </NavLink>
                <div
                  className={clsx(
                    "mega-menu1 absolute top-full left-0 bg-white shadow-lg p-6 z-50 transition-opacity duration-300",
                    isContactMenuVisible && "visible"
                  )}
                >
                  <div className="flex flex-col"> {/* Change to flex-col */}
                    {/* Instagram */}
                    <div className="mb-4 logo-link">
                      <a href="https://www.instagram.com/vytoflow_tech/" target="_blank" rel="noopener noreferrer">
                        <img src={hinstagram} alt="Instagram" className="w-10 h-10 mr-9 inline-block" />
                      </a>
                    </div>
                    {/* WhatsApp */}
                    <div className="mb-4 logo-link">
                      <a href="https://wa.me/+918700745848" target="_blank" rel="noopener noreferrer">
                        <img src={hwhatsapp} alt="WhatsApp" className="w-10 h-10 mr-9 inline-block" />
                      </a>
                    </div>
                    {/* Gmail */}
                    <div className="logo-link">
                      <a href="mailto:vytoflow.community@its.edu.in" target="_blank" rel="noopener noreferrer">
                        <img src={hgmail} alt="Gmail" className="w-10 h-10 mr-9 inline-block" />
                      </a>
                    </div>
            
                  </div>
                </div>
              </div>
            </div>
          </nav>
          <div
            className="hidden lg:flex items-center backdrop-blur-3xl border-l-cyan-600 border-r-cyan-600 border-l-4 border-r-4 bg-gradient-to-r h-12 from-slate-100 via-slate-50 to-slate-50 shadow-md p-6 px-4 py-0  rounded-2xl text-black"
            style={{ marginTop: "-22px" }}
          >
           <input type="text" id="search" name="search" placeholder="Search..." className="p-1 bg-transparent backdrop-blur-3xl lg:max-w-36 lg:h-10 outline-0 text-[0.99rem] font-sans h-10" autoComplete="on"/>

            <img
              src={searchDay}
              alt="Search_Icon"
              className="hidden lg:flex w-[1.8rem] "
            />
          </div>
        </div>
      </div>
      <div className="lg:hidden border-b-2 mt-[-17px] w-full border-gray-200"></div>
    </div>
  );
};

export default Header;

