import React, { useEffect, useRef, useState } from 'react';
import SkillButton from './SkillButton';
import { RxCaretDown } from 'react-icons/rx';
import { IoMdClose } from "react-icons/io";
import { allSkills } from '../data/ProjectData';

function SkillFilter({activeSkills, onChange}) {
    const [displayOptions, setDisplayOptions] = useState(false);
    const [isOnScreenRight, setIsOnScreenRight] = useState(false);
    const [inactiveSkills, setInactiveSkills] = useState({});
    const [activeCount, setActiveCount] = useState();

    const shiftSkills = () => {
        const newInactiveSkills = {};
        for(let i = 0; i < allSkills.length; i++) {
            newInactiveSkills[allSkills[i]] = !activeSkills[allSkills[i]] ?? true;
        }
        setInactiveSkills(newInactiveSkills);
    }

    useEffect(() => {
        shiftSkills();
        checkIsOnScreenRight();
    }, []);

    useEffect(() => {
        for(let i = 0; i < allSkills.length; i++) {
            if(inactiveSkills[allSkills[i]] === activeSkills[allSkills[i]]){
                shiftSkills();
                break;
            }
        }
    }, [activeSkills]);

    const updateOptionsVisibility = (isVisible) => {
        setDisplayOptions(isVisible);
        if(isVisible){
            checkIsOnScreenRight();
        } else {
            setIsOnScreenRight(false);
        }
    }

    const clear = (e) => {
        e.preventDefault();

        const newInactiveSkills = {};
        for (const key in activeSkills) {
            newInactiveSkills[key] = true;
        }
        setInactiveSkills(newInactiveSkills);
    }

    const selectAll = (e) => {
        e.preventDefault();

        const newInactiveSkills = {};
        for (const key in activeSkills) {
            newInactiveSkills[key] = false;
        }
        setInactiveSkills(newInactiveSkills);
    }
    
    useEffect(() => {
        const newActiveSkills = {};
        let newActiveCount = 0;

        for(const key in inactiveSkills) {
            newActiveSkills[key] = !inactiveSkills[key];
            if(newActiveSkills[key]){
                newActiveCount++;
            }
        }

        onChange(newActiveSkills);
        setActiveCount(newActiveCount);
    }, [inactiveSkills]);

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

    const updateIsSkillInactive = (skill, isInactive) => {
        const newInactiveSkills = {...inactiveSkills};
        newInactiveSkills[skill] = isInactive;
        setInactiveSkills(newInactiveSkills);
    }
    
    window.addEventListener("resize", function() {
        if(displayOptions){
            if(!document.getElementById("skill-filter").checkVisibility()) {
                updateOptionsVisibility(false);
            } else {
                checkIsOnScreenRight();
            }
        }
    });

    const checkIsOnScreenRight = () => {
        if(optionsRef.current){
            const oldIsOnScreenRight = isOnScreenRight;
            const newIsOnScreenRight = (optionsRef.current.parentElement.getBoundingClientRect().x + optionsRef.current.getBoundingClientRect().width) <= (window.innerWidth *.95);

            if(oldIsOnScreenRight !== newIsOnScreenRight){
                setIsOnScreenRight(newIsOnScreenRight);
            }
        }
    }

    return (
        <div id="skill-filter" className="feature-filter-container">
            <span className="feature-filter-lead-text">Filters</span>
            <div className="feature-filter-button-container">
                <button className="feature-filter-button" onClick={() => updateOptionsVisibility(!displayOptions)} ref={selectionRef}>
                    <span>
                        {"Skills " + (activeCount < allSkills.length ? `(${activeCount})` : "")}
                    </span>
                    {(activeCount === allSkills.length || displayOptions) ? (
                        <RxCaretDown className={"feature-filter-button-caret" + (displayOptions ? " rotated-feature-filter-button-caret" : "")}/>
                    ) : (
                        <IoMdClose className="feature-filter-button-select-all" onClick={(e) => {e.stopPropagation(); selectAll(e);}}/>
                    )}
                </button>
                <div className={"feature-filter-options-container" + (displayOptions ? " feature-filter-options-container-displayed" : "") + (isOnScreenRight ? "" : " left-aligned-feature-filter-options-container")} ref={optionsRef}>
                    <div className="feature-filter-options-header">
                        Filter Selections
                    </div>
                    <div className="feature-filter-options-selectors">
                        {Array.from({ length: allSkills.length }, (_, i) => (
                            <SkillButton key={i} skill={allSkills[i]} isInactive={inactiveSkills[allSkills[i]]} onToggle={(isInactive) => updateIsSkillInactive(allSkills[i], isInactive)} />
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

export default SkillFilter;