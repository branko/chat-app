import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAllMessages, addSocket, setLocalUser } from './actions/index';
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
  constructor(props) {
    super(props);

<<<<<<< HEAD
    const socket = new SockJS('http://0.0.0.0:9999/chat')
    // const socket = new SockJS('https://rk-chat-app.herokuapp.com:9999/chat')
    // const socket = new SockJS('http://plinkojs.com:9999/chat')
=======
    // const socket = new SockJS('http://0.0.0.0:9999/chat')
    // const socket = new SockJS('https://rk-chat-app.herokuapp.com:9999/chat')
    const socket = new SockJS('http://plinkojs.com:9999/chat')
>>>>>>> 2eac6645bb904441c253626cde850490c20eabaa

    this.props.addSocket(socket);

    this.state = {
      sock: socket,
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
            console.log("NEW USER ACK in App.js: ", message.username)
            this.setState({
              user: {
                username: message.username,
                id: message.id,
              }
            })

            this.props.setLocalUser(message.username, message.id)
          } else if (message.type === 'FETCH_ALL_MESSAGES') {
            console.log(message.messageHistory)
            this.props.fetchAllMessages(message.messageHistory);
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

const mapStateToProps = state => {}

const mapDispatchToProps = dispatch => ({
  fetchAllMessages: (msgs) => dispatch(fetchAllMessages(msgs)),
  addSocket: (socket) => dispatch(addSocket(socket)),
  setLocalUser: (username, id) => dispatch(setLocalUser(username, id))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
