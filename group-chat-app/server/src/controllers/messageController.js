import Message from '../models/messageModel.js';

export const getMessagesByGroup = async (req, res) => {
  try {
    const group = req.params.group;
    const messages = await Message.find({ group });
    res.json(messages);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server Error' });
  }
};
