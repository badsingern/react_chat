import { ConversationTile } from "../conversation-tile/ConversationTile";
import React from "react";
import './ConversationList.scss';
import { Message } from "../../../../api/api";

interface ConversationsListProps {
    messages: Message[],
    handleConversationSelect: (id: number) => void
}

export const ConversationsList = ({messages, handleConversationSelect}: ConversationsListProps) => {
    const list = messages.map((message) => (
        <ConversationTile
            key={message.id}
            handleConversationSelect={handleConversationSelect}
            message={message}
        />
    ))

    return (
        <>
            <div className='conversation-list'>
                <h2>Conversations</h2>
                {list}
            </div>
        </>
    );
}
