const express = require("express");
const socketIO = require("socket.io");
const http = require("http");
const userRouter = require("./src/routers/routes");

require("dotenv").config();

const app = express();

app.use(express.json());
app.use(userRouter);
const port = 3000;

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
