import React, { Component } from 'react';

import ChatHistoryContainer from './ChatHistoryContainer';
import ChatInputContainer from './ChatInputContainer';

class ChatRoom extends Component {
  render() {
    return (
      <div className="chat-room nine columns">
        <ChatHistoryContainer />
        <ChatInputContainer />
      </div>
    )
  }
}

export default ChatRoom;
