import {useEffect} from 'react'
import UseConversation from "../zustand/UseConversation.js";
import {useSocketContext} from "../context/SocketContext.jsx";

const UseListenMessages = () => {
  const {messages,setMessages} = UseConversation();
  const {socket} = useSocketContext();

  useEffect(() => {
    socket?.on("newMessage",(newMessage) => {
      setMessages([...messages,newMessage]);
    })
  
    return () => socket?.off("newMessage");
  }, [socket,setMessages,messages])
  
}

export default UseListenMessages
