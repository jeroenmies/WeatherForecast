import axios from 'axios';

const API_KEY = '870494127582e81839be4bb8266a60b3';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    console.log(city);

    const url = `${ROOT_URL}&q=${city},nl`;

    const request = axios.get(url);
    console.log(request);

    return {
        type: FETCH_WEATHER,
        payload: request
    };
}