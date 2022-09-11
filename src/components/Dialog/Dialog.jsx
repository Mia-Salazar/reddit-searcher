import React from "react";

import Select from "../Select/Select";

import "./Dialog.scss";

export const Dialog = ({setDialog, cities, setCityLatLon}) => {
    const selectCity = (event) => {
        let coord = {
            lat: cities[event.value].lat,
            lon: cities[event.value].lon
        }
        setCityLatLon(coord);
        setDialog(false);
    }

	return (
        <dialog className="nes-dialog" id="dialog-default">
            {cities && <Select options={cities} id="type" title="Choose city" handleChange={selectCity}/>}
            <menu className="dialog-menu">
                <button className="nes-btn" onClick={ e => setDialog(false)}>Cancel</button>
                <button className="nes-btn is-primary">Confirm</button>
            </menu>
        </dialog>
	);
};

export default Dialog;