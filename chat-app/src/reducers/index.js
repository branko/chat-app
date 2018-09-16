import messages from './messages';
import userInfo from './userInfo';
import socket from './socket';

import { combineReducers } from 'redux';
const rootReducer = combineReducers({
  messages,
  userInfo,
  socket
})

export default rootReducer
