import mongoose from 'mongoose';

// Define a message schema and model using Mongoose
const messageSchema = new mongoose.Schema({
  group: String,
  sender: String,
  text: String,
});

const Message = mongoose.model('Message', messageSchema);

export default Message;
