import React, { useState, useEffect } from 'react';
import '../components/styles/Hero.css';
import profileImg from '../assets/profile.jpg'; 

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = "Husnul Khotami";
  const typingSpeed = 150;

  useEffect(() => {
    let currentIdx = 0;
    const typeInterval = setInterval(() => {
      if (currentIdx <= fullText.length) {
        setDisplayText(fullText.slice(0, currentIdx));
        currentIdx++;
      } else {
        setTimeout(() => {
          currentIdx = 0;
          setDisplayText('');
        }, 1500);
      }
    }, typingSpeed);
    return () => clearInterval(typeInterval);
  }, []);

  return (
    <section id="home" className="hero-section">
      <div className="hero-container">
        {/* KOLOM KIRI: IDENTITAS */}
        <div className="hero-left">
          <p className="hero-greeting">Hallo, I'am</p>
          <h1 className="hero-title">
            {displayText}
            <span className="cursor">|</span>
          </h1>
          <h2 className="hero-subtitle">Web and Machine Learning Enthusiast.</h2>
          <p className="hero-description">
            I am a third-year student majoring in Computer Science at the University of Lampung.
            Currently, I am involved in web development and machine learning. For me, technology is not just lines of code, 
            but a means to create adaptive and intelligent solutions.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="hero-cta-button">View My Projects</a>
            <a href="#contact" className="hero-secondary-button">Contact Me</a>
          </div>
        </div>

        {/* KOLOM KANAN: FOTO */}
        <div className="hero-right">
          <div className="image-wrapper">
            <div className="image-bg-glow"></div>
            <img src={profileImg} alt="HusTami Wii" className="profile-image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;