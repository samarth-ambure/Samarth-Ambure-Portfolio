import React from 'react';
import './Skills.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJava, faReact, faJs, faPython, faNodeJs } from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faCode } from '@fortawesome/free-solid-svg-icons';

function Skills() {
  const categories = [
    {
      title: "Backend",
      skills: [
        { name: "Java", icon: faJava },
        { name: "SpringBoot", icon: faCode },
        { name: "Python", icon: faPython }
      ]
    },
    {
      title: "Frontend",
      skills: [
        { name: "ReactJS", icon: faReact },
        { name: "JavaScript", icon: faJs },
        { name: "NodeJS", icon: faNodeJs }
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