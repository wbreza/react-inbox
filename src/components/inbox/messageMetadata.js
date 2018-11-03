import React from 'react'

const MessageMetadata = ({ message }) => {
    return (
        <div>
            <h3>Message Metadata</h3>
            <pre>
                {JSON.stringify(message, null, 4)}
            </pre>
        </div>
    );
}

export default MessageMetadata;