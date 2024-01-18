import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Burger.css'; 

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
          <Link to='/'>Login</Link>
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
          {/* Add more menu*/}
        </ul>
      </div>
    </>
  );
};

export default BurgerMenu;
