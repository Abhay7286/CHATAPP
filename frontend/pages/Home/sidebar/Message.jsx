import React from 'react';
import './Message.css'; 

const Message = () => {
    const messages = [
        {
            id: 1,
            sender: 'Obi-Wan Kenobi',
            time: '2 hours ago',
            text: 'You were the Chosen One!',
            status: 'Seen',
        },
        {
            id: 2,
            sender: 'Obi-Wan Kenobi',
            time: '2 hours ago',
            text: 'I loved you.',
            status: 'Delivered',
        },
    ];

    return (
        <>
            {messages.map((msg) => (
                <div key={msg.id} className="chat chat-start">
                    <div className="chat-header">
                        <span className="chat-sender">{msg.sender}</span>
                        <time className="chat-time">{msg.time}</time>
                    </div>
                    <div className="chat-bubble">{msg.text}</div>
                    <div className="chat-footer">{msg.status}</div>
                </div>
            ))}
        </>
    );
};

export default Message;
