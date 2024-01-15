// BurgerMenu.js

import React, { useState } from 'react';
import './Burger.css'; // Add custom CSS for styling if needed

const BurgerMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <button onClick={toggleMenu} className={`burger-icon ${menuOpen ? 'open' : ''}`}>
        ☰
      </button>

      <div className={`menu-overlay ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}></div>

      <div className={`sliding-menu ${menuOpen ? 'open' : ''}`}>
        <ul className="nav flex-column">
          <li className="nav-item">
            <a className="nav-link" href="./">
              Menu Item 1
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="./">
              Menu Item 2
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="./">
              Menu Item 3
            </a>
          </li>
          {/* Add more menu items as needed */}
        </ul>
      </div>
    </>
  );
};

export default BurgerMenu;
