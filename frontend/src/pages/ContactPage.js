import React, { useEffect } from 'react';
import { highlightNavButton } from '../scripts/NavigationActions';

function ContactPage() {
    useEffect(() => {
        highlightNavButton("contact");
    }, []);

    return (
        <div id="contact-page" />
    );
}

export default ContactPage;