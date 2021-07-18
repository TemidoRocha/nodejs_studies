const io = require('socket.io-client');

const socket = io('http://localhost:3000');

socket.on('connect', () => {
  console.log('socket.io client connected');
});

socket.on('chat-message', (message, id) => {
  console.log(`${socket.id}: ${message}`);
});

// collect messages from our client and connect to evry client
process.stdin.on('data', (data) => {
  socket.emit('chat', data.toString().trim());
});
