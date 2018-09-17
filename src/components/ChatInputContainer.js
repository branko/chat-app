import { connect } from 'react-redux';
import { addMessage } from '../actions/index'
import ChatInput from './ChatInput'

const mapStateToProps = state => ({
  userInfo: state.userInfo,
  socket: state.socket,
})

const mapDispatchToProps = dispatch => ({
    dispatchAddMessage: (user, timestamp, message, socket) => {
      return dispatch(addMessage(user, timestamp, message, socket))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(ChatInput);
