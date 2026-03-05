import { useRef, useEffect } from "react";
import { ChatMessage} from "./ChatMessage.jsx";
import './ChatMessages.css'

function ChatMessages({ chatMessages }) {
    const chatMessagesRef =  useRef(null); // Initial value is set to null because it starts out empty

    useEffect(() => {
        const containerElem = chatMessagesRef.current;
        if(containerElem) {
            containerElem.scrollTop = containerElem.scrollHeight;  // Helps us to scroll down automatically when the message is created
        }
    }, [chatMessages]);

    return (
        <div className="chat-messages-container" ref={chatMessagesRef}>
            {chatMessages.map((chatMessage) => {
                return (
                    <ChatMessage
                        message={chatMessage.message}
                        sender={chatMessage.sender}
                        key={chatMessage.id}
                    />
                );
            })}
        </div>
    );
}

export default ChatMessages;