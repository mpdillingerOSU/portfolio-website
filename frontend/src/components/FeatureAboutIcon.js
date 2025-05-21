import React from 'react';

function FeatureAboutIcon({feature, imgSrc, imgAlt}) {
    return (
        <div className="feature-about-icon-container-pseudo-border">
            <div className="feature-about-icon-container">
                <img className="feature-about-icon" src={imgSrc} alt={imgAlt} />
            </div>
            <div className="project-feature-popup-container">
                <div className="project-feature-popup">
                    {feature}
                </div>
            </div>
        </div>
  );
}

export default FeatureAboutIcon;