import './Conversation.css';

const Conversation = ({conversation,lastIdx,emoji}) => {

  return (
    <div className="conversation">
      <img src={conversation.profilePic} alt="profile-pic" className="profile-pic" />
      <div className="user-info">
        <span className="user-name">{conversation.fullname}</span>
        <span className="user-emoji">{emoji}</span>
      </div>
    </div>
  );
};

export default Conversation;
