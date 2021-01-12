import React, { useState } from "react";
import { SelectedConversationView } from "../selected-conversation-view/SelectedConversationView";

interface ConversationDetailsProps {
    selectedConversation: any;
    addNewMessage: (message: string, id: number) => void;
}

const NoSelectedConversationView = () => (
    <div className='empty-conversation-view'>
        <h1>Please select conversation</h1>
    </div>
);

export const ConversationDetails = ({selectedConversation, addNewMessage}: ConversationDetailsProps) => {
    const [newMessage, setNewMessage] = useState('');

    const handleInput = (value) => {
        setNewMessage(value);
    }

    return (
        selectedConversation
            ? <SelectedConversationView
                handler={handleInput}
                newMessageHandler={addNewMessage}
                message={newMessage}
                selectedConversation={selectedConversation}
            />
            : <NoSelectedConversationView/>
    )
}
