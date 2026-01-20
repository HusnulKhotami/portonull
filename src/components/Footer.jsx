import React from 'react';
import '../components/styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <p>&copy; {new Date().getFullYear()} S.Kom Developer. Semua hak dilindungi.</p>
      <p>Dibuat dengan penuh cinta.</p>
    </footer>
  );
};

export default Footer;