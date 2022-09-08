import React from "react";

export const Input = ({id, min, max, type = "number", title, handleInputChange}) => {
	return (
        <div className="nes-field">
            <label htmlFor={id}>{title}</label>
            <input type={type} id={id} name={id} min={min} max={max} className="nes-input" required onChange={handleInputChange}/>
        </div>
	);
};

export default Input;