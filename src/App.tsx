import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Publication from './components/Publication';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Publication />
      <Footer />
    </div>
  );
}

export default App;