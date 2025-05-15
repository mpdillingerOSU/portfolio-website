import React, { useState, useEffect } from 'react';
import { FaCaretUp, FaCaretDown } from "react-icons/fa";

function SortDirectionToggle({isOn, onToggle}) {
    const [isToggleOn, setIsToggleOn] = useState(isOn ?? false);

    useEffect(() => {
        setIsToggleOn(isOn ?? false);
    }, [isOn]); 

    
    const toggle = (e) => {
        e.preventDefault();

        const newToggleState = !isToggleOn;  
        setIsToggleOn(newToggleState);
        
        if(onToggle !== undefined){
            onToggle(newToggleState);
        }
    };

    return (
        <button className="sort-direction-toggle" onClick={(e) => toggle(e)}>
            <FaCaretUp className={"sort-direction" + (isToggleOn ? "" : " inactive-sort-direction")} />
            <FaCaretDown className={"sort-direction" + (isToggleOn ? " inactive-sort-direction" : "")}  />
        </button>
    );
}
  
export default SortDirectionToggle;