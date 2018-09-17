import React from 'react';
import Message from './Message';

class ChatHistory extends React.Component {
  componentDidUpdate() {
    const lastMessage = document.querySelector('.chat-history').lastElementChild
    lastMessage && lastMessage.scrollIntoView();
  }

  render() {
    let counter = 0;
    let messages = this.props.messages

    const messageComponents = messages.map(msg => {
      return <Message
        user={msg.user}
        timestamp={msg.timestamp}
        message={msg.message}
        key={counter++}
      />
    })

    return (
      <ul className="chat-history" ref={el => this.el = el}>
        {messageComponents}
      </ul>
    )
  }
}

export default ChatHistory;
