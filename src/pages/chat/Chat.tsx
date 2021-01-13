import React from "react";
import './Chat.scss';
import { ConversationsList } from "./components/conversation-list/ConversationList";
import { ConversationDetails } from "./components/conversation-details/ConversationDetails";
import { LoadingSpinner } from "../../shared/components/loading-spinner/LoadingSpinner";
import { Profile } from "../profile/Profile";
import { getMessages, Message, ChatMessage, updateMessages } from "../../api/api";

interface ChatState {
    messages: Message[],
    selectedConversation: number,
    loading: boolean
}

export class Chat extends React.Component {
    state: ChatState = {
        messages: [],
        selectedConversation: -1,
        loading: false
    }

    componentDidMount(): void {
        this.setState({loading: true});
        getMessages()
            .then(res => {
                const messages = res.messages;
                this.setState({messages, loading: false});
            })
    }

    handleConversationSelect = (id: number): void => {
        this.setState({selectedConversation: id});
    };

    addNewMessage = (message: string, id: number): void => {
        if (!message) {
            return;
        }

        const newMessage: ChatMessage = {
            isMe: true,
            message,
            time: new Date().toLocaleString('lt-LT', {hour12: false})
        };
        const deepCopyMessagesObject = JSON.parse(JSON.stringify(this.state.messages));
        const currentMessage = deepCopyMessagesObject.find(m => m.id === id);

        currentMessage.latestMessage = newMessage;
        currentMessage.chat.push(newMessage);

        updateMessages(deepCopyMessagesObject)
            .then(res => {
                const messages = res.messages;
                this.setState({messages});
            })
    };

    render() {
        const selectedConversation = this.state.messages?.find(message => message.id === this.state.selectedConversation);

        return (
            <>
                {
                    this.state.loading
                        ? <LoadingSpinner/>
                        : <div className='chat'>
                            <ConversationsList
                                handleConversationSelect={this.handleConversationSelect}
                                messages={this.state.messages}
                            />
                            <ConversationDetails
                                addNewMessage={this.addNewMessage}
                                selectedConversation={selectedConversation}
                            />
                            <Profile/>
                        </div>
                }
            </>
        );
    }
}
