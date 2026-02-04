import React from 'react';
import '../components/styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <p>&copy; {new Date().getFullYear()} Created by Portof'Null.</p>
      <p>Dibuat dengan penuh cinta.</p>
    </footer>
  );
};

export default Footer;