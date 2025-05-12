import React from 'react';
import { FaHtml5, FaCss3Alt, FaJava, FaJsSquare, FaDatabase, FaQuestion } from "react-icons/fa";
import { SiDart } from "react-icons/si";

function LanguageIcon({language}) {
    const getLanguageColor = (language) => {
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
        }

        return "red";
    }

    const getLanguageIcon = (language) => {
        if(language === "HTML"){
            return <FaHtml5 className="project-language-icon" />
        } else if(language === "CSS"){
            return <FaCss3Alt className="project-language-icon" />
        } else if(language === "Javascript"){
            return <FaJsSquare className="project-language-icon" />
        } else if(language === "Java"){
            return <FaJava className="project-language-icon" />
        } else if(language === "SQL"){
            return <FaDatabase className="project-language-icon" />
        } else if(language === "Dart"){
            return <SiDart className="project-language-icon" />
        }

        return <FaQuestion className="project-language-icon" />
    }

    return (
        <div className="project-language-container">
            <div className="project-language" style={{backgroundColor: getLanguageColor(language)}}>
                {getLanguageIcon(language)}
            </div>
            <div className="project-language-popup-container">
                <div className="project-language-popup">{language}</div>
            </div>
        </div>
    );
}

export default LanguageIcon;