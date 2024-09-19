import { useContext } from 'react';
import { WeatherContext } from '../WeatherContext';
import "./SearchedCityWeather.css"

const SearchedCityWeather = () => {
  const { searchedWeatherData, searchedCity } = useContext(WeatherContext);

  if (!searchedWeatherData) {
    return <div>No data found for {searchedCity}</div>;
  }

  return (
    <div className='weather-elements'>
      <h3>Aktuelles Wetter in {searchedCity}</h3>
      <p>Temperatur: {searchedWeatherData.main.temp}°C</p> 
      <p>Luftfeuchtigkeit: {searchedWeatherData.main.humidity}%</p>
      <p>Wind: {searchedWeatherData.wind.speed} m/s</p>
      <p>Beschreibung: {searchedWeatherData.weather[0].description}</p>
    </div>
  );
};

export default SearchedCityWeather;