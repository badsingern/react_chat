import React from "react";
import './ConversationTile.scss';
import { Message } from "../../../../api/api";

interface ConversationTileProps {
    message: Message;
    handleConversationSelect: (id: number) => void;
}

export const ConversationTile = ({message, handleConversationSelect}: ConversationTileProps) => {
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
