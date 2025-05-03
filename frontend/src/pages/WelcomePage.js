import React, { useEffect } from 'react';
import { highlightNavButton } from '../scripts/NavigationActions';

function WelcomePage() {
    useEffect(() => {
        highlightNavButton("home");
    }, []);

    return (
        <div id="welcome-page">
            <div className="hexagon-container">
                <div className="top-hexagon-row">
                    <div className="outer-hexagon">
                        <div className="inner-hexagon">
                            <img className="hexagon-project-logo tcg-maker-hexagon-project-logo" src={require("../images/tcg-maker-logo.png")} alt="tcg maker" />
                        </div>
                    </div>
                    <div className="outer-hexagon">
                        <div className="inner-hexagon">

                        </div>
                    </div>
                    <div className="outer-hexagon">
                        <div className="inner-hexagon">

                        </div>
                    </div>
                    <div className="outer-hexagon">
                        <div className="inner-hexagon">

                        </div>
                    </div>
                </div>
                <div className="bottom-hexagon-row">
                    <div className="outer-hexagon">
                        <div className="inner-hexagon">

                        </div>
                    </div>
                    <div className="outer-hexagon">
                        <div className="inner-hexagon">

                        </div>
                    </div>
                    <div className="outer-hexagon">
                        <div className="inner-hexagon">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WelcomePage;