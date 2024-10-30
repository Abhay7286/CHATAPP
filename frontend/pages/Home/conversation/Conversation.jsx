import UseConversation from '../../../hooks/UseGetConversation';
import useConversation from '../../../zustand/UseConversation';
import './Conversation.css';

const Conversation = ({ conversation, lastIdx, emoji }) => {
  const { selectedConversation, setSelectedConversation } = useConversation();

  const isSelected = selectedConversation?._id === conversation._id;

  return (
    <div
      className={`conversation ${isSelected ? 'sky' : ''}`}
      onClick={() => setSelectedConversation(conversation)}
    >
      <img src={conversation.profilePic} alt="profile-pic" className="profile-pic" />
      <div className="user-info">
        <span className="user-name">{conversation.fullname}</span>
        <span className="user-emoji">{emoji}</span>
      </div>
    </div>
  );
};

export default Conversation;
