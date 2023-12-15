import React, { useState } from 'react';

const Search = ({ setSearchInput }) => {
  // console.log(onSearch);
  console.log(setSearchInput);
  const handleChange = (event) => {
    const newSearch = event.target.value;
    setSearchInput(newSearch); // Call setSearchInput to update the searchInput state
  };

  return (
    <div className="search-div">
      <span className="sicon">
        <i class="ri-search-line"></i>
      </span>
      <input
        type="text"
        className="form-control"
        placeholder="Search for movies or TV series"
        onChange={handleChange}
      />
    </div>
  );
};

export default Search;
