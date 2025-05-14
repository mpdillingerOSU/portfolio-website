import React, { useEffect } from 'react';
import { highlightNavButton } from '../scripts/NavigationActions';
import { useLocation } from 'react-router-dom';
import { projectDict } from '../data/ProjectData';
import LanguageButton from '../components/LanguageButton';

function ProjectPage() {
    const splitPath = useLocation().pathname.split("/");
    const projectID = splitPath[splitPath.length - 1];

    const project = projectDict[projectID];

    useEffect(() => {
        highlightNavButton("projects");
    }, []);

    return (
        <div id="project-page" className="page">
            <div className="project-page-header">
                <div className="project-page-header-text">
                    <div className="project-page-title">
                        {project.name}
                    </div>
                    <div className="project-page-quick-description">
                        "{project.quickDescription}"
                    </div>
                </div>
            </div>
            <div className="subprojects-column">
                {Array.from({ length: project.subprojects.length }, (_, i) => (
                    <div className="subproject-section">
                        <div className="subproject-header">
                            {project.subprojects[i].name}
                        </div>
                        <div className="subproject-overview">
                            <div className="subproject-details">
                                <div className="subproject-details-lead-text">
                                    Skills
                                </div>
                                <div className="subproject-details-row">
                                    {Array.from({ length: project.subprojects[i].skills.length }, (_, j) => (
                                        <div className="project-skill">
                                            {project.subprojects[i].skills[j]}
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="subproject-details">
                                <div className="subproject-details-lead-text">
                                    Languages
                                </div>
                                <div className="subproject-details-row">
                                    {Array.from({ length: project.subprojects[i].languages.length }, (_, j) => (
                                        <LanguageButton language={project.subprojects[i].languages[j]}/>
                                    ))}
                                </div>
                            </div>
                            <div className="subproject-urls">
                                {Array.from({ length: project.subprojects[i].urls.length }, (_, j) => (
                                    <div className="subproject-url-row">
                                        <div className="subproject-url-header">
                                            {project.subprojects[i].urls[j][0]}:
                                        </div>
                                        <a className="subproject-url-link" href={project.subprojects[i].urls[j][1]} target="_blank" rel="noopener noreferrer">
                                            {project.subprojects[i].urls[j][1]}
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProjectPage;