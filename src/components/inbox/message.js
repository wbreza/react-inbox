import React from 'react';
import { Link } from 'react-router-dom';

const Message = ({ conversation, message, selected, onMessageSelected }) => {
    const classNames = selected ? 'list-group-item list-group-item-action active' : 'list-group-item list-group-item-action';

    return (
        <Link className={classNames} 
            to={`/inbox/conversations/${conversation.id}/messages/${message.id}`} 
            onClick={() => onMessageSelected(message)} 
            key={message.id}>
            {message.content}
        </Link>
    );
}

export default Message;