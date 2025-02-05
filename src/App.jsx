/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import ChatBox from './components/ChatBox';
import InputBox from './components/InputBox';
import { sendToLLM } from './api/llmApi'; // Import the API function

function App() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false); // State to track if loading

  const handleSendMessage = async (userMessage) => {
    // Add the user message to the chat first
    setMessages([...messages, { sender: 'user', text: userMessage }]);

    try {
      setLoading(true); // Set loading to true when API request starts

      // Send the user message to the LLM API
      const botMessage = await sendToLLM(userMessage);

      // Add the bot's response to the chat after receiving it
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          sender: 'bot',
          text: botMessage,
        },
      ]);
    } catch (error) {
      // Handle errors in case the API call fails
      console.error('Error fetching from API:', error);
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          sender: 'bot',
          text: 'Sorry, I encountered an error while processing your request.',
        },
      ]);
    } finally {
      setLoading(false); // Set loading to false once API request is done
    }
  };

  useEffect(() => {
    // Dynamically update title and meta description
    document.title = "Chat with LLM API"; // Set dynamic title
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Chat with an AI model to generate and debug code");
    }
  }, []); // Empty dependency array means it runs once when the component mounts

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      {/* Container for centering the chat window */}
      <div className="w-full max-w-xl h-full bg-white shadow-lg rounded-lg flex flex-col">
        <ChatBox messages={messages} />
        
        {/* Conditionally render loading spinner */}
        {loading && (
          <div className="flex justify-center items-center py-4">
            <div className="w-8 h-8 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
          </div>
        )}
        
        <InputBox onSend={handleSendMessage} />
      </div>
    </div>
  );
}

export default App;
