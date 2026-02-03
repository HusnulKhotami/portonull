import React from 'react';
import '../components/styles/Projects.css';
import { FaExternalLinkAlt, FaGithub, FaRegCreditCard, FaPhp, FaJava, FaHtml5, FaReact, FaLaravel, FaNodeJs, FaDatabase, FaCode } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiRedux, SiKotlin, SiMysql, SiTailwindcss, SiSocketdotio, SiPostgresql, SiFirebase, SiCssmodules } from 'react-icons/si';

const getTechIcon = (tech) => {
  switch (tech.toLowerCase()) {
    case 'react': return <FaReact color="#61DAFB" />;
    case 'node.js': return <FaNodeJs color="#339933" />;
    case 'laravel': return <FaLaravel color="#f21101" />;
    case 'php': return <FaPhp color="#777BB4" />;
    case 'html': return <FaHtml5 color="#E34F26" />;
    case 'java': return <FaJava color="#007396" />;
    case 'midtrans': return <FaRegCreditCard color="#002855" />;
    case 'express': return <SiExpress color="#ffffff" />;
    case 'mongodb': return <SiMongodb color="#47A248" />;
    case 'redux': return <SiRedux color="#764ABC" />;
    case 'socket.io': return <SiSocketdotio color="#ffffff" />;
    case 'tailwind' : return <SiTailwindcss color= "#06B6D4"/>;
    case 'postgresql': return <SiPostgresql color="#4169E1" />;
    case 'mysql': return <SiMysql color="#4479A1" />;
    case 'kotlin': return <SiKotlin color="#7F52FF" />;
    case 'firebase': return <SiFirebase color="#FFCA28" />;
    case 'css modules': return <SiCssmodules color="#ffffff" />;
    default: return <FaDatabase />;
  }
};

const ProjectCard = ({ title, description, technologies, githubLink, liveLink }) => {
  return (
    <div className="project-card">
      <div className="project-content">
        <div className="project-icon-top">
          <FaCode />
        </div>
        <h3 className="project-title">{title}</h3>
        <p className="project-desc">{description}</p>
        
        <div className="project-tech">
          {technologies.map((tech, index) => (
            <span key={index} className="tech-badge">
              <span className="tech-icon">{getTechIcon(tech)}</span>
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="project-footer">
        <div className="project-links">
          {githubLink && (
            <a href={githubLink} target="_blank" rel="noopener noreferrer" className="link-github">
              <FaGithub /> GitHub
            </a>
          )}
          {liveLink && (
            <a href={liveLink} target="_blank" rel="noopener noreferrer" className="link-live">
              <FaExternalLinkAlt /> Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const projectsData = [
    {
      title: "E-Commerce KantinKu",
      description: "A complete online cafeteria system with shopping carts, user authentication, and admin dashboard.",
      technologies: ["Laravel", "Tailwind", "PostgreSQL", "Midtrans"],
      githubLink: "https://github.com/HusnulKhotami/PROJEK-AKHIR-WEB-LANJUT-KANTINKU.git",
      liveLink: "https://ecommerce-demo.vercel.app"
    },
    {
      title: "E-Commerce SANTAPIN",
      description: "An E-Commerce Restaurant system, equipped with online table reservations and food ordering.",
      technologies: ["PHP", "MySQL", "HTML", "Tailwind"],
      githubLink: "https://github.com/HusnulKhotami/SISTEM-SANTAPIN.git",
      liveLink: "https://chat-demo.vercel.app"
    },
    {
      title: "Sistem Manajemen Tugas",
      description: "PLANIFY is a system for managing daily tasks, priorities, and deadlines with an intuitive interface.",
      technologies: ["PHP", "MySQL", "HTML", "Tailwind"],
      githubLink: "https://github.com/Carissaokt/UAPWEB-Planify.git",
      liveLink: "https://task-manager-demo.vercel.app"
    },
    {
      title: "App FindTop",
      description: "An Android application designed to help users find laptops that suit their needs automatically and efficiently.",
      technologies: ["Kotlin"],
      githubLink: "https://github.com/DANIELMAHENDRA/FinTop.git",
      liveLink: "https://chat-demo.vercel.app"
    },
    {
      title: "Sistem Manajemen Tugas",
      description: "Alat untuk mengelola tugas harian, prioritas, dan tenggat waktu dengan antarmuka yang intuitif.",
      technologies: ["React", "Firebase", "CSS Modules"],
      githubLink: "https://github.com/rivaldi/task-manager",
      liveLink: "https://task-manager-demo.vercel.app"
    },
     {
      title: "Snake Game",
      description: "Games designed using the Java programming language that are intuitive and easy to use",
      technologies: ["Java"],
      githubLink: "https://github.com/HusnulKhotami/Project-Akhir-PBO-Game-Java-FX.git",
      liveLink: "https://task-manager-demo.vercel.app"
    }
  ];

  return (
    <section id="projects" className="projects-section-container">
      <div className="container">
        <h2 className="section-title">Selected projects</h2>
        <p className="section-subtitle">Some of my best work, created with all my heart.</p>
        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;