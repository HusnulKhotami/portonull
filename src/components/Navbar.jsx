import React, { useState } from 'react';
import '../components/styles/Navbar.css';
import { FaBars, FaTimes } from 'react-icons/fa'; // Import ikon menu

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Fungsi untuk toggle menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Fungsi untuk menutup menu saat link diklik
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar-container">
      <div className="navbar-logo">
        <a href="#home">S.Komedi<span>Dev</span></a>
      </div>

      {/* Ikon Hamburger (Hanya muncul di Mobile) */}
      <div className="menu-icon" onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Daftar Link (Dinamis berdasarkan state isOpen) */}
      <ul className={isOpen ? "navbar-links active" : "navbar-links"}>
        <li><a href="#home" onClick={closeMenu}>Home</a></li>
        <li><a href="#about" onClick={closeMenu}>About</a></li>
        <li><a href="#skills" onClick={closeMenu}>Skills</a></li>
        <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
        <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;