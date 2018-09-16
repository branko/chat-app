import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import ChatHistoryContainer from './ChatHistoryContainer';
import ChatInputContainer from './ChatInputContainer';

class Join extends Component {
  onSubmit = (e) => {
    e.preventDefault();
    console.log('join!')

    const userInfo = {
      type: 'NEW_USER',
      username: e.target.querySelector('input').value,
    }

    this.props.sock.send(JSON.stringify(userInfo))

    this.props.history.push('/chat')
  }

  render() {
    return (
      <div className="join-container">
        <h1>What is your name?</h1>
        <form onSubmit={this.onSubmit}>
          <input
            className="join-input"
            placeholder="Enter your display name..."></input>
        </form>
      </div>
    )
  }
}

export default withRouter(Join);
