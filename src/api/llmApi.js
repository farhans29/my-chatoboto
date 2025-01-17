export const sendToLLM = async (userMessage) => {
    try {
      const payload = {
        input: userMessage,
      };
  
      const response = await fetch('/api/', {  // Use the /api prefix
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
  
      if (!response.ok) {
        throw new Error('Failed to fetch data from LLM API');
      }
  
      const data = await response.json();
      const botResponse = data[0]?.response?.response || 'Sorry, I couldn\'t understand that.';
      return botResponse;
    } catch (error) {
      console.error('Error:', error);
      return 'An error occurred while processing your request.';
    }
  };
  