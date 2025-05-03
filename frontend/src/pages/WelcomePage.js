import React, { useEffect } from 'react';
import { highlightNavButton } from '../scripts/NavigationActions';
import FeaturedProject from '../components/FeaturedProject';

function WelcomePage() {
    useEffect(() => {
        highlightNavButton("home");
    }, []);

    return (
        <div id="welcome-page">
            <div className="featured-projects-header">
                Featured Projects
            </div>
            <div className="featured-projects-container">
                <div className="top-featured-projects-row">
                    <FeaturedProject imgSrc={require("../images/tcg-maker-logo.png")} alt="trading card game maker" />
                    <FeaturedProject imgSrc={require("../images/celtic-tactics-logo.png")} alt="celtic tactics" />
                    <FeaturedProject imgSrc={require("../images/ptcgp-sim-logo.png")} alt="pokemon trading card game pocket simulator" />
                    <FeaturedProject imgSrc={require("../images/range-ds-logo.png")} alt="range data structure" />
                </div>
                <div className="bottom-featured-projects-row">
                    <FeaturedProject imgSrc={require("../images/koala-toolkit-logo.png")} alt="koala toolkit" />
                    <FeaturedProject imgSrc={require("../images/block-breaker-logo.png")} alt="block breaker" />
                    <FeaturedProject imgSrc={require("../images/game-engine-logo.png")} alt="game engine" />
                </div>
            </div>
        </div>
    );
}

export default WelcomePage;