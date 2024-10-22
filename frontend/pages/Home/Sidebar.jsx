import React from 'react';
import SearchInput from './SearchInput';
import Logout from './Logout';
import './Sidebar.css';

const Sidebar = ({ onUserClick, onLogout }) => {
  return (
    <div className="sidebar">
      <SearchInput />
      <div className="user-list">
        <h2 className="user-list-title">Contacts</h2>
        <div className="user" onClick={() => onUserClick('User 1')}>
          <span className="user-name">User 1</span>
        </div>
        <div className="user" onClick={() => onUserClick('User 2')}>
          <span className="user-name">User 2</span>
        </div>
        <div className="user" onClick={() => onUserClick('User 3')}>
          <span className="user-name">User 3</span>
        </div>
      </div>
      <Logout onLogout={onLogout} />
    </div>
  );
};

export default Sidebar;
