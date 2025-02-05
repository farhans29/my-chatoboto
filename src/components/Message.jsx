import React from 'react';

function Message({ sender, text }) {
  const userStyles = "bg-blue-500 text-white self-end ml-auto max-w-[75%] text-sm break-words p-3 rounded-lg shadow-md transition duration-300 ease-in-out hover:bg-blue-600";
  const botStyles = "bg-gray-200 text-gray-900 self-start mr-auto max-w-[75%] text-sm break-words p-3 rounded-lg shadow-md";

  return (
    <div className={`flex items-start ${sender === 'user' ? 'justify-end' : 'justify-start'} my-1`}>
      {sender === 'bot' && (
        <div className="w-6 h-6 bg-gray-400 text-white flex items-center justify-center rounded-full text-xs font-bold mr-2">
          🤖
        </div>
      )}
      <div className={`${sender === 'user' ? userStyles : botStyles}`}>
        {text.split("\n").map((line, index) => (
          <p key={index} className="whitespace-pre-line">{line}</p>
        ))}
      </div>
    </div>
  );
}

export default Message;
