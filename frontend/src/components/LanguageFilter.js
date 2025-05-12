import React, { useEffect, useState } from 'react';
import LanguageButton from './LanguageButton';

function LanguageFilter({activeLanguages, onChange}) {
    const [isHtmlInactive, setIsHtmlInactive] = useState(!activeLanguages["HTML"] ?? true);
    const [isCssInactive, setIsCssInactive] = useState(!activeLanguages["CSS"] ?? true);
    const [isJavascriptInactive, setIsJavascriptInactive] = useState(!activeLanguages["Javascript"] ?? true);
    const [isJavaInactive, setIsJavaInactive] = useState(!activeLanguages["Java"] ?? true);
    const [isSqlInactive, setIsSqlInactive] = useState(!activeLanguages["SQL"] ?? true);
    const [isDartInactive, setIsDartInactive] = useState(!activeLanguages["Dart"] ?? true);

    useEffect(() => {
        onChange(
            {
                "HTML": !isHtmlInactive,
                "CSS": !isCssInactive,
                "Javascript": !isJavascriptInactive,
                "Java": !isJavaInactive,
                "SQL": !isSqlInactive,
                "Dart": !isDartInactive
            }
        );
    }, [isHtmlInactive, isCssInactive, isJavascriptInactive, isJavaInactive, isSqlInactive, isDartInactive]);

    return (
        <div className="language-filter-container">
            <span className="language-filter-lead-text">Languages</span>
            <div className="language-filter-options">
                <LanguageButton language={"HTML"} onToggle={(isInactive) => setIsHtmlInactive(isInactive)} />
                <LanguageButton language={"CSS"} onToggle={(isInactive) => setIsCssInactive(isInactive)} />
                <LanguageButton language={"Javascript"} onToggle={(isInactive) => setIsJavascriptInactive(isInactive)} />
                <LanguageButton language={"Java"} onToggle={(isInactive) => setIsJavaInactive(isInactive)} />
                <LanguageButton language={"SQL"} onToggle={(isInactive) => setIsSqlInactive(isInactive)} />
                <LanguageButton language={"Dart"} onToggle={(isInactive) => setIsDartInactive(isInactive)} />
            </div>
        </div>
    );
}

export default LanguageFilter;