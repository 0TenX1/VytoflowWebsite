import React, { useState } from 'react';

function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative lg:hidden">
      <div className="cursor-pointer" onClick={toggleMenu}>
        <div className={`hamburger ${isOpen ? 'open' : ''}`}>
          <div className="bar1 h-1 w-6 bg-black mb-1"></div>
          <div className="bar2 h-1 w-6 bg-black mb-1"></div>
          <div className="bar3 h-1 w-6 bg-black"></div>
        </div>
      </div>
      <ul className={`absolute top-full right-0 bg-white ${isOpen ? 'block' : 'hidden'}`}>
        <li><a href="#" className="text-black">Home</a></li>
        <li><a href="#" className="text-black">About</a></li>
        <li><a href="#" className="text-black">Services</a></li>
        <li><a href="#" className="text-black">Contact</a></li>
      </ul>
    </div>
  );
}

export default HamburgerMenu;
