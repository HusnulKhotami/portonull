import React, { useEffect, useState } from 'react';
import './App.css'; 
import AOS from 'aos';
import 'aos/dist/aos.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      mirror: true,
    });
  }, []);

  useEffect(() => {
    // Menempelkan atribut data-theme ke elemen <html>
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="app-container">
      <Navbar toggleTheme={toggleTheme} theme={theme} />
      <main>
        <div data-aos="fade-up"><Hero /></div>
        <div data-aos="fade-up"><About /></div>
        <div data-aos="fade-up"><Skills /></div>
        <div data-aos="fade-up"><Projects /></div>
        <div data-aos="fade-up"><Contact /></div>
      </main>
      <Footer />
    </div>
  );
}

export default App;