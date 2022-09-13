import React, { useEffect, useState } from "react";

import Dialog from "../../components/Dialog/Dialog";
import PollutionDay from "../../components/PollutionDay/PollutionDay";
import SearchPollution from "../../components/SearchPollution/SearchPollution";
import useAirPollution from "../../hooks/useAirPollution";
import useGetCity from "../../hooks/useGetCity";

export const Pollution = () => {
	const [data, setData] = useState();
	const [city, setCity] = useState("");
	const [dataForm, setDataForm] = useState("")
	const [citiesList, setCitiesList] = useState()
	const [dialog, setDialog] = useState(false);
    const {pollution, loading} = useAirPollution(data);
	const {cities} = useGetCity(city);
	const [cityLatLon, setCityLatLon] = useState();

	const transformToMiliseconds = (value) => {
        const dateToChange = new Date(value);
		//Thanks XCJ Games for helping me with the date
        return dateToChange.getTime()/1000;
    }

	const handleSubmit = (event) => {
        event.preventDefault();
		if (dataForm.type === "lat") {
			setData({...dataForm,
				start: transformToMiliseconds(dataForm.start),
				end: transformToMiliseconds(dataForm.end),
			});
		} else if (dataForm.type === "city") {
			setData({...dataForm,
				start: transformToMiliseconds(dataForm.start),
				end: transformToMiliseconds(dataForm.end),
				lat: cityLatLon.lat,
				lon: cityLatLon.lon
			});
		}
    }

	useEffect(() => {
		if (cityLatLon?.name) {
			setDataForm(prevState => ({
				...prevState,
				"city" : cityLatLon.name
			}));
		}
    }, [cityLatLon]);
	useEffect(() => {
        if (cities) {
			let array = [{value: "", text: "...Select"},];
			let count = 0;
			cities.forEach(element => {
			   array.push({
				value: count, 
				text: `${element.name}, ${element.state}, ${element.country}`,
				lat: element.lat,
				lon: element.lon
			}) 
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
                <SearchPollution setData={setData} setCity={setCity} handleSubmit={handleSubmit} 
					dataForm={dataForm} setDataForm={setDataForm}/>
			</article>
			{loading && data && <h2>Cargando...</h2>}
			{!loading && data && pollution.list.map((option, index) => {
				return(
					<PollutionDay pollution={option} key={index} />
				);
			})}
			{dialog && <Dialog setDialog={setDialog} dialog={dialog} cities={citiesList} setCityLatLon={setCityLatLon}/>}
		</section>
	);
};

export default Pollution;