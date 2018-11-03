import * as actionTypes from './actionTypes';
import ConversationService from '../api/conversationService';

function loadConversationsSuccess(conversations) {
    return { type: actionTypes.LOAD_CONVERSATIONS_SUCCESS, conversations };
}

function loadConversationSuccess(conversation) {
    return { type: actionTypes.LOAD_CONVERSATION_SUCCESS, conversation };
}

function saveConversationSuccess(conversation) {
    return { type: actionTypes.SAVE_CONVERSATION_SUCCESS, conversation };
}

function updateConversationSuccess(conversation) {
    return { type: actionTypes.UPDATE_CONVERSATION_SUCCESS, conversation };
}

function deleteConversationSuccess(conversationId) {
    return { type: actionTypes.DELETE_CONVERSATION_SUCCESS, conversationId };
}

const conversationService = new ConversationService();

export function loadConversations() {
    return (dispatch) => {
        return conversationService.getConversations()
            .then(conversations => {
                dispatch(loadConversationsSuccess(conversations));
            })
            .catch(error => {
                throw error;
            });
    };
}

export function loadConversation(conversationId) {
    return (dispatch) => {
        return conversationService.getConversation(conversationId)
            .then(conversation => {
                dispatch(loadConversationSuccess(conversation));
            })
            .catch(error => {
                throw error;
            });
    };
}

export function saveConversation(conversation) {
    return (dispatch) => {
        return conversationService.saveConversation(conversation)
            .then(conversation => {
                if (conversation.id) {
                    dispatch(updateConversationSuccess(conversation));
                } else {
                    dispatch(saveConversationSuccess(conversation));
                }
            })
            .catch(error => {
                throw error;
            });
    }
}

export function deleteConversation(conversationId) {
    return (dispatch) => {
        return conversationService.deleteConversation(conversationId)
            .then(() => {
                dispatch(deleteConversationSuccess(conversationId));
            })
            .catch(error => {
                throw error;
            });
    };
}