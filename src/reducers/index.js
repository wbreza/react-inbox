import { combineReducers } from 'redux'
import * as conversation from './conversationReducer';

export default combineReducers({
    conversations: conversation.conversationListReducer
});