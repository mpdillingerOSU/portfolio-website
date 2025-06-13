import React, { useState } from 'react';
import ScreenshotOverlay from '../overlays/ScreenshotOverlay';

function ScreenshotCarousel({project}) {
    const [overlayIndex, setOverlayIndex] = useState();

    return (
        <>
            <div className="project-page-screenshots-section">
                <div className="project-page-screenshot-carousel">
                    {Array.from({ length: project.screenshots.length }, (_, i) => (
                        <button key={i} className="project-page-carouseled-screenshot-container" onClick={(e) => setOverlayIndex(i)}>
                            <img className="project-page-screenshot" src={project.screenshots[i]} alt="project screenshot" />
                        </button>
                    ))}
                </div>
            </div>
            {overlayIndex !== undefined && (
                <ScreenshotOverlay project={project} initialIndex={overlayIndex} onClose={() => setOverlayIndex()}/>
            )}
        </>
  );
}

export default ScreenshotCarousel;