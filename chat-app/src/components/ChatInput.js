import React, { Component } from 'react';

class ChatInput extends Component {
  state = {
    message: '',
  }

  onChange = (e) => {
    this.setState({ message: e.target.value });
  }

  onSubmit = (e) => {
    e.preventDefault();
    const input = e.target.querySelector('input');
    console.log("USERNAME SENDING MESSAGE: ", this.props.userInfo)
    this.props.dispatchAddMessage(this.props.userInfo.username, Date.now(), input.value, this.props.socket)
    input.value = '';
    this.setState({ message: '' })
  }

  render() {
    return (
      <div className="chat-input" >
        <form onSubmit={this.onSubmit}>
        <input
          placeholder="Enter text.."
          onChange={this.onChange}
          ></input>
        </form>
      </div>
    )
  }
}

export default ChatInput;
