import { useState, useEffect } from 'react';

const useWeatherThreeHour = (data) => {
    const [list, setList] = useState([]);
    const apiKey = "33a0a36aa4fc08982e82b8e705e2e822"
    useEffect(() => {
        if (data) {
            fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${data.lat}&lon=${data.lon}&appid=${apiKey}`)
            .then(response => response.json())
            .then(response => setList(response))
            .catch(err => console.error(err));
        }
    }, [data]);
    return list

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

export default useWeatherThreeHour;

