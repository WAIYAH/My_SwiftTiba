# 🚑 SwiftTiba — Emergency Care Platform

**SwiftTiba** is a world-class emergency care platform designed with a **"Calm in Crisis"** philosophy. It provides instant access to **first aid tutorials**, an interactive **hospital locator** for Nairobi, an **AI health chatbot**, and comprehensive **health education resources**.

> Africa's trusted digital first responder — fast, accessible healthcare when seconds count.

---

## 🌟 Features
- 🏥 **Hospital Locator** — Interactive Leaflet.js map with 10+ Nairobi hospitals, filters, directions
- 🩺 **First Aid Guides** — Step-by-step emergency instructions for CPR, choking, bleeding, burns, fractures
- 🤖 **AI Health Chatbot** — Keyword-based symptom checker with instant health guidance
- 📰 **Health Blog** — Expert articles on immune health, stress, exercise, nutrition, sleep, mental health
- 🌙 **Dark Mode** — System-aware dark/light theme with localStorage persistence
- 📱 **Mobile-First Design** — Fully responsive across all devices
- 🍪 **Cookie Consent** — GDPR/Kenya Data Protection Act compliant banner
- 📋 **Legal Pages** — Privacy Policy, Terms of Service, Cookie Policy, Medical Disclaimer
- ♿ **Accessible** — Semantic HTML, ARIA labels, keyboard navigation, reduced motion support

---

## 🛠 Tech Stack
- **Frontend:** HTML5, CSS3 (Custom Design System), Vanilla JavaScript ES6+
- **Maps:** Leaflet.js v1.9.4 + OpenStreetMap tiles
- **Icons:** Font Awesome 6.5.0
- **Typography:** Inter + Open Sans (Google Fonts)
- **Animations:** IntersectionObserver-based scroll animations
- **No frameworks.** No build tools. Pure, fast, lightweight.

---

## 📁 Project Structure
```
SwiftTiba/
├── index.html          # Homepage — Emergency Command Center
├── first-aid.html      # First aid tutorials (5 guides)
├── hospital.html       # Hospital locator + Leaflet.js map
├── chatbot.html        # AI health chatbot interface
├── blog.html           # Health blog (6 articles)
├── about.html          # Mission, vision, values, partners
├── contact.html        # Contact form + info
├── privacy.html        # Privacy Policy
├── terms.html          # Terms of Service
├── cookie-policy.html  # Cookie Policy
├── disclaimer.html     # Medical Disclaimer
├── css/
│   └── styles.css      # Unified design system (~1400 lines)
├── js/
│   ├── main.js         # Shared: nav, dark mode, animations, cookies
│   ├── hospitals.js    # Leaflet map + hospital data
│   ├── firstaid.js     # Filter tabs for first aid cards
│   ├── chatbot.js      # Chat engine + keyword matching
│   ├── blog.js         # Blog filters + read more toggles
│   └── contact.js      # Form validation
├── img/                # Image assets
└── docs/               # Architecture documentation
```

---

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Edge, Firefox, Safari)

### Run Locally
1. Clone the repo:
   ```bash
   git clone https://github.com/your-username/swifttiba.git
