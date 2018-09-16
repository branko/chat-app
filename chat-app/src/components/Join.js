import React, { Component } from 'react';

import ChatHistoryContainer from './ChatHistoryContainer';
import ChatInputContainer from './ChatInputContainer';

class Join extends Component {
  onSubmit = (e) => {
    e.preventDefault();
    alert('!');
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

export default Join;
