import './ScrollIndicator.css'
import React from 'react';

function ScrollIndicator(props) {

    return (
        <div className="scroll-indicator">
            <a href="#home" className={props.visibileSection == "home" ? "active" : "inactive"}></a>
            <a href="#about" className={props.visibileSection == "about" ? "active" : "inactive"}></a>
            <a href="#projects" className={props.visibileSection == "projects" ? "active" : "inactive"}></a>
            <a href="#contact" className={props.visibileSection == "contact" ? "active" : "inactive"}></a>
        </div>
    );
}

export default ScrollIndicator;