import React from 'react';
import '../components/styles/Skills.css';
import { 
  SiJavascript, SiReact, SiNodedotjs, SiExpress, 
  SiMongodb, SiPostgresql, SiHtml5, SiCss3, 
  SiTailwindcss, SiGit, SiTypescript, SiPython 
} from 'react-icons/si';
import { TbApi } from 'react-icons/tb';

const skills = [
  { name: "JavaScript", icon: <SiJavascript color="#F7DF1E" /> },
  { name: "React.js", icon: <SiReact color="#61DAFB" /> },
  { name: "Node.js", icon: <SiNodedotjs color="#339933" /> },
  { name: "Express.js", icon: <SiExpress color="#ffffff" /> },
  { name: "MongoDB", icon: <SiMongodb color="#47A248" /> },
  { name: "PostgreSQL", icon: <SiPostgresql color="#4169E1" /> },
  { name: "HTML5", icon: <SiHtml5 color="#E34F26" /> },
  { name: "CSS3", icon: <SiCss3 color="#1572B6" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss color="#06B6D4" /> },
  { name: "Git", icon: <SiGit color="#F05032" /> },
  { name: "RESTful API", icon: <TbApi color="#ffffff" /> },
  { name: "TypeScript", icon: <SiTypescript color="#3178C6" /> },
  { name: "Python", icon: <SiPython color="#3776AB" /> }
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <h2 className="section-title">My expertise</h2>
      
      <div className="skills-container">
        <div className="skills-track">
          {/* Render List Pertama */}
          {skills.map((skill, index) => (
            <div key={`skill-1-${index}`} className="skill-item">
              <span className="skill-icon">{skill.icon}</span>
              {skill.name}
            </div>
          ))}
          {/* Render List Kedua (Duplikasi untuk loop) */}
          {skills.map((skill, index) => (
            <div key={`skill-2-${index}`} className="skill-item">
              <span className="skill-icon">{skill.icon}</span>
              {skill.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;