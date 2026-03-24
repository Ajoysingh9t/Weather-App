import {useQuery} from '@tanstack/react-query'
import {fetchWeatherByCity} from '../api/weatherApi'
export function useWeather(city) {
  return useQuery({
      queryKey:['weather',city],
      queryFn:()=>fetchWeatherByCity(city),
      enabled:!!city,
  })
}

