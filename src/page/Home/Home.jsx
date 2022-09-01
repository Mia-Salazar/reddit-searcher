import React, { useState, useRef } from "react";

import { Search } from "../../components/Search/Search";
import useWeatherThreeHour from "../../hooks/useWeather";

export const Home = () => {
	const submitRef = useRef();
	const [data, setData] = useState()
    const list = useWeatherThreeHour(data);
	return (
		<section className="nes-container with-title">
			<p class="title">Buscar tiempo</p>
			<Search setData={setData} submitRef={submitRef}/>
		</section>
	);
};

export default Home;