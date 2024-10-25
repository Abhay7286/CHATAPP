import React, { useState } from 'react';
import Sidebar from './sidebar/Sidebar.jsx';
import MessageContainer from './messagecontainer/MessageContainer.jsx';
import './Home.css';

const Home = () => {
  const [selectedUser, setSelectedUser] = useState('User 1'); 

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
