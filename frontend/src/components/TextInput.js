import React from 'react';

function TextInput({inputRef, id, name, tabIndex, title, value, onChange, onEnter, isErrored, isTextArea}) {
    return (
        <div className="text-input">
            {title !== undefined && (
                <div className="text-input-lead-text">{title}</div>
            )}
            {isTextArea ? (
                <textarea className={"textarea-input-field" + (isErrored ? " textarea-input-field-errored" : "")} id={id} name={name} ref={inputRef} tabIndex={tabIndex} placeholder="" value={value} onChange={e => onChange(e)}
                    onKeyDown={
                        e => {
                            if (onEnter && e.key === "Enter") {                       
                                e.preventDefault();
                                onEnter(e);
                            }
                        }
                    }
                />
            ) : (
                <input className={"text-input-field" + (isErrored ? " text-input-field-errored" : "")} id={id} name={name} type="text" ref={inputRef} tabIndex={tabIndex} placeholder="" value={value} onChange={e => onChange(e)}
                    onKeyDown={
                        e => {
                            if (e.key === "Enter") {                       
                                e.preventDefault();
                                onEnter(e);
                            }
                        }
                    }
                />
            )}
        </div>
  );
}

export default TextInput;