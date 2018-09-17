import React, { Component } from 'react';

import Sidebar from './Sidebar';
import ChatRoom from './ChatRoom';

class Chat extends Component {
  render() {
    return (
      <div>
        <Sidebar />
        <ChatRoom />
      </div>
    )
  }
}

export default Chat;
