// src/components/SearchBar/SearchBar.js
import React from 'react';
import './SearchBar.css';

const SearchBar = ({ setSearchTerm }) => {
  return (
    <input
      type="text"
      placeholder="Search for a beer..."
      onChange={(e) => setSearchTerm(e.target.value)}
      className="search-bar"
    />
  );
}

export default SearchBar;
