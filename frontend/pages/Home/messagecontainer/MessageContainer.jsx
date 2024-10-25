import React from 'react';
import Messages from './Messages.jsx';
import './MessageContainer.css';

const MessageContainer = ({ selectedUser }) => {
  return (
    <div className="message-container">
      <Messages />
    </div>
  );
};

export default MessageContainer;
