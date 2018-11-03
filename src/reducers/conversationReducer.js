import * as actionTypes from '../actions/actionTypes';

export const conversationListReducer = (state = [], action) => {
    switch (action.type) {
        case actionTypes.LOAD_CONVERSATIONS_SUCCESS:
            return [...action.conversations];
        case actionTypes.SAVE_CONVERSATION_SUCCESS:
            return [...state, Object.assign({}, action.conversation)];
        case actionTypes.UPDATE_CONVERSATION_SUCCESS:
            return [
                ...state.filter(conversation => conversation.id !== action.conversation.id), Object.assign({}, action.conversation)
            ];
        default:
            return state;
    }
}