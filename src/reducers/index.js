import { combineReducers } from 'redux'
import * as conversationReducer from './conversationReducer';

export default combineReducers({
    conversations: conversationReducer.conversationsReducer,
    conversation: conversationReducer.conversationReducer
});