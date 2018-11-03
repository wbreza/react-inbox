import React from 'react';
import { Link } from 'react-router-dom';

const Message = ({ conversation, message, selected, onMessageSelected }) => {
    return (
        selected 
            ? <Link className={"list-group-item list-group-item-action active"} to={`/inbox/conversations/${conversation.id}/messages/${message.id}`} onClick={() => onMessageSelected(message)} key={message.id}>{message.content}</Link>
            : <Link className={"list-group-item list-group-item-action"} to={`/inbox/conversations/${conversation.id}/messages/${message.id}`} onClick={() => onMessageSelected(message)} key={message.id}>{message.content}</Link>
    );
}

export default Message;