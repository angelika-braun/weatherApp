import { useState } from "react";

const Header = ({ onSearch, onUnitChange }) => {
  const [search, setSearch] = useState('');
  const [unit, setUnit] = useState('celsius'); 


  const handleSearch = (event) => {
    event.preventDefault();
    onSearch(search);
  };

  const handleUnitChange = (event) => {
    onUnitChange(event.target.value);
  };

  return (
    <header>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Suche nach einer Stadt"
        />
        <button type="submit">Suchen</button>
      </form>
      <select value={unit} onChange={handleUnitChange}>
        <option value="celsius">Celsius</option>
        <option value="fahrenheit">Fahrenheit</option>
      </select>
    </header>
  );
};

export default Header;