import React from 'react'

const MessageMetadata = ({ message }) => {
    return (
        <div>
            <div>Message Metadata</div>
            <pre>
                {JSON.stringify(message, null, 4)}
            </pre>
        </div>
    );
}

export default MessageMetadata;