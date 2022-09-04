import React, { useState, useRef } from "react";

import { Search } from "../../components/Search/Search";
import useWeatherByDay from "../../hooks/useWeatherByDay";

export const ByDay = () => {
	const submitRef = useRef();
	const [data, setData] = useState();
    const {weather, loading} = useWeatherByDay(data);
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