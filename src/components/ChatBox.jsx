import React from 'react';
import Message from './Message';

function ChatBox({ messages }) {
  return (
    <div className="flex-1 overflow-y-auto p-4 bg-white border-t border-gray-300 rounded-t-lg">
      {messages.map((msg, index) => (
        <Message key={index} sender={msg.sender} text={msg.text} />
      ))}
    </div>
  );
}

export default ChatBox;
