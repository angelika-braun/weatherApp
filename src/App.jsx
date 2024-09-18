// App.js
import { useState, useEffect } from 'react';
import Header from './Header';
import Weather from './Weather';
import Forecast from './Forecast';
import Search from './Search';

const App = () => {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [unit, setUnit] = useState('celsius');
  const [error, setError] = useState(null);


  useEffect(() => { const [weatherData, setWeatherData] = useState(null);
    const [location, setLocation] = useState(null);
  
    useEffect(() => {
      navigator.geolocation.getCurrentPosition((position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        setLocation({ lat, lon });
      });
    }, []);
  
    useEffect(() => {
      if (location) {
        const lat = location.lat;
        const lon = location.lon;
        fetch(`${API_URL}?lat=${lat}&lon=${lon}&appid=${API_KEY}`)
          .then(response => response.json())
          .then(data => setWeatherData(data));
      }
    }, [location]);
  
    return (
      <WeatherContext.Provider value={{ weatherData, setWeatherData }}>
        {/* Your app components here */}
      </WeatherContext.Provider>
    );
  };
  
    // Abrufe das aktuelle Wetter
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`)
      .then(response => response.json())
      .then(data => {
        setWeather(data);
      })
      .catch(error => {
        console.error('Error:', error);
        setError(`Error: ${error.message}`);      });
  }, []);
  if (error) {
    return <div style={{ color: 'red' }}>{error}</div>;
  }

  const handleSearch = (search) => {
    // Abrufe das Wetter für die gesuchte Stadt
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${API_KEY}`)
      .then(response => response.json())
      .then(data => {
        setWeather(data);
      })
      .catch(error => {
        console.error('Error:', error);
        setError(`Error: ${error.message}`);
      });
  };

  return (
    <div>
      <Header
        onSearch={handleSearch}
        onUnitChange={(unit) => setUnit(unit)}
      />
      {weather && (
        <Weather
          weather={weather}
          unit={unit}
        />
      )}
      {forecast && (
        <Forecast
          forecast={forecast}
          unit={unit}
        />
      )}
      <Search
        onSearch={handleSearch}
      />
    </div>
  );
};

export default App;
