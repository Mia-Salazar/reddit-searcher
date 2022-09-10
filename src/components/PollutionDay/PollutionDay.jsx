import React, { useMemo } from "react";

export const PollutionDay = ({pollution}) => {
    //const date = useMemo(() => getDateComplete(pollution.dt), [pollution.dt]);
    const getDateComplete = (num) => {
        const d1 = new Date(num);
        const d = d1.getDate();
        let m = d1.getMonth();
        m++
        const y = d1.getFullYear();
        return m + "/" + d + "/" + y
    };
	return (
        <article className="nes-container with-title">
            <h2 className="title">{getDateComplete(pollution.dt)}</h2>
            <div className="lists">
                <ul className="nes-list is-disc">
                    <li>Carbon monoxide: {pollution.components.co} μg/m3</li>
                    <li>Nitrogen monoxide: {pollution.components.no} μg/m3</li>
                    <li>Nitrogen dioxide: {pollution.components.no2} μg/m3</li>
                    <li>Ozone: {pollution.components.o3} μg/m3</li>
                    <li>Sulphur dioxide: {pollution.components.so2} μg/m3</li>
                    <li>Fine particles matter: {pollution.components.pm2_5} μg/m3</li>
                    <li>Coarse particulate matter: {pollution.components.pm10} μg/m3</li>
                    <li>Ammonia: {pollution.components.co} μg/m3</li>
                    <li>Carbon monoxide: {pollution.components.nh3} μg/m3</li>
                </ul>
            </div>
        </article>
	);
};

export default PollutionDay;