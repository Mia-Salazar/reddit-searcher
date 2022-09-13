import React, { useState } from "react";

import Select from "../Select/Select";

import "./Dialog.scss";

export const Dialog = ({setDialog, cities, setCityLatLon, dialog}) => {
    const [select, setSelect] = useState("")
    const selectCity = (event) => {
        let coord = {
            lat: cities[Number(select) +1].lat,
            lon: cities[Number(select) +1].lon,
            name: cities[Number(select) +1].text
        }
        setCityLatLon(coord);
        setDialog(false);
    }
    const handleSelect = (event) => {
        setSelect(event.target.value)
    }

	return (
        <dialog className="nes-dialog" id="dialog-default">
            {cities && <Select options={cities} id="type" title="Choose city" handleChange={handleSelect}/>}
            <menu className="dialog-menu">
                <button className="nes-btn" onClick={ e => setDialog(false)}>Cancel</button>
                <button className="nes-btn is-primary" onClick={selectCity}>Confirm</button>
            </menu>
        </dialog>
	);
};

export default Dialog;