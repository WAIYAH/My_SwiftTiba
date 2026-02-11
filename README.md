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
   git clone https://github.com/WAIYAH/My_SwiftTiba.git
   ```
2. Open in your browser:
   ```bash
   cd My_SwiftTiba
   start index.html
   ```
   Or use VS Code's **Live Server** extension for auto-reload during development.

---

## 🎨 Design System

SwiftTiba uses a custom **"Calm in Crisis"** design system — no CSS frameworks, just purposeful design tokens:

| Token | Value | Purpose |
|---|---|---|
| `--primary` | `#6A1B9A` | Brand purple — trust, authority |
| `--emergency-red` | `#E53935` | Critical alerts, emergency UI |
| `--teal` | `#00ACC1` | Teal accent — calm, medical |
| `--amber` | `#FFB74D` | Warnings, highlights |
| `--success` | `#43A047` | Confirmations, positive states |

**Typography:** Inter (headings/UI) + Open Sans (body text)

---

## 📄 Pages Overview

| Page | Description |
|---|---|
| **Home** | Emergency command center with quick access grid, common emergencies, FAQ |
| **First Aid** | 5 detailed guides: CPR, Choking, Severe Bleeding, Burns, Fractures |
| **Hospital Locator** | Interactive Leaflet.js map with 10 Nairobi hospitals + filters |
| **AI Chatbot** | Symptom checker supporting chest pain, fever, bleeding, CPR, burns + more |
| **Blog** | 6 health articles with category filters and expandable content |
| **About** | Mission, vision, story, impact stats, core values, partners |
| **Contact** | Validated contact form + email, WhatsApp, emergency info |
| **Legal (×4)** | Privacy Policy, Terms of Service, Cookie Policy, Medical Disclaimer |

---

## 🤝 Partners
- SHA (Social Health Authority)
- Ministry of Health Kenya
- Kenyatta National Hospital
- Amref Health Africa
- USAID Kenya
- UNICEF Kenya

---

## 📞 Emergency Contacts
| Service | Number |
|---|---|
| Kenya Police | **999** |
| Ambulance / Fire | **112** |
| Kenya Red Cross | **1199** |

---

## 👥 Contributing

Contributions are welcome! If you'd like to help improve SwiftTiba:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit changes: `git commit -m "Add your feature"`
4. Push to branch: `git push origin feature/your-feature`
5. Open a Pull Request

---

## 📬 Contact

- **Email:** [support@swifttiba.com](mailto:support@swifttiba.com)
- **WhatsApp:** [+254 715 674 828](https://wa.me/254715674828)
- **Location:** Nairobi, Kenya

---

## 📜 License

This project is open source and available under the [MIT License](LICENSE).

---

<p align="center">
  <strong>SwiftTiba</strong> — Because every second counts. 🚑
</p>
