import React, { useEffect, useRef, useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { useNavigate } from 'react-router-dom';

function NavigationBar() {
    const navigate = useNavigate();

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toHome = () => {
        setIsDropdownOpen(false);
        navigate("/");
    }

    const toProjects = () => {
        setIsDropdownOpen(false);
        navigate("/projects");
    }

    const toAbout = () => {
        setIsDropdownOpen(false);
        navigate("/about");
    }

    const toContact = () => {
        setIsDropdownOpen(false);
        navigate("/contact");
    }

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const optionsRef = useRef(null);
    //Check of selection ref also ensures that we don't get an open and close double effect when clicking on the actual selection box
    const selectionRef = useRef(null);
    useEffect(() => {
        function handleClickOutside(event) {
            if(optionsRef.current && !optionsRef.current.contains(event.target)
                && selectionRef.current && !selectionRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        }

        //Bind event listener
        document.addEventListener("mousedown", handleClickOutside);
        
        return () => {
            //Unbind event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    function checkHamburgerVisibility() {
        if(!document.getElementById("nav-hamburger-button").checkVisibility()) {
            setIsDropdownOpen(false);
        }
    }
    
    window.addEventListener("resize", function() {
        checkHamburgerVisibility();
    });

    return (
        <>
            <nav id="navbar" className="navbar">
                <span className="nav-name-text">
                    Michael Dillinger
                </span>
                <div className="nav-text-buttons-container">
                    <button id="nav-home" className="nav-text-button" onClick={() => toHome()}>HOME</button>
                    <button id="nav-projects" className="nav-text-button" onClick={() => toProjects()}>PROJECTS</button>
                    <button id="nav-about" className="nav-text-button" onClick={() => toAbout()}>ABOUT</button>
                    <button id="nav-contact" className="nav-text-button" onClick={() => toContact()}>CONTACT</button>
                    <button id="nav-hamburger-button" className="nav-hamburger-button" ref={selectionRef} onClick={() => toggleDropdown()}>
                        <GiHamburgerMenu />
                    </button>
                </div>
                {isDropdownOpen && (
                    <div className="nav-dropdown-menu" ref={optionsRef}>
                        <button className="nav-dropdown-menu-option" onClick={() => toHome()}>
                            HOME
                        </button>
                        <button className="nav-dropdown-menu-option" onClick={() => toProjects()}>
                            PROJECTS
                        </button>
                        <button className="nav-dropdown-menu-option" onClick={() => toAbout()}>
                            ABOUT
                        </button>
                        <button className="nav-dropdown-menu-option" onClick={() => toContact()}>
                            CONTACT
                        </button>
                    </div>
                )}
            </nav>
        </>
  );
}

export default NavigationBar;