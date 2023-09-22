import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMessagesByGroup } from '../services/messagesService';
import { addAllMessages } from '../redux/actions';
import { capitalizeFirstLetter } from '../helpers';

const MessageList = ({ user }) => {
  const dispatch = useDispatch();

  const messages = useSelector((state) => state[user.group]);

  useEffect(() => {
    fetchMessagesByGroup(user.group);
  }, []);

  // fetch messages of current user group
  const fetchMessagesByGroup = async (group) => {
    const response = await getMessagesByGroup(group);
    if (response.status == 200) {
      console.log('res:', response);
      dispatch(addAllMessages({ [group]: response.data }));
    }
  };

  return (
    <div className="message-list">
      {messages.length > 0 &&
        messages.map((message, index) => (
          <div key={index} className="message">
            <strong>{capitalizeFirstLetter(message.sender)}:</strong>{' '}
            {message.text}
          </div>
        ))}
    </div>
  );
};

export default MessageList;
