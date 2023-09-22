import messageRoutes from './routes/messageRoute.js';
import Message from './models/messageModel.js';
import { app, server } from './server.js';
import connection from './db/connection.js';
import dotenv from 'dotenv';
import { Server } from 'socket.io';
import userRoutes from './routes/userRoutes.js';

// Socket server with cors whitelisting
const io = new Server(server, {
  cors: {
    origin: ['http://localhost:3000'],
    credentials: true,
  },
});

dotenv.config();

connection.once('open', () => {
  console.log('MongoDB Database connection successfull!');
});

connection.on('error', (error) =>
  console.log('MongoDB connection Error: ' + error)
);

// When socket connection established
io.on('connection', (socket) => {
  console.log('A user connected');

  // Handle incoming messages
  socket.on('message', async (data) => {
    try {
      // Getting data from client to socket on message event emit
      const message = new Message(data);
      // Storing message to database collection
      await message.save();
      // Sending message response from socket to client
      io.emit('message', message);
    } catch (error) {
      console.error(error);
    }
  });

  // Handle user disconnection
  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});

// app.use('/chat', messageRoutes);
app.use('/api/users', userRoutes);

// API endpoint to fetch messages for a specific group
app.use('/api/messages', messageRoutes);

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log('Server is running on port 5000');
});
