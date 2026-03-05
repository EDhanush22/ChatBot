import { useState } from 'react';
import { Chatbot } from "supersimpledev";
import './ChatInput.css'

function ChatInput({ chatMessages, setChatMessages }) {
    const [inputText, setInputText] = useState(""); // inputText contains the current text,setInputText is the updater function

    function saveInputText(event) {
        setInputText(event.target.value);
    }

    function sendMessage() {
        const newChatMessages = [
            ...chatMessages,
            {
                message: inputText,
                sender: 'user',
                id: crypto.randomUUID()
            }
        ]

        setChatMessages(newChatMessages);
        // chatMessage is not updated the array immediately,we can't see our message

        // Using chatbot external library to get response
        const response = Chatbot.getResponse(inputText);
        // console.log(response);
        setChatMessages([
            ...newChatMessages,
            {
                message: response,
                sender: 'robot',
                id: crypto.randomUUID()
            }
        ]);

        setInputText(""); // update the InputText to be empty after typing the message,instead of manually removing the text in input
    }

    // when onChange runs the functions it gives a parameter called event,
    // it is an object, contains info about change
    // console.log(event.target.value);
    // State = save data that changes over time
    // We should mention the initial value in React.useState()
    // value change the text inside this <input>,makes the text box empty,this is called controlled input
    return (
        <div className="chat-input-container">
            <input
                className="chat-input"
                placeholder="Send a message to Chatbot"
                size="30"
                onChange={saveInputText}
                value={inputText}
            />
            <button
                onClick={sendMessage}
                className="send-button"
            >Send</button>
        </div>
    );
}

export default ChatInput