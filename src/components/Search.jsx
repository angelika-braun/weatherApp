import { useState } from 'react';

const Search = ({ onSearch }) => {
  const [search, setSearch] = useState('');

  const handleSearch = (event) => {
    event.preventDefault();
    onSearch(search);
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        placeholder="Suche nach einer Stadt"
      />
      <button type="submit">Suchen</button>
    </form>
  );
};

export default Search;