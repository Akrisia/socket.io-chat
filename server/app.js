const { Server } = require("socket.io");
const { createServer } = require("http");

const httpServer = createServer();

const io = new Server(httpServer, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  socket.on("Chat message", (msg) => {
    socket.broadcast.emit("Chat message", msg);
  });
});

httpServer.listen(5000);
