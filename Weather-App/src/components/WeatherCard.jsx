function WeatherCard({ city, country, icon, temp, description, sunrise, sunset }) {
  return (
    <div className="bg-base-200 rounded-2xl shadow-xl p-6 w-80">

      {/* Top Row — Temp + Icon */}
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-5xl font-extrabold text-primary">
            {temp}°C
          </h3>
          <p className="text-base-content font-semibold text-lg mt-1">
            {city}, {country}
          </p>
          <p className="text-base-content/50 text-sm mt-1 capitalize">
            {description}
          </p>
        </div>

        <img
          src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
          alt={description}
          className="w-24 h-24"
        />
      </div>

      {/* Divider */}
      <div className="divider my-3 opacity-30"></div>

      {/* Bottom Row — Sunrise & Sunset */}
      <dl className="flex justify-around">
        <div className="flex items-center gap-2">
          <span className="text-xl">🌅</span>
          <div>
            <dt className="text-xs text-base-content/40 uppercase tracking-wide">
              Sunrise
            </dt>
            <dd className="text-sm font-semibold text-base-content">
              {sunrise}
            </dd>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xl">🌇</span>
          <div>
            <dt className="text-xs text-base-content/40 uppercase tracking-wide">
              Sunset
            </dt>
            <dd className="text-sm font-semibold text-base-content">
              {sunset}
            </dd>
          </div>
        </div>
      </dl>

    </div>
  )
}

export default WeatherCard