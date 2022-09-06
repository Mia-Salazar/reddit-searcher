import React, { useState } from "react";

import SearchMap from "../../components/SearchMap/SearchMap";
import useMapWeather from "../../hooks/useMapWeather";

export const Map = () => {
	const [data, setData] = useState();
    const {weather, loading} = useMapWeather(data);
	return (
		<section >
			<article className="nes-container with-title">
				<h2 className="title">Weather map</h2>
                <SearchMap setData={setData} />
			</article>
		</section>
	);
};

export default Map;