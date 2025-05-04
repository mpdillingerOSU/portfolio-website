import React from 'react';

function FeaturedProject({name, imgSrc, alt}) {
    return (
        <div className="featured-project">
            <div className="outer-hexagon">
                <div className="inner-hexagon">
                    <img className="featured-project-logo" src={imgSrc} alt={alt} />
                </div>
            </div>
            <div className="featured-project-name-outer-container">
                <div className="featured-project-name-inner-container">
                    {name}
                </div>
            </div>
        </div>
  );
}

export default FeaturedProject;