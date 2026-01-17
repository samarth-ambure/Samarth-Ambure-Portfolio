import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Samarth Ambure</h1>
        <h2>Full Stack Java Developer</h2>
        <p>
          Highly motivated developer specialized in SpringBoot, ReactJS, and Python. 
          Currently pursuing BCA at Tilak Maharashtra Vidyapith.
        </p>
        <div className="hero-buttons">
          <button className="btn-primary">View My Projects</button>
          <button className="btn-secondary">Download Resume</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;