import React from 'react';

function FeaturedProject({imgSrc, alt}) {
    return (
        <div className="outer-hexagon">
            <div className="inner-hexagon">
                <img className="featured-project-logo" src={imgSrc} alt={alt} />
            </div>
        </div>
  );
}

export default FeaturedProject;