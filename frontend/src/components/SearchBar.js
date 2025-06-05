import React from 'react';
import { IoMdClose } from "react-icons/io";

function SearchBar({inputRef, id, tabIndex, value, onChange, onEnter, onButtonClick}) {
    return (
        <div className="search-bar-outer-container">
            <span className="search-bar-lead-text">Search</span>
            <div className="search-bar-inner-container">
                <input className="search-bar-input-box" id={id} type="text" ref={inputRef} tabIndex={tabIndex} placeholder="Enter project name..." value={value} onChange={e => onChange(e)}
                    onKeyDown={
                        e => {
                            if (onEnter && e.key === "Enter") {                       
                                e.preventDefault();
                                onEnter(e);
                            }
                        }
                    }
                />
                {value !== "" && (
                    <button className="search-bar-clear-button" type="button" onClick= {e => onButtonClick(e)}>
                        <IoMdClose />
                    </button>
                )}
            </div>
        </div>
  );
}

export default SearchBar;