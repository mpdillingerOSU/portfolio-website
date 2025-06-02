import React, { useEffect, useRef, useState } from 'react';
import LanguageButton from './LanguageButton';
import { RxCaretDown } from 'react-icons/rx';
import { IoMdClose } from "react-icons/io";
import { allLanguages } from '../data/ProjectData';

function LanguageFilter({activeLanguages, onChange}) {
    const [displayOptions, setDisplayOptions] = useState(false);
    const [inactiveLanguages, setInactiveLanguages] = useState({});
    const [activeCount, setActiveCount] = useState();

    useEffect(() => {
        const newInactiveLanguages = {};
        for(let i = 0; i < allLanguages.length; i++) {
            newInactiveLanguages[allLanguages[i]] = !activeLanguages[allLanguages[i]] ?? true;
        }
        setInactiveLanguages(newInactiveLanguages);
    }, []);

    const updateOptionsVisibility = (val) => {
        setDisplayOptions(val);
    }

    const clear = (e) => {
        e.preventDefault();

        const newInactiveLanguages = {};
        for (const key in activeLanguages) {
            newInactiveLanguages[key] = true;
        }
        setInactiveLanguages(newInactiveLanguages);
    }

    const selectAll = (e) => {
        e.preventDefault();

        const newInactiveLanguages = {};
        for (const key in activeLanguages) {
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

    return (
        <div className="feature-filter-container">
            <span className="feature-filter-lead-text">Languages</span>
            <div className="feature-filter-button-container">
                <button className="feature-filter-button" onClick={() => updateOptionsVisibility(!displayOptions)} ref={selectionRef}>
                    <span>
                        {"Languages " + (activeCount < allLanguages.length ? `(${activeCount})` : "")}
                    </span>
                    {(activeCount === allLanguages.length || displayOptions) ? (
                        <RxCaretDown className={"feature-filter-button-caret" + (displayOptions ? " rotated-feature-filter-button-caret" : "")}/>
                    ) : (
                        <IoMdClose className="feature-filter-button-select-all" onClick={(e) => {e.stopPropagation(); selectAll(e);}}/>
                    )}
                </button>
                <div className={"feature-filter-options-container" + (displayOptions ? " feature-filter-options-container-displayed" : "")} ref={optionsRef}>
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