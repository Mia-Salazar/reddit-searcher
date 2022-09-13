import React from "react";

import { Input } from "../Input/Input";
import Select from "../Select/Select";

import "./SearchPollution.scss"

export const SearchPollution = ({handleSubmit, setCity, dataForm, setDataForm}) => {
    const initialState = {
        lat: null,
        lon: null,
        start: null,
        end: null
    };
    const cleanCity = () => {
        setDataForm(prevState => ({
            ...prevState,
            "city" : null
        }));
    }
    const handleSelect = (event) => {
        setDataForm(initialState);
        handleInputChange(event);
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
    ];
    const changeCity = (event) => {
        const timer = setTimeout(() => {
            setCity(event.target.value)
        }, 1500)
        return () => clearTimeout(timer) 
    }
	return (
        <form onSubmit={handleSubmit} className="form">
            <Select options={selectOptions} id="type" title="Search by" handleChange={handleSelect} value={dataForm.type}/>
            {dataForm.type === "lat" && (
                <>
                    <Input id="lat" title="Latitude" handleInputChange={handleInputChange} value={dataForm.lat}/>
                    <Input id="lon" title="Longitude" handleInputChange={handleInputChange} value={dataForm.lon}/>
                </>
            )}
            {dataForm.type === "city" &&  dataForm.city && (
                <>
                    <div className="nes-input city-name-container">
                        <span className="nes-text is-primary city-name">{dataForm.city} 
                            <button className="close-button" onClick={cleanCity}><i className="nes-icon close"></i></button>
                        </span>
                    </div>
                    
                </>
            )}
            {dataForm.type === "city" &&  !dataForm.city && (
                <>
                    <Input id="city" title="City" type="text" handleInputChange={changeCity} />
                </>
            )}
            {dataForm.type === "zip" && (
                <>
                    <Input id="zip" title="ZIP" handleInputChange={handleInputChange}/>
                </>
            )}
            <Input type="date" id="start" title="Fecha de inicio" handleInputChange={handleInputChange} value={dataForm.start}/>
            <Input type="date" id="end" title="Fecha final" handleInputChange={handleInputChange} value={dataForm.end}/>
            <button type="submit" className="nes-btn is-primary">Search</button>
        </form>
	);
};

export default SearchPollution;