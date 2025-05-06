import React from 'react';
import { projectDict } from '../data/ProjectData';

function FeaturedProject({projectID}) {
    return (
        <div className="featured-project">
            <div className="outer-hexagon">
                <div className="inner-hexagon">
                    <img className="featured-project-logo" src={projectDict[projectID].logo} alt={projectDict[projectID].logoAlt} />
                </div>
            </div>
            <div className="featured-project-name-outer-container">
                <div className="featured-project-name-inner-container">
                    {projectDict[projectID].name}
                </div>
            </div>
        </div>
  );
}

export default FeaturedProject;