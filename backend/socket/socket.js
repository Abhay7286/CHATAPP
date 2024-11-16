import { Server } from "socket.io";
import http from "http";
import express from "express";

const app = express();

export const getReceiverSocketId = (receiverId) => {
  return userSocketMap[receiverId];
};

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
  },
});

const userSocketMap = {};

io.on("connection", (socket) => {
  console.log("A user connected ", socket.id);

  // Extract userId from handshake query
  const userId = socket.handshake.query.userId;

  // Check if userId is valid and not undefined
  if (userId && typeof userId !== "undefined") {
    userSocketMap[userId] = socket.id;
  }

  // Emit event with list of online users (userIds)
  io.emit("getOnlineUsers", Object.keys(userSocketMap));

  // Listen to disconnect event
  socket.on("disconnect", () => {
    console.log("A user disconnected ", socket.id);

    // Ensure userId exists before removing
    if (userId && userSocketMap[userId]) {
      delete userSocketMap[userId];
    }

    // Emit updated list of online users
    io.emit("getOnlineUsers", Object.keys(userSocketMap));
  });
});

export { app, io, server };
