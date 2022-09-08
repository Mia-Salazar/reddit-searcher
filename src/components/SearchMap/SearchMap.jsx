import React, { useState } from "react";

import { Input } from "../Input/Input";
import Select from "../Select/Select";

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
    const selectOptions = [
        {value: "", text: "Select..."},
        {value: "clouds_new", text: "Clouds"},
        {value: "precipitation_new", text: "Precipitation<"},
        {value: "temp_new", text: "Temperature"},
        {value: "pressure_new", text: "Sea level pressure"},
        {value: "wind_new", text: "Wind speed"},
    ]
	return (
        <form onSubmit={handleSubmit} className="form">
            <Select options={selectOptions} id="layer" title="Select layer" handleChange={handleInputChange}/>
            <Input id="z" title="Zoom %" min="0" handleInputChange={handleInputChange}/>
            <Input id="x" title="Number of x tile coordinate" min="0" handleInputChange={handleInputChange}/>
            <Input id="y" title="umber of y tile coordinate" min="0" handleInputChange={handleInputChange}/>
            <button type="submit" className="nes-btn is-primary">Search</button>
        </form>
	);
};

export default SearchMap;