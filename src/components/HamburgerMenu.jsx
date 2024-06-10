// HamburgerMenu.jsx
import React, { useState } from 'react';
import './css/HamburgerMenu.css';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="hamburger-menu">
      <button className="hamburger-icon" onClick={toggleMenu}>
        <div className={`bar ${isOpen ? 'change' : ''}`}></div>
        <div className={`bar ${isOpen ? 'change' : ''}`}></div>
        <div className={`bar ${isOpen ? 'change' : ''}`}></div>
      </button>
      <nav className={`menu ${isOpen ? 'open' : ''}`}>
        <ul>
          <li><a href="/home">Home</a></li>
          <li><a href="/community">Community</a></li>
          <li><a href="/contact">Contact Us</a></li>
          <li><a href="/event">Coming Soon</a></li>
          {/* <li><a href="#community">Community</a></li> */}
        </ul>
      </nav>
    </div>
  );
};

export default HamburgerMenu;
