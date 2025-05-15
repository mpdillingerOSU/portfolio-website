import React, { useEffect } from 'react';
import { highlightNavButton } from '../scripts/NavigationActions';
import FeatureAboutIcon from '../components/FeatureAboutIcon';

function AboutPage() {
    useEffect(() => {
        highlightNavButton("about");
    }, []);

    return (
        <div id="about-page" className="page">
            <div className="about-row">
                <div className="about-blurb">
                    <img className="about-blurb-icon" src={require("../images/koala-astronaut.png")} alt="koala astronaut" />
                    <div className="about-blurb-text">
                        As a former computer science teacher, I am fully committed to the philosophy of being a life-long learner. I am a full stack developer and a game tool developer with a deep passion for developing web technologies that allow for users to more easily attain their goals, and to have their ideas and dreams become realized. There's an old saying that "there's an app for everything". However, I just don't see this being true, as there are so many technologies yet to be crafted or discovered. This belief is what drives me to be excited and passionate about making new apps - to be a part of something bigger.
                    </div>
                </div>
                <div className="about-knowledge">
                    <div className="about-knowledge-section">
                        <div className="about-knowledge-header">
                            <div className="about-knowledge-header-text">
                                Languages
                            </div>
                            <div className="about-knowledge-header-underline" />
                        </div>
                        <div className="about-knowledge-icon-row">
                            <FeatureAboutIcon imgSrc={require("../images/about-icons/html-about-icon.png")} imgAlt="html icon" />
                            <FeatureAboutIcon imgSrc={require("../images/about-icons/css-about-icon.png")} imgAlt="css icon" />
                            <FeatureAboutIcon imgSrc={require("../images/about-icons/javascript-about-icon.png")} imgAlt="javascript icon" />
                            <FeatureAboutIcon imgSrc={require("../images/about-icons/java-about-icon.png")} imgAlt="java icon" />
                            <FeatureAboutIcon imgSrc={require("../images/about-icons/sql-about-icon.png")} imgAlt="sql icon" />
                            <FeatureAboutIcon imgSrc={require("../images/about-icons/dart-about-icon.png")} imgAlt="dart icon" />
                            <FeatureAboutIcon imgSrc={require("../images/about-icons/c-sharp-about-icon.png")} imgAlt="c-sharp icon" />
                        </div>
                    </div>
                    <div className="about-knowledge-section">
                        <div className="about-knowledge-header">
                            <div className="about-knowledge-header-text">
                                Frontend Technologies
                            </div>
                            <div className="about-knowledge-header-underline" />
                        </div>
                        <div className="about-knowledge-icon-row">
                            <FeatureAboutIcon imgSrc={require("../images/about-icons/react-about-icon.png")} imgAlt="react icon" />
                            <FeatureAboutIcon imgSrc={require("../images/about-icons/next-about-icon.png")} imgAlt="next icon" />
                            <FeatureAboutIcon imgSrc={require("../images/about-icons/bootstrap-about-icon.png")} imgAlt="bootstrap icon" />
                        </div>
                    </div>
                    <div className="about-knowledge-section">
                        <div className="about-knowledge-header">
                            <div className="about-knowledge-header-text">
                                Backend Technologies
                            </div>
                            <div className="about-knowledge-header-underline" />
                        </div>
                        <div className="about-knowledge-icon-row">
                            <FeatureAboutIcon imgSrc={require("../images/about-icons/node-about-icon.png")} imgAlt="node icon" />
                            <FeatureAboutIcon imgSrc={require("../images/about-icons/express-about-icon.png")} imgAlt="express icon" />
                            <FeatureAboutIcon imgSrc={require("../images/about-icons/spring-about-icon.png")} imgAlt="spring icon" />
                        </div>
                    </div>
                    <div className="about-knowledge-section">
                        <div className="about-knowledge-header">
                            <div className="about-knowledge-header-text">
                                Development Platforms
                            </div>
                            <div className="about-knowledge-header-underline" />
                        </div>
                        <div className="about-knowledge-icon-row">
                            <FeatureAboutIcon imgSrc={require("../images/about-icons/vs-code-about-icon.png")} imgAlt="vs code icon" />
                            <FeatureAboutIcon imgSrc={require("../images/about-icons/flutter-about-icon.png")} imgAlt="flutter icon" />
                            <FeatureAboutIcon imgSrc={require("../images/about-icons/intellij-about-icon.png")} imgAlt="intellij icon" />
                            <FeatureAboutIcon imgSrc={require("../images/about-icons/unity-about-icon.png")} imgAlt="unity icon" />
                            <FeatureAboutIcon imgSrc={require("../images/about-icons/vs-about-icon.png")} imgAlt="vs icon" />
                        </div>
                    </div>
                    <div className="about-knowledge-section">
                        <div className="about-knowledge-header">
                            <div className="about-knowledge-header-text">
                                Other Technologies
                            </div>
                            <div className="about-knowledge-header-underline" />
                        </div>
                        <div className="about-knowledge-icon-row">
                            <FeatureAboutIcon imgSrc={require("../images/about-icons/mysql-about-icon.png")} imgAlt="mysql icon" />
                            <FeatureAboutIcon imgSrc={require("../images/about-icons/mongodb-about-icon.png")} imgAlt="mongodb icon" />
                            <FeatureAboutIcon imgSrc={require("../images/about-icons/git-about-icon.png")} imgAlt="git icon" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutPage;