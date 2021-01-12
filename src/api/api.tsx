import axios from "axios";

export interface ConversationWith {
    id: number;
    name: string;
}

export interface LatestMessage {
    isMe: boolean;
    message: string;
    time: string;
}

export interface ChatMessage {
    isMe: boolean;
    message: string;
    time: string;
}

export interface Message {
    id: number;
    conversationWith: ConversationWith;
    latestMessage: LatestMessage;
    chat: ChatMessage[];
}

export interface Messages {
    messages: Message[];
}

const apiUrl = `https://api.jsonbin.io/b/5ffcbdf3f98f6e35d5fb4101`;

export function getMessages(): Promise<Messages> {
    return axios.get(`${apiUrl}/latest`).then(res => res.data);
}

export function updateMessages(messages: Message[]): Promise<Messages> {
    return axios.put(apiUrl, {messages}).then(res => res.data.data);
}
