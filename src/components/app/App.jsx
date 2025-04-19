import { useEffect, useState } from 'react';
import ScrollIndicator from '../scrollIndicator/ScrollIndicator.jsx'
import CustomCursor from '../cursorTracker/CursorTracker.jsx';
import AnimatedBackground from '../animatedBackground/AnimatedBackground.jsx'

import './App.css';
import Home from '../../views/home/home.jsx';
import About from '../../views/about/about.jsx';
import Projects from '../../views/projects/projects.jsx';
import Contact from '../../views/contact/contact.jsx';
import AlertsContainer from '../alerts/AlertsContainer.jsx';
import { AlertProvider } from '../../context/AlertContext.jsx';

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
    <AlertProvider>
      <AnimatedBackground />
      <CustomCursor />
      <div id="scrollBox" className="container max-w-full">
        <AlertsContainer />
        <ScrollIndicator visibileSection={visibileSection} />
        <Home setVisibleSection={setVisibleSection} />
        <About setVisibleSection={setVisibleSection} />
        <Projects setVisibleSection={setVisibleSection} />
        <Contact setVisibleSection={setVisibleSection} />
      </div>
    </AlertProvider>
  );
}

export default App;