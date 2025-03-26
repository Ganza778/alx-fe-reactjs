import React from 'react';

const SearchBar = ({ searchTerm, setSearchTerm, handleSearch }) => {
  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search for a GitHub user"
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
