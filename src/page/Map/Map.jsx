import React, { useState } from "react";
import SearchMap from "../../components/SearchMap/SearchMap";

export const Home = () => {
	// const submitRef = useRef();
	const [data, setData] = useState();
    //const {weather, loading} = useWeather(data);
	return (
		<section >
			<article className="nes-container with-title">
				<h2 className="title">Weather map</h2>
                <SearchMap setData={setData} />
			</article>
		</section>
	);
};

export default Home;