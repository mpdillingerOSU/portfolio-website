import React from 'react';

function AppFooter() {
    return (
        <footer className="app-footer">
            <div className="app-footer-copyright">&copy; {new Date().getFullYear()} Michael Dillinger. All rights reserved.</div>
        </footer>
    );
}

export default AppFooter;