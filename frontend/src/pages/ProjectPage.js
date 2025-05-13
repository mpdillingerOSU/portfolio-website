import React, { useEffect } from 'react';
import { highlightNavButton } from '../scripts/NavigationActions';
import { useLocation } from 'react-router-dom';
import { projectDict } from '../data/ProjectData';

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
                <div className="project-page-header-title">
                    {project.name}
                </div>
            </div>
        </div>
    );
}

export default ProjectPage;