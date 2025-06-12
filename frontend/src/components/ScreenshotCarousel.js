import React, { useEffect, useRef, useState } from 'react';
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import { projectDict } from '../data/ProjectData';

function ScreenshotCarousel({projectID}) {
    const [isOverlayOpen, setIsOverlayOpen] = useState(false);
    const [selectedScreenshot, setSelectedScreenshot] = useState(0);

    const project = projectDict[projectID];

    const overlayRef = useRef(null);
    useEffect(() => {
        function handleClickOutside(event) {
            if(overlayRef.current && !overlayRef.current.contains(event.target)) {
                setIsOverlayOpen(false);
            }
        }

        //Bind event listener
        document.addEventListener("mousedown", handleClickOutside);
        
        return () => {
            //Unbind event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const openOverlay = (e, i) => {
        updateScreenshot(e, i);
        setIsOverlayOpen(true);
    }

    const updateScreenshot = (e, i) => {
        e.preventDefault();

        setSelectedScreenshot(i);
    }

    return (
        <div className="project-page-screenshots-section">
            <div className="project-page-screenshot-carousel">
                {Array.from({ length: project.screenshots.length }, (_, i) => (
                    <button key={i} className="project-page-carouseled-screenshot-container" onClick={(e) => openOverlay(e, i)}>
                        <img className="project-page-screenshot" src={project.screenshots[i]} alt="project screenshot" />
                    </button>
                ))}
            </div>
            {isOverlayOpen && (
                <div className="overlay-background">
                    <div className="project-page-screenshot-overlay" ref={overlayRef}>
                        <div className="project-page-screenshot-overlay-main-info">
                            <div className="project-page-selected-screenshot-container">
                                <img className="project-page-screenshot" src={project.screenshots[selectedScreenshot]} alt="project screenshot" />
                                <button className="project-page-screenshot-rotate-button rotate-left-button" onClick={(e) => updateScreenshot(e, selectedScreenshot === 0 ? project.screenshots.length - 1 : selectedScreenshot - 1)}>
                                    <RxCaretLeft className="icon push-left"/>
                                </button>
                                <button className="project-page-screenshot-rotate-button rotate-right-button" onClick={(e) => updateScreenshot(e, (selectedScreenshot + 1) % project.screenshots.length)}>
                                    <RxCaretRight className="icon push-right" />
                                </button>
                                <div className="project-page-screenshot-overlay-counter">
                                    {(selectedScreenshot + 1) + "/" + project.screenshots.length}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
  );
}

export default ScreenshotCarousel;