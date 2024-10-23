import React from 'react';
import Conversation from './Coversation.jsx';

const dummyUsers = [
  { name: 'John Doe', profilePic: 'https://randomuser.me/api/portraits/men/1.jpg', emoji: '😊' },
  { name: 'Jane Smith', profilePic: 'https://randomuser.me/api/portraits/women/2.jpg', emoji: '👋' },
  { name: 'Penguin Lover', profilePic: 'https://randomuser.me/api/portraits/women/3.jpg', emoji: '🐧' },
];

const Conversations = ({ onUserClick }) => {
  return (
    <div className="user-list">
      <h2 className="user-list-title">Contacts</h2>
      {dummyUsers.map((user, index) => (
        <Conversation
          key={index}
          userName={user.name}
          profilePic={user.profilePic}
          emoji={user.emoji}
          onUserClick={() => onUserClick(user.name)}
        />
      ))}
    </div>
  );
};

export default Conversations;
