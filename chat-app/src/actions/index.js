export const addMessage = (user, timestamp, message) => {
  console.log('addMessage')
  return {
    type: 'ADD_MESSAGE',
    user,
    timestamp,
    message,
  }
}
