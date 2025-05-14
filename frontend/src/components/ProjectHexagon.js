import React from 'react';
import { projectDict } from '../data/ProjectData';

function ProjectHexagon({projectID, onClick}) {
    return (
        <div className="outer-hexagon" onClick={(e) => onClick(e)}>
            <div className="inner-hexagon">
                <img className="featured-project-logo" src={projectDict[projectID].logo} alt={projectDict[projectID].logoAlt} />
            </div>
        </div>
  );
}

export default ProjectHexagon;