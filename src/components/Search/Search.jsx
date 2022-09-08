import React, { useRef } from "react";

import { Input } from "../Input/Input";
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
            <Input id="lat" title="Latitude" />
            <Input id="lon" title="Longitude" />
            {byDay && (
                <Input id="day" min="1" max="5" title="Number of days" />
            )}
            <button type="submit" className="nes-btn is-primary">Search</button>
        </form>
	);
};

export default Search;