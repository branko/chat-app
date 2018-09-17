import React from 'react';
import Message from './Message';

const ChatHistory = ({ messages, dispatchAddMessage }) => {
  console.log("messages: ", messages)
  let counter = 0;

  const messageComponents = messages.map((m) => {
    return <Message
      user={m.user}
      timestamp={m.timestamp}
      message={m.message}
      key={counter++}
    />
  })

  return (
    <ul className="chat-history">
      {messageComponents}
    </ul>
  )
}

export default ChatHistory;
