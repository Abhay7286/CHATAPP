import React from 'react';
import { IoSearchCircleSharp } from "react-icons/io5";
import './SearchInput.css'

const SearchInput = () => {
  return (
    <div className="search-container mb-4">
      <input
        type="text"
        placeholder="Search users..."
        className="search-input"
      />
      <IoSearchCircleSharp className='search-icon'/>
    </div>
  );
};

export default SearchInput;
