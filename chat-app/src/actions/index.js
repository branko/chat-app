export const addMessage = (user, timestamp, message, socket) => {
  console.log('addMessage')
  return {
    type: 'ADD_MESSAGE',
    user,
    timestamp,
    message,
    socket
  }
}

export const setLocalUser = (username, id) => {
  console.log("setLocalUser action: ", username)
  
  return {
    type: "SET_LOCAL_USER",
    username,
    id
  }
}

export const fetchAllMessages = (messages) => {
  return {
    type: "FETCH_ALL_MESSAGES",
    messages
  }
}

export const addSocket = (socket) => {
  return {
    type: "NEW_SOCKET_CONNECTION",
    socket
  }
}
