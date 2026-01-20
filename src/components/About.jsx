import React from 'react';
import '../components/styles/About.css';
import { FaGraduationCap, FaCode, FaAward } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="about-section">
      <h2 className="section-title">About me</h2>
      
      <div className="about-container">
        {/* Bagian Teks Narasi */}
        <div className="about-text">
          <p>
            Hello! I am <span>HusTami Wii</span>, a Computer Science student at Lampung University focusing on web development and artificial intelligence. For me, technology is not just lines of code, but a way to build more responsive systems and make things easier for many people.</p>
          <p>
            With over 2 years of experience in the <strong>Modern JavaScript (React & Node.js)</strong> ecosystem, I am currently actively exploring the world of <strong>Machine Learning</strong>. I believe that the future of the web lies in its ability to “think” and provide more personalized solutions for its users.
          </p>
        </div>

        {/* Bagian Statistik/Poin Menarik */}
        <div className="about-stats">
          <div className="stat-card">
            <div className="stat-icon"><FaCode /></div>
            <div className="stat-info">
              <h3>20+</h3>
              <p>Project Completed</p>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon"><FaAward /></div>
            <div className="stat-info">
              <h3>2+</h3>
              <p>Years of Experience</p>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon"><FaGraduationCap /></div>
            <div className="stat-info">
              <h3>20+</h3>
              <p>Certificates</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;