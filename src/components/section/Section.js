import React from 'react';
import './Section.css';

function Section(props) {
    return (
        <div id={props.id} className="section">
            <header className="sectionHeader">
                <h1 className="mx-auto w-fit text-7xl">{props.id}</h1>
            </header>
            <div className="card-wrapper">
                <div className="card-content">
                    {props.children}
                </div>
            </div>
        </div>
    );
}

export default Section;