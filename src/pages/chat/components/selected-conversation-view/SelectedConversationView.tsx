import { InputField } from "../../../../shared/components/input-field/InputField";
import { Button } from "../../../../shared/components/button/Button";
import React from "react";
import './SelectedConversationView.scss';
import { ChatMessage } from "../../../../api/api";



const sortConversation = (conversation): ChatMessage[] => {
    const sortedConversation = conversation?.chat.sort((a, b) => {
        const firstChunk = new Date(a.time);
        const lastChunk = new Date(b.time);

        return firstChunk.valueOf() - lastChunk.valueOf();
    });

    return sortedConversation;
};

export const SelectedConversationView = ({message, handler, selectedConversation, newMessageHandler}) => {
    const sortedConversation = sortConversation(selectedConversation);

    return (
        <div className="conversation-details">
            <div className='conversation-details__conversation-header'>
                <h2>{selectedConversation?.conversationWith.name}</h2>
            </div>
            <div className='conversation-details__conversation'>
                {
                    sortedConversation.map((message, index) => (
                            <span
                                key={index}
                                className={message.isMe ? 'conversation-details__my-message' : 'conversation-details__friend-message'}>
                                {message.message}
                        </span>
                        )
                    )
                }
            </div>
            <div className='conversation-details__new-message'>
                <InputField value={message} handleError={false} onChangeHandler={(event) => handler(event.target.value)}/>
                <div
                    onClick={
                        () => {
                            newMessageHandler(message, selectedConversation?.id);
                            handler('');
                        }
                    }
                >
                    <Button text={'Send'} isDisabled={!message} type={'button'}/>
                </div>
            </div>
        </div>
    );
}
