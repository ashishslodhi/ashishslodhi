import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import io from 'socket.io-client';
import MessageList from './MessageList';
import MessageInput from './MessageInput';
import { capitalizeFirstLetter } from '../helpers';
import { addMessage } from '../redux/actions';

const Chat = ({ user }) => {
  const dispatch = useDispatch();
  const socket = io('http://localhost:5000');
  useEffect(() => {
    // Socket connection with server url
    const socket = io('http://localhost:5000');
    // Message getting from socket and store on redux
    socket.on('message', (message) => {
      // dispatch({ type: 'ADD_MESSAGE', payload: message });
      dispatch(addMessage(message));
    });

    // Disconnect socket user when tab closed
    window.addEventListener('beforeunload', () => {
      if (socket) {
        socket.disconnect();
      }
    });
  }, []);

  return (
    <div className="chat">
      <h2>
        Group: {user.group} | Name: {capitalizeFirstLetter(user.name)}
      </h2>
      <div className="message-container">
        <MessageList user={user} />
      </div>
      <MessageInput socket={socket} user={user} />
    </div>
  );
};

export default Chat;
