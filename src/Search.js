import React from 'react';
import './Search.css';

const Search = ({ onSearch }) => {
  const handleSearchChange = (e) => {
    onSearch(e.target.value);
  };

  return (
    <div className="search-container">
      <input type="text" placeholder="Search..." onChange={handleSearchChange} />
    </div>
  );
};

export default Search;
