import React from 'react'
import Message from './message';
import MessageForm from './messageForm';
import _ from 'lodash';

const MessageList = ({ conversation, selectedMessage, messages, onMessageSelected, onMessageSubmit }) => {
    return (
        <div>
            <h3>Message List</h3>
            <ul className="list-group">
                {_.orderBy(messages, ['timestamp'], ['asc']).map(message =>
                    <Message
                        key={message.id}
                        selected={selectedMessage && selectedMessage.id === message.id}
                        conversation={conversation}
                        message={message}
                        onMessageSelected={onMessageSelected} />
                )}
            </ul>
            <MessageForm
                onMessageSubmit={onMessageSubmit}
                conversation={conversation} />
        </div>
    );
}

export default MessageList;