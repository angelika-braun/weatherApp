// GeolocationNavi.jsx
import { useState, useEffect } from 'react';

export const API_KEY = 'd2db14b4288cd934dcaf95cf6474178c';
const API_URL = 'https://api.openweathermap.org/data/2.5/weather';

const useGeolocationNavi = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      setLocation({ lat, lon });
    }, (error) => {
      setError(error);
    });
  }, []);

  useEffect(() => {
    if (location) {
      const lat = location.lat;
      const lon = location.lon;
      fetch(`${API_URL}?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=de`)
        .then(response => {
          if (!response.ok) {
            throw new Error(response.statusText);
          }
          return response.json();
        })
        .then(data => {
          setWeatherData(data);
          setLoading(false);
        })
        .catch(error => {
          setError(error);
          setLoading(false);
        });
    }
  }, [location]);

  return { weatherData, loading, error };
};

export default useGeolocationNavi;