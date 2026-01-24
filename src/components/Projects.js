import React from 'react';
import './Projects.css';

function Projects() {
  const projectList = [
    {
      title: "Sanjeevne Drops",
      date: "August 2025",
      description: "A full-stack web application built with Spring Boot and React for managing blood inventory and donors. Features RESTful APIs and MySQL integration.",
      tech: ["Java", "Spring Boot", "ReactJS", "MySQL"],
      link: "https://github.com/samarth-ambure/SanjeevneDropsProject.git"
    },
    {
      title: "My Expense Tracker",
      date: "January 2026",
      description: "A mobile application for tracking daily expenses. Built with React Native, featuring data persistence, expense categorization, and a clean UI.",
      tech: ["React Native", "JavaScript", "Mobile UI"],
      link: "https://github.com/samarth-ambure/My-Expense-Tracker"
    },
    {
      title: "Guess My Number Game",
      date: "January 2026",
      description: "An interactive mobile game where users guess a hidden number. Developed using React Native with a focus on logic, state management, and responsiveness.",
      tech: ["React Native", "State Management", "Logic"],
      link: "https://github.com/samarth-ambure/Guess-My-Number-Game"
    },
    {
      title: "My Secure Personal Journal",
      date: "November 2025",
      description: "A Python-based desktop application featuring a secure lock-screen system and file-based password persistence for private journaling.",
      tech: ["Python", "Tkinter", "Security"],
      link: "https://github.com/samarth-ambure/My-Personal-Journal"
    },
       {
      title: "Tasty Tracks: Meal Explorer",
      date: "January 2026",
      description: "A dynamic React Native application for discovering recipes. Features complex navigation, category filtering, and detailed meal data presentation.",
      tech: ["React Native", "React Navigation", "Mobile UI"],
      link: "https://github.com/samarth-ambure/Tasty-Tracks-React-Native-Meal-Explorer"
    },
  ];

  return (
    <section id="projects" className="projects-section">
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