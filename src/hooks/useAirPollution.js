import { useState, useEffect } from 'react';

const useAirPollution = (data) => {
    const [weather, setWeather] = useState();
    const [loading, setLoading] = useState(true);
    const apiKey = "33a0a36aa4fc08982e82b8e705e2e822";
    useEffect(() => {
        if (data) {
            setLoading(true)
            fetch(`http://api.openweathermap.org/data/2.5/air_pollution/history?lat=${data.lat}&lon=${data.lon}&start=${data.start}&end=${data.end}&appid=${apiKey}`)
            .then(response => response.json())
            .then(response => {
                setWeather(response);
                setLoading(false);
            })
            .catch(err => {
                setLoading(false);
                console.error(err);
            });
        }
    }, [data]);
    return {weather, loading}; 
}

export default useAirPollution;