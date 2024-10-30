import React from 'react';
import Conversation from './Conversation.jsx';
import UseGetConversation from '../../../hooks/UseGetConversation.js';
import {FaSpinner} from "react-icons/fa";
import {getRandomEmoji} from "../../../utils/emoji.js";


const Conversations = ({ onUserClick }) => {
  const {loading,conversations} = UseGetConversation()
  console.log(conversations)
  return (

    <div className="user-list">
      <h2 className="user-list-title">Contacts</h2>
      {conversations.map((conversation,idx) => (
        <Conversation
          key={conversations._id}
          conversation={conversation}
          profilePic={conversation.profilePic}
          emoji={getRandomEmoji()}
          lastIdx={idx === conversations.length-1}
        />
      ))}

      {loading? <FaSpinner className="spinner"/>:null}

    </div>
  );
};

export default Conversations;
