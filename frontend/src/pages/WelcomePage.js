import React, { useEffect } from 'react';
import { highlightNavButton } from '../scripts/NavigationActions';

function WelcomePage() {
    useEffect(() => {
        highlightNavButton("home");
    }, []);

    return (
        <div id="welcome-page" />
    );
}

export default WelcomePage;