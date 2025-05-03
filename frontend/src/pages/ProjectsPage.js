import React, { useEffect } from 'react';
import { highlightNavButton } from '../scripts/NavigationActions';

function ProjectsPage() {
    useEffect(() => {
        highlightNavButton("projects");
    }, []);

    return (
        <div id="projects-page" />
    );
}

export default ProjectsPage;