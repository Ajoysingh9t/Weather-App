import { useQuery } from '@tanstack/react-query'
import { fetchWeatherByCity } from '../api/weatherApi'

export function useWeather(city) {
  return useQuery({
    queryKey: ['weather', city],
    //         ^         ^
    //         |         |
    //    cache label   makes each city a separate cache entry

    queryFn: () => fetchWeatherByCity(city),
    // the function that actually fetches data

    enabled: !!city,
    // !!city converts city to boolean
    // prevents fetching if city is empty string or null
  })
}