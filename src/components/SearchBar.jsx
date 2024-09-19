import { useContext } from 'react';
import { API_KEY } from '../useGeolocationNavi';
import { WeatherContext } from '../WeatherContext';
import "./SearchBar.css"

const SearchBar = () => {
  const { setLoading, setError, city, setCity, setSearchedWeatherData, setSearchedCity } = useContext(WeatherContext);

  const handleSearch = (e) => {
    e.preventDefault();
    setLoading(true);
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=de`)      
    .then(response => response.json())
      .then(data => {
        setSearchedWeatherData(data);
        setSearchedCity(city);
        setCity(''); 
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  };

  return (
    <form onSubmit={handleSearch} className='searchbar-header'>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Gib deine Stadt ein!"
      />
      <button type="submit">Suche</button>
    </form>
  );
};

export default SearchBar;