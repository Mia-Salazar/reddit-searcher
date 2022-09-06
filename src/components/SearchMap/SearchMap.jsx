import React, { useState } from "react";

export const SearchMap = ({setData}) => {
    const [dataInput, setDataInput] = useState("")
    const handleSubmit = (event) => {
        event.preventDefault();
        setData(dataInput)
    }
    const handleInputChange = (event) => {
        setDataInput({
            ...dataInput,
            [event.target.name] : event.target.value
        })
    }
	return (
        <form onSubmit={handleSubmit} className="form">
            <label htmlFor="layer">Select layer</label>
            <div className="nes-select">
                <select required id="layer" name="layer" onChange={handleInputChange}>
                    <option value="">Select...</option>
                    <option value="clouds_new">Clouds</option>
                    <option value="precipitation_new">Precipitation</option>
                    <option value="temp_new">Temperature</option>
                    <option value="pressure_new">Sea level pressure</option>
                    <option value="wind_new">Wind speed</option>
                </select>
            </div>
            <div className="nes-field">
                <label htmlFor="z">Zoom %</label>
                <input type="number" id="z" name="z" min="0" className="nes-input" required onChange={handleInputChange}/>
            </div>
            <div className="nes-field">
                <label htmlFor="x">Number of x tile coordinate</label>
                <input type="number" id="x" name="x"className="nes-input" required onChange={handleInputChange}/>
            </div>
            <div className="nes-field">
                <label htmlFor="y">Number of y tile coordinate</label>
                <input type="number" id="y" name="y"className="nes-input" required onChange={handleInputChange}/>
            </div>
            <button type="submit" className="nes-btn is-primary">Search</button>
        </form>
	);
};

export default SearchMap;