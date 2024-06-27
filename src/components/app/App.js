import React from 'react';
import logo from '../../assets/logo.svg';
import Section from '../section/Section.js';
import ScrollIndicator from '../scrollIndicator/ScrollIndicator.js'
import './App.css';

function App() {
  const [visibileSection, setVisibleSection] = React.useState("home");
  const sections = document.querySelectorAll(".section")

  React.useEffect(() => {
    let observerOptions = {
      rootMargin: '0px',
      threshold: 0.5
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(
        (entry) => {
            console.log(entry)
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
    <div id="scrollBox" className="container">
      <ScrollIndicator visibileSection={visibileSection} />

      <Section id="home" setVisibleSection={setVisibleSection} />
      <Section id="about" setVisibleSection={setVisibleSection} />
      <Section id="projects" setVisibleSection={setVisibleSection} />
      <Section id="contact" setVisibleSection={setVisibleSection} />
    </div>
  );
}

export default App;