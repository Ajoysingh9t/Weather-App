import { useQuery } from '@tanstack/react-query'
import { fetchForecastByCity } from '../api/weatherApi'

export function useForecast(city) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['forecast', city],
    queryFn: () => fetchForecastByCity(city),
    enabled: !!city,
  })

  // Transform raw forecast → one entry per day at noon
  const forecast = data?.list
    ? data.list
        .filter(item => item.dt_txt.includes('12:00:00'))
        .map(item => ({
          date: item.dt_txt.split(' ')[0],       // "2024-01-15"
          temp: Math.round(item.main.temp),
          feelsLike: Math.round(item.main.feels_like),
          humidity: item.main.humidity,
          description: item.weather[0].description,
          icon: item.weather[0].icon,
          windSpeed: item.wind.speed,
        }))
    : []

  return { forecast, isLoading, isError }
}