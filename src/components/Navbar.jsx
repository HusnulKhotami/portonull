import React, { useState } from 'react';
import '../components/styles/Navbar.css';
import { FaBars, FaTimes, FaSun, FaMoon } from 'react-icons/fa';

const Navbar = ({ toggleTheme, theme }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar-container">
      <div className="navbar-logo">
        <a href="#home">Portof'<span>Null</span></a>
      </div>

      {/* Container untuk menu dan toggle */}
      <div className="nav-wrapper">
        <ul className={isOpen ? "navbar-links active" : "navbar-links"}>
          <li><a href="#home" onClick={closeMenu}>Home</a></li>
          <li><a href="#about" onClick={closeMenu}>About</a></li>
          <li><a href="#skills" onClick={closeMenu}>Skills</a></li>
          <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
          <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
        </ul>

        <div className="nav-right">
          {/* LOGIKA DIPERBAIKI: 
              Jika theme === 'dark', tampilkan Bulan. 
              Jika theme === 'light', tampilkan Matahari. 
          */}
          <div className="theme-switcher" onClick={toggleTheme}>
            {theme === 'dark' ? (
              <FaMoon style={{ color: '#c9d1d9' }} /> 
            ) : (
              <FaSun style={{ color: '#ffc107' }} />
            )}
          </div>

          <div className="menu-icon" onClick={toggleMenu}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;