import React from 'react';

function NavigationBar() {
    return (
        <nav id="navbar" className="navbar">
            <span className="nav-name-text">
                Michael Dillinger
            </span>
            <div className="nav-text-buttons-container">
                <button id="nav-home" className="nav-text-button" onClick={() => {}}>HOME</button>
                <button id="nav-projects" className="nav-text-button" onClick={() => {}}>PROJECTS</button>
                <button id="nav-about" className="nav-text-button" onClick={() => {}}>ABOUT</button>
                <button id="nav-contact" className="nav-text-button" onClick={() => {}}>CONTACT</button>
            </div>
        </nav>
  );
}

export default NavigationBar;