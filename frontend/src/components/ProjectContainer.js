import React from 'react';
import { FaHtml5, FaCss3Alt, FaJava, FaJsSquare, FaDatabase, FaQuestion } from "react-icons/fa";
import { SiDart } from "react-icons/si";
import { projectDict } from '../data/ProjectData';

function ProjectContainer({projectID}) {
    const project = projectDict[projectID];

    const projectLanguages = [];
    const projectSkills = [];
    for(let subproject of project.subprojects){
        for(let skill of subproject.skills){
            if(!projectSkills.includes(skill)){
                projectSkills.push(skill);
            }
        }

        for(let language of subproject.languages){
            if(!projectLanguages.includes(language)){
                projectLanguages.push(language);
            }
        }
    }

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
        <button className="project-container">
            <img className="project-container-logo" src={project.logo} alt={project.logoAlt} />
            <div className="project-container-info">
                <span className="project-container-name">{project.name}</span>
                <div className="project-skills-row">
                    {Array.from({ length: projectSkills.length }, (_, i) => (
                        <div className="project-skill">
                            {projectSkills[i]}
                        </div>
                    ))}
                </div>
                <div className="project-languages-row">
                    {Array.from({ length: projectLanguages.length }, (_, i) => (
                        <div className="project-language-container">
                            <div className="project-language" style={{backgroundColor: getLanguageColor(projectLanguages[i])}}>
                                {getLanguageIcon(projectLanguages[i])}
                            </div>
                            <div className="project-language-popup-container">
                                <div className="project-language-popup">{projectLanguages[i]}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </button>
    );
}

export default ProjectContainer;