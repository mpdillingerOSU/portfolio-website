import React from 'react';
import { projectDict } from '../data/ProjectData';
import ProjectHexagon from './ProjectHexagon';

function FeaturedProject({projectID}) {
    return (
        <div className="featured-project">
            <ProjectHexagon projectID={projectID} isLink={true} />
            <div className="featured-project-name-outer-container">
                <div className="featured-project-name-inner-container">
                    {projectDict[projectID].name}
                </div>
            </div>
        </div>
    );
}

export default FeaturedProject;