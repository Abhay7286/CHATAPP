import React, { useState } from 'react';
import { IoSearchCircleSharp } from "react-icons/io5";
import UseConversation from "../../../zustand/UseConversation.js";
import UseGetConversation from "../../../hooks/UseGetConversation.js";
import './SearchInput.css'
import toast from 'react-hot-toast';

const SearchInput = () => {
  const [search, setSearch] = useState("");
  const { setSelectedConversation } = UseConversation();
  const { conversations } = UseGetConversation();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;
    if (search.length < 3) {
      toast.error("search term should be atleast 3 characers long");
      return
    }
    const conversation = conversations.find((c) => {
      return c.fullname.toLowerCase().includes(search.toLowerCase())
    })

    if (conversation) {
      setSelectedConversation(conversation);
      setSearch("");
    } else toast.error("No such user found");
  }

  return (
    <form className="search-container" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search users by name"
        aria-label="Search users"
        className="search-input"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type="submit" className='search-btn'>
        <IoSearchCircleSharp className='search-icon' />
      </button>
    </form>
  );
};

export default SearchInput;
