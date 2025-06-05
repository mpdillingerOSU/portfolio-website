import React, { useEffect, useRef, useState } from 'react';
import TechnologyButton from './TechnologyButton';
import { RxCaretDown } from 'react-icons/rx';
import { IoMdClose } from "react-icons/io";
import { allTechnologies } from '../data/ProjectData';

function TechnologyFilter({activeTechnologies, onChange}) {
    const [displayOptions, setDisplayOptions] = useState(false);
    const [inactiveTechnologies, setInactiveTechnologies] = useState({});
    const [activeCount, setActiveCount] = useState();

    useEffect(() => {
        const newInactiveTechnologies = {};
        for(let i = 0; i < allTechnologies.length; i++) {
            newInactiveTechnologies[allTechnologies[i]] = !activeTechnologies[allTechnologies[i]] ?? true;
        }
        setInactiveTechnologies(newInactiveTechnologies);
    }, []);

    const updateOptionsVisibility = (val) => {
        setDisplayOptions(val);
    }

    const clear = (e) => {
        e.preventDefault();

        const newInactiveTechnologies = {};
        for (const key in activeTechnologies) {
            newInactiveTechnologies[key] = true;
        }
        setInactiveTechnologies(newInactiveTechnologies);
    }

    const selectAll = (e) => {
        e.preventDefault();

        const newInactiveTechnologies = {};
        for (const key in activeTechnologies) {
            newInactiveTechnologies[key] = false;
        }
        setInactiveTechnologies(newInactiveTechnologies);
    }
    
    useEffect(() => {
        const newActiveTechnologies = {};
        let newActiveCount = 0;

        for(const key in inactiveTechnologies) {
            newActiveTechnologies[key] = !inactiveTechnologies[key];
            if(newActiveTechnologies[key]){
                newActiveCount++;
            }
        }

        onChange(newActiveTechnologies);
        setActiveCount(newActiveCount);
    }, [inactiveTechnologies]);

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

    const updateIsTechnologyInactive = (technology, isInactive) => {
        const newInactiveTechnologies = {...inactiveTechnologies};
        newInactiveTechnologies[technology] = isInactive;
        setInactiveTechnologies(newInactiveTechnologies);
    }

    return (
        <div className="feature-filter-container">
            <span className="feature-filter-lead-text">Technologies</span>
            <div className="feature-filter-button-container">
                <button className="feature-filter-button" onClick={() => updateOptionsVisibility(!displayOptions)} ref={selectionRef}>
                    <span>
                        {"Technologies " + (activeCount < allTechnologies.length ? `(${activeCount})` : "")}
                    </span>
                    {(activeCount === allTechnologies.length || displayOptions) ? (
                        <RxCaretDown className={"feature-filter-button-caret" + (displayOptions ? " rotated-feature-filter-button-caret" : "")}/>
                    ) : (
                        <IoMdClose className="feature-filter-button-select-all" onClick={(e) => {e.stopPropagation(); selectAll(e);}}/>
                    )}
                </button>
                <div className={"feature-filter-options-container technologies-filter-options-container" + (displayOptions ? " feature-filter-options-container-displayed" : "")} ref={optionsRef}>
                    <div className="feature-filter-options-header">
                        Filter Selections
                    </div>
                    <div className="feature-filter-options-selectors">
                        {Array.from({ length: allTechnologies.length }, (_, i) => (
                            <TechnologyButton key={i} technology={allTechnologies[i]} isInactive={inactiveTechnologies[allTechnologies[i]]} onToggle={(isInactive) => updateIsTechnologyInactive(allTechnologies[i], isInactive)} />
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

export default TechnologyFilter;