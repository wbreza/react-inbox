import React from 'react';
import { Link } from 'react-router-dom';

const Conversation = ({ conversation, selected, onConversationSelected }) => {
    return (
        selected 
            ? <Link className="list-group-item list-group-item-action active" to={`/inbox/conversations/${conversation.id}`} onClick={() => onConversationSelected(conversation)} key={conversation.id}>{conversation.name}</Link> 
            : <Link className="list-group-item list-group-item-action" to={`/inbox/conversations/${conversation.id}`} onClick={() => onConversationSelected(conversation)} key={conversation.id}>{conversation.name}</Link>
    );
}

export default Conversation;