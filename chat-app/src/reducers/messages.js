const messages = (state = [], action) => {

  switch (action.type) {
    case 'FETCH_ALL_MESSAGES':
      return action.messages; // Overwrite the state with the fetched messages
    case 'ADD_MESSAGE':
      console.log(action.user)

      const message = {
          user: action.user,
          timestamp: new Date(action.timestamp),
          message: action.message
        }

      action.socket.send(JSON.stringify(
        Object.assign({}, message, { type:'NEW_MESSAGE' })
      ));

      return state.concat(message);
    default:
      return state
  }
}

export default messages;
