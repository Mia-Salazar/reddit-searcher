import React, { useState } from "react";

import { Input } from "../Input/Input";
import Select from "../Select/Select";

export const SearchPollution = ({setData}) => {
    const [searchTerm, setSearchTerm] = useState('')
    const [dataForm, setDataForm] = useState("")
    const transformToMiliseconds = (value) => {
        const dateToChange = new Date(value);
        return dateToChange.getTime();
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        setData({...dataForm,
            start: transformToMiliseconds(dataForm.start),
            end: transformToMiliseconds(dataForm.end),
        });
    }
    const handleInputChange = (event) => {
        setDataForm({
            ...dataForm,
            [event.target.name] : event.target.value
        });
    }
    const selectOptions = [
        {value: "", text: "...Select"},
        {value: "lat", text: "Latitude and longitude"},
        {value: "city", text: "City name"},
        {value: "zip", text: "Post code"},
    ];
	return (
        <form onSubmit={handleSubmit} className="form">
            <Select options={selectOptions} id="type" title="Search by" handleChange={handleInputChange}/>
            {dataForm.type === "lat" && (
                <>
                    <Input id="lat" title="Latitude" handleInputChange={handleInputChange}/>
                    <Input id="lon" title="Longitude" handleInputChange={handleInputChange}/>
                </>
            )}
            {dataForm.type === "city" && (
                <>
                    <Input id="city" title="Ciudad" type="text" handleInputChange={handleInputChange}/>
                </>
            )}
            {dataForm.type === "zip" && (
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