import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addMessage } from '../redux/actions';

const MessageInput = ({ socket, user }) => {
  const dispatch = useDispatch();
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() !== '') {
      const newMessage = {
        group: user.group,
        sender: user.name.toLowerCase(),
        text,
      };
      // Sending message to the socket and store in redux
      socket.emit('message', newMessage, (response) => {
        dispatch(addMessage(newMessage));
      });

      setText('');
    }
  };

  return (
    <div className="message-input">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Type your message..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default MessageInput;
