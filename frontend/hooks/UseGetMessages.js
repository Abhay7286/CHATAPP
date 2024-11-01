import { useState, useEffect } from 'react';
import UseConversation from '../zustand/UseConversation';
import toast from "react-hot-toast";

const UseGetMessages = () => {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConversation } = UseConversation();

  useEffect(() => {
    const getMessages = async () => {
      if (!selectedConversation?._id) return; // Ensure ID is valid
      setLoading(true);
      try {
        console.log(`Fetching messages for conversation ID: ${selectedConversation._id}`);
        
        const res = await fetch(`/api/messages/${selectedConversation._id}`);
        
        if (!res.ok) {
          throw new Error(`Failed to fetch messages: ${res.status} ${res.statusText}`);
        }
        
        const data = await res.json();
        if (data.error) throw new Error(data.error);

        setMessages(data);
      } catch (error) {
        toast.error(error.message || "An error occurred while fetching messages.");
      } finally {
        setLoading(false);
      }
    };

    getMessages();

  }, [selectedConversation?._id, setMessages]);

  return { messages, loading };
};

export default UseGetMessages;
