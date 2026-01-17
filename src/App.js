import React from 'react';
import './App.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import About from './components/About'
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div id="home"><Hero /></div>
      <Skills />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;