import React from "react";

export const WeatherSingleDay = ({weather}) => {
    const getTime = (miliseconds) => {
        const date = new Date(miliseconds);
        const time = `${date.getHours()}:${date.getMinutes()}`;
        return time;
    }
	return (
        <article className="nes-container with-title">
            <h3 className="title">{weather.name}, {weather.sys.country}</h3>
            <p>General conditions</p>
            <div className="lists">
                <ul className="nes-list is-disc">
                    <li>Weather: {weather.weather.main}</li>
                    <li>Description: {weather.weather.description}</li>
                    <li>Clouds: {weather.clouds.all}</li>
                    <li>Wind speed: {weather.wind.speed}</li>
                    <li>Visibility: {weather.wind.visibility}</li>
                    <li>Sunrise: {getTime(weather.sys.sunrise)}</li>
                    <li>Sunset: {getTime(weather.sys.sunset)}</li>
                </ul>
            </div>
            <div className="nes-table-responsive">
                <p>Temperature</p>
                <table className="nes-table is-bordered is-centered">
                    <thead>
                        <tr>
                            <th>Temperature</th>
                            <th>Feels like</th>
                            <th>Min</th>
                            <th>Max</th>
                            <th>Pressure</th>
                            <th>Humidity</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{weather.main.temp}</td>
                            <td>{weather.main.feels_like}</td>
                            <td>{weather.main.temp_min}</td>
                            <td>{weather.main.temp_max}</td>
                            <td>{weather.main.pressure}</td>
                            <td>{weather.main.humidity}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </article>
	);
};

export default WeatherSingleDay;