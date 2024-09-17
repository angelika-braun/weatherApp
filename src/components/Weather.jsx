import { useState } from 'react';

const Weather = () => {
  const [city, setCity] = useState('');        
  const [weather, setWeather] = useState(null); 
  const [error, setError] = useState(null);    

  const apiKey = 'c3db5eb8bc5f28ab53106182b9020d06';

  const getWeather = async (e) => {
    e.preventDefault();
    setError(null); // 

    if (city === '') {
      setError('Bitte eine Stadt eingeben.');
      return;
    }
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );
      if (!response.ok) {
        throw new Error('Stadt nicht gefunden');
      }
      const data = await response.json();
      setWeather(data);
    } catch (err) {
      setError(err.message);
      setWeather(null);
    }
  };

  return (
    <div className="weathercontainer">
      <h1>Wetter App</h1>
      <form onSubmit={getWeather}>
        <input
          type="text"
          placeholder="Stadt eingeben"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button type="submit">Wetter anzeigen</button>
      </form>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {weather && (
        <div className="weather-info">
          <h2>Wetter in {weather.name}</h2>
          <p>Temperatur: {weather.main.temp} °C</p>
          <p>Wetter: {weather.weather[0].description}</p>
          <p>Luftfeuchtigkeit: {weather.main.humidity} %</p>
          <p>Windgeschwindigkeit: {weather.wind.speed} m/s</p>
        </div>
      )}
    </div>
  );
};

export default Weather;
