import { useState, useEffect } from 'react';

const useAirPollution = (data) => {
    const [pollution, setPollution] = useState();
    const [loading, setLoading] = useState(true);
    const apiKey = "33a0a36aa4fc08982e82b8e705e2e822";
    useEffect(() => {
        //http://api.openweathermap.org/data/2.5/air_pollution/history?lat=50&lon=50&start=1606223802&end=1606482999&appid=${apiKey}
        if (data) {
            setLoading(true)
            fetch(`http://api.openweathermap.org/data/2.5/air_pollution/history?lat=${data.lat}&lon=${data.lon}&start=${data.start}&end=${data.end}&appid=${apiKey}`)
            .then(response => response.json())
            .then(response => {
                setPollution(response);
                setLoading(false);
            })
            .catch(err => {
                setLoading(false);
                console.error(err);
            });
        }
    }, [data]);
    return {pollution, loading}; 
}

export default useAirPollution;