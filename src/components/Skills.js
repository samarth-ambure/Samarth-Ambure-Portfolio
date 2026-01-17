import React from 'react';
import './Skills.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJava, faReact, faJs, faPython, faNodeJs, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faCode, faMobileScreenButton } from '@fortawesome/free-solid-svg-icons';

function Skills() {
  const categories = [
    {
      title: "Backend Development",
      skills: [
        { name: "Java", icon: faJava },
        { name: "SpringBoot", icon: faCode },
        { name: "Python", icon: faPython },
        { name: "Node.js", icon: faNodeJs }
      ]
    },
    {
      title: "Frontend & Mobile",
      skills: [
        { name: "ReactJS", icon: faReact },
        { name: "React Native", icon: faMobileScreenButton }, // Added React Native
        { name: "JavaScript", icon: faJs },
        { name: "HTML/CSS", icon: faCode }
      ]
    },
    {
      title: "Databases & Tools",
      skills: [
        { name: "MySQL", icon: faDatabase },
        { name: "MongoDB", icon: faDatabase },
        { name: "GitHub", icon: faGithub }
      ]
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <h2 className="section-title">Technical Skills</h2>
      <div className="skills-container">
        {categories.map((cat, idx) => (
          <div key={idx} className="skill-card">
            <h3>{cat.title}</h3>
            <div className="skill-list">
              {cat.skills.map((skill, i) => (
                <div key={i} className="skill-item">
                  <FontAwesomeIcon icon={skill.icon} className="skill-icon" />
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;