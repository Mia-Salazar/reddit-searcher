import React, { useState } from "react";

import SearchPollution from "../../components/SearchPollution/SearchPollution";

export const Pollution = () => {
	const [data, setData] = useState();
    //const {weather, loading} = useMapWeather(data);
	return (
		<section >
			<article className="nes-container with-title">
				<h2 className="title">Air Pollution</h2>
                <SearchPollution />
			</article>
		</section>
	);
};

export default Pollution;