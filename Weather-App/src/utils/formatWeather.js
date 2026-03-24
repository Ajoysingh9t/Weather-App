export function formatCurrentWeather(data) {
  return {
    city: data.name,
    country: data.sys.country,
    temp: Math.round(data.main.temp),
    feelsLike: Math.round(data.main.feels_like),
    humidity: data.main.humidity,
    description: data.weather[0].description,
    icon: data.weather[0].icon,
    windSpeed: data.wind.speed,
    sunrise: new Date(data.sys.sunrise * 1000).toLocaleTimeString(),
    sunset: new Date(data.sys.sunset * 1000).toLocaleTimeString(),
  }
}

export function formatForecastDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('en-US', {
    weekday: 'short',   // "Mon"
    month: 'short',     // "Jan"
    day: 'numeric',     // "15"
  })
}