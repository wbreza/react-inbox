import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import shortid from 'shortid';
import * as conversationActions from '../../actions/conversationActions';

class RealtimeUpdates extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            conversations: []
        };

        this.intervals = [];

        this.createNewConversation = this.createNewConversation.bind(this);
        this.createNewMessage = this.createNewMessage.bind(this);
    }

    componentDidUpdate(prevProps) {
        if (this.props.conversations !== prevProps.conversations) {
            this.setState({
                conversations: [...this.props.conversations],
            });
        }
    }

    createNewConversation() {
        const newId = shortid.generate();

        const conversation = {
            id: newId,
            name: `Conversation ${newId}`,
            provider: 'Slack',
            recipients: [
                {
                    id: shortid.generate(),
                    displayName: 'New User A'
                },
                {
                    id: shortid.generate(),
                    displayName: 'New User B'
                },
            ],
            messages: [
                {
                    id: shortid.generate(),
                    content: `Test content for conversation '${newId}' created @ '${new Date()}'`,
                    timestamp: new Date().getTime() / 1000 | 0
                }
            ]
        }

        this.props.conversationActions.saveConversation(conversation);
    }

    createNewMessage() {
        const newId = shortid.generate();
        const randomIndex = Math.floor(Math.random() * this.state.conversations.length);
        const conversation = Object.assign({}, this.state.conversations[randomIndex]);
        conversation.messages = [...conversation.messages];

        const message = {
            id: newId,
            recipientId: conversation.recipients[0],
            content: `New message for ${conversation.id} @ ${new Date()}`,
            timestamp: new Date().getTime() / 1000 | 0
        };

        conversation.messages.push(message);
        this.props.conversationActions.saveConversation(conversation);
    }

    componentDidMount() {
        this.intervals.push(setInterval(this.createNewConversation, 20000));
        this.intervals.push(setInterval(this.createNewMessage, 5000));
    }

    componentWillUnmount() {
        this.intervals.forEach(id => clearInterval(id));
    }

    render() {
        return (
            <div></div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        conversations: state.conversations
    };
}

function mapDispatchToProps(dispatch) {
    return {
        conversationActions: bindActionCreators(conversationActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(RealtimeUpdates);