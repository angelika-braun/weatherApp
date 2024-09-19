import { createContext, useState, useEffect } from 'react';
import useGeolocationNavi from './useGeolocationNavi';

const WeatherContext = createContext();

const WeatherProvider = ({ children }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState(''); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchedWeatherData, setSearchedWeatherData] = useState(null);
  const [searchedCity, setSearchedCity] = useState('');
  const [backgroundColor, setBackgroundColor] = useState('#f0f0f0'); 


  const geolocationNavi = useGeolocationNavi();

  useEffect(() => {
    setWeatherData(geolocationNavi.weatherData);
    setLoading(geolocationNavi.loading);
    setError(geolocationNavi.error);
  }, [geolocationNavi]);

  return (
      <WeatherContext.Provider
      value={{
        weatherData,
        loading,
        error,
        city,
        searchedWeatherData,
        searchedCity,
        setWeatherData,
        setLoading,
        setError,
        setCity,
        setSearchedWeatherData,
        setSearchedCity,
        backgroundColor,
      setBackgroundColor

      }}
    >
        {children}
    </WeatherContext.Provider>
  );
};
export { WeatherProvider, WeatherContext };