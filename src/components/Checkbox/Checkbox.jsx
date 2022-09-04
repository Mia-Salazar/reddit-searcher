import React from "react";

export const Checkbox = ({text, value, isChecked = false}) => {
	return (
        <label>
            <input type="radio" className="nes-radio" name="day" defaultChecked={isChecked} value={value} />
            <span>{text}</span>
        </label>
	);
};

export default Checkbox;