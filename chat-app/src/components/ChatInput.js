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
    this.props.dispatchAddMessage("branko", new Date(), input.value)
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
