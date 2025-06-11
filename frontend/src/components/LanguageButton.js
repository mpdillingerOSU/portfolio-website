import React from 'react';
import { FaHtml5, FaCss3Alt, FaJava, FaJsSquare, FaDatabase, FaQuestion } from "react-icons/fa";
import { SiDart } from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";

function LanguageButton({language, isInactive, onToggle}) {    
    const toggleIsInactive = (e) => {
        e.preventDefault();

        if(onToggle !== undefined){
            const newIsInactive = !isInactive;
            onToggle(newIsInactive);
        }
    }

    const getColor = (language) => {
        if(language === "HTML"){
            return "#ff5700"
        } else if(language === "CSS"){
            return "#229df5"
        } else if(language === "Javascript"){
            return "#ffd600"
        } else if(language === "Java"){
            return "#db380e"
        } else if(language === "SQL"){
            return "#00bdf2"
        } else if(language === "Dart"){
            return "#2cb7f6"
        } else if(language === "C#"){
            return "#6e4ac7"
        } else if(language === "HLSL"){
            return "#136ad4"
        }

        return "red";
    }

    const getIcon = (language) => {
        if(language === "HTML"){
            return <FaHtml5 className="project-feature-icon" />
        } else if(language === "CSS"){
            return <FaCss3Alt className="project-feature-icon" />
        } else if(language === "Javascript"){
            return <FaJsSquare className="project-feature-icon" />
        } else if(language === "Java"){
            return <FaJava className="project-feature-icon" />
        } else if(language === "SQL"){
            return <FaDatabase className="project-feature-icon" />
        } else if(language === "Dart"){
            return <SiDart className="project-feature-icon" />
        } else if(language === "C#"){
            return <TbBrandCSharp className="project-feature-icon" />
        } else if(language === "HLSL"){
            return <span className="project-feature-text-icon">HLSL</span>
        }

        return <FaQuestion className="project-feature-icon" />
    }

    return (
        <div className="project-feature-container">
            <div className="project-feature" style={{backgroundColor: getColor(language), filter: isInactive ? "brightness(50%)" : undefined, cursor: onToggle !== undefined ? "pointer" : undefined}} onClick={(e) => toggleIsInactive(e)} >
                {getIcon(language)}
            </div>
            <div className="project-feature-popup-container">
                <div className="project-feature-popup">
                    {language}
                </div>
            </div>
        </div>
    );
}

export default LanguageButton;