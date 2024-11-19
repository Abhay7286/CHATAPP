import { useRef, useEffect } from 'react';
import Message from './Message.jsx';
import UseGetMessages from '../../../../hooks/UseGetMessages.js';
import MessageSkeleton from "../../skeleton/MessageSkeleton.jsx";
import UseListenMessages from '../../../../hooks/UseListenMessages.js';

const Messages = () => {
  const { loading, messages } = UseGetMessages();
  UseListenMessages();
  const lastMessageRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);

  }, [messages])

  return (
    <div className="chat-container">
      {loading &&
        [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}
      {!loading &&
        messages.length > 0 &&
        messages.map((message) => (
          <div key={message._id} ref={lastMessageRef}>
            <Message message={message} />
          </div>
        ))}
      {!loading && messages.length === 0 && (
        <p>Send a message to start a conversation</p>
      )}
    </div>
  );

};

export default Messages;
