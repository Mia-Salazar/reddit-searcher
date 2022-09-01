import React, { useRef } from "react";

import "./Search.scss";

export const Search = ({data, setData}) => {
    //const list = useWeatherThreeHour();
    const form = useRef(null);
    const searchWeather = (event) => {
        event.preventDefault()
        const formData = new FormData(form.current);
        const directions = {
          'lat': formData.get('lat'),
          'lon': formData.get('lon'),
        }
        setData(directions);
    }
	return (
        <form onSubmit={searchWeather} ref={form}>
            <div className="nes-field">
                <label for="lat">Latitud</label>
                <input type="text" id="lat" className="nes-input"/>
            </div>
            <div className="nes-field">
                <label for="lon">Longitud</label>
                <input type="text" id="lon" className="nes-input"/>
            </div>
            <button type="submit" class="nes-btn is-primary">Buscar</button>
        </form>
	);
};

export default Search;