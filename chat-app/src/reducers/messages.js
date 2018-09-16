const messages = (state = [], action) => {
  console.log("messageReducer state: ", state)
  switch (action.type) {
    case 'ADD_MESSAGE':
      return state.concat({
          user: action.user,
          timestamp: action.timestamp,
          message: action.message
        });
    default:
      return state
  }
}

export default messages;
