const express = require("express");
const app = express();
const http = require("http");
const expressServer = http.createServer(app);
const { Server } = require("socket.io");

const io = new Server(expressServer);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

// io.on("connection", (socket) => {
//   console.log("New User connected");
// setInterval(()=>{
//   let date=new Date();
//   let time=date.toLocaleTimeString();
//   socket.emit("Monir",time)
// },1000)
// setTimeout(()=>{
//   socket.send("Server to Client")
// },2000)
// socket.on("disconnect", () => {
//   console.log("User disconnected");
// });
// socket.on('message',(msg)=>{
//   console.log(msg)

// })

// io.sockets.emit('myEmit',"Hello everyone")
// });


const buyNsp = io.of("/buy");
buyNsp.on("connecion", (socket) => {
  buyNsp.emit("MyEvent", "Hello buy");
});

const sellNsp = io.of("/sell");
sellNsp.on("connecion", (socket) => {
  sellNsp.emit("MyEvent", "Hello sell");
});

expressServer.listen(3001, () => {
  console.log("Running");
});
