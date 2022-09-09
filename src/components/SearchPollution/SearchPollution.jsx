import React, { useState } from "react";

import { Input } from "../Input/Input";
import Select from "../Select/Select";

export const SearchPollution = ({setData}) => {
    const [selectValue, setSelectValue] = useState("")
    const [dataInput, setDataInput] = useState("")
    const handleSubmit = (event) => {
        event.preventDefault();
        setData(dataInput)
    }
    const handleSelectChange = (event) => {
        setSelectValue(event.target.value)
        handleInputChange(event)
    }
    const handleInputChange = (event) => {
        setDataInput({
            ...dataInput,
            [event.target.name] : event.target.value
        })
    }
    const selectOptions = [
        {value: "", text: "...Select"},
        {value: "lat", text: "Latitude and longitude"},
        {value: "city", text: "City name"},
        {value: "zip", text: "Post code"},
    ]
	return (
        <form onSubmit={handleSubmit} className="form">
            <Select options={selectOptions} id="layer" title="Search by" handleChange={handleSelectChange}/>
            {selectValue === "lat" && (
                <>
                    <Input id="lat" title="Latitude" handleInputChange={handleInputChange}/>
                    <Input id="lon" title="Longitude" handleInputChange={handleInputChange}/>
                </>
            )}
            {selectValue === "city" && (
                <>
                    <Input id="city" title="Ciudad" type="text" handleInputChange={handleInputChange}/>
                </>
            )}
            {selectValue === "zip" && (
                <>
                    <Input id="zip" title="ZIP" handleInputChange={handleInputChange}/>
                </>
            )}
            <Input type="date" id="start" title="Fecha de inicio" handleInputChange={handleInputChange}/>
            <Input type="date" id="end" title="Fecha final" handleInputChange={handleInputChange}/>
            <button type="submit" className="nes-btn is-primary">Search</button>
        </form>
	);
};

export default SearchPollution;