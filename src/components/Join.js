import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import ChatHistoryContainer from './ChatHistoryContainer';
import ChatInputContainer from './ChatInputContainer';

class Join extends Component {
  state = {}

  onSubmit = (e) => {
    e.preventDefault();
    let inputValue = e.target.querySelector('input').value

    if (inputValue === '') {
      this.setState({ error: true })
      return;
    }

    const userInfo = {
      type: 'NEW_USER',
      username: inputValue,
    }

    this.props.sock.send(JSON.stringify(userInfo))

    this.props.history.push('/chat')
  }

  errorMessage = (msg) => {
    return (
      <p className="error-message">{msg}</p>
    )
  }

  onChange = () => {
    this.setState({ error: false })
  }

  render() {
    const error = this.state.error ? this.errorMessage('You must enter a name!') : '';

    return (
      <div className="join-container">
        <h1>What is your name?</h1>
        <form onSubmit={this.onSubmit}>
          <input
            onChange={this.onChange}
            className={`join-input ${this.state.error ? 'error' : ''}`}
            placeholder="Enter your display name..."></input>
          {error}
        </form>
      </div>
    )
  }
}

export default withRouter(Join);
