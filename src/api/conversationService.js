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
        return new Promise((resolve, reject) => {
            const conversationToSave = Object.assign({}, conversation);

            if (!conversationToSave.id) {
                conversationToSave.id = shortid.generate();
            }

            this.cache[conversationToSave.id] = conversationToSave;

            resolve(conversationToSave);
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