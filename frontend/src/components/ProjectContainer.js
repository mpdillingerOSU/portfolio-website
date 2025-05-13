import React from 'react';
import { projectDict } from '../data/ProjectData';
import LanguageButton from './LanguageButton';
import { useNavigate } from 'react-router-dom';

function ProjectContainer({projectID}) {
    const navigate = useNavigate();

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

    const toProject = (projectID) => {
        navigate(`/projects/${projectID}`);
    }

    return (
        <button className="project-container" onClick={(e) => toProject(projectID)}>
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
                        <LanguageButton language={projectLanguages[i]}/>
                    ))}
                </div>
            </div>
        </button>
    );
}

export default ProjectContainer;