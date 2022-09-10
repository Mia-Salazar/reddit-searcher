import React, { useState } from "react";
import PollutionDay from "../../components/PollutionDay/PollutionDay";

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
			</article>
			{loading && data && <h2>Cargando...</h2>}
			{!loading && data && pollution.list.map((option, index) => {
				return(
					<PollutionDay pollution={option} key={index} />
				);
			})}
		</section>
	);
};

export default Pollution;