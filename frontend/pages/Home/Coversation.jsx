import React from 'react';
import './Conversation.css';

const Conversation = ({ userName, profilePic, emoji, onUserClick }) => {
  return (
    <div className="conversation" onClick={onUserClick}>
      <img src={profilePic} alt={userName} className="profile-pic" />
      <div className="user-info">
        <span className="user-name">{userName}</span>
        <span className="user-emoji">{emoji}</span>
      </div>
    </div>
  );
};

export default Conversation;
