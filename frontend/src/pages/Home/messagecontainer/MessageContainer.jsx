import { useEffect } from 'react';
import Messages from './Messages.jsx';
import './MessageContainer.css';
import MessageInput from './MessageInput.jsx';
import { FiMessageCircle } from 'react-icons/fi';
import useConversation from '../../../../zustand/UseConversation.js';

const MessageContainer = ({ selectedUser }) => {
  const {selectedConversation,setSelectedConversation} = useConversation()

  useEffect(() => {
    //cleanup function (unmounts)
    return () => setSelectedConversation(null)
  }, [setSelectedConversation])
  
  return (
    <div className="message-container">
      {selectedConversation ? (
        <>
          <span className='header'>{selectedConversation.fullname}</span>
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
