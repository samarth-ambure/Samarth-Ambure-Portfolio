import React from 'react';
import './App.css';
import Hero from './components/Hero';
import Skills from './components/Skills';

function App() {
  return (
    <div className="App">
      {/* Navbar will go here later */}
      
      <main>
        <Hero />
        <Skills />
        {/* We will add <Projects /> and <Skills /> here next */}
      </main>

      {/* Footer will go here later */}
    </div>
  );
}

export default App;