import React from 'react';
import Landing from './Components/Landing';
import About from './Components/About';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import './reset.css';
import './scss/styles.css';

function App() {
  return (
    <div className="App">
      <Landing />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
