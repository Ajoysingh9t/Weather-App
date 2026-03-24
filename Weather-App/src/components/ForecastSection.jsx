import ForecastCard from './ForecastCard'

function ForecastSection({ forecast, isLoading }) {

  // Loading skeleton — shows 5 placeholder cards
  if (isLoading) {
    return (
      <div className="flex flex-col items-center gap-4 w-full max-w-2xl">
        <h2 className="text-xl font-bold text-base-content/70">
          📅 5-Day Forecast
        </h2>
        <div className="flex flex-wrap justify-center gap-3">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="card bg-base-200 shadow-md w-36 h-56">
              <div className="card-body items-center justify-center">
                <span className="loading loading-spinner loading-md text-primary"></span>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  // Empty state
  if (!forecast || forecast.length === 0) return null

  return (
    <div className="flex flex-col items-center gap-4 w-full max-w-2xl">
      <h2 className="text-xl font-bold text-base-content/70">
        📅 5-Day Forecast
      </h2>
      <div className="flex flex-wrap justify-center gap-3">
        {forecast.map((day) => (
          <ForecastCard
            key={day.date}       // unique key for each item in a list
            date={day.date}
            temp={day.temp}
            description={day.description}
            icon={day.icon}
            humidity={day.humidity}
            windSpeed={day.windSpeed}
          />
        ))}
      </div>
    </div>
  )
}

export default ForecastSection