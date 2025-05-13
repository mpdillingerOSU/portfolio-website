import React from 'react';
import { projectDict } from '../data/ProjectData';
import { useNavigate } from 'react-router-dom';

function FeaturedProject({projectID}) {
    const navigate = useNavigate();

    const toProject = (projectID) => {
        navigate(`/projects/${projectID}`);
    }

    return (
        <div className="featured-project">
            <div className="outer-hexagon" onClick={(e) => toProject(projectID)}>
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