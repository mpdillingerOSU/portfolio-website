import React, { useEffect, useRef, useState } from 'react';
import LanguageButton from './LanguageButton';
import { RxCaretDown } from 'react-icons/rx';
import { IoMdClose } from "react-icons/io";
import { allLanguages, mapLanguages } from '../data/ProjectData';

function LanguageFilter({activeLanguages, onChange}) {
    const [displayOptions, setDisplayOptions] = useState(false);
    const [isOnScreenRight, setIsOnScreenRight] = useState(false);
    const [isOnScreenLeft, setIsOnScreenLeft] = useState(false);
    const [dropdownAlignment, setDropdownAlignment] = useState("right");
    const [inactiveLanguages, setInactiveLanguages] = useState(mapLanguages(false));
    const [activeCount, setActiveCount] = useState(allLanguages.length);

    const shiftLanguages = () => {
        const newInactiveLanguages = {};
        for(let i = 0; i < allLanguages.length; i++) {
            newInactiveLanguages[allLanguages[i]] = !activeLanguages[allLanguages[i]] ?? true;
        }
        setInactiveLanguages(newInactiveLanguages);
    }

    useEffect(() => {
        shiftLanguages();
        checkDropdownAlignment();
    }, []);

    useEffect(() => {
        for(let i = 0; i < allLanguages.length; i++) {
            if(inactiveLanguages[allLanguages[i]] === activeLanguages[allLanguages[i]]){
                shiftLanguages();
                break;
            }
        }
    }, [activeLanguages]);

    const updateOptionsVisibility = (isVisible) => {
        setDisplayOptions(isVisible);
        if(isVisible){
            checkDropdownAlignment();
        } else {
            setIsOnScreenRight(false);
            setIsOnScreenLeft(false);
            setDropdownAlignment("right");
        }
    }

    const clear = (e) => {
        e.preventDefault();

        const newInactiveLanguages = {};
        for(const key in activeLanguages) {
            newInactiveLanguages[key] = true;
        }
        setInactiveLanguages(newInactiveLanguages);
    }

    const selectAll = (e) => {
        e.preventDefault();

        const newInactiveLanguages = {};
        for(const key in activeLanguages) {
            newInactiveLanguages[key] = false;
        }
        setInactiveLanguages(newInactiveLanguages);
    }
    
    useEffect(() => {
        const newActiveLanguages = {};
        let newActiveCount = 0;

        for(const key in inactiveLanguages) {
            newActiveLanguages[key] = !inactiveLanguages[key];
            if(newActiveLanguages[key]){
                newActiveCount++;
            }
        }

        onChange(newActiveLanguages);
        setActiveCount(newActiveCount);
    }, [inactiveLanguages]);

    const optionsRef = useRef(null);
    //Check of selection ref also ensures that we don't get an open and close double effect when clicking on the actual selection box
    const selectionRef = useRef(null);
    useEffect(() => {
        function handleClickOutside(event) {
            if(optionsRef.current && !optionsRef.current.contains(event.target)
                && selectionRef.current && !selectionRef.current.contains(event.target)) {
                updateOptionsVisibility(false);
            }
        }

        //Bind event listener
        document.addEventListener("mousedown", handleClickOutside);
        
        return () => {
            //Unbind event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const updateIsLanguageInactive = (language, isInactive) => {
        const newInactiveLanguages = {...inactiveLanguages};
        newInactiveLanguages[language] = isInactive;
        setInactiveLanguages(newInactiveLanguages);
    }

    window.addEventListener("resize", function() {
        if(displayOptions){
            if(!document.getElementById("language-filter").checkVisibility()) {
                updateOptionsVisibility(false);
            } else {
                checkDropdownAlignment();
            }
        }
    });

    const checkDropdownAlignment = () => {
        if(optionsRef.current){
            const oldIsOnScreenRight = isOnScreenRight;
            const newIsOnScreenRight = (optionsRef.current.parentElement.getBoundingClientRect().x + optionsRef.current.getBoundingClientRect().width) <= (window.innerWidth *.95);
            if(oldIsOnScreenRight !== newIsOnScreenRight){
                setIsOnScreenRight(newIsOnScreenRight);
            }

            const oldIsOnScreenLeft = isOnScreenLeft;
            const newIsOnScreenLeft = (optionsRef.current.parentElement.getBoundingClientRect().x + optionsRef.current.parentElement.getBoundingClientRect().width - optionsRef.current.getBoundingClientRect().width) >= (window.innerWidth *.05);
            if(oldIsOnScreenLeft !== newIsOnScreenLeft){
                setIsOnScreenLeft(newIsOnScreenLeft);
            }

            const oldDropdownAlignment = dropdownAlignment;
            const newDropdownAlignment = newIsOnScreenRight ? "right" : newIsOnScreenLeft ? "left" : "center";
            if(oldDropdownAlignment !== newDropdownAlignment){
                setDropdownAlignment(newDropdownAlignment);
            }
        }
    }

    return (
        <div id="language-filter" className="feature-filter-container">
            <div className="feature-filter-button-container">
                <button className="feature-filter-button" onClick={() => updateOptionsVisibility(!displayOptions)} ref={selectionRef}>
                    <span>
                        {"Languages " + (activeCount < allLanguages.length ? `(${activeCount})` : "")}
                    </span>
                    {(activeCount === allLanguages.length || displayOptions) ? (
                        <RxCaretDown className={"feature-filter-button-caret" + (displayOptions ? " rotated-feature-filter-button-caret" : "")}/>
                    ) : (
                        <IoMdClose className="feature-filter-button-close" onClick={(e) => {e.stopPropagation(); selectAll(e);}}/>
                    )}
                </button>
                <div className={"feature-filter-options-container dropdown-feature-filter-options-container " + (dropdownAlignment + "-aligned-feature-filter-options-container") + (displayOptions ? " feature-filter-options-container-displayed" : "")} ref={optionsRef}>
                    <div className="feature-filter-options-header">
                        Filter Selections
                    </div>
                    <div className="feature-filter-options-selectors">
                        {Array.from({ length: allLanguages.length }, (_, i) => (
                            <LanguageButton key={i} language={allLanguages[i]} isInactive={inactiveLanguages[allLanguages[i]]} onToggle={(isInactive) => updateIsLanguageInactive(allLanguages[i], isInactive)} />
                        ))}
                    </div>
                    <div className="feature-filter-options-button-row">
                        <div className="feature-filter-options-button-container">
                            <button className="feature-filter-select-all-button" onClick={(e) => selectAll(e)}>
                                Select All
                            </button>
                        </div>
                        <div className="feature-filter-options-button-container">
                            <button className="feature-filter-clear-button" onClick={(e) => clear(e)}>
                                Clear
                            </button>
                        </div>
                        <div className="feature-filter-options-button-container">
                            <button className="feature-filter-done-button" onClick={(e) => updateOptionsVisibility(false)}>
                                Done
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LanguageFilter;