import React from 'react';
import { projectDict } from '../data/ProjectData';
import { Link } from 'react-router-dom';

function ProjectHexagon({projectID, width, borderWidth, isLink}) {
    return (
        <>
            {isLink ? (
                <Link className="outer-hexagon enabled-hexagon-button" style={{width: width ?? "180px"}} to={`/projects/${projectID}`}>
                    <div className="inner-hexagon" style={{width: `calc(100% - ${(borderWidth ?? 6) * 2}px)`}}>
                        <img className="featured-project-logo" src={projectDict[projectID].logo} alt={projectDict[projectID].logoAlt} />
                    </div>
                </Link>
            ) : (
                <div className="outer-hexagon disabled-hexagon-button" style={{width: width ?? "180px"}}>
                    <div className="inner-hexagon" style={{width: `calc(100% - ${(borderWidth ?? 6) * 2}px)`}}>
                        <img className="featured-project-logo" src={projectDict[projectID].logo} alt={projectDict[projectID].logoAlt} />
                    </div>
                </div>
            )}
        </>
  );
}

export default ProjectHexagon;