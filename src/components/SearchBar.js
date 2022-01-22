import React, { useState } from "react";
import "./searchBar.css";
import { FaSearch } from "react-icons/fa";

const SearchBar = (props) => {
  const [pokeName, setPokeName] = useState("");

  const handleChange = (val) => {
    setPokeName(val);
  };

  const searchBtnHandler = () => {
    const output = props.onSearchClick(pokeName);
  };

  return (
    <div className="searchBar">
      <input
        className="searchInput"
        type="text"
        placeholder="Search Pokemon"
        value={pokeName}
        onChange={(e) => handleChange(e.target.value)}
      />
      <button className="searchBtn" onClick={searchBtnHandler}>
        Search
        <FaSearch className="searchIcon" />
      </button>
    </div>
  );
};

export default SearchBar;
