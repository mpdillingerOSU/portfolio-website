import React, { useEffect, useRef, useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from 'react-router-dom';

function NavigationBar() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

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
                    <Link id="nav-home" className="nav-text-button" to="/">HOME</Link>
                    <Link id="nav-projects" className="nav-text-button" to="/projects">PROJECTS</Link>
                    <Link id="nav-about" className="nav-text-button" to="/about">ABOUT</Link>
                    <Link id="nav-contact" className="nav-text-button" to="/contact">CONTACT</Link>
                    <button id="nav-hamburger-button" className="nav-hamburger-button" ref={selectionRef} onClick={() => toggleDropdown()}>
                        <GiHamburgerMenu />
                    </button>
                </div>
                {isDropdownOpen && (
                    <div className="nav-dropdown-menu" ref={optionsRef}>
                        <Link className="nav-dropdown-menu-option" to="/" onClick={() => setIsDropdownOpen(false)}>
                            HOME
                        </Link>
                        <Link className="nav-dropdown-menu-option" to="/projects" onClick={() => setIsDropdownOpen(false)}>
                            PROJECTS
                        </Link>
                        <Link className="nav-dropdown-menu-option" to="/about" onClick={() => setIsDropdownOpen(false)}>
                            ABOUT
                        </Link>
                        <Link className="nav-dropdown-menu-option" to="/contact" onClick={() => setIsDropdownOpen(false)}>
                            CONTACT
                        </Link>
                    </div>
                )}
            </nav>
        </>
  );
}

export default NavigationBar;