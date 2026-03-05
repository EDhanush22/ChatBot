import { useState} from 'react'
import ChatInput from "./components/ChatInput.jsx";
import ChatMessages from "./components/ChatMessages.jsx";
import './App.css'

function App() {
    const [chatMessages, setChatMessages] = useState([]);

    // const [chatMessages, setChatMessages] = array; // Array destructing, the order matters
    // const chatMessages = array[0]; // The first value gives the current value of chatMessages(The current data)
    // const setChatMessages = array[1]; // The second value is a function that updates the data,naming is important starts with set,
    // we should always use the function setChatMessages to update the data also called Updater Function
    // setChatMessages replaces the entire chatMessages array with a new array,that's how it works,add a new chat message at the end

    return (
        <div className="app-container">
            <ChatMessages
                chatMessages={chatMessages}
            />
            <ChatInput
                chatMessages={chatMessages}
                setChatMessages={setChatMessages}
            />
        </div>
    );
}

export default App


// <!--Props makes components reusable-->
// <!--Use a component(App) to create the website-->
// <!--State=data that is connected to the HTML,When we update this data,it will update the HTML-->
// <!--.push add a value at the end of the array chatMessages-->
// <!-- crypto.randomUUID(); generates a unique id string-->
// <!-- Convert chatMessages into state we can update the HTML and can see changes in the web-->
// <!--... is a Spread Operator=takes the values in an array, and copies them into a new array-->

// <!--To add auto-scrolling we have to learn a concept called hooks-->
// <!--Hooks=insert react features into our component-->
// <!--React.useState() is a hook, State automatically updates the HTML when the data changes-->
// <!--React hooks starts with the work use,useEffect run some code after the component is created or updated-->
// <!--React.useEffect(() => {console.log("Updated");}, [chatMessages]) this array is called dependency array,it lets us control when useEffect() runs;-->
// <!--It takes an array it only runs once,after the component is created,React will also run the function every time chatMessages changes-->
// <!--useRef() automatically save an HTML element from the component-->