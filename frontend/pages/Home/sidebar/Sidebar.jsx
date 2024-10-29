import React from 'react';
import SearchInput from './SearchInput.jsx';
import Logout from './Logout.jsx';
import Conversations from '../conversation/Conversations.jsx';
import './Sidebar.css';

const Sidebar = ({ users = [], onUserClick, onLogout }) => {
  return (
    <div className="sidebar">
      <SearchInput />
      <Conversations users={users} onUserClick={onUserClick} />
      <Logout onLogout={onLogout} className="logout-button" />
    </div>
  );
};

export default Sidebar;
