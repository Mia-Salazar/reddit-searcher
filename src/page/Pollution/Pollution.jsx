import React, { useState } from "react";

import SearchPollution from "../../components/SearchPollution/SearchPollution";
import useAirPollution from "../../hooks/useAirPollution";

export const Pollution = () => {
	const [data, setData] = useState();
    const {pollution, loading} = useAirPollution(data);
	return (
		<section >
			<article className="nes-container with-title">
				<h2 className="title">Air Pollution</h2>
                <SearchPollution setData={setData} />
				{loading && <h2>Cargando...</h2>}
			</article>
		</section>
	);
};

export default Pollution;