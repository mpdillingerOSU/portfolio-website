import React, { useEffect, useState } from 'react';
import TechnologyButton from './TechnologyButton';

function TechnologyFilter({activeTechnologies, onChange}) {
    const [isReactInactive, setIsReactInactive] = useState(!activeTechnologies["React"] ?? true);
    const [isNextInactive, setIsNextInactive] = useState(!activeTechnologies["Next.js"] ?? true);
    const [isSpringInactive, setIsSpringInactive] = useState(!activeTechnologies["Spring"] ?? true);
    const [isVsCodeInactive, setIsVsCodeInactive] = useState(!activeTechnologies["VS Code"] ?? true);
    const [isFlutterInactive, setIsFlutterInactive] = useState(!activeTechnologies["Flutter"] ?? true);
    const [isIntelliJInactive, setIsIntelliJInactive] = useState(!activeTechnologies["IntelliJ"] ?? true);
    const [isMySqlInactive, setIsMySqlInactive] = useState(!activeTechnologies["MySQL"] ?? true);
    const [isGitInactive, setIsGitInactive] = useState(!activeTechnologies["Git"] ?? true);

    useEffect(() => {
        onChange(
            {
                "React": !isReactInactive,
                "Next.js": !isNextInactive,
                "Spring": !isSpringInactive,
                "VS Code": !isVsCodeInactive,
                "Flutter": !isFlutterInactive,
                "IntelliJ": !isIntelliJInactive,
                "MySQL": !isMySqlInactive,
                "Git": !isGitInactive
            }
        );
    }, [isReactInactive, isNextInactive, isSpringInactive, isVsCodeInactive, isFlutterInactive, isIntelliJInactive, isMySqlInactive, isGitInactive]);

    return (
        <div className="feature-filter-container">
            <span className="feature-filter-lead-text">Technologies</span>
            <div className="feature-filter-options">
                <TechnologyButton technology={"React"} onToggle={(isInactive) => setIsReactInactive(isInactive)} />
                <TechnologyButton technology={"Next.js"} onToggle={(isInactive) => setIsNextInactive(isInactive)} />
                <TechnologyButton technology={"Spring"} onToggle={(isInactive) => setIsSpringInactive(isInactive)} />
                <TechnologyButton technology={"VS Code"} onToggle={(isInactive) => setIsVsCodeInactive(isInactive)} />
                <TechnologyButton technology={"Flutter"} onToggle={(isInactive) => setIsFlutterInactive(isInactive)} />
                <TechnologyButton technology={"IntelliJ"} onToggle={(isInactive) => setIsIntelliJInactive(isInactive)} />
                <TechnologyButton technology={"MySQL"} onToggle={(isInactive) => setIsMySqlInactive(isInactive)} />
                <TechnologyButton technology={"Git"} onToggle={(isInactive) => setIsGitInactive(isInactive)} />
            </div>
        </div>
    );
}

export default TechnologyFilter;