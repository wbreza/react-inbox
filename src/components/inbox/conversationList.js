import React from 'react'
import Conversation from './conversation';

const ConversationList = ({ conversations, selectedConversation, onConversationSelected }) => {
    return (
        <div>
            <h3>Conversation List</h3>
            <ul className="list-group">
                {conversations.map(conversation =>
                    <Conversation
                        key={conversation.id}
                        selected={selectedConversation.id === conversation.id}
                        conversation={conversation}
                        onConversationSelected={onConversationSelected} />
                )}
            </ul>
        </div>
    );
}

export default ConversationList;