import React, { useState } from 'react';
import { FiSend } from 'react-icons/fi';
import './MessageInput.css';
import UseSendMessage from '../../../../hooks/UseSendMessage';
import { FaSpinner } from "react-icons/fa";

const MessageInput = ({ onSend }) => {
  const [message, setMessage] = useState('');
  const { loading, sendMessage } = UseSendMessage();

  const handleSubmit = async (e) => {
    e.preventDefault();  // Fix: prevent form submission
    if (!message) return;
    await sendMessage(message);
    setMessage('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSubmit(e);  // Fix: call handleSubmit with event
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="message-input-container">
        <input
          type="text"
          className="message-input"
          placeholder="Type a message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button className="send-button" type="submit">
          {loading ? <FaSpinner className='spinner' /> : <FiSend size={20} />}
        </button>
      </div>
    </form>
  );
};

export default MessageInput;
