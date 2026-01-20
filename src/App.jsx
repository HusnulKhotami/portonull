import React, { useEffect } from 'react';
import './App.css'; // Global CSS

// Import library AOS untuk animasi scroll
import AOS from 'aos';
import 'aos/dist/aos.css';

// Import semua komponen
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Durasi animasi 1 detik
      once: true,    // Animasi akan muncul setiap kali di-scroll ulang
      mirror: true,   // Animasi muncul saat scroll ke atas maupun ke bawah
    });
  }, []);

  return (
    <div className="app-container">
      <Navbar />
      <main>
        {/* Tambahkan data-aos untuk animasi per section */}
        <div data-aos="fade-up">
          <Hero />
        </div>
        <div data-aos="fade-up">
          <About />
        </div>
        <div data-aos="fade-up">
          <Skills />
        </div>
        <div data-aos="fade-up">
          <Projects />
        </div>
        <div data-aos="fade-up">
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;