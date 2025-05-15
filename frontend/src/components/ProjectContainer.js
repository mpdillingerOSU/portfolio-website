import React from 'react';
import { projectDict } from '../data/ProjectData';
import LanguageButton from './LanguageButton';
import { useNavigate } from 'react-router-dom';
import TechnologyButton from './TechnologyButton';

function ProjectContainer({projectID}) {
    const navigate = useNavigate();

    const project = projectDict[projectID];

    const projectLanguages = [];
    const projectSkills = [];
    const projectTechnologies = [];
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

        for(let technology of subproject.technologies){
            if(!projectTechnologies.includes(technology)){
                projectTechnologies.push(technology);
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
                <div className="project-features-row">
                    {Array.from({ length: projectSkills.length }, (_, i) => (
                        <div className="project-skill">
                            {projectSkills[i]}
                        </div>
                    ))}
                </div>
                <div className="project-container-split-row">
                    <div className="project-features-row">
                        {Array.from({ length: projectLanguages.length }, (_, i) => (
                            <LanguageButton language={projectLanguages[i]}/>
                        ))}
                    </div>
                    <div className="project-features-row">
                        {Array.from({ length: projectTechnologies.length }, (_, i) => (
                            <TechnologyButton technology={projectTechnologies[i]}/>
                        ))}
                    </div>
                </div>
            </div>
        </button>
    );
}

export default ProjectContainer;