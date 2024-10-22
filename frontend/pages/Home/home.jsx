import React, { useState } from 'react';
import Sidebar from './Sidebar';
import MessageContainer from './MessageContainer';
import './Home.css';

const Home = () => {
  const [selectedUser, setSelectedUser] = useState('User 1'); // Default selected user

  const handleUserClick = (user) => {
    setSelectedUser(user);
  };

  const handleLogout = () => {
    alert('Logged out');
    // Add logout functionality here
  };

  return (
    <div className="tuxchat-container">
      <Sidebar onUserClick={handleUserClick} onLogout={handleLogout} />
      <MessageContainer selectedUser={selectedUser} />
    </div>
  );
};

export default Home;
