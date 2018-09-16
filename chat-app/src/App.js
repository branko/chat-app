import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import logo from './logo.svg';
import './App.css';
import Join from './components/Join';
import Chat from './components/Chat';
import Sidebar from './components/Sidebar';
import ChatRoom from './components/ChatRoom';

class App extends Component {
  render() {
    return (
        <div className="App container">
            <Router>
              <div className="row">
                <Route exact path="/" component={Join} />
                <Route path="/chat" component={Chat} />
              </div>

            </Router>
        </div>
    );
  }
}

export default App;
