const http = require("http");
const express = require("express");
const path = require("path");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static(path.resolve("./public")));

app.get("/", (req, res) => {
  //   console.log(path.resolve("./public"), "path");
  return res.sendFile("/public/index.html");
});

server.listen(3000, () => console.log(`Server is running on port 3000`));
