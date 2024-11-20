import { createContext, useState, useEffect, useContext } from "react";
import io from "socket.io-client";
import { useAuthContext } from "./AuthContext.jsx";

export const SocketContext = createContext();

export const useSocketContext = () => {
  return useContext(SocketContext);
};

export const SocketContextProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const { authUser } = useAuthContext();

  useEffect(() => {
    if (authUser) {
      const socketInstance = io("https://tux-chat.onrender.com", {
        query: { userId: authUser._id }, // Pass userId with connection
      });

      setSocket(socketInstance);

      socketInstance.on("getOnlineUsers", (users) => {
        setOnlineUsers(users);
      });

      // Cleanup: close socket connection and remove listeners
      return () => {
        socketInstance.disconnect();
        setSocket(null);
      };
    } else {
      // Cleanup in case of logout
      if (socket) {
        socket.disconnect();
        setSocket(null);
      }
    }
  }, [authUser]); // Re-run when authUser changes

  return (
    <SocketContext.Provider value={{ socket, onlineUsers }}>
      {children}
    </SocketContext.Provider>
  );
};
