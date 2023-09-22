const initialState = {
  IT: [],
  Sales: [],
  HR: [],
  messages: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_MESSAGE':
      return {
        ...state,
        [action.payload.group]: [
          ...state[action.payload.group],
          action.payload,
        ],
        // messages: [...state.messages, action.payload],
      };
    case 'ADD_ALL_MESSAGES':
      console.log('all message dispatch: ', action.payload);
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
