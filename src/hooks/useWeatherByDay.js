import { useState, useEffect } from 'react';

const useWeatherByDay = (data) => {
    const [weather, setWeather] = useState();
    const [loading, setLoading] = useState(true);
    const apiKey = "33a0a36aa4fc08982e82b8e705e2e822";
    useEffect(() => {
        if (data) {
            setLoading(true)
            fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${data.lat}&lon=${data.lon}&cnt=${data.day}&appid=${apiKey}`)
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

export default useWeatherByDay;