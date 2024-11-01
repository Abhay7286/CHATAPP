import React from 'react';
import Message from './Message.jsx';
import UseGetMessages from '../../../hooks/UseGetMessages.js';
import MessageSkeleton from "../../skeleton/MessageSkeleton.jsx";

const Messages = () => {
  const { loading, messages } = UseGetMessages();
  console.log(messages);

  return (
    <>
      {loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}
      {!loading && messages.length > 0 && messages.map((message) => (
        <Message key={message._id} message={message} />
      ))}
      {!loading && messages.length === 0 && (
        <p>Send a message to start a conversation</p>
      )}
    </>
  );
};

export default Messages;
