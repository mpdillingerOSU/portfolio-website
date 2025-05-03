import React from 'react';
import { useNavigate } from 'react-router-dom';

function NavigationBar() {
    const navigate = useNavigate();

    const toHome = () => {
        navigate("/");
    }

    const toProjects = () => {
        navigate("/projects");
    }

    return (
        <nav id="navbar" className="navbar">
            <span className="nav-name-text">
                Michael Dillinger
            </span>
            <div className="nav-text-buttons-container">
                <button id="nav-home" className="nav-text-button" onClick={() => toHome()}>HOME</button>
                <button id="nav-projects" className="nav-text-button" onClick={() => toProjects()}>PROJECTS</button>
                <button id="nav-about" className="nav-text-button" onClick={() => {}}>ABOUT</button>
                <button id="nav-contact" className="nav-text-button" onClick={() => {}}>CONTACT</button>
            </div>
        </nav>
  );
}

export default NavigationBar;