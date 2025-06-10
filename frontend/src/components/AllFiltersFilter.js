import React, { useEffect, useRef, useState } from 'react';
import { BsSliders } from "react-icons/bs";
import SkillButton from './SkillButton';
import LanguageButton from './LanguageButton';
import TechnologyButton from './TechnologyButton';
import { allSkills, allLanguages, allTechnologies } from '../data/ProjectData';

function AllFiltersFilter({activeSkills, activeLanguages, activeTechnologies, onChange}) {
    const [displayOptions, setDisplayOptions] = useState(false);
    const [inactiveSkills, setInactiveSkills] = useState({});
    const [inactiveLanguages, setInactiveLanguages] = useState({});
    const [inactiveTechnologies, setInactiveTechnologies] = useState({});
    const [activeSkillCount, setActiveSkillCount] = useState(allSkills.length);
    const [activeLanguageCount, setActiveLanguageCount] = useState(allLanguages.length);
    const [activeTechnologyCount, setActiveTechnologyCount] = useState(allTechnologies.length);
    const [activeFiltersCount, setActiveFiltersCount] = useState(0);
    const [displayedFilter, setDisplayedFilter] = useState(0);

    const shiftSkills = () => {
        const newInactiveSkills = {};
        for(let i = 0; i < allSkills.length; i++) {
            newInactiveSkills[allSkills[i]] = !activeSkills[allSkills[i]] ?? true;
        }
        setInactiveSkills(newInactiveSkills);
    }

    const shiftLanguages = () => {
        const newInactiveLanguages = {};
        for(let i = 0; i < allLanguages.length; i++) {
            newInactiveLanguages[allLanguages[i]] = !activeLanguages[allLanguages[i]] ?? true;
        }
        setInactiveLanguages(newInactiveLanguages);
    }

    const shiftTechnologies = () => {
        const newInactiveTechnologies = {};
        for(let i = 0; i < allTechnologies.length; i++) {
            newInactiveTechnologies[allTechnologies[i]] = !activeTechnologies[allTechnologies[i]] ?? true;
        }
        setInactiveTechnologies(newInactiveTechnologies);
    }

    useEffect(() => {
        shiftSkills();
        shiftLanguages();
        shiftTechnologies();
    }, []);

    useEffect(() => {
        for(let i = 0; i < allSkills.length; i++) {
            if(inactiveSkills[allSkills[i]] === activeSkills[allSkills[i]]){
                shiftSkills();
                break;
            }
        }
    }, [activeSkills]);

    useEffect(() => {
        for(let i = 0; i < allLanguages.length; i++) {
            if(inactiveLanguages[allLanguages[i]] === activeLanguages[allLanguages[i]]){
                shiftLanguages();
                break;
            }
        }
    }, [activeLanguages]);

    useEffect(() => {
        for(let i = 0; i < allTechnologies.length; i++) {
            if(inactiveTechnologies[allTechnologies[i]] === activeTechnologies[allTechnologies[i]]){
                shiftTechnologies();
                break;
            }
        }
    }, [activeTechnologies]);

    const updateOptionsVisibility = (isVisible) => {
        setDisplayOptions(isVisible);
        setDisplayedFilter(0);
    }

    const clearSkills = (e) => {
        e.preventDefault();

        if(activeSkillCount !== 0){
            const newInactiveSkills = {};
            for(const key in activeSkills) {
                newInactiveSkills[key] = true;
            }
            setInactiveSkills(newInactiveSkills);
        }
    }

    const clearLanguages = (e) => {
        e.preventDefault();

        if(activeLanguageCount !== 0){
            const newInactiveLanguages = {};
            for(const key in activeLanguages) {
                newInactiveLanguages[key] = true;
            }
            setInactiveLanguages(newInactiveLanguages);
        }
    }

    const clearTechnologies = (e) => {
        e.preventDefault();

        if(activeTechnologyCount !== 0){
            const newInactiveTechnologies = {};
            for(const key in activeTechnologies) {
                newInactiveTechnologies[key] = true;
            }
            setInactiveTechnologies(newInactiveTechnologies);
        }
    }

    const selectAllSkills = (e) => {
        e.preventDefault();

        if(activeSkillCount !== allSkills.length){
            const newInactiveSkills = {};
            for(const key in activeSkills) {
                newInactiveSkills[key] = false;
            }
            setInactiveSkills(newInactiveSkills);
        }
    }

    const selectAllLanguages = (e) => {
        e.preventDefault();

        if(activeLanguageCount !== allLanguages.length){
            const newInactiveLanguages = {};
            for(const key in activeLanguages) {
                newInactiveLanguages[key] = false;
            }
            setInactiveLanguages(newInactiveLanguages);
        }
    }

    const selectAllTechnologies = (e) => {
        e.preventDefault();

        if(activeTechnologyCount !== allTechnologies.length){
            const newInactiveTechnologies = {};
            for(const key in activeTechnologies) {
                newInactiveTechnologies[key] = false;
            }
            setInactiveTechnologies(newInactiveTechnologies);
        }
    }
    
    useEffect(() => {
        let newActiveFilters = 0;

        const newActiveSkills = {};
        let newActiveSkillCount = 0;
        for(const key in inactiveSkills) {
            newActiveSkills[key] = !inactiveSkills[key];
            if(newActiveSkills[key]){
                newActiveSkillCount++;
            }
        }
        if(newActiveSkillCount !== allSkills.length){
            newActiveFilters++;
        }

        const newActiveLanguages = {};
        let newActiveLanguageCount = 0;
        for(const key in inactiveLanguages) {
            newActiveLanguages[key] = !inactiveLanguages[key];
            if(newActiveLanguages[key]){
                newActiveLanguageCount++;
            }
        }
        if(newActiveLanguageCount !== allLanguages.length){
            newActiveFilters++;
        }

        const newActiveTechnologies = {};
        let newActiveTechnologyCount = 0;
        for(const key in inactiveTechnologies) {
            newActiveTechnologies[key] = !inactiveTechnologies[key];
            if(newActiveTechnologies[key]){
                newActiveTechnologyCount++;
            }
        }
        if(newActiveTechnologyCount !== allTechnologies.length){
            newActiveFilters++;
        }

        onChange({
            "skills": newActiveSkills,
            "languages": newActiveLanguages,
            "technologies": newActiveTechnologies
        });
        setActiveSkillCount(newActiveSkillCount);
        setActiveLanguageCount(newActiveLanguageCount);
        setActiveTechnologyCount(newActiveTechnologyCount);
        setActiveFiltersCount(newActiveFilters);
    }, [inactiveSkills, inactiveLanguages, inactiveTechnologies]);

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

    const updateIsLanguageInactive = (language, isInactive) => {
        const newInactiveLanguages = {...inactiveLanguages};
        newInactiveLanguages[language] = isInactive;
        setInactiveLanguages(newInactiveLanguages);
    }

    const updateIsTechnologyInactive = (technology, isInactive) => {
        const newInactiveTechnologies = {...inactiveTechnologies};
        newInactiveTechnologies[technology] = isInactive;
        setInactiveTechnologies(newInactiveTechnologies);
    }

    const updateDisplayedFilter = (e, index) => {
        e.preventDefault();

        setDisplayedFilter(index);
    }

    return (
        <>
            <div id="all-filters-filter" className="all-features-filter">
                <div className="feature-filter-container">
                    <span className="feature-filter-lead-text">Filters</span>
                    <div className="feature-filter-button-container">
                        <button className="feature-filter-button" onClick={() => updateOptionsVisibility(!displayOptions)} ref={selectionRef}>
                            <div className="all-filters-button-text">
                                <BsSliders />
                                <span>
                                    All Filters
                                </span>
                            </div>
                            {activeFiltersCount !== 0 && (
                                <div className="all-filters-count-container">
                                    <div className="all-filters-count">
                                        {activeFiltersCount}
                                    </div>
                                </div>
                            )}
                        </button>
                    </div>
                </div>
            </div>
            {displayOptions && (
                <div className="overlay-background">
                    <div className="feature-filter-options-container feature-filter-options-container-displayed overlayed-feature-filter-options-container" ref={optionsRef}>
                        <div className="feature-tab-bar">
                            <button className={"feature-tab-button" + (displayedFilter !== 0 ? " feature-tab-button-inactive" : "")} onClick={(e) => {updateDisplayedFilter(e, 0)}}>
                                Skills
                            </button>
                            <button className={"feature-tab-button" + (displayedFilter !== 1 ? " feature-tab-button-inactive" : "")} onClick={(e) => {updateDisplayedFilter(e, 1)}}>
                                Languages
                            </button>
                            <button className={"feature-tab-button" + (displayedFilter !== 2 ? " feature-tab-button-inactive" : "")} onClick={(e) => {updateDisplayedFilter(e, 2)}}>
                                Technologies
                            </button>
                        </div>
                        {displayedFilter === 1 ? (
                            <>
                                <div className="feature-filter-options-selectors">
                                    {Array.from({ length: allLanguages.length }, (_, i) => (
                                        <LanguageButton key={i} language={allLanguages[i]} isInactive={inactiveLanguages[allLanguages[i]]} onToggle={(isInactive) => updateIsLanguageInactive(allLanguages[i], isInactive)} />
                                    ))}
                                </div>
                                <div className="feature-filter-options-button-row">
                                    <div className="feature-filter-options-button-container">
                                        <button className={"feature-filter-select-all-button" + (activeLanguageCount === allLanguages.length ? " feature-filter-inactive-text-button" : "")} onClick={(e) => selectAllLanguages(e)}>
                                            Select All
                                        </button>
                                    </div>
                                    <div className="feature-filter-options-button-container">
                                        <button className={"feature-filter-clear-button" + (activeLanguageCount === 0 ? " feature-filter-inactive-text-button" : "")} onClick={(e) => clearLanguages(e)}>
                                            Clear
                                        </button>
                                    </div>
                                    <div className="feature-filter-options-button-container">
                                        <button className="feature-filter-done-button" onClick={(e) => updateOptionsVisibility(false)}>
                                            Done
                                        </button>
                                    </div>
                                </div>
                            </>
                        ) : displayedFilter === 2 ? (
                            <>
                                <div className="feature-filter-options-selectors">
                                    {Array.from({ length: allTechnologies.length }, (_, i) => (
                                        <TechnologyButton key={i} technology={allTechnologies[i]} isInactive={inactiveTechnologies[allTechnologies[i]]} onToggle={(isInactive) => updateIsTechnologyInactive(allTechnologies[i], isInactive)} />
                                    ))}
                                </div>
                                <div className="feature-filter-options-button-row">
                                    <div className="feature-filter-options-button-container">
                                        <button className={"feature-filter-select-all-button" + (activeTechnologyCount === allTechnologies.length ? " feature-filter-inactive-text-button" : "")} onClick={(e) => selectAllTechnologies(e)}>
                                            Select All
                                        </button>
                                    </div>
                                    <div className="feature-filter-options-button-container">
                                        <button className={"feature-filter-clear-button" + (activeTechnologyCount === 0 ? " feature-filter-inactive-text-button" : "")} onClick={(e) => clearTechnologies(e)}>
                                            Clear
                                        </button>
                                    </div>
                                    <div className="feature-filter-options-button-container">
                                        <button className="feature-filter-done-button" onClick={(e) => updateOptionsVisibility(false)}>
                                            Done
                                        </button>
                                    </div>
                                </div>
                            </>
                        ) : (
                            <>
                                <div className="feature-filter-options-selectors">
                                    {Array.from({ length: allSkills.length }, (_, i) => (
                                        <SkillButton key={i} skill={allSkills[i]} isInactive={inactiveSkills[allSkills[i]]} onToggle={(isInactive) => updateIsSkillInactive(allSkills[i], isInactive)} />
                                    ))}
                                </div>
                                <div className="feature-filter-options-button-row">
                                    <div className="feature-filter-options-button-container">
                                        <button className={"feature-filter-select-all-button" + (activeSkillCount === allSkills.length ? " feature-filter-inactive-text-button" : "")} onClick={(e) => selectAllSkills(e)}>
                                            Select All
                                        </button>
                                    </div>
                                    <div className="feature-filter-options-button-container">
                                        <button className={"feature-filter-clear-button" + (activeSkillCount === 0 ? " feature-filter-inactive-text-button" : "")} onClick={(e) => clearSkills(e)}>
                                            Clear
                                        </button>
                                    </div>
                                    <div className="feature-filter-options-button-container">
                                        <button className="feature-filter-done-button" onClick={(e) => updateOptionsVisibility(false)}>
                                            Done
                                        </button>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            )}
        </>
    );
}

export default AllFiltersFilter;