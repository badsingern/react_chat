import React from "react";
import './Chat.scss';
import axios from "axios";


const ConversationTile = ({message, handleConversationSelect}) => {
    return (
        <div onClick={() => handleConversationSelect(message.id)} className='conversation-tile'>
            <div className="conversation-tile__container">
                <span className="conversation-tile__person">{message.conversationWith?.name}</span>
                <span className="conversation-tile__message">{message.latestMessage?.message}</span>
            </div>
            <div className="conversation-tile__container">
                <span className="conversation-tile__time">{message.latestMessage?.time}</span>
            </div>
        </div>
    );
};

const ConversationsList = ({messages, handleConversationSelect}) => {
    const list = messages.map((message) => (
        <ConversationTile key={message.id} handleConversationSelect={handleConversationSelect} message={message}/>
    ))

    return (<div className='conversation-list'>{list}</div>);
}

const ConversationDetails = ({selectedConversation}) => {
    return (
        <div className="conversation-details">
            {
                selectedConversation?.chat.map((message) => (<span
                    className={message.isMe ? 'conversation-details__my-message' : 'conversation-details__friend-message'}>
                    {message.message}
                </span>))
            }
        </div>
    )
}

export class Chat extends React.Component {
    state = {
        messages: [] as any,
        selectedConversation: null
    }

    componentDidMount() {
        axios.get(`https://api.jsonbin.io/b/5ffb1c3b63bb30027e750f8c/latest`)
            .then(res => {
                const messages = res.data.messages;
                this.setState({messages});
            })
    }

    handleConversationSelect = (id) => {
        this.setState({selectedConversation: id});
    };

    render() {
        const selectedConversation = this.state.messages.find(message => message.id === this.state.selectedConversation);

        return (
            <div className='chat'>
                <ConversationsList handleConversationSelect={this.handleConversationSelect}
                                   messages={this.state.messages}/>
                <ConversationDetails selectedConversation={selectedConversation}/>
            </div>
        );
    }
}
