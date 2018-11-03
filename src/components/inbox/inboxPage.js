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

        this.props.actions.loadConversations();

        const conversationId = this.props.match.params.conversationId
        if (conversationId) {
            this.props.actions.loadConversation(conversationId);
        }
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.conversations !== nextProps.conversations) {
            this.setState({
                conversations: [...nextProps.conversations],
            });

            this.onConversationSelected(nextProps.conversations[0]);
        }

        if (this.props.conversation !== nextProps.conversation) {
            this.setState({
                conversation: Object.assign({}, nextProps.conversation)
            })

            this.onConversationSelected(nextProps.conversation);
        }

        if (!this.state.message) {
            const messageId = this.props.match.params.messageId;
            if (messageId && nextProps.conversation.messages) {
                const message = nextProps.conversation.messages
                    .filter(message => message.id === messageId);

                if (message) {
                    this.onMessageSelected(message[0]);
                }
            }
        }
    }

    onConversationSelected(conversation) {
        this.setState({
            conversation: conversation,
            messages: [...conversation.messages]
        });
    }

    onMessageSelected(message) {
        this.setState({
            message: Object.assign({}, message)
        });
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
                            onMessageSelected={this.onMessageSelected} />
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
