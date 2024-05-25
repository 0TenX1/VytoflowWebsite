import React, { useState } from 'react';
import './styles.css'; // Import your CSS file for styling

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="hamburger-menu">
      <button className={`hamburger-menu-btn ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>
      <div className={`menu-items ${isOpen ? 'open' : ''}`}>
        <button className="close-btn" onClick={toggleMenu}>×</button>
        <div className='inner'><a href="#">Home</a></div>
        <div className='inner'><a href="#">About</a></div>
        <div className='inner'><a href="#">Services</a></div>
        <div className='inner'><a href="#">Contact</a></div>
      </div>
    </div>
  );
};

export default HamburgerMenu;
