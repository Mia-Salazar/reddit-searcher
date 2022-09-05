import React from "react";

import GeneralConditions from "../GeneralConditions/GeneralConditions";
import TempratureTable from "../TemperatureTable/TemperatureTable";

import "./WeatherMultipleDays.scss"

export const WeatherMultipleDays = ({weather}) => {
	return (
        <article className="nes-container with-title">
            <h3 className="title">{weather.city.name}, {weather.city.country}</h3>
            <p>General conditions by day</p>
            {weather.list.map((article, index) => {
                return(
                    <div className="list-days" key={article.dt}>
                        <div className="nes-badge">
                            <span className="is-dark">Day {index + 1}</span>
                        </div>
                        <GeneralConditions weather={article}  byDay={true}/>
                        <TempratureTable temperature={article.main}/>
                    </div>
                );
            })}

        </article>
	);
};

export default WeatherMultipleDays;