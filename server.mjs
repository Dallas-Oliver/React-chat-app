import express from "express";
import socketIO from "socket.io";
import http from "http";

const app = express();
const port = 4001;

const server = http.createServer(app);
const io = socketIO(server);

io.on("connection", socket => {
  console.log("user has connected");

  socket.on("welcome message", username => {
    console.log(username);
    socket.emit("joined", username);
  });

  socket.on(`chat message`, messageItem => {
    console.log(messageItem);
    socket.broadcast.emit("chat message", messageItem);
  });
});

server.listen(port, () => console.log(`Listening on ${port}`));
