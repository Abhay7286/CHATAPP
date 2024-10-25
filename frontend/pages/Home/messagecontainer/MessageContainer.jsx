import React from 'react';
import Messages from './Messages.jsx';
import './MessageContainer.css';
import MessageInput from './MessageInput.jsx';
import { FiMessageCircle } from 'react-icons/fi';

const MessageContainer = ({ selectedUser }) => {
  selectedUser = false
  return (
    <div className="message-container">
      {selectedUser ? (
        <>
          <Messages />
          <MessageInput />
        </>
      ) : (
        <div className="no-chat">
          <FiMessageCircle size={50} className="chat-icon" />
          <p className="no-chat-message">Hey, User! Select a contact you want to chat with.</p>
        </div>
      )}
    </div>
  );
};

export default MessageContainer;
