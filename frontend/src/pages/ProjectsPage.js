import React, { useEffect } from 'react';
import { highlightNavButton } from '../scripts/NavigationActions';
import { projectList } from '../data/ProjectData';
import ProjectContainer from '../components/ProjectContainer';

function ProjectsPage() {
    useEffect(() => {
        highlightNavButton("projects");
    }, []);

    return (
        <div id="projects-page" className="page">
            <div className="projects-list">
                {Array.from({ length: projectList.length }, (_, i) => (
                    <ProjectContainer projectID={projectList[i].projectID} />
                ))}
            </div>
        </div>
    );
}

export default ProjectsPage;