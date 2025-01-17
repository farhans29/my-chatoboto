import React, { useState } from 'react';

function InputBox({ onSend }) {
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim()) {
      onSend(input);
      setInput('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <div className="flex items-center p-3 bg-gray-50 border-t border-gray-300 justify-center">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="Type a message..."
        className="flex-1 p-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 max-w-[300px] mr-2"
      />
      <button
        onClick={handleSend}
        className="px-4 py-2 bg-blue-500 text-white text-sm rounded-lg hover:bg-blue-600"
      >
        Send
      </button>
    </div>
  );
}

export default InputBox;
