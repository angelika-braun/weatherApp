import { useContext, useEffect, useState } from 'react';
import { WeatherContext } from '../WeatherContext';
import SearchBar from './SearchBar';
import SearchedCityWeather from './SearchedCityWeather';

const Startseite = () => {
  const { weatherData, loading, error, searchedWeatherData } = useContext(WeatherContext);
  const [darkMode, setDarkMode] = useState(false);

  // Funktion zum Umschalten des Modus
  const toggleDarkMode = () => {
    setDarkMode(prevState => !prevState);
  };

  useEffect(() => {
      if (darkMode) {
        document.body.style.backgroundColor = '#242424';
        document.body.style.color = 'white';
      } else {
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
      }
    }, [darkMode]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }


  
  return (
    <>
      <div style={{ textAlign: 'center', padding: '50px' }}>
    <button className='darkmodeButton' onClick={toggleDarkMode} style={{padding: "10px", backgroundImage: "linear-gradient(to bottom, #7A288A, #C51077)"}}>
      Switch to {darkMode ? 'Light Mode' : 'Dark Mode'}
    </button>
  </div>
       <div >
      <SearchBar />
      {searchedWeatherData && (
        <SearchedCityWeather />
      )}
        </div>     
  
      <div className='weather-elements'>
        <h3>Aktuelles Wetter an meinem Standort</h3>
        <p>Temperatur: {weatherData.main.temp}°C</p> 
        <p>Luftfeuchtigkeit: {weatherData.main.humidity}%</p>
        <p>Wind: {weatherData.wind.speed} m/s</p>
        <p>Beschreibung: {weatherData.weather[0].description}</p>
      </div>

    </>
  );
};

export default Startseite;