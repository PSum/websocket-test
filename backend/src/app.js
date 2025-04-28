const express = require('express');
const cors = require('cors');
const socket = require('socket.io');

const app = express();
app.use(cors()); // still useful for REST APIs
app.use(express.json());

const server = app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

const io = socket(server, {
  cors: {
    // origin: 'http://localhost:5173', // or '*' for dev
    origin: '*', // or '*' for dev
    methods: ['GET', 'POST'],
    credentials: true,
  }
});

io.on('connection', (socket) => {
  console.log('New WebSocket connection:', socket.id);

  // Send a message to the client every 5 seconds
  const interval = setInterval(() => {
    socket.emit('message', { text: 'Hello from server!', time: new Date().toISOString() });
  }, 5000); // 5000ms = 5 seconds

socket.on('thisIsAKeyword', (arg1, arg2) => {
  console.log('thisIsAKeyword event received!');
  console.log(arg1, arg2);
});

  socket.on('disconnect', () => {
    console.log('Socket disconnected:', socket.id);
    clearInterval(interval); // Clear interval when client disconnects!
  });
});
