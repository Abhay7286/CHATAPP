import React from 'react';
import './MessageContainer.css';

const MessageContainer = ({ selectedUser }) => {
  return (
    <div className="chat-area">
      <div className="chat-header">
        <h2 className="chat-header-title">Chat with {selectedUser}</h2>
      </div>

      <div className="messages">
        <div className="message sent">
          <span>Hello!</span>
        </div>
        <div className="message received">
          <span>Hi there!</span>
        </div>
      </div>

      <div className="message-input">
        <input type="text" placeholder="Type a message..." className="input" />
        <button className="send-button">Send</button>
      </div>
    </div>
  );
};

export default MessageContainer;
