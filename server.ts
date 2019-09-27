const express = require("express");
const app = express();
const socketIO = require("socket.io");
const http = require("http");
const port = 4001;
import { IChatMessage } from "./src/components/ChatMessage";

const server = http.createServer(app);
const Io = socketIO(server);

Io.on("connection", socket => {
  console.log("user has connected");

  socket.on("welcome message", username => {
    console.log(username);
    socket.broadcast.emit("joined", username);
  });

  socket.on(`chat message`, (messageItem: IChatMessage) => {
    socket.emit(messageItem);
  });
});

server.listen(port, () => console.log(`Listening on ${port}`));
