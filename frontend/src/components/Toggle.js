import React, { useState, useEffect } from 'react';

function Toggle({isOn, onToggle, header}) {
    const [isToggleOn, setIsToggleOn] = useState(isOn ?? false);

    useEffect(() => {
        setIsToggleOn(isOn ?? false);
    }, [isOn]); 

    
    const toggle = () => {
        const newToggleState = !isToggleOn;  
        setIsToggleOn(newToggleState);

        onToggle(newToggleState);
    };

    return (
        <div className="toggle-box">
            <div className={"toggle-header" + (isToggleOn ? "" : " inactive-toggle-header")}>{header}</div>
            <label className="toggle-container">
                <input type="checkbox" className="hidden-element" checked={isToggleOn} readOnly onClick={(e) => toggle()}/>
                <span className="toggle" />
            </label>
        </div>
    );
}
  
export default Toggle;