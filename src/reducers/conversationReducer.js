import * as actionTypes from '../actions/actionTypes';

export const conversationsReducer = (state = [], action) => {
    switch (action.type) {
        case actionTypes.LOAD_CONVERSATIONS_SUCCESS:
            return [...action.conversations];
        default:
            return state;
    }
}

export const conversationReducer = (state = {}, action) => {
    switch (action.type) {
        case actionTypes.LOAD_CONVERSATION_SUCCESS:
            return Object.assign({}, action.conversation);
        default:
            return state;
    }
}