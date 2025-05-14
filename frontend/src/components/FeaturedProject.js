import React from 'react';
import { projectDict } from '../data/ProjectData';
import { useNavigate } from 'react-router-dom';
import ProjectHexagon from './ProjectHexagon';

function FeaturedProject({projectID}) {
    const navigate = useNavigate();

    const toProject = (projectID) => {
        navigate(`/projects/${projectID}`);
    }

    return (
        <div className="featured-project">
            <ProjectHexagon projectID={projectID} onClick={(e) => toProject(projectID)} />
            <div className="featured-project-name-outer-container">
                <div className="featured-project-name-inner-container">
                    {projectDict[projectID].name}
                </div>
            </div>
        </div>
  );
}

export default FeaturedProject;