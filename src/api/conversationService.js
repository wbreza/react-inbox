import conversations from './conversations.json';
import shortid from 'shortid';
import _ from 'lodash';

export default class ConversationService {
    constructor() {
        this.cache = _.keyBy(conversations, 'id');
    }

    getConversations() {
        return new Promise((resolve, reject) => {
            resolve(_.values(this.cache));
        })
    }

    getConversation(id) {
        return new Promise((resolve, reject) => {
            const match = this.cache[id];

            if (match) {
                resolve(match);
            } else {
                reject(`Conversation with id '${id}' not found`);
            }
        })
    }

    saveConversation(conversation) {
        conversation = Object.assign({}, conversation);
        return new Promise((resolve, reject) => {
            if (!conversation.id) {
                conversation.id = shortid.generate();
            }

            conversation.lastUpdatedTimestamp = new Date().getTime() / 1000 | 0;
            this.cache[conversation.id] = conversation;

            resolve(conversation);
        });
    }

    deleteConversation(conversationId) {
        return new Promise((resolve, reject) => {
            const match = this.cache[conversationId];
            if (!match) {
                return reject(`Conversation with id '${conversationId}' not found`);
            }

            delete this.cache[conversationId];
        });
    }
}