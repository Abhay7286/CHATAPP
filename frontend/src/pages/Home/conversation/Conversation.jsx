import useConversation from '../../../../zustand/UseConversation.js';
import { useSocketContext } from '../../../../context/SocketContext.jsx';
import './Conversation.css';

const Conversation = ({ conversation, lastIdx, emoji }) => {
  const { selectedConversation, setSelectedConversation } = useConversation();

  const isSelected = selectedConversation?._id === conversation._id;
  const { onlineUsers } = useSocketContext();
  const isOnline = onlineUsers.includes(conversation._id);

  // console.log('Selected Conversation:', selectedConversation);
  console.log('Online Users:', onlineUsers);
  // console.log('Conversation:', conversation);

  return (
    <div
      className={`conversation ${isSelected ? 'sky' : ''}`}
      onClick={() => setSelectedConversation(conversation)}
    >
      <div className={`${isOnline ? "online" : ""}`}>
        <img src={conversation.profilePic} alt="profile-pic" className="profile-pic" />
      </div>
        
      <div className="user-info">
        <span className="user-name">{conversation.fullname}</span>
        <span className="user-emoji">{emoji}</span>
      </div>
    </div>
  );
};

export default Conversation;
