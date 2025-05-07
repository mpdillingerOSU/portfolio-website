import React, { useEffect } from 'react';
import { highlightNavButton } from '../scripts/NavigationActions';
import FeaturedProject from '../components/FeaturedProject';
import { projectList } from '../data/ProjectData';

function WelcomePage() {
    useEffect(() => {
        highlightNavButton("home");
    }, []);

    return (
        <div id="welcome-page" className="page">
            <div className="featured-projects-header">
                <span>Featured Projects</span>
                <div className="featured-projects-header-top-left-corner" />
                <div className="featured-projects-header-bottom-right-corner" />
            </div>
            <div className="featured-projects-container">
                <div className="top-featured-projects-row">
                    <FeaturedProject projectID={projectList[0].projectID} />
                    <FeaturedProject projectID={projectList[1].projectID} />
                    <FeaturedProject projectID={projectList[2].projectID} />
                    <FeaturedProject projectID={projectList[3].projectID} />
                </div>
                <div className="bottom-featured-projects-row">
                    <FeaturedProject projectID={projectList[4].projectID} />
                    <FeaturedProject projectID={projectList[5].projectID} />
                    <FeaturedProject projectID={projectList[6].projectID} />
                </div>
            </div>
        </div>
    );
}

export default WelcomePage;