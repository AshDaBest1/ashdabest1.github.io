import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import WorkExperience from './components/WorkExperience';
import ProfessionalDevelopment from './components/ProfessionalDevelopment';
import WRNVirtual from './components/WRNVirtual';
import Documents from './components/Documents';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import './assets/styles/main.css';

function App() {
  return (
    <div className="app">
      {/* <Header /> */}
      {/* <Navbar /> */}
      <Hero />
      
      <main>
        <About />
        <Skills />
        <Education />
        <WorkExperience />
        <ProfessionalDevelopment />
        <WRNVirtual />
        <Documents />
        {/* <Portfolio /> */}
        <Contact />
      </main>
    </div>
  );
}

export default App;