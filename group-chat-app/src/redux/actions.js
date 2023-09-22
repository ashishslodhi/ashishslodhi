export const addMessage = (message) => ({
  type: 'ADD_MESSAGE',
  payload: message,
});

export const addAllMessages = (messages) => ({
  type: 'ADD_ALL_MESSAGES',
  payload: messages,
});
