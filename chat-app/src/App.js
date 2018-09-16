import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Redirect } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Join from './components/Join';
import Chat from './components/Chat';
import Sidebar from './components/Sidebar';
import ChatRoom from './components/ChatRoom';
import SockJS from 'sockjs-client';

class App extends Component {
  constructor() {
    super();

    this.state = {
      sock: new SockJS('http://0.0.0.0:9999/chat'),
      user: {},
    };

    this.registerSockEvents();
  }

  registerSockEvents = () => {
    this.state.sock.onopen = () => {
        console.log('open');
        this.state.sock.send('test');
    };

    this.state.sock.onmessage = (e) => {
        const message = e.data[0] === '{' ? JSON.parse(e.data) : e.data;

        if (typeof message === 'object') {
          if (message.type === "NEW_USER_ACK") {


            this.setState({
              user: {
                username: message.username,
                id: message.id,
              }
            })
          }
        } else {
          console.log('Message: ', message)
        }
    };

    this.state.sock.onclose = () => {
        console.log('close');
    };
  }

  render() {
    return (
        <div className="App container">
            <Router>
              <div className="row">
                <Route exact path="/" render={() => {
                  if (this.state.user.id) {
                    return <Redirect to="/chat" />
                  }

                  return <Join sock={this.state.sock} />
              }} />
                <Route path="/chat" render={() => {
                    if (!this.state.user.id) {
                      return <Redirect to="/" />
                    }

                    return <Chat
                      sock={this.state.sock}/>
                  }} />
              </div>

            </Router>
        </div>
    );
  }
}

export default App;
