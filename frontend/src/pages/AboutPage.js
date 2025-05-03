import React, { useEffect } from 'react';
import { highlightNavButton } from '../scripts/NavigationActions';

function AboutPage() {
    useEffect(() => {
        highlightNavButton("about");
    }, []);

    return (
        <div id="about-page" />
    );
}

export default AboutPage;