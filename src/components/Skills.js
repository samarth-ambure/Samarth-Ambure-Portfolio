import React from 'react';
import './Skills.css';

function Skills() {
  const skillCategories = [
    {
      title: "Backend Development",
      skills: ["Java", "SpringBoot", "Node.js", "Python"]
    },
    {
      title: "Frontend Development",
      skills: ["ReactJS", "JavaScript", "HTML/CSS", "Tailwind/Bootstrap"]
    },
    {
      title: "Databases & Tools",
      skills: ["MySQL", "MongoDB", "GitHub"]
    }
  ];

  return (
    <section className="skills-section">
      <h2 className="section-title">Technical Skills</h2>
      <div className="skills-container">
        {skillCategories.map((category, index) => (
          <div key={index} className="skill-card">
            <h3>{category.title}</h3>
            <div className="skill-list">
              {category.skills.map((skill, i) => (
                <span key={i} className="skill-badge">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;