import React from 'react';
import logo from '../../assets/logo.svg';
import './Section.css';

function Section(props) {
    const [name, setName] = React.useState("World");

    return (
        <div id={props.id} className="App section">
            {/* <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1>Hello, {name}!</h1>
                <h2>{props.id}</h2>
                <input type="text" onChange={(e) => setName(e.target.value)} />
            </header> */}
        </div>
    );
}

export default Section;