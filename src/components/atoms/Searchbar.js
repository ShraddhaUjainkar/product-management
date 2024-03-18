// SearchBar.js
import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleChange = async (e) => {
    const searchText = e.target.value;
    setQuery(searchText);
    onSearch(searchText); 
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search..."
      />
    </div>
  );
};

export default SearchBar;
