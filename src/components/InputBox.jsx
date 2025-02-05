/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useRef } from 'react';

function InputBox({ onSend }) {
  const [input, setInput] = useState('');
  const textareaRef = useRef(null);

  const handleSend = () => {
    if (input.trim()) {
      onSend(input);
      setInput('');
      adjustTextareaHeight(); // Reset height after sending
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault(); // Prevent new line on Enter
      handleSend();
    }
  };

  const handleChange = (e) => {
    setInput(e.target.value);
    adjustTextareaHeight();
  };

  const adjustTextareaHeight = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = 'auto';
      textarea.style.height = `${Math.min(textarea.scrollHeight, 150)}px`; // Max height cap
    }
  };

  return (
    <div className="flex items-center p-3 bg-gray-50 border-t border-gray-300 justify-center">
      <div className="relative w-full max-w-md">
        <textarea
          ref={textareaRef}
          value={input}
          onChange={handleChange}
          onKeyDown={handleKeyPress}
          placeholder="Type a message..."
          className="w-full p-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none overflow-hidden"
          rows={1}
          style={{ minHeight: '40px' }}
        />
      </div>
      <button
        onClick={handleSend}
        className="ml-2 px-4 py-2 bg-blue-500 text-white text-sm rounded-lg hover:bg-blue-600 transition"
      >
        Send
      </button>
    </div>
  );
}

export default InputBox;
