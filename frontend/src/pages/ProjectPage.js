import React, { useEffect, useState } from 'react';
import { highlightNavButton, backToTop } from '../scripts/NavigationActions';
import { Link, useLocation } from 'react-router-dom';
import { projectDict } from '../data/ProjectData';
import LanguageButton from '../components/LanguageButton';
import ProjectHexagon from '../components/ProjectHexagon';
import { IoReturnUpBack } from "react-icons/io5";
import TechnologyButton from '../components/TechnologyButton';
import AppFooter from '../components/AppFooter';
import ScreenshotCarousel from '../components/ScreenshotCarousel';

function ProjectPage() {
    const splitPath = useLocation().pathname.split("/");

    const [projectID, setProjectID] = useState();
    const [project, setProject] = useState();

    useEffect(() => {
        highlightNavButton("projects");
        setProjectID(splitPath[splitPath.length - 1]);
    }, [splitPath]);

    useEffect(() => {
        setProject(projectDict[projectID]);
        backToTop();
    }, [projectID]);

    const generateParagraph = (project, i) => {
        const arr = [];
        let start = 0;
        let end = start;
        let isParsingRelatedProject = false;
        for(; end < project.description[i].length;){
            if(isParsingRelatedProject){
                if(project.description[i].slice(end, end + 5) === "</rp>"){
                    const relatedProjectID = project.description[i].slice(start, end);
                    arr.push(
                        <Link className="related-projects-link" to={`/projects/${relatedProjectID}`}>
                            {projectDict[relatedProjectID].name}
                        </Link>
                    );
                    isParsingRelatedProject = false;
                    end += 5;
                    start = end;
                } else {
                    end++;
                }  
            } else if(project.description[i].slice(end, end + 4) === "<rp>"){
                if(start !== end){
                    arr.push(<span>{project.description[i].slice(start, end)}</span>);
                }

                isParsingRelatedProject = true;
                end += 4;
                start = end;
            } else {
                end++;
            }
        }

        if(start < project.description[i].length){
            arr.push(<span>{project.description[i].slice(start, end)}</span>);
        }

        return <div key={i} className="project-page-description-paragraph">
            {Array.from({ length: arr.length }, (_, j) => (
                <span key={j}>{arr[j]}</span>
            ))}
        </div>
    }

    return (
        <>
            {project && (
                <div id="project-page" className="page">
                    <div className="project-page-header">
                        <div className="project-logo-container">
                            <ProjectHexagon projectID={projectID} />
                        </div>
                        <div className="project-page-header-text">
                            <div className="project-page-title">
                                {project.name}
                            </div>
                            <div className="project-page-abstract">
                                "{project.abstract}"
                            </div>
                        </div>
                    </div>
                    <div className="project-page-header-underline" />
                    {project.screenshots.length > 0 && (
                        <ScreenshotCarousel project={project} />
                    )}
                    <div className="project-page-body">
                        <div className="project-page-overview">
                            <div className="project-page-details">
                                <div className="project-page-details-lead-text">
                                    Skills
                                </div>
                                <div className="project-page-details-row">
                                    {Array.from({ length: project.skills.length }, (_, i) => (
                                        <div key={i} className="project-skill">
                                            {project.skills[i]}
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="project-page-languages-and-technologies">
                                <div className="project-page-details">
                                    <div className="project-page-details-lead-text">
                                        Languages
                                    </div>
                                    <div className="project-page-details-row">
                                        {Array.from({ length: project.languages.length }, (_, i) => (
                                            <LanguageButton key={i} language={project.languages[i]}/>
                                        ))}
                                    </div>
                                </div>
                                <div className="project-page-details">
                                    <div className="project-page-details-lead-text">
                                        Technologies
                                    </div>
                                    <div className="project-page-details-row">
                                        {Array.from({ length: project.technologies.length }, (_, i) => (
                                            <TechnologyButton key={i} technology={project.technologies[i]}/>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="project-page-urls">
                                {Array.from({ length: project.urls.length }, (_, i) => (
                                    <div key={i} className="project-page-url-row">
                                        <div className="project-page-url-header">
                                            {project.urls[i][0]}:
                                        </div>
                                        {project.urls[i][1] === "private" ? (
                                            <span className="project-page-private-url-link">Private</span>
                                        ) : project.urls[i][1] !== "" ? (
                                            <a className="project-page-public-url-link" href={project.urls[i][1]} target="_blank" rel="noopener noreferrer">
                                                {project.urls[i][1]}
                                            </a>
                                        ) : (
                                            <></>
                                        )}
                                    </div>
                                ))}
                            </div>
                            {project.relatedProjects.length > 0 && (
                                <div className="related-projects-row">
                                    <div className="related-projects-header">
                                        Related Projects:
                                    </div>
                                    {Array.from({ length: project.relatedProjects.length }, (_, i) => (
                                        <span key={i}>
                                            <Link className="related-projects-link" to={`/projects/${project.relatedProjects[i]}`}>
                                                {projectDict[project.relatedProjects[i]].name}
                                            </Link>
                                            {i < project.relatedProjects.length - 1 && (
                                                <span>, </span>
                                            )}
                                        </span>
                                    ))}
                                </div>
                            )}
                        </div>
                        <div className="project-page-description">
                            <div className="project-page-description-header">
                                Description
                            </div>
                            <div className="project-page-description-text">
                                {Array.from({ length: project.description.length }, (_, i) => (
                                    generateParagraph(project, i)
                                ))}
                            </div>
                        </div>
                    </div>
                    <AppFooter />
                    <Link className="project-page-back-button" to="/projects">
                        <IoReturnUpBack className="project-page-back-button-icon"/>
                        <span className="project-page-back-button-text">Projects</span>
                    </Link>
                </div>
            )}
        </>
    );
}

export default ProjectPage;