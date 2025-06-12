import React, { useEffect, useRef, useState } from 'react';
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";

function ScreenshotOverlay({project, overlayIndex, setOverlayIndex}) {
    const [isMetaElementsVisible, setIsMetaElementsVisible] = useState(true);

    // ref used to resetting of timer through various possible conflicting means, which led
    // to rotating through screenshots not caused some old ones to not be properly cleared
    const timeoutRef = useRef(null);

    const resetVisibilityTimer = () => {
        clearTimeout(timeoutRef.current);
        setIsMetaElementsVisible(true);

        timeoutRef.current = setTimeout(() => {
            fadeMetaElements();
        }, 1500); // 1.5 seconds of inactivity
    };

    const fadeMetaElements = () => {
        // if touch-enabled (i.e., mobile or tablet), then do not make elements invisible either
        if(navigator.maxTouchPoints === 0){
            setIsMetaElementsVisible(false);
        }
    }

    useEffect(() => {
        document.addEventListener("mousemove", resetVisibilityTimer);

        return () => {
            document.removeEventListener("mousemove", resetVisibilityTimer); // Cleanup
            clearTimeout(timeoutRef.current);
        };
    }, []);

    const overlayRef = useRef(null);
    useEffect(() => {
        function handleClickOutside(event) {
            if(overlayRef.current && !overlayRef.current.contains(event.target)) {
                setOverlayIndex();
            }
        }

        //Bind event listener
        document.addEventListener("mousedown", handleClickOutside);
        
        return () => {
            //Unbind event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const updateScreenshot = (e, i) => {
        e.preventDefault();

        setOverlayIndex(i);
        resetVisibilityTimer();
    }

    const rotateLeft = (e) => {
        if(isMetaElementsVisible){
            updateScreenshot(e, overlayIndex === 0 ? project.screenshots.length - 1 : overlayIndex - 1);
        }
    }

    const rotateRight = (e) => {
        if(isMetaElementsVisible){
            updateScreenshot(e, (overlayIndex + 1) % project.screenshots.length);
        }
    }

    return (
        <div className="overlay-background">
            <div className="project-page-screenshot-overlay" ref={overlayRef}>
                <div className="project-page-selected-screenshot-container">
                    <img className="project-page-screenshot" src={project.screenshots[overlayIndex]} alt="project screenshot" />
                    <button className={"project-page-screenshot-rotate-button rotate-left-button" + (!isMetaElementsVisible ? " invisibile-screenshot-element" : "")} onClick={(e) => rotateLeft(e)}>
                        <RxCaretLeft className="icon push-left"/>
                    </button>
                    <button className={"project-page-screenshot-rotate-button rotate-right-button" + (!isMetaElementsVisible ? " invisibile-screenshot-element" : "")} onClick={(e) => rotateRight(e)}>
                        <RxCaretRight className="icon push-right" />
                    </button>
                    <div className={"project-page-screenshot-overlay-counter" + (!isMetaElementsVisible ? " invisibile-screenshot-element" : "")}>
                        {(overlayIndex + 1) + "/" + project.screenshots.length}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ScreenshotOverlay;