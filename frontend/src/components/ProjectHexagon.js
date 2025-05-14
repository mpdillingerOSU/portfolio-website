import React from 'react';
import { projectDict } from '../data/ProjectData';

function ProjectHexagon({projectID, onClick}) {
    return (
        <div className={"outer-hexagon" + (onClick !== undefined ? " hexagon-button" : "")} onClick={(e) => {if(onClick !== undefined){onClick(e);}}}>
            <div className="inner-hexagon">
                <img className="featured-project-logo" src={projectDict[projectID].logo} alt={projectDict[projectID].logoAlt} />
            </div>
        </div>
  );
}

export default ProjectHexagon;