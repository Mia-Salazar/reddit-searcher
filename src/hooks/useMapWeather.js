import { useState, useEffect } from 'react';

const useMapWeather = (data) => {
    const [weather, setWeather] = useState();
    const [loading, setLoading] = useState(true);
    const apiKey = "33a0a36aa4fc08982e82b8e705e2e822";
    useEffect(() => {
        if (data) {
            setLoading(true)
            fetch(`https://tile.openweathermap.org/map/${data.layer}/${data.z}/${data.x}/${data.y}.png?appid=${apiKey}`)
            .then(response => response.blob())
            .then(response => {
                URL.createObjectURL(response);
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

export default useMapWeather;