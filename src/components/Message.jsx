import React from 'react';

function Message({ sender, text }) {
  // Styling for user and bot messages with smaller bubbles
  const userStyles = "bg-blue-100 text-blue-900 self-end ml-auto w-[280px] text-xs break-words p-2 rounded-lg"; // User: aligned right
  const botStyles = "bg-gray-200 text-gray-900 self-start mr-auto w-[280px] text-xs break-words p-2 rounded-lg"; // Bot: aligned left

  return (
    <div className={`flex ${sender === 'user' ? 'justify-end' : 'justify-start'} my-1`}>
      <div className={`${sender === 'user' ? userStyles : botStyles}`}>
        {text}
      </div>
    </div>
  );
}

export default Message;
