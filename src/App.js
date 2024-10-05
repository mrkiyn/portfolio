import './App.css';

import React, { useRef } from 'react';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Quote from './components/Quote';
import About from './components/About';

function App() {
  const mainRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);

  const scrollToMain = () => {
    mainRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAbout = () => {
    aboutRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToSkills = () => {
    skillsRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="App">
      <Navbar scrollToMain={scrollToMain} scrollToAbout={scrollToAbout} scrollToSkills={scrollToSkills}/>
      <Main mainRef={mainRef} />
      <Quote />
      <About aboutRef={aboutRef} skillsRef={skillsRef}/>
    </div>
  );
}

export default App;
