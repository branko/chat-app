import React, { Component } from 'react';

const Message = ({ user, timestamp, message}) => {
  timestamp = new Date(timestamp)

  const minutes = ("00" + timestamp.getMinutes()).slice(-2);
  const hours = ("00" + timestamp.getHours()).slice(-2);

  const timeOfDay = hours / 12 >= 1 ? 'pm' : 'am';
  const time = `${hours}:${minutes}${timeOfDay}`;
  const renderedMessage = `${message}`;

  return (
    <li className="chat-message">
      <small className="timestamp">{time}</small>
      <strong className="user">{`${user}: `}</strong>
      {renderedMessage}
    </li>
  )
}

export default Message;
