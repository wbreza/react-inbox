import React from 'react'
import Message from './message';

const MessageList = ({ conversation, selectedMessage, messages, onMessageSelected }) => {
    return (
        <div>
            <h3>Message List</h3>
            <ul className="list-group">
                {messages.map(message =>
                    <Message
                        key={message.id}
                        selected={selectedMessage && selectedMessage.id === message.id}
                        conversation={conversation}
                        message={message}
                        onMessageSelected={onMessageSelected} />
                )}
            </ul>
        </div>
    );
}

export default MessageList;