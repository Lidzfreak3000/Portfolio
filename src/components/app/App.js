import { useEffect, useState } from 'react';
import ScrollIndicator from '../scrollIndicator/ScrollIndicator.js'
import CustomCursor from '../cursorTracker/CursorTracker.js';
import AnimatedBackground from '../animatedBackground/AnimatedBackground.js'

import './App.css';
import Home from '../../views/home/home.js';
import About from '../../views/about/about.js';
import Projects from '../../views/projects/projects.js';
import Contact from '../../views/contact/contact.js';

function App() {
  const [visibileSection, setVisibleSection] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll(".section")
    let observerOptions = {
      threshold: 0.5
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(
        (entry) => {
          if (entry.isIntersecting) {
            setVisibleSection(entry.target.id)
          }
        });
    }, observerOptions);

    sections.forEach((item) => {
      observer.observe(item);
    })

    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <AnimatedBackground />
      <CustomCursor />
      <div id="scrollBox" className="container max-w-full">
        <ScrollIndicator visibileSection={visibileSection} />
        <Home setVisibleSection={setVisibleSection}/>
        <About setVisibleSection={setVisibleSection}/>
        <Projects setVisibleSection={setVisibleSection}/>
        <Contact setVisibleSection={setVisibleSection}/>
      </div>
    </div>
  );
}

export default App;