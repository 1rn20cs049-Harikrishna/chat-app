const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");
const app = express();

//creating a server
const server = http.createServer(app);
//CORS-cross origin resource sharing
app.use(cors());

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

//trying to establish connection(one time Handshake)
io.on("connection", (socket) => {
  console.log(`Connection establised with client with id ${socket.id}`);

  //listening to the client with event  name as message
  socket.on("message", (message) => {
    console.log("Received message from client : " + message);
  });

  //Emiting an event  from_server from server
  socket.emit("from_server", "this is from server");

  //checking the client communication channel
  socket.on("disconnect", () => {
    console.log("Client disconnected!!");
  });
});

//3001 is a port number which is assigned to the server manually.
server.listen(3001, () => {
  console.log("Server connection is established on port 3001");
});
