import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ConversationList from './conversationList';
import MessageList from './messageList';
import MessageMetadata from './messageMetadata';
import * as conversationActions from '../../actions/conversationActions';

class InboxPage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            conversations: [],
            messages: [],
            conversation: null,
            message: null
        }

        this.onConversationSelected = this.onConversationSelected.bind(this);
        this.onMessageSelected = this.onMessageSelected.bind(this);
        this.onMessageSubmit = this.onMessageSubmit.bind(this);
    }

    componentDidMount() {
        this.props.actions.loadConversations();
    }

    componentDidUpdate(prevProps) {
        if (this.props.conversations !== prevProps.conversations) {
            this.setState({
                conversations: [...this.props.conversations],
            });

            const conversationId = this.props.match.params.conversationId
            let conversation = this.props.conversations[0];

            if (conversationId) {
                const matches = this.props.conversations.filter(conversation => conversation.id === conversationId);
                if (matches) {
                    conversation = matches[0];
                }
            }

            this.onConversationSelected(conversation);
        }
    }

    onConversationSelected(conversation) {
        this.setState({
            conversation: conversation,
            messages: [...conversation.messages]
        }, () => {
            const messageId = this.props.match.params.messageId;
            if (!this.state.message || this.state.message.id !== messageId) {
                if (messageId && this.state.conversation) {
                    const message = this.state.conversation.messages
                        .filter(message => message.id === messageId);

                    if (message) {
                        this.onMessageSelected(message[0]);
                    }
                }
            }
        });
    }

    onMessageSelected(message) {
        this.setState({
            message: Object.assign({}, message)
        });
    }

    onMessageSubmit(message) {
        const updatedConversation = Object.assign({}, this.state.conversation);
        updatedConversation.messages = [...this.state.conversation.messages];
        updatedConversation.messages.push(message);

        this.setState({
            conversation: updatedConversation
        });

        this.props.actions.saveConversation(updatedConversation);
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-4">
                        <ConversationList
                            selectedConversation={this.state.conversation}
                            conversations={this.state.conversations}
                            onConversationSelected={this.onConversationSelected} />
                    </div>
                    <div className="col-4">
                        <MessageList
                            selectedMessage={this.state.message}
                            conversation={this.state.conversation}
                            messages={this.state.messages}
                            onMessageSelected={this.onMessageSelected}
                            onMessageSubmit={this.onMessageSubmit} />
                    </div>
                    <div className="col-4">
                        <MessageMetadata
                            message={this.state.message} />
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        conversations: state.conversations,
        conversation: state.conversation
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(conversationActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(InboxPage);
