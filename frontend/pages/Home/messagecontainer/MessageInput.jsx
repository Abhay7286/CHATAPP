import React, { useState } from 'react';
import { FiSend } from 'react-icons/fi';
import './MessageInput.css';

const MessageInput = ({ onSend }) => {
  const [message, setMessage] = useState('');

  const handleSendMessage = () => {
    if (message.trim()) {
      onSend(message);
      setMessage(''); // Clear the input after sending
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div className="message-input-container">
      <input
        type="text"
        className="message-input"
        placeholder="Type a message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button className="send-button" onClick={handleSendMessage}>
        <FiSend size={20} />
      </button>
    </div>
  );
};

export default MessageInput;
