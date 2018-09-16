import { connect } from 'react-redux';
import { addMessage } from '../actions/index'
import ChatInput from './ChatInput'

const mapStateToProps = (state) => ({})

const mapDispatchToProps = dispatch => ({
    dispatchAddMessage: (user, timestamp, message) => {
      console.log('dispatchAddMessage')
      return dispatch(addMessage(user, timestamp, message))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(ChatInput);
