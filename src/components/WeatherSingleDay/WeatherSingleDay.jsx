import React from "react";

import GeneralConditions from "../GeneralConditions/GeneralConditions";
import TempratureTable from "../TemperatureTable/TemperatureTable";

export const WeatherSingleDay = ({weather}) => {
	return (
        <article className="nes-container with-title">
            <h3 className="title">{weather.name}, {weather.sys.country}</h3>
            <p>General conditions</p>
            <GeneralConditions weather={weather}/>
            <TempratureTable temperature={weather.main} />
        </article>
	);
};

export default WeatherSingleDay;