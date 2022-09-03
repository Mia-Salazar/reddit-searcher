import { useState, useEffect } from 'react';

const useSearchByLatAndLon = (data) => {
    const [weather, setWeather] = useState();
    const [loading, setLoading] = useState(true);
    const apiKey = "33a0a36aa4fc08982e82b8e705e2e822";
    useEffect(() => {
        if (data) {
            setLoading(true)
            fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${data.lat}&lon=${data.lon}&appid=${apiKey}`)
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

    // const options = {
    //     method: 'GET',
    //     headers: {
    //         'X-RapidAPI-Key': 'idf4f8feeb43942778a7152000220109',
    //         'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
    //     }
    // };
    // useEffect(() => {
    //     fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`, options)
    //     .then(response => response.json())
    //     .then(response => setList(response))
    //     .catch(err => console.error(err));
    // }, []);
    // return list
}

export default useSearchByLatAndLon;

