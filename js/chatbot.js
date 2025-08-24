// Chatbot Logic
const chatbotInput = document.getElementById('chatbot-input');
const chatbotMessages = document.getElementById('chatbot-messages');

// Initial greeting message
window.addEventListener('load', () => {
    addBotMessage("Hello! I'm SwiftTiba's Health Chatbot. Please describe your symptoms or ask a question, and I'll help you with some guidance. For emergencies, always call the hotline: +123-456-7890.");
});

// Function to add a user message
function addUserMessage(message) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('chatbot-message', 'user');
    messageElement.innerHTML = `<strong>You:</strong> ${message}`;
    chatbotMessages.appendChild(messageElement);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}

// Function to add a bot message
function addBotMessage(message) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('chatbot-message', 'bot');
    messageElement.innerHTML = `<strong>SwiftTiba Bot:</strong> ${message}`;
    chatbotMessages.appendChild(messageElement);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}

// Simple symptom checker logic
function sendMessage() {
    const userMessage = chatbotInput.value.trim();
    if (userMessage === '') return;

    // Add user message to chat
    addUserMessage(userMessage);

    // Clear input
    chatbotInput.value = '';

    // Simulate bot response based on user input
    setTimeout(() => {
        const messageLower = userMessage.toLowerCase();
        
        if (messageLower.includes('chest pain')) {
            addBotMessage("Chest pain can be serious. It might indicate a heart issue. Please call emergency services immediately and try to stay calm. Do you have any other symptoms like shortness of breath?");
        } else if (messageLower.includes('fever')) {
            addBotMessage("A fever can be a sign of infection. Ensure you stay hydrated, rest, and monitor your temperature. If your fever exceeds 103°F (39.4°C) or persists for more than 3 days, seek medical attention. Would you like to find a nearby hospital?");
        } else if (messageLower.includes('bleeding')) {
            addBotMessage("For severe bleeding, apply direct pressure to the wound and elevate the injured area if possible. Refer to our First Aid Guide for detailed steps: <a href='first-aid.html'>First Aid Guide</a>. If bleeding doesn't stop, call emergency services.");
        } else if (messageLower.includes('hospital')) {
            addBotMessage("I can help you find a nearby hospital! Please visit our Nearby Hospitals section: <a href='index.html#hospitals'>Find Hospitals</a>.");
        } else {
            addBotMessage("I'm not sure how to assist with that. Please describe your symptoms in more detail, or check our First Aid Guide for more information: <a href='first-aid.html'>First Aid Guide</a>.");
        }
    }, 1000);
}

// Allow sending message on Enter key
chatbotInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendMessage();
    }
});