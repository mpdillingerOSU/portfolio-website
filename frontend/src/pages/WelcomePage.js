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
                    <FeaturedProject name={"TCG Maker"} imgSrc={require("../images/tcg-maker-logo.png")} alt="trading card game maker" />
                    <FeaturedProject name={"Celtic Tactics"} imgSrc={require("../images/celtic-tactics-logo.png")} alt="celtic tactics" />
                    <FeaturedProject name={"PTCGP Simulator"} imgSrc={require("../images/ptcgp-sim-logo.png")} alt="pokemon trading card game pocket simulator" />
                    <FeaturedProject name={"Range Data Structures"} imgSrc={require("../images/range-ds-logo.png")} alt="range data structure" />
                </div>
                <div className="bottom-featured-projects-row">
                    <FeaturedProject name={"Koala Toolkit"} imgSrc={require("../images/koala-toolkit-logo.png")} alt="koala toolkit" />
                    <FeaturedProject name={"Block Breaker"} imgSrc={require("../images/block-breaker-logo.png")} alt="block breaker" />
                    <FeaturedProject name={"Java Game Engine"} imgSrc={require("../images/java-game-engine-logo.png")} alt="java game engine" />
                </div>
            </div>
        </div>
    );
}

export default WelcomePage;