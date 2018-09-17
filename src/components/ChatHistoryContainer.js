import { connect } from 'react-redux';
import { addMessage } from '../actions/index'
import ChatHistory from './ChatHistory'

const mapStateToProps = state => ({
  messages: state.messages
})

const mapDispatchToProps = dispatch => ({
    dispatchAddMessage: (user, timestamp, message) => {
      return dispatch(addMessage(user, timestamp, message))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(ChatHistory);
