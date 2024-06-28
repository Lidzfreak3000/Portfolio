import React from 'react';
import Section from '../section/Section.js';
import ScrollIndicator from '../scrollIndicator/ScrollIndicator.js'
import CustomCursor from '../cursorTracker/CursorTracker.js';
import AnimatedBackground from '../animatedBackground/AnimatedBackground.js'

import './App.css';

function App() {
  const [visibileSection, setVisibleSection] = React.useState("home");

  React.useEffect(() => {
    const sections = document.querySelectorAll(".section")
    let observerOptions = {
      threshold: 0.5
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(
        (entry) => {
          if (entry.isIntersecting) {
            console.log(entry);
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
      {/* <Intro /> */}
      <div id="scrollBox" className="container max-w-full">
        <ScrollIndicator visibileSection={visibileSection} />

        <Section id="home" setVisibleSection={setVisibleSection} />
        <Section id="about" setVisibleSection={setVisibleSection} />
        <Section id="projects" setVisibleSection={setVisibleSection} />
        <Section id="contact" setVisibleSection={setVisibleSection} />
      </div>
    </div>
  );
}

export default App;