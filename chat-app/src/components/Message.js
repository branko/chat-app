import React, { Component } from 'react';

const Message = ({ user, timestamp, message}) => {

  const minutes = timestamp.getMinutes();
  const hours = timestamp.getHours();
  const timeOfDay = hours / 12 >= 1 ? 'pm' : 'am';
  const time = `${hours}:${minutes}${timeOfDay}`
  const renderedMessage = `${message}`
  return (
    <li className="chat-message">
      <small className="timestamp">{time}</small>
      <strong className="user">{`${user}: `}</strong>
      {renderedMessage}
    </li>
  )

}

export default Message;
