import React, { useEffect, useState } from "react";

import Dialog from "../../components/Dialog/Dialog";
import PollutionDay from "../../components/PollutionDay/PollutionDay";
import SearchPollution from "../../components/SearchPollution/SearchPollution";
import useAirPollution from "../../hooks/useAirPollution";
import useGetCity from "../../hooks/useGetCity";

export const Pollution = () => {
	const [data, setData] = useState();
	const [city, setCity] = useState("");
	const [citiesList, setCitiesList] = useState()
	const [dialog, setDialog] = useState(false);
    const {pollution, loading} = useAirPollution(data);
	const {cities} = useGetCity(city);
	const [cityLatLon, setCityLatLon] = useState();

	useEffect(() => {
        if (cities) {
			console.log('wwwwwwi')
			let array = [];
			let count = 0;
			cities.forEach(element => {
			   array.push({value: count, text: `${element.name}, ${element.country}`}) 
			   count++;
			});
			setCitiesList(array);
            setDialog(true)
        }
    }, [cities]);
	return (
		<section className="pollution">
			<article className="nes-container with-title">
				<h2 className="title">Air Pollution</h2>
                <SearchPollution setData={setData} setDialog={setDialog} setCity={setCity}/>
			</article>
			{loading && data && <h2>Cargando...</h2>}
			{!loading && data && pollution.list.map((option, index) => {
				return(
					<PollutionDay pollution={option} key={index} />
				);
			})}
			{dialog && <Dialog setDialog={setDialog} cities={citiesList} setCityLatLon={setCityLatLon}/>}
		</section>
	);
};

export default Pollution;