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
              I am a <strong>Full Stack Developer</strong> based in Pune, specializing in building 
              robust backend systems with <strong>Java & Spring Boot</strong> and high-performance 
              mobile applications using <strong>React Native</strong>.
            </p>
            <p>
              With a <strong>Masters in Java Full Stack Development</strong> from I.T. Vedant 
              and an ongoing <strong>BCA</strong> degree at Tilak Maharashtra Vidyapith, 
              I bridge the gap between complex server-side logic and intuitive user experiences.
            </p>
            <p>
              Recently, I have been focused on <strong>Mobile Ecosystems</strong>, developing 
              applications that prioritize smooth navigation, efficient state management, 
              and clean architecture.
            </p>
            
            <div className="education-timeline">
              <div className="edu-item">
                <h4>Bachelor of Computer Applications (BCA)</h4>
                <span>Tilak Maharashtra Vidyapith (2023 - 2026)</span>
              </div>
              <div className="edu-item">
                <h4>Masters in Java Full Stack Development</h4>
                <span>I.T. Vedant (Certified 2025)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;