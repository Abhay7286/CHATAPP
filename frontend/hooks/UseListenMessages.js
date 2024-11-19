import {useEffect} from 'react'
import UseConversation from "../zustand/UseConversation.js";
import {useSocketContext} from "../context/SocketContext.jsx";
import notificationSound from "../assests/sound/notification.mp3";

const UseListenMessages = () => {
  const {messages,setMessages} = UseConversation();
  const {socket} = useSocketContext();

  useEffect(() => {
    socket?.on("newMessage",(newMessage) => {
      newMessage.shouldShake = true;
      const sound = new Audio(notificationSound);
      sound.play();
      setMessages([...messages,newMessage]);
    })
  
    return () => socket?.off("newMessage");
  }, [socket,setMessages,messages])
  
}

export default UseListenMessages
