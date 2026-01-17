import React from 'react';
import './Projects.css';

function Projects() {
  const projectList = [
    {
      title: "Blood Bank Management System",
      date: "August 2025",
      description: "A full-stack application for managing donors and blood inventory. Implemented RESTful APIs and optimized CRUD operations.",
      tech: ["Java", "Spring Boot", "ReactJS", "MySQL"],
      link: "https://github.com/samarth-ambure/SanjeevneDropsProject.git"
    },
    {
      title: "My Secure Personal Journal",
      date: "November 2025",
      description: "A desktop journaling app with a robust lock-screen system and file-based password persistence for data privacy.",
      tech: ["Python", "Tkinter", "File Handling"],
      link: "#" // Add link if available
    }
  ];

  return (
    <section className="projects-section">
      <h2 className="section-title">Featured Projects</h2>
      <div className="projects-grid">
        {projectList.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-date">{project.date}</div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-tech">
              {project.tech.map((t, i) => (
                <span key={i} className="tech-tag">{t}</span>
              ))}
            </div>
            <a href={project.link} target="_blank" rel="noreferrer" className="project-link">
              View Source Code
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;