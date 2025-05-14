import React, { useEffect, useState } from 'react';
import { FaReact, FaBootstrap, FaNodeJs, FaUnity, FaQuestion, FaGitAlt } from "react-icons/fa";
import { SiNextdotjs, SiExpress, SiSpring, SiFlutter, SiIntellijidea, SiMongodb } from "react-icons/si";
import { BiLogoVisualStudio } from "react-icons/bi";
import { DiVisualstudio, DiMysql } from "react-icons/di";

function TechnologyButton({technology, onToggle}) {
    const [isInactive, setIsInactive] = useState(false);
    
    const toggleIsInactive = (e) => {
        e.preventDefault();

        if(onToggle !== undefined){
            const newIsInactive = !isInactive;
            setIsInactive(newIsInactive);
        }
    }

    useEffect(() => {
        if(onToggle !== undefined){
            onToggle(isInactive);
        }
    }, [isInactive]); 

    const getColor = (language) => {
        if(language === "React"){
            return "#00ccff"
        } else if(language === "Next.js"){
            return "#808080"
        } else if(language === "Bootstrap"){
            return "#7508f6"
        } else if(language === "Node.js"){
            return "#80bd01"
        } else if(language === "Express"){
            return "#4d4d4d"
        } else if(language === "Spring"){
            return "#6db53d"
        } else if(language === "VS Code"){
            return "#1dabf2"
        } else if(language === "Flutter"){
            return "#43d2fd"
        } else if(language === "IntelliJ"){
            return "#fe2d5d"
        } else if(language === "Unity"){
            return "#808080"
        } else if(language === "VS"){
            return "#8f5bd4"
        } else if(language === "MySQL"){
            return "#00608c"
        } else if(language === "MongoDB"){
            return "#71b35e"
        } else if(language === "Git"){
            return "#de4c36"
        }

        return "red";
    }

    const getIcon = (language) => {
        if(language === "React"){
            return <FaReact className="project-feature-icon" />
        } else if(language === "Next.js"){
            return <SiNextdotjs className="project-feature-icon" />
        } else if(language === "Bootstrap"){
            return <FaBootstrap className="project-feature-icon" />
        } else if(language === "Node.js"){
            return <FaNodeJs className="project-feature-icon" />
        } else if(language === "Express"){
            return <SiExpress className="project-feature-icon" />
        } else if(language === "Spring"){
            return <SiSpring className="project-feature-icon" />
        } else if(language === "VS Code"){
            return <BiLogoVisualStudio className="project-feature-icon" />
        } else if(language === "Flutter"){
            return <SiFlutter className="project-feature-icon" />
        } else if(language === "IntelliJ"){
            return <SiIntellijidea className="project-feature-icon" />
        } else if(language === "Unity"){
            return <FaUnity className="project-feature-icon" />
        } else if(language === "VS"){
            return <DiVisualstudio className="project-feature-icon" />
        } else if(language === "MySQL"){
            return <DiMysql className="project-feature-icon" />
        } else if(language === "MongoDB"){
            return <SiMongodb className="project-feature-icon" />
        } else if(language === "Git"){
            return <FaGitAlt className="project-feature-icon" />
        }

        return <FaQuestion className="project-feature-icon" />
    }

    return (
        <div className="project-feature-container" onClick={(e) => onToggle(e)}>
            <div className="project-feature" style={{backgroundColor: getColor(technology), filter: isInactive ? "brightness(50%)" : undefined, cursor: onToggle !== undefined ? "pointer" : undefined}} onClick={(e) => toggleIsInactive(e)} >
                {getIcon(technology)}
            </div>
            <div className="project-feature-popup-container">
                <div className="project-feature-popup">
                    {technology}
                </div>
            </div>
        </div>
    );
}

export default TechnologyButton;