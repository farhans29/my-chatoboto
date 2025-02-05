export const sendToLLM = async (userMessage) => {
  try {
    const payload = { input: userMessage };

    const response = await fetch('/api/', {
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

    // Extract response text and format it
    const botResponse = data?.[0]?.response?.response || "Sorry, I couldn't understand that.";

    return formatResponse(botResponse);
  } catch (error) {
    console.error('Error:', error);
    return 'An error occurred while processing your request.';
  }
};

// Function to format response for better readability
const formatResponse = (text) => {
  return text
    .replace(/\\n/g, '\n') // Ensure line breaks are respected
    .replace(/\\t/g, '\t') // Ensure tabs are respected
    .replace(/\s+/g, ' ') // Remove excessive spaces
    .trim();
};
