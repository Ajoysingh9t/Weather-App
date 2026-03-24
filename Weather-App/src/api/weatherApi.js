import axios from 'axios'

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY
const BASE_URL = 'https://api.openweathermap.org/data/2.5'  // ← no trailing slash

export async function fetchWeatherByCity(city) {
  const { data } = await axios.get(`${BASE_URL}/weather`, {
    params: {
      q: city,
      appid: API_KEY,
      units: 'metric',
      lang: 'en'
    }
  })
  console.log('Weather API response:', data)
  return data
}

export async function fetchForecastByCity(city) {
  const { data } = await axios.get(`${BASE_URL}/forecast`, {
    params: {
      q: city,
      appid: API_KEY,
      units: 'metric',
      lang: 'en'
    }
  })
  console.log('Forecast API response:', data)
  return data
}