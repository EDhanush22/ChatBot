import RobotProfileImage from '../assets/robot.png'
import UserProfileImage from '../assets/user.png'
import './ChatMessage.css'

export function ChatMessage({ message, sender }) { // destructuring here it self
    // console.log(props)
    // const message = props.message;
    // const sender = props.sender;
    // const { message, sender } = props;  // Destructuring,saves them in a variable called message and sender
    /*
    if (sender === 'robot') {
        return (
            <div>
                <img src="robot.png" width="50" />
                {message}
            </div>
        );
    }
    {sender === 'robot' && <img src="robot.png" width="50" />} The above can be written like this using guard Operator
     */

    // Below we are giving different classnames based on the input from user and the response from robot
    // Using Ternary Operator(?:) value1 ? value2 : value39if value 1 is true then the result is value1 else value2)
    return (
        <div className={
            sender === 'user'
                ? 'chat-message-user'
                : 'chat-message-robot'
        }>
            {sender === 'robot' &&
                (<img src={RobotProfileImage} className="chat-message-profile" />)
            }
            <div className="chat-message-text">
                {message}
            </div>
            {sender === 'user' &&
                (<img src={UserProfileImage} className="chat-message-profile" />)
            }
        </div>
    );
}