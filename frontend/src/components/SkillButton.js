import React from 'react';
import { FaCheck } from "react-icons/fa";

function LanguageButton({skill, isInactive, onToggle}) {    
    const toggleIsInactive = (e) => {
        e.preventDefault();

        if(onToggle !== undefined){
            const newIsInactive = !isInactive;
            onToggle(newIsInactive);
        }
    }

    return (
        <div className="skill-button-container">
            <button className={"skill-button-checkbox" + (isInactive ? "" : " skill-button-checkbox-checked")} onClick={(e) => toggleIsInactive(e)} >
                <FaCheck className="skill-button-check-icon"/>
            </button>
            <div className="skill-button-text">
                {skill}
            </div>
        </div>
    );
}

export default LanguageButton;