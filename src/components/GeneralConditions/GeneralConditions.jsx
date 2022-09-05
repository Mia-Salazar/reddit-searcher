import React from "react";

export const GeneralConditions = ({weather, byDay = false}) => {
    const getTime = (miliseconds) => {
        console.log('wii')
        const date = new Date(miliseconds);
        const time = `${date.getHours()}:${date.getMinutes()}`;
        return time;
    }
	return (
        <div className="lists">
            <ul className="nes-list is-disc">
                <li>Weather: {weather.weather[0].main}</li>
                <li>Description: {weather.weather[0].description}</li>
                <li>Clouds: {weather.clouds.all}</li>
                <li>Wind speed: {weather.wind.speed}</li>
                <li>Visibility: {weather.visibility}</li>
                {!byDay &&
                <>
                    <li>Sunrise: {getTime(weather.sys.sunrise)}</li>
                    <li>Sunset: {getTime(weather.sys.sunset)}</li>
                </>}
            </ul>
        </div>
	);
};

export default GeneralConditions;