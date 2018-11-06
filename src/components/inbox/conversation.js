import React from 'react';
import { Link } from 'react-router-dom';

const Conversation = ({ conversation, selected, onConversationSelected }) => {
    const classNames = selected ? 'list-group-item list-group-item-action active' : 'list-group-item list-group-item-action';

    return (
        <Link className={classNames}
            to={`/inbox/conversations/${conversation.id}`}
            onClick={() => onConversationSelected(conversation)}
            key={conversation.id}>
            <div>
                <h5>{conversation.name}</h5>
                <p>{conversation.messages[conversation.messages.length-1].content}</p>
            </div>
        </Link>
    );
}

export default Conversation;