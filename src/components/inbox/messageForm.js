import React from 'react';
import shortid from 'shortid';

class MessageForm extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            message: {
                content: ''
            }
        };

        this.onMessageChange = this.onMessageChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onMessageChange(e) {
        this.setState({
            message: {
                id: shortid.generate(),
                content: e.target.value,
                timestamp: new Date().getTime() / 1000 | 0
            }
        });
    }

    onFormSubmit(e) {
        e.preventDefault();
        this.props.onMessageSubmit(this.state.message);
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit}>
                <div className="form-group">
                    <textarea className="form-control" rows="3" onChange={this.onMessageChange} placehold="Message" required></textarea>
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-primary">Send</button>
                </div>
            </form>
        );
    }
};

export default MessageForm;