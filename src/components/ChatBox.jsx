/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import Message from './Message';

function ChatBox({ messages }) {
  if (!Array.isArray(messages)) {
    console.error('ChatBox: messages prop should be an array');
    return null;
  }

  return (
    <div className="flex-1 overflow-y-auto p-4 bg-white border-t border-gray-300 rounded-t-lg space-y-2">
      {messages.map((msg, index) => (
        <Message key={index} sender={msg.sender} text={formatMessage(msg.text)} />
      ))}
    </div>
  );
}

// Function to clean up and format messages
const formatMessage = (text) => {
  return text
    .replace(/\s+/g, ' ') // Remove excessive whitespace
    .replace(/```jsx|```js|```/g, '') // Remove unnecessary code blocks
    .trim();
};

export default ChatBox;
