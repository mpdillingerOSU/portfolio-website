import React, { useEffect, useRef, useState } from 'react';
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";

function ScreenshotOverlay({project, initialIndex, onClose}) {
    const [overlayIndex, setOverlayIndex] = useState(initialIndex);
    const [isMetaElementsVisible, setIsMetaElementsVisible] = useState(true);
    const [isHoveringLeftRotate, setIsHoveringLeftRotate] = useState(false);
    const [isHoveringRightRotate, setIsHoveringRightRotate] = useState(false);

    const [startTime, setStartTime] = useState(null);
    const [elapsedTime, setElapsedTime] = useState(0);

    const overlayRef = useRef(null);
    const onClickOutside = (e) => {
        if(overlayRef.current && !overlayRef.current.contains(e.target)) {
            onClose();
        }
    }

    const resetVisibilityTimer = () => {
        setStartTime(performance.now());
        setIsMetaElementsVisible(true);
    };

    // due to multiple re-renders occurring (and thus conflicts), an interval with
    // a counter was used instead of a timeout
    let intervalId = undefined;
    useEffect(() => {
        if(startTime) {
            intervalId = setInterval(() => {
                const now = performance.now();
                setElapsedTime(now - startTime);
            }, 100);

            return () => clearInterval(intervalId);
        }
    }, [startTime]);

    useEffect(() => {
        if(elapsedTime >= 1500 && !isHoveringLeftRotate && !isHoveringRightRotate && navigator.maxTouchPoints === 0){
            setStartTime();
            clearInterval(intervalId);
            setIsMetaElementsVisible(false);
        }
    }, [elapsedTime]);

    useEffect(() => {
        resetVisibilityTimer();
        document.addEventListener("mousedown", onClickOutside);
        document.addEventListener("mousemove", resetVisibilityTimer);

        return () => {
            document.removeEventListener("mousedown", onClickOutside);
            document.removeEventListener("mousemove", resetVisibilityTimer);
            clearInterval(intervalId);
            intervalId = undefined;
        };
    }, []);

    const updateScreenshot = (e, i) => {
        e.preventDefault();

        setOverlayIndex(i);
        resetVisibilityTimer();
    }

    const rotateLeft = (e) => {
        e.preventDefault();

        if(isMetaElementsVisible){
            updateScreenshot(e, overlayIndex === 0 ? project.screenshots.length - 1 : overlayIndex - 1);
        }
    }

    const rotateRight = (e) => {
        e.preventDefault();

        if(isMetaElementsVisible){
            updateScreenshot(e, (overlayIndex + 1) % project.screenshots.length);
        }
    }

    return (
        <div className="overlay-background">
            <div className="project-page-screenshot-overlay" ref={overlayRef}>
                <div className="project-page-selected-screenshot-container">
                    <img className="project-page-screenshot" src={project.screenshots[overlayIndex]} alt="project screenshot" />
                    <button className={"project-page-screenshot-rotate-button rotate-left-button" + (!isMetaElementsVisible ? " invisible-screenshot-element" : "")} onClick={(e) => rotateLeft(e)} onMouseEnter={(e) => setIsHoveringLeftRotate(true)} onMouseLeave={(e) => setIsHoveringLeftRotate(false)}>
                        <RxCaretLeft className="icon push-left"/>
                    </button>
                    <button className={"project-page-screenshot-rotate-button rotate-right-button" + (!isMetaElementsVisible ? " invisible-screenshot-element" : "")} onClick={(e) => rotateRight(e)} onMouseEnter={(e) => setIsHoveringRightRotate(true)} onMouseLeave={(e) => setIsHoveringRightRotate(false)}>
                        <RxCaretRight className="icon push-right" />
                    </button>
                    <div className={"project-page-screenshot-overlay-counter" + (!isMetaElementsVisible ? " invisible-screenshot-element" : "")}>
                        {(overlayIndex + 1) + "/" + project.screenshots.length}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ScreenshotOverlay;