/**
 * the reason socket io works in the browser is excatly because it still uses http
 */

const { createServer } = require('http');
const socketIO = require('socket.io');

const server = createServer().listen(3000);
const io = socketIO(server);

io.on('connection', (socket) => {
  // io.engine.clientsCount for how many clients are connected
  console.log(`${io.engine.clientsCount} connections`);

  socket.on('chat', (message) => {
    // socket.id => identifies each connection
    console.log(`${socket.id}: ${message}`);
    io.sockets.emit('chat-message', message, socket.id);
  });

  socket.on('disconnect', () => {
    // socket.id => identifies each connection
    console.log(`disconnect: ${socket.id}`);
  });
});

console.log('Socket Server');
