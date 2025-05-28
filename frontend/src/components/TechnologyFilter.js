import React, { useEffect, useRef, useState } from 'react';
import TechnologyButton from './TechnologyButton';
import { RxCaretDown } from 'react-icons/rx';
import { IoMdClose } from "react-icons/io";

function TechnologyFilter({activeTechnologies, onChange}) {
    const [displayOptions, setDisplayOptions] = useState(false);
    const [isReactInactive, setIsReactInactive] = useState(!activeTechnologies["React"] ?? true);
    const [isNextInactive, setIsNextInactive] = useState(!activeTechnologies["Next.js"] ?? true);
    const [isSpringInactive, setIsSpringInactive] = useState(!activeTechnologies["Spring"] ?? true);
    const [isVsCodeInactive, setIsVsCodeInactive] = useState(!activeTechnologies["VS Code"] ?? true);
    const [isFlutterInactive, setIsFlutterInactive] = useState(!activeTechnologies["Flutter"] ?? true);
    const [isIntelliJInactive, setIsIntelliJInactive] = useState(!activeTechnologies["IntelliJ"] ?? true);
    const [isMySqlInactive, setIsMySqlInactive] = useState(!activeTechnologies["MySQL"] ?? true);
    const [isGitInactive, setIsGitInactive] = useState(!activeTechnologies["Git"] ?? true);
    const [activeCount, setActiveCount] = useState(8);

    const updateOptionsVisibility = (val) => {
        setDisplayOptions(val);
    }

    const clear = (e) => {
        e.preventDefault();

        setIsReactInactive(true);
        setIsNextInactive(true);
        setIsSpringInactive(true);
        setIsVsCodeInactive(true);
        setIsFlutterInactive(true);
        setIsIntelliJInactive(true);
        setIsMySqlInactive(true);
        setIsGitInactive(true);
    }

    const selectAll = (e) => {
        e.preventDefault();

        setIsReactInactive(false);
        setIsNextInactive(false);
        setIsSpringInactive(false);
        setIsVsCodeInactive(false);
        setIsFlutterInactive(false);
        setIsIntelliJInactive(false);
        setIsMySqlInactive(false);
        setIsGitInactive(false);
    }
    
    useEffect(() => {
        onChange(
            {
                "React": !isReactInactive,
                "Next.js": !isNextInactive,
                "Spring": !isSpringInactive,
                "VS Code": !isVsCodeInactive,
                "Flutter": !isFlutterInactive,
                "IntelliJ": !isIntelliJInactive,
                "MySQL": !isMySqlInactive,
                "Git": !isGitInactive
            }
        );

        let newActiveCount = 8;

        if(isReactInactive){
            newActiveCount--;
        }

        if(isNextInactive){
            newActiveCount--;
        }

        if(isSpringInactive){
            newActiveCount--;
        }

        if(isVsCodeInactive){
            newActiveCount--;
        }

        if(isFlutterInactive){
            newActiveCount--;
        }

        if(isIntelliJInactive){
            newActiveCount--;
        }

        if(isMySqlInactive){
            newActiveCount--;
        }

        if(isGitInactive){
            newActiveCount--;
        }

        setActiveCount(newActiveCount);

    }, [isReactInactive, isNextInactive, isSpringInactive, isVsCodeInactive, isFlutterInactive, isIntelliJInactive, isMySqlInactive, isGitInactive]);

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

    return (
        <div className="feature-filter-container">
            <span className="feature-filter-lead-text">Technologies</span>
            <div className="feature-filter-button-container">
                <button className="feature-filter-button" onClick={() => updateOptionsVisibility(!displayOptions)} ref={selectionRef}>
                    <span>
                        {"Technologies " + (activeCount < 8 ? `(${activeCount})` : "")}
                    </span>
                    {(activeCount === 8 || displayOptions) ? (
                        <RxCaretDown className={"feature-filter-button-caret" + (displayOptions ? " rotated-feature-filter-button-caret" : "")}/>
                    ) : (
                        <IoMdClose className="feature-filter-button-select-all" onClick={(e) => {e.stopPropagation(); selectAll(e);}}/>
                    )}
                </button>
                <div className={"feature-filter-options-container" + (displayOptions ? " feature-filter-options-container-displayed" : "")} ref={optionsRef}>
                    <div className="feature-filter-options-header">
                        Selections
                    </div>
                    <div className="feature-filter-options-selectors">
                        <TechnologyButton technology={"React"} isInactive={isReactInactive} onToggle={(isInactive) => setIsReactInactive(isInactive)} />
                        <TechnologyButton technology={"Next.js"} isInactive={isNextInactive} onToggle={(isInactive) => setIsNextInactive(isInactive)} />
                        <TechnologyButton technology={"Spring"} isInactive={isSpringInactive} onToggle={(isInactive) => setIsSpringInactive(isInactive)} />
                        <TechnologyButton technology={"VS Code"} isInactive={isVsCodeInactive} onToggle={(isInactive) => setIsVsCodeInactive(isInactive)} />
                        <TechnologyButton technology={"Flutter"} isInactive={isFlutterInactive} onToggle={(isInactive) => setIsFlutterInactive(isInactive)} />
                        <TechnologyButton technology={"IntelliJ"} isInactive={isIntelliJInactive} onToggle={(isInactive) => setIsIntelliJInactive(isInactive)} />
                        <TechnologyButton technology={"MySQL"} isInactive={isMySqlInactive} onToggle={(isInactive) => setIsMySqlInactive(isInactive)} />
                        <TechnologyButton technology={"Git"} isInactive={isGitInactive} onToggle={(isInactive) => setIsGitInactive(isInactive)} />
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