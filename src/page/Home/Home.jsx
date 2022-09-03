import React, { useState, useRef } from "react";

import { Search } from "../../components/Search/Search";
import WeatherSingleDay from "../../components/WeatherSingleDay/WeatherSingleDay";
import useSearchByLatAndLon from "../../hooks/useWeather";

export const Home = () => {
	const submitRef = useRef();
	const [data, setData] = useState();
    const {weather, loading} = useSearchByLatAndLon(data);
	return (
		<section >
			
			<article className="nes-container with-title">
				<h2 className="title">Serach weather</h2>
				<Search setData={setData} submitRef={submitRef}/>
			</article>
			{ data && !loading && <WeatherSingleDay weather={weather} />}
		</section>
	);
};

export default Home;