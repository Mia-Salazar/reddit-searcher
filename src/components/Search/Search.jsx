import React, { useRef } from "react";

import "./Search.scss";

export const Search = ({setData, byDay = false}) => {
    const form = useRef();
    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(form.current);
        let directions = {
            'lat': formData.get('lat'),
            'lon': formData.get('lon'),
        }
        if (byDay) {
            directions['day'] = Number(formData.get('day'))
        }
        setData(directions);
    }
	return (
        <form onSubmit={handleSubmit} ref={form} className="form">
            <div className="nes-field">
                <label htmlFor="lat">Latitude</label>
                <input type="number" id="lat" name="lat" className="nes-input" required/>
            </div>
            <div className="nes-field">
                <label htmlFor="lon">Longitude</label>
                <input type="number" id="lon" name="lon" className="nes-input" required/>
            </div>
            {byDay && (
                <div className="nes-field">
                    <label htmlFor="lon">Number of days</label>
                    <input type="number" id="lon" name="day" min="1" max="5" className="nes-input" required/>
                </div>
            )}
            <button type="submit" className="nes-btn is-primary">Search</button>
        </form>
	);
};

export default Search;