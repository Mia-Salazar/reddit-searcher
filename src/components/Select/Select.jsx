import React from "react";

export const Select = ({id, options, title, handleChange}) => {
	return (
        <>
            <label htmlFor={id}>{title}</label>
            <div className="nes-select">
                <select required id={id} name={id} onChange={handleChange}>
                    {options.map((option, index) => {
                        return(
                            <option value={option.value} key={index}>{option.text}</option>
                        );
                    })}
                </select>
            </div>
        </>
	);
};

export default Select;