const socket = (state = {}, action) => {
  switch (action.type) {
    case 'NEW_SOCKET_CONNECTION':
      return action.socket
    default:
      return state
  }
}

export default socket;
