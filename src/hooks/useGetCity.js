import { useState, useEffect } from 'react';

const useWeatherByDay = (search) => {
    //http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid={API key}
    const [cities, setCities] = useState();
    const [loading, setLoading] = useState(true);
    const apiKey = "33a0a36aa4fc08982e82b8e705e2e822";
    useEffect(() => {
        if (search) {
            setLoading(true)
            fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${search}&limit=10&appid=${apiKey}`)
            .then(response => response.json())
            .then(response => {
                setCities(response);
                setLoading(false);
            })
            .catch(err => {
                setLoading(false);
                console.error(err);
            });
        }
    }, [search]);
    return {cities, loading}; 
}

export default useWeatherByDay;