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

// Google Maps Initialization for Nearby Hospitals
function initMap() {
    const nairobi = { lat: -1.286389, lng: 36.817223 }; // Nairobi coordinates
    const map = new google.maps.Map(document.getElementById('map'), {
        center: nairobi,
        zoom: 12,
    });

    // Hospital locations with coordinates
    const hospitals = [
        { name: 'Kenyatta National Hospital', position: { lat: -1.3007, lng: 36.8064 }, type: 'public' },
        { name: 'The Nairobi Hospital', position: { lat: -1.2951, lng: 36.7997 }, type: 'private' },
        { name: 'Aga Khan University Hospital', position: { lat: -1.2621, lng: 36.8160 }, type: 'private' },
        { name: 'M.P. Shah Hospital', position: { lat: -1.2608, lng: 36.8026 }, type: 'private' },
        { name: 'Metropolitan Hospital', position: { lat: -1.3099, lng: 36.8434 }, type: 'private' },
        { name: 'The Karen Hospital', position: { lat: -1.3395, lng: 36.7196 }, type: 'private' },
        { name: 'Mathari National Hospital', position: { lat: -1.2558, lng: 36.8785 }, type: 'public' },
        { name: '3rd Park Hospital', position: { lat: -1.2625, lng: 36.8155 }, type: 'private' },
        { name: 'Gertrude’s Children’s Hospital', position: { lat: -1.2556, lng: 36.8324 }, type: 'mission' },
        { name: 'AAR Hospital', position: { lat: -1.2337, lng: 36.8835 }, type: 'private' }
    ];

    // Add markers for each hospital
    hospitals.forEach(hospital => {
        new google.maps.Marker({
            position: hospital.position,
            map: map,
            title: hospital.name,
        });
    });
}

// Filter Functionality
document.getElementById('hospitalFilter')?.addEventListener('change', (e) => {
    const filterValue = e.target.value;
    const hospitalCards = document.querySelectorAll('.hospital-card');

    hospitalCards.forEach(card => {
        const hospitalType = card.getAttribute('data-type');
        if (filterValue === 'all' || hospitalType === filterValue) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});