import React from 'react';
import { FaReact, FaBootstrap, FaNodeJs, FaUnity, FaQuestion, FaGitAlt } from "react-icons/fa";
import { SiNextdotjs, SiExpress, SiSpring, SiFlutter, SiIntellijidea, SiMongodb, SiBlender } from "react-icons/si";
import { BiLogoVisualStudio } from "react-icons/bi";
import { DiVisualstudio, DiMysql } from "react-icons/di";

function TechnologyButton({technology, isInactive, onToggle}) {    
    const toggleIsInactive = (e) => {
        e.preventDefault();

        if(onToggle !== undefined){
            const newIsInactive = !isInactive;
            onToggle(newIsInactive);
        }
    }

    const getColor = (technology) => {
        if(technology === "React"){
            return "#00ccff"
        } else if(technology === "Next.js"){
            return "#808080"
        } else if(technology === "Bootstrap"){
            return "#7508f6"
        } else if(technology === "Node.js"){
            return "#80bd01"
        } else if(technology === "Express"){
            return "#4d4d4d"
        } else if(technology === "Spring"){
            return "#6db53d"
        } else if(technology === "VS Code"){
            return "#1dabf2"
        } else if(technology === "Flutter"){
            return "#43d2fd"
        } else if(technology === "IntelliJ"){
            return "#fe2d5d"
        } else if(technology === "Unity"){
            return "#808080"
        } else if(technology === "VS"){
            return "#8f5bd4"
        } else if(technology === "MySQL"){
            return "#00608c"
        } else if(technology === "MongoDB"){
            return "#71b35e"
        } else if(technology === "Blender"){
            return "#eb7700"
        } else if(technology === "Git"){
            return "#de4c36"
        }

        return "red";
    }

    const getIcon = (technology) => {
        if(technology === "React"){
            return <FaReact className="project-feature-icon" />
        } else if(technology === "Next.js"){
            return <SiNextdotjs className="project-feature-icon" />
        } else if(technology === "Bootstrap"){
            return <FaBootstrap className="project-feature-icon" />
        } else if(technology === "Node.js"){
            return <FaNodeJs className="project-feature-icon" />
        } else if(technology === "Express"){
            return <SiExpress className="project-feature-icon" />
        } else if(technology === "Spring"){
            return <SiSpring className="project-feature-icon" />
        } else if(technology === "VS Code"){
            return <BiLogoVisualStudio className="project-feature-icon" />
        } else if(technology === "Flutter"){
            return <SiFlutter className="project-feature-icon" />
        } else if(technology === "IntelliJ"){
            return <SiIntellijidea className="project-feature-icon" />
        } else if(technology === "Unity"){
            return <FaUnity className="project-feature-icon" />
        } else if(technology === "VS"){
            return <DiVisualstudio className="project-feature-icon" />
        } else if(technology === "MySQL"){
            return <DiMysql className="project-feature-icon" />
        } else if(technology === "MongoDB"){
            return <SiMongodb className="project-feature-icon" />
        } else if(technology === "Blender"){
            return <SiBlender className="project-feature-icon" />
        } else if(technology === "Git"){
            return <FaGitAlt className="project-feature-icon" />
        }

        return <FaQuestion className="project-feature-icon" />
    }

    return (
        <div className="project-feature-container">
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