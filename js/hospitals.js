/**
 * SwiftTiba — Hospital Locator with Leaflet.js
 */
'use strict';

// Hospital Data
const hospitals = [
  { name: 'Kenyatta National Hospital', lat: -1.3007, lng: 36.8064, type: 'public', level: 6, phone: '+254 20 2726300', address: 'Hospital Rd, Nairobi', emergency: true },
  { name: 'The Nairobi Hospital', lat: -1.2951, lng: 36.7997, type: 'private', level: 5, phone: '+254 703 082 000', address: 'Argwings Kodhek Road, Nairobi', emergency: true },
  { name: 'Aga Khan University Hospital', lat: -1.2621, lng: 36.8160, type: 'private', level: 6, phone: '+254 20 366 2000', address: '3rd Parklands Ave, Limuru Road', emergency: true },
  { name: 'M.P. Shah Hospital', lat: -1.2608, lng: 36.8026, type: 'private', level: 5, phone: '+254 20 4291 100', address: 'Shivaji Road, Nairobi', emergency: false },
  { name: 'Metropolitan Hospital', lat: -1.3099, lng: 36.8434, type: 'private', level: 5, phone: null, address: 'Eastlands, Nairobi', emergency: false },
  { name: 'The Karen Hospital', lat: -1.3395, lng: 36.7196, type: 'private', level: 5, phone: '+254 20 661 3000', address: 'Langata Road, Karen, Nairobi', emergency: true },
  { name: 'Mathari National Hospital', lat: -1.2558, lng: 36.8785, type: 'public', level: 6, phone: null, address: 'Along Thika Road, Nairobi', emergency: false },
  { name: '3rd Park Hospital', lat: -1.2625, lng: 36.8155, type: 'private', level: 5, phone: null, address: 'Parklands, Nairobi', emergency: false },
  { name: "Gertrude's Children's Hospital", lat: -1.2556, lng: 36.8324, type: 'mission', level: 5, phone: '+254 20 720 6000', address: '34 Muthaiga Road, Nairobi', emergency: true },
  { name: 'AAR Hospital', lat: -1.2337, lng: 36.8835, type: 'private', level: 5, phone: null, address: 'Kiambu Road, Nairobi', emergency: false }
];

// Initialize Leaflet Map
const mapEl = document.getElementById('map');
if (mapEl) {
  const map = L.map('map').setView([-1.286389, 36.817223], 12);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 18
  }).addTo(map);

  // Custom marker icon
  const hospitalIcon = L.divIcon({
    className: 'hospital-marker',
    html: '<div style="background: #6A1B9A; color: white; width: 32px; height: 32px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 14px; box-shadow: 0 2px 8px rgba(106,27,154,0.4); border: 2px solid white;"><i class="fas fa-hospital"></i></div>',
    iconSize: [32, 32],
    iconAnchor: [16, 16],
    popupAnchor: [0, -20]
  });

  const emergencyIcon = L.divIcon({
    className: 'hospital-marker',
    html: '<div style="background: #E53935; color: white; width: 32px; height: 32px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 14px; box-shadow: 0 2px 8px rgba(229,57,53,0.4); border: 2px solid white;"><i class="fas fa-hospital"></i></div>',
    iconSize: [32, 32],
    iconAnchor: [16, 16],
    popupAnchor: [0, -20]
  });

  // Add markers
  hospitals.forEach(h => {
    const icon = h.emergency ? emergencyIcon : hospitalIcon;
    const marker = L.marker([h.lat, h.lng], { icon }).addTo(map);

    const phoneLink = h.phone ? `<br><a href="tel:${h.phone.replace(/\s/g, '')}" style="color: #6A1B9A;">📞 ${h.phone}</a>` : '';
    const emergencyBadge = h.emergency ? '<span style="background:#E53935;color:#fff;padding:2px 6px;border-radius:10px;font-size:10px;font-weight:bold;">24hr Emergency</span>' : '';

    marker.bindPopup(`
      <div style="font-family: 'Inter', sans-serif; min-width: 200px;">
        <strong style="font-size: 14px;">${h.name}</strong><br>
        <span style="font-size: 12px; color: #666;">${h.address}</span><br>
        ${emergencyBadge}
        ${phoneLink}
        <br><a href="https://www.google.com/maps/dir/?api=1&destination=${h.lat},${h.lng}" target="_blank" style="color: #6A1B9A; font-size: 12px;">Get Directions →</a>
      </div>
    `);
  });
}

// Filter hospital cards
document.querySelectorAll('.filter-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');

    const filter = tab.getAttribute('data-filter');
    document.querySelectorAll('.hospital-card').forEach(card => {
      const type = card.getAttribute('data-type');
      if (filter === 'all' || type === filter) {
        card.style.display = '';
      } else {
        card.style.display = 'none';
      }
    });
  });
});
