import './Message.css'; 
import { useAuthContext } from '../../../context/AuthContext.jsx';
import { formatMessageTime } from '../../../utils/date.js'; 

const Message = ({ message }) => {
    const { authUser } = useAuthContext();
    const fromMe = message.senderId === authUser._id;
    const ChatClassName = fromMe ? 'chat-end' : 'chat-start';
    const ChatBubble = fromMe ? 'from-me' : 'from-contact';
    const shakeClass = message.shouldShake ? "shake" : "";

    return (
        <div className={`chat ${ChatClassName}`}>
            <div className="chat-header">
                <span className="chat-sender">{fromMe ? 'You' : message.sender}</span>
                <time className="chat-time">{formatMessageTime(message.createdAt)}</time> 
            </div>
            <div className={`chat-bubble ${ChatBubble} ${shakeClass}`}>
                {message.message}
            </div>
            <div className="chat-footer">{message.status}</div>
        </div>
    );
};

export default Message;
