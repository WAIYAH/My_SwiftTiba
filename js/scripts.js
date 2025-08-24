// Dark Mode Toggle
const darkModeToggle = document.querySelector('.dark-mode-toggle');
darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Google Maps Integration
function initMap() {
    const map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8
    });
}

// Simple Chatbot Functionality
function sendMessage() {
    const input = document.getElementById('chatbot-input');
    const messages = document.getElementById('chatbot-messages');
    const userMessage = input.value;
    if (userMessage.trim() === '') return;

    // Display user message
    messages.innerHTML += `<p><strong>You:</strong> ${userMessage}</p>`;
    
    // Simulate chatbot response
    setTimeout(() => {
        messages.innerHTML += `<p><strong>Chatbot:</strong> I'm here to help! Based on your input, I suggest consulting a doctor. Would you like to find a nearby hospital?</p>`;
        messages.scrollTop = messages.scrollHeight;
    }, 1000);

    input.value = '';
}

// Smooth Scroll for Navigation
document.querySelectorAll('.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        window.scrollTo({
            top: targetElement.offsetTop - 70,
            behavior: 'smooth'
        });
    });
});


// Scroll-to-Top Button Functionality
const scrollToTopBtn = document.getElementById('scrollToTopBtn');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopBtn.classList.add('visible');
    } else {
        scrollToTopBtn.classList.remove('visible');
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});