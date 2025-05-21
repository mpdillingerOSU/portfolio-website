import React, { useState, useRef, useEffect } from 'react';
import { RxCaretDown } from "react-icons/rx";

function SelectionInput({options, value, onChange}) {
    const [displayOptions, setDisplayOptions] = useState(false);
    const [selection, setSelection] = useState(value);

    const updateOptionsVisibility = (val) => {
        setDisplayOptions(val);
    }

    const updateSelection = (option) => {
        setSelection(option);
        onChange(option[0]);
    }

    const optionsRef = useRef(null);
    //Check of selection ref also ensures that we don't get an open and close double effect when clicking on the actual selection box
    const selectionRef = useRef(null);
    useEffect(() => {
        function handleClickOutside(event) {
            if(optionsRef.current && !optionsRef.current.contains(event.target)
                && selectionRef.current && !selectionRef.current.contains(event.target)) {
                updateOptionsVisibility(false);
            }
        }

        //Bind event listener
        document.addEventListener("mousedown", handleClickOutside);
        
        return () => {
            //Unbind event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="selection-input-container" onClick={() => updateOptionsVisibility(!displayOptions)}>
            <button className="selection-input" ref={selectionRef}>
                <span>
                    {selection !== undefined ? selection[1] : "Select an Option"}
                </span>
                <RxCaretDown className={"selection-input-caret" + (displayOptions ? " rotated-selection-input-caret" : "")}/>
            </button>
            <div className={"selection-options-container" + (displayOptions ? " selection-options-container-displayed" : "")} ref={optionsRef}>
                {Array.from({ length: options.length }, (_, i) => (
                    <button key={i} className="selection-option" onClick={() => updateSelection(options[i])}>{options[i][1]}</button>
                ))}
            </div>
        </div>
    );
}

export default SelectionInput;