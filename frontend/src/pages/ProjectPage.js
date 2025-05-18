import React, { useEffect } from 'react';
import { highlightNavButton, backToTop } from '../scripts/NavigationActions';
import { useLocation, useNavigate } from 'react-router-dom';
import { projectDict } from '../data/ProjectData';
import LanguageButton from '../components/LanguageButton';
import ProjectHexagon from '../components/ProjectHexagon';
import { IoReturnUpBack } from "react-icons/io5";
import TechnologyButton from '../components/TechnologyButton';

function ProjectPage() {
    const navigate = useNavigate();

    const splitPath = useLocation().pathname.split("/");
    const projectID = splitPath[splitPath.length - 1];

    const project = projectDict[projectID];

    useEffect(() => {
        highlightNavButton("projects");
        backToTop();
    }, []);

    const toProjects = () => {
        navigate("/projects");
    }

    return (
        <div id="project-page" className="page">
            <div className="project-page-header">
                <div className="project-logo-container">
                    <ProjectHexagon projectID={projectID} />
                </div>
                <div className="project-page-header-text">
                    <div className="project-page-title">
                        {project.name}
                    </div>
                    <div className="project-page-quick-description">
                        "{project.abstract}"
                    </div>
                </div>
            </div>
            <div className="project-page-header-underline" />
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
                            <div className="subproject-details">
                                <div className="subproject-details-lead-text">
                                    Technologies
                                </div>
                                <div className="subproject-details-row">
                                    {Array.from({ length: project.subprojects[i].technologies.length }, (_, j) => (
                                        <TechnologyButton technology={project.subprojects[i].technologies[j]}/>
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
                            {project.subprojects[i].relatedProjects.length > 0 && (
                                <div className="related-projects-row">
                                    <div className="related-projects-header">
                                        Related Projects:
                                    </div>
                                    {Array.from({ length: project.subprojects[i].relatedProjects.length }, (_, j) => (
                                        <>
                                            {j > 0 && (
                                                <span>, </span>
                                            )}
                                            <a className="related-projects-link" href={`/projects/${project.subprojects[i].relatedProjects[j]}`}>
                                                {projectDict[project.subprojects[i].relatedProjects[j]].name}
                                            </a>
                                        </>
                                    ))}
                                </div>
                            )}
                        </div>
                        <div className="subproject-description">
                            <div className="subproject-description-header">
                                Description
                            </div>
                            <div className="subproject-description-text">
                                {Array.from({ length: project.subprojects[i].description.length }, (_, j) => (
                                    <div className="subproject-description-paragraph">
                                        {project.subprojects[i].description[j]}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <button className="project-page-back-button" onClick={(e) => toProjects()}>
                <IoReturnUpBack className="project-page-back-button-icon"/>
                <span className="project-page-back-button-text">Projects</span>
            </button>
        </div>
    );
}

export default ProjectPage;