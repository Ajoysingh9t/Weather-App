import axios from 'axios'
const API_KEY = import.meta.env.VITE_WEATHER_API_KEY
const BASE_URL = 'https://api.openweathermap.org/data/3.0/'

export async function fetchWeatherByCity(city){
  const {data} = await axios.get(`${BASE_URL}/weather`, {
    params: {
      q: city,
      appid: API_KEY,
      units: 'metric',   // celsius
      lang: 'en'
    }
  })
  return data
}