import React, { useState } from "react";

import { Input } from "../Input/Input";

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
            <Input id="z" title="Zoom %" min="0" handleInputChange={handleInputChange}/>
            <Input id="x" title="Number of x tile coordinate" min="0" handleInputChange={handleInputChange}/>
            <Input id="y" title="umber of y tile coordinate" min="0" handleInputChange={handleInputChange}/>
            <button type="submit" className="nes-btn is-primary">Search</button>
        </form>
	);
};

export default SearchMap;