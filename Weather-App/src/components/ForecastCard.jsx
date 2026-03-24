import { formatForecastDate } from '../utils/formatWeather'

function ForecastCard({ date, temp, description, icon, humidity, windSpeed }) {
  return (
    <div className="card bg-base-200 shadow-md w-36 hover:bg-base-300 transition-colors">
      <div className="card-body p-4 items-center text-center gap-1">

        {/* Date */}
        <p className="text-xs font-semibold text-base-content/60 uppercase tracking-wide">
          {formatForecastDate(date)}
        </p>

        {/* Weather Icon */}
        <img
          src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
          alt={description}
          className="w-14 h-14"
        />

        {/* Temp */}
        <p className="text-2xl font-bold text-primary">{temp}°C</p>

        {/* Description */}
        <p className="text-xs text-base-content/60 capitalize leading-tight">
          {description}
        </p>

        {/* Extra Details */}
        <div className="divider my-0"></div>
        <div className="flex flex-col gap-1 w-full text-xs text-base-content/70">
          <span>💧 {humidity}%</span>
          <span>💨 {windSpeed} m/s</span>
        </div>

      </div>
    </div>
  )
}

export default ForecastCard