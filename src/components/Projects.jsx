import React from 'react';
import '../components/styles/Projects.css';
import { FaExternalLinkAlt, FaGithub, FaReact, FaNodeJs, FaDatabase, FaCode } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiRedux, SiSocketdotio, SiPostgresql, SiFirebase, SiCssmodules } from 'react-icons/si';

const getTechIcon = (tech) => {
  switch (tech.toLowerCase()) {
    case 'react': return <FaReact color="#61DAFB" />;
    case 'node.js': return <FaNodeJs color="#339933" />;
    case 'express': return <SiExpress color="#ffffff" />;
    case 'mongodb': return <SiMongodb color="#47A248" />;
    case 'redux': return <SiRedux color="#764ABC" />;
    case 'socket.io': return <SiSocketdotio color="#ffffff" />;
    case 'postgresql': return <SiPostgresql color="#4169E1" />;
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
      title: "E-Commerce Web App",
      description: "Aplikasi toko online lengkap dengan keranjang belanja, otentikasi pengguna, dan dashboard admin.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Redux"],
      githubLink: "https://github.com/rivaldi/ecommerce-app",
      liveLink: "https://ecommerce-demo.vercel.app"
    },
    {
      title: "Realtime Chat App",
      description: "Aplikasi chat realtime menggunakan WebSockets untuk komunikasi instan antar pengguna.",
      technologies: ["React", "Socket.io", "Express", "PostgreSQL"],
      githubLink: "https://github.com/rivaldi/chat-app",
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
      title: "Realtime Chat App",
      description: "Aplikasi chat realtime menggunakan WebSockets untuk komunikasi instan antar pengguna.",
      technologies: ["React", "Socket.io", "Express", "PostgreSQL"],
      githubLink: "https://github.com/rivaldi/chat-app",
      liveLink: "https://chat-demo.vercel.app"
    },
    {
      title: "Sistem Manajemen Tugas",
      description: "Alat untuk mengelola tugas harian, prioritas, dan tenggat waktu dengan antarmuka yang intuitif.",
      technologies: ["React", "Firebase", "CSS Modules"],
      githubLink: "https://github.com/rivaldi/task-manager",
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