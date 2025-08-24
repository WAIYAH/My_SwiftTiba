// Dark Mode Toggle
const darkModeToggle = document.querySelector('.dark-mode-toggle');
darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
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

// Google Maps Initialization
function initMap() {
    const swiftTibaLocation = { lat: 37.7749, lng: -122.4194 }; // Example coordinates (San Francisco)
    const map = new google.maps.Map(document.getElementById('map'), {
        center: swiftTibaLocation,
        zoom: 12,
    });
    new google.maps.Marker({
        position: swiftTibaLocation,
        map: map,
        title: 'SwiftTiba Office',
    });
}

// Form Submission (Basic Client-Side Alert)
document.getElementById('contactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    document.getElementById('contactForm').reset();
});