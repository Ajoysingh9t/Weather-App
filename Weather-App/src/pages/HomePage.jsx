import { useState, useMemo } from "react";
import Searchbar from "../components/Searchbar";
import SearchHistory from "../components/SearchHistory";
import WeatherCard from "../components/WeatherCard";
import WeatherDetails from "../components/WeatherDetails";
import ForecastSection from "../components/ForecastSection";
import { useWeather } from "../hooks/useWeather";
import { useForecast } from "../hooks/useForecast";
import { useSearchHistory } from "../hooks/useSearchHistory";
import { formatCurrentWeather } from "../utils/formatWeather";

function HomePage() {
  const [searchedCity, setSearchedCity] = useState("London");
  const { history, addToHistory, clearHistory } = useSearchHistory();

  const { data, isLoading, isError, error } = useWeather(searchedCity);
  const { forecast, isLoading: isForecastLoading } = useForecast(searchedCity);

  // useMemo — only recomputes when `data` changes
  const weather = useMemo(
    () => (data ? formatCurrentWeather(data) : null),
    [data],
  );

  function handleSearch(city) {
    setSearchedCity(city);
    addToHistory(city); // save to history on every search
  }

  return (
    <main className="flex flex-col items-center gap-8 pb-16 px-4">
      {/* Search */}
      <Searchbar onSearch={handleSearch} isLoading={isLoading} />

      {/* Search History */}
      <SearchHistory
        history={history}
        onSelect={handleSearch} // clicking history badge = new search
        onClear={clearHistory}
      />

      {/* Loading */}
      {isLoading && (
        <div className="flex flex-col items-center gap-3 mt-10">
          <span className="loading loading-spinner loading-lg text-primary"></span>
          <p className="text-base-content/50">
            Fetching weather for{" "}
            <span className="text-primary">{searchedCity}</span>...
          </p>
        </div>
      )}

      {/* Error */}
      {isError && (
        <div role="alert" className="alert alert-error max-w-md">
          <span>
            ⚠️{" "}
            {error?.response?.data?.message ||
              "City not found. Please try again."}
          </span>
        </div>
      )}

      {/* Success */}
      {weather && !isLoading && (
        <>
          <WeatherCard
            city={weather.city}
            country={weather.country}
            temp={weather.temp}
            description={weather.description}
            icon={weather.icon}
            sunrise={weather.sunrise} // ← make sure you pass these
            sunset={weather.sunset} // ← from formatCurrentWeather
          />
          <WeatherDetails
            humidity={weather.humidity}
            windSpeed={weather.windSpeed}
            feelsLike={weather.feelsLike}
          />
          <div className="divider w-full max-w-2xl opacity-30"></div>
          <ForecastSection forecast={forecast} isLoading={isForecastLoading} />
        </>
      )}
    </main>
  );
}

export default HomePage;
