import React, { useRef } from "react";

import "./Search.scss";

export const Search = ({setData}) => {
    const form = useRef();
    const handleSubmit = (event) => {
        event.preventDefault()
        const formData = new FormData(form.current);
        const directions = {
          'lat': formData.get('lat'),
          'lon': formData.get('lon'),
        }
        setData(directions);
    }
	return (
        <form onSubmit={handleSubmit} ref={form} className="form">
            <div className="nes-field">
                <label htmlFor="lat">Latitude</label>
                <input type="text" id="lat" name="lat" className="nes-input"/>
            </div>
            <div className="nes-field">
                <label htmlFor="lon">Longitude</label>
                <input type="text" id="lon" name="lon" className="nes-input"/>
            </div>
            <button type="submit" className="nes-btn is-primary">Search</button>
        </form>
	);
};

export default Search;