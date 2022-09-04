import React, { useRef } from "react";

import Checkbox from "../Checkbox/Checkbox";

import "./Search.scss";

export const Search = ({setData, byDay = false}) => {
    const form = useRef();
    const handleSubmit = (event) => {
        event.preventDefault()
        const formData = new FormData(form.current);
        let directions = {
            'lat': formData.get('lat'),
            'lon': formData.get('lon'),
        }
        if (byDay) {
            directions['day'] = formData.get('day')
        }
        setData(directions);
    }
	return (
        <form onSubmit={handleSubmit} ref={form} className="form">
            <div className="nes-field">
                <label htmlFor="lat">Latitude</label>
                <input type="text" id="lat" name="lat" className="nes-input" required/>
            </div>
            <div className="nes-field">
                <label htmlFor="lon">Longitude</label>
                <input type="text" id="lon" name="lon" className="nes-input" required/>
            </div>
            {byDay && (
                <div className="radio-group">
                    <Checkbox value={4} isChecked={true} text="4 days"/>
                    <Checkbox value={16} text="16 days"/>
                </div>
            )}
            <button type="submit" className="nes-btn is-primary">Search</button>
        </form>
	);
};

export default Search;