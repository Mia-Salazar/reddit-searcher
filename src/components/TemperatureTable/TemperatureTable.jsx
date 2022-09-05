import React from "react";

export const TempratureTable = ({temperature}) => {
	return (
            <div className="nes-table-responsive">
                <p>Temperature</p>
                <table className="nes-table is-bordered is-centered">
                    <thead>
                        <tr>
                            <th>Temperature</th>
                            <th>Feels like</th>
                            <th>Min</th>
                            <th>Max</th>
                            <th>Pressure</th>
                            <th>Humidity</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{temperature.temp}</td>
                            <td>{temperature.feels_like}</td>
                            <td>{temperature.temp_min}</td>
                            <td>{temperature.temp_max}</td>
                            <td>{temperature.pressure}</td>
                            <td>{temperature.humidity}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
	);
};

export default TempratureTable;