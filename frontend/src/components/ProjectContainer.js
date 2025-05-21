import React from 'react';
import { projectDict } from '../data/ProjectData';
import LanguageButton from './LanguageButton';
import { useNavigate } from 'react-router-dom';
import TechnologyButton from './TechnologyButton';
import ProjectHexagon from './ProjectHexagon';

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
            <div className="project-container-header">
                <ProjectHexagon projectID={projectID} width="96px" borderWidth={4} />
                <span className="project-container-name">{project.name}</span>
            </div>
            <div className="project-container-info">
                <span className="project-container-name">{project.name}</span>
                <div className="project-container-features">
                    <div className="project-features-row">
                        {Array.from({ length: projectSkills.length }, (_, i) => (
                            <div key={i} className="project-skill">
                                {projectSkills[i]}
                            </div>
                        ))}
                    </div>
                    <div className="project-container-split-row">
                        <div className="project-features-row">
                            {Array.from({ length: projectLanguages.length }, (_, i) => (
                                <LanguageButton key={i} language={projectLanguages[i]}/>
                            ))}
                        </div>
                        <div className="project-features-row">
                            {Array.from({ length: projectTechnologies.length }, (_, i) => (
                                <TechnologyButton key={i} technology={projectTechnologies[i]}/>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </button>
    );
}

export default ProjectContainer;