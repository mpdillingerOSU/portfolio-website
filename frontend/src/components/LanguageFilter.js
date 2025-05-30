import React, { useEffect, useRef, useState } from 'react';
import LanguageButton from './LanguageButton';
import { RxCaretDown } from 'react-icons/rx';
import { IoMdClose } from "react-icons/io";

function LanguageFilter({activeLanguages, onChange}) {
    const [displayOptions, setDisplayOptions] = useState(false);
    const [isHtmlInactive, setIsHtmlInactive] = useState(!activeLanguages["HTML"] ?? true);
    const [isCssInactive, setIsCssInactive] = useState(!activeLanguages["CSS"] ?? true);
    const [isJavascriptInactive, setIsJavascriptInactive] = useState(!activeLanguages["Javascript"] ?? true);
    const [isJavaInactive, setIsJavaInactive] = useState(!activeLanguages["Java"] ?? true);
    const [isSqlInactive, setIsSqlInactive] = useState(!activeLanguages["SQL"] ?? true);
    const [isDartInactive, setIsDartInactive] = useState(!activeLanguages["Dart"] ?? true);
    const [activeCount, setActiveCount] = useState(6);

    const updateOptionsVisibility = (val) => {
        setDisplayOptions(val);
    }

    const clear = (e) => {
        e.preventDefault();

        setIsHtmlInactive(true);
        setIsCssInactive(true);
        setIsJavascriptInactive(true);
        setIsJavaInactive(true);
        setIsSqlInactive(true);
        setIsDartInactive(true);
    }

    const selectAll = (e) => {
        e.preventDefault();

        setIsHtmlInactive(false);
        setIsCssInactive(false);
        setIsJavascriptInactive(false);
        setIsJavaInactive(false);
        setIsSqlInactive(false);
        setIsDartInactive(false);
    }
    
    useEffect(() => {
        onChange(
            {
                "HTML": !isHtmlInactive,
                "CSS": !isCssInactive,
                "Javascript": !isJavascriptInactive,
                "Java": !isJavaInactive,
                "SQL": !isSqlInactive,
                "Dart": !isDartInactive
            }
        );

        let newActiveCount = 6;

        if(isHtmlInactive){
            newActiveCount--;
        }

        if(isCssInactive){
            newActiveCount--;
        }

        if(isJavascriptInactive){
            newActiveCount--;
        }

        if(isJavaInactive){
            newActiveCount--;
        }

        if(isSqlInactive){
            newActiveCount--;
        }

        if(isDartInactive){
            newActiveCount--;
        }

        setActiveCount(newActiveCount);

    }, [isHtmlInactive, isCssInactive, isJavascriptInactive, isJavaInactive, isSqlInactive, isDartInactive]);

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
            <span className="feature-filter-lead-text">Languages</span>
            <div className="feature-filter-button-container">
                <button className="feature-filter-button" onClick={() => updateOptionsVisibility(!displayOptions)} ref={selectionRef}>
                    <span>
                        {"Languages " + (activeCount < 6 ? `(${activeCount})` : "")}
                    </span>
                    {(activeCount === 6 || displayOptions) ? (
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
                        <LanguageButton language={"HTML"} isInactive={isHtmlInactive} onToggle={(isInactive) => setIsHtmlInactive(isInactive)} />
                        <LanguageButton language={"CSS"} isInactive={isCssInactive} onToggle={(isInactive) => setIsCssInactive(isInactive)} />
                        <LanguageButton language={"Javascript"} isInactive={isJavascriptInactive} onToggle={(isInactive) => setIsJavascriptInactive(isInactive)} />
                        <LanguageButton language={"Java"} isInactive={isJavaInactive} onToggle={(isInactive) => setIsJavaInactive(isInactive)} />
                        <LanguageButton language={"SQL"} isInactive={isSqlInactive} onToggle={(isInactive) => setIsSqlInactive(isInactive)} />
                        <LanguageButton language={"Dart"} isInactive={isDartInactive} onToggle={(isInactive) => setIsDartInactive(isInactive)} />
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