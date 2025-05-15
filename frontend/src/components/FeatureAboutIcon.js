import React from 'react';

function FeatureAboutIcon({imgSrc, imgAlt}) {
    return (
        <div className="feature-about-icon-container-pseudo-border">
            <div className="feature-about-icon-container">
                <img className="feature-about-icon" src={imgSrc} alt={imgAlt} />
            </div>
        </div>
  );
}

export default FeatureAboutIcon;