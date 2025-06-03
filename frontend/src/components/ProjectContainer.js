import React from 'react';
import { projectDict } from '../data/ProjectData';
import LanguageButton from './LanguageButton';
import { useNavigate } from 'react-router-dom';
import TechnologyButton from './TechnologyButton';
import ProjectHexagon from './ProjectHexagon';

function ProjectContainer({projectID}) {
    const navigate = useNavigate();

    const project = projectDict[projectID];

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
                    <div className="project-container-features-section">
                        <span className="project-contaner-lead-text">Skills</span>
                        <div className="project-features-row">
                            {Array.from({ length: project.skills.length }, (_, i) => (
                                <div key={i} className="project-skill">
                                    {project.skills[i]}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="project-container-split-row">
                        <div className="project-container-features-section">
                            <span className="project-contaner-lead-text">Languages</span>
                            <div className="project-features-row">
                                {Array.from({ length: project.languages.length }, (_, i) => (
                                    <LanguageButton key={i} language={project.languages[i]}/>
                                ))}
                            </div>
                        </div>
                        <div className="project-container-features-section">
                            <span className="project-contaner-lead-text">Technologies</span>
                            <div className="project-features-row">
                                {Array.from({ length: project.technologies.length }, (_, i) => (
                                    <TechnologyButton key={i} technology={project.technologies[i]}/>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </button>
    );
}

export default ProjectContainer;