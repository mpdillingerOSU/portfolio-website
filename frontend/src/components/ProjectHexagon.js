import React from 'react';
import { projectDict } from '../data/ProjectData';

function ProjectHexagon({projectID, width, borderWidth, onClick}) {
    return (
        <div className={"outer-hexagon" + (onClick !== undefined ? " hexagon-button" : "")} style={{width: width ?? "180px"}} onClick={(e) => {if(onClick !== undefined){onClick(e);}}}>
            <div className="inner-hexagon" style={{width: `calc(100% - ${(borderWidth ?? 6) * 2}px)`}}>
                <img className="featured-project-logo" src={projectDict[projectID].logo} alt={projectDict[projectID].logoAlt} />
            </div>
        </div>
  );
}

export default ProjectHexagon;