import React, { useState, useRef } from "react";

import { Search } from "../../components/Search/Search";
import WeatherSingleDay from "../../components/WeatherSingleDay/WeatherSingleDay";

export const ByDay = () => {
	const submitRef = useRef();
	const [data, setData] = useState();
    //const {weather, loading} = useWeather(data);
	return (
		<section >
			
			<article className="nes-container with-title">
				<h2 className="title">Search weather by days</h2>
				<Search setData={setData} byDay={true} submitRef={submitRef}/>
			</article>

		</section>
	);
};

export default ByDay;