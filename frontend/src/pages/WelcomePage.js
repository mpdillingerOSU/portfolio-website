import React, { useEffect } from 'react';
import { highlightNavButton, backToTop } from '../scripts/NavigationActions';
import FeaturedProject from '../components/FeaturedProject';
import { projectList } from '../data/ProjectData';
import AppFooter from '../components/AppFooter';

function WelcomePage() {
    useEffect(() => {
        highlightNavButton("home");
        backToTop();
    }, []);

    return (
        <div id="welcome-page" className="page">
            <div className="featured-projects-header">
                <span>Featured Projects</span>
                <div className="featured-projects-header-top-left-corner" />
                <div className="featured-projects-header-bottom-right-corner" />
            </div>
            <div className="featured-projects-container wide-featured-projects-container">
                <div className="featured-projects-row">
                    <FeaturedProject projectID={projectList[0].projectID} />
                    <FeaturedProject projectID={projectList[1].projectID} />
                    <FeaturedProject projectID={projectList[2].projectID} />
                    <FeaturedProject projectID={projectList[3].projectID} />
                </div>
                <div className="featured-projects-row">
                    <FeaturedProject projectID={projectList[4].projectID} />
                    <FeaturedProject projectID={projectList[5].projectID} />
                    <FeaturedProject projectID={projectList[6].projectID} />
                </div>
            </div>
            <div className="featured-projects-container medium-featured-projects-container">
                <div className="featured-projects-row">
                    <FeaturedProject projectID={projectList[0].projectID} />
                    <FeaturedProject projectID={projectList[1].projectID} />
                </div>
                <div className="featured-projects-row">
                    <FeaturedProject projectID={projectList[2].projectID} />
                    <FeaturedProject projectID={projectList[3].projectID} />
                    <FeaturedProject projectID={projectList[4].projectID} />
                </div>
                <div className="featured-projects-row">
                    <FeaturedProject projectID={projectList[5].projectID} />
                    <FeaturedProject projectID={projectList[6].projectID} />
                </div>
            </div>
            <div className="featured-projects-container small-featured-projects-container">
                <div className="featured-projects-row">
                    <FeaturedProject projectID={projectList[0].projectID} />
                    <FeaturedProject projectID={projectList[1].projectID} />
                    <div className="featured-projects-row-buffer" />
                </div>
                <div className="featured-projects-row">
                    <div className="featured-projects-row-buffer" />
                    <FeaturedProject projectID={projectList[2].projectID} />
                    <FeaturedProject projectID={projectList[3].projectID} />
                </div>
                <div className="featured-projects-row">
                    <FeaturedProject projectID={projectList[4].projectID} />
                    <FeaturedProject projectID={projectList[5].projectID} />
                    <div className="featured-projects-row-buffer" />
                </div>
                <div className="featured-projects-row">
                    <FeaturedProject projectID={projectList[6].projectID} />
                    <div className="featured-projects-row-buffer" />
                </div>
            </div>
            <div className="featured-projects-container smaller-featured-projects-container">
                <div className="featured-projects-row">
                    <FeaturedProject projectID={projectList[0].projectID} />
                </div>
                <div className="featured-projects-row">
                    <FeaturedProject projectID={projectList[1].projectID} />
                    <FeaturedProject projectID={projectList[2].projectID} />
                </div>
                <div className="featured-projects-row">
                    <FeaturedProject projectID={projectList[3].projectID} />
                </div>
                <div className="featured-projects-row">
                    <FeaturedProject projectID={projectList[4].projectID} />
                    <FeaturedProject projectID={projectList[5].projectID} />
                </div>
                <div className="featured-projects-row">
                    <FeaturedProject projectID={projectList[6].projectID} />
                </div>
            </div>
            <div className="featured-projects-container smallest-featured-projects-container">
                <div className="featured-projects-row">
                    <FeaturedProject projectID={projectList[0].projectID} />
                    <div className="featured-projects-row-buffer" />
                </div>
                <div className="featured-projects-row">
                    <div className="featured-projects-row-buffer" />
                    <FeaturedProject projectID={projectList[1].projectID} />
                </div>
                <div className="featured-projects-row">
                    <FeaturedProject projectID={projectList[2].projectID} />
                    <div className="featured-projects-row-buffer" />
                </div>
                <div className="featured-projects-row">
                    <div className="featured-projects-row-buffer" />
                    <FeaturedProject projectID={projectList[3].projectID} />
                </div>
                <div className="featured-projects-row">
                    <FeaturedProject projectID={projectList[4].projectID} />
                    <div className="featured-projects-row-buffer" />
                </div>
                <div className="featured-projects-row">
                    <div className="featured-projects-row-buffer" />
                    <FeaturedProject projectID={projectList[5].projectID} />
                </div>
                <div className="featured-projects-row">
                    <FeaturedProject projectID={projectList[6].projectID} />
                    <div className="featured-projects-row-buffer" />
                </div>
            </div>
            <AppFooter />
        </div>
    );
}

export default WelcomePage;