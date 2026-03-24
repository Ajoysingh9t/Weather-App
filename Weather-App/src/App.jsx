import React, { useState } from 'react'
import Header from './components/Header'
import WeatherCard from './components/WeatherCard'
import WeatherDetails from './components/WeatherDetails'
import Searchbar from './components/Searchbar'

const App = () => {
  const [searchCity,setSearchCity] = useState("London")

  function handleSearch(city){
    setSearchCity(city);
  }

  const FakeWeather = {
    icon:"https://plus.unsplash.com/premium_photo-1670787505459-5ec84cc48762?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8",
    country:"London",
    temp:20,
    description:"lorem10",
    feels_like: 276.44,
    windSpeed:3.6,
    humidity:64

  }
  return (
    <div data-theme="cupcake " className='flex flex-col justify-center items-center'>
      <Header />
      <Searchbar onSearch={handleSearch}/>
      
      <WeatherCard temp={FakeWeather.temp} icon={FakeWeather.icon} country={FakeWeather.country} description={FakeWeather.description}/>
      <WeatherDetails feels_like={FakeWeather.feels_like} humidity={FakeWeather.humidity} wind_speed={FakeWeather.windSpeed}/>
    </div>
  )
}

export default App