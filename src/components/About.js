import React from 'react';
import './About.css';

function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I am a passionate <strong>Full Stack Java Developer</strong> based in Pune, 
              currently pursuing my <strong>BCA</strong> at Tilak Maharashtra Vidyapith. 
              My journey into software development began with a curiosity about how 
              complex systems work, which led me to specialize in the Java ecosystem.
            </p>
            <p>
              I recently completed a <strong>Masters in Java Full Stack Web Development</strong> 
              at <strong>I.T. Vedant</strong>, where I mastered building scalable backend 
              architectures with Spring Boot and dynamic frontends with React.js.
            </p>
            <div className="education-timeline">
              <div className="edu-item">
                <h4>Bachelor of Computer Application (BCA)</h4>
                <span>Tilak Maharashtra Vidyapith (2023 - 2026)</span>
              </div>
              <div className="edu-item">
                <h4>Masters in Java Full Stack Development</h4>
                <span>I.T. Vedant (2025)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;