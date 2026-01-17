import React from 'react';
import './App.css';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      {/* Navbar will go here later */}
      
      <main>
      {/* Profile and Introduction */}
        <Hero />
        
        {/* Technical expertise: Java, Spring Boot, React, etc. */}
        <Skills />
        
        {/* Featured work: Blood Bank and Personal Journal */}
        <Projects />
        
        {/* Contact info and Social links */}
        <Contact />
      </main>

      {/* Footer will go here later */}
    </div>
  );
}

export default App;