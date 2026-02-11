# SwiftTiba Architecture Blueprint

## Emergency Care Platform — Complete Redesign Document

**Version:** 2.0
**Date:** February 11, 2026
**Status:** Approved — Implementation In Progress

---

## A. PROJECT VISION & MISSION

### Vision Statement
To become Africa's most trusted digital first responder — a platform that empowers every person with the knowledge and tools to act decisively in medical emergencies.

### Mission
Transform SwiftTiba into a world-class emergency care platform that combines beautiful design, instant accessibility, and life-saving information through:
- Intuitive first aid tutorials anyone can follow under pressure
- Real-time hospital locator for Nairobi (scalable to all Kenya, then Africa)
- AI-powered emergency guidance that feels human and calm
- Trust signals that position SwiftTiba as the authoritative emergency resource

---

## B. TARGET AUDIENCE & USER PERSONAS

### Persona 1: Emergency Responder (Bystander)
- **Scenario:** Witnesses accident, needs immediate guidance
- **Device:** Mobile phone, possibly one hand, potentially low battery
- **Emotional State:** Anxious, urgent, needs clear simple steps
- **Success Metric:** Completes first aid steps correctly in under 3 minutes

### Persona 2: Concerned Family Member
- **Scenario:** Family member experiencing symptoms, needs to assess urgency
- **Device:** Mobile or tablet, at home
- **Emotional State:** Worried, needs reassurance or clear "GO TO HOSPITAL" signal
- **Success Metric:** Correctly identifies emergency level and appropriate action

### Persona 3: Healthcare Seeker
- **Scenario:** Non-emergency but needs nearest hospital/clinic
- **Device:** Mobile, on the move
- **Emotional State:** Patient but needs quick, accurate location data
- **Success Metric:** Finds and navigates to hospital in under 1 minute

### Persona 4: Medical Professional
- **Scenario:** Verifying information, recommending platform to patients
- **Device:** Desktop or tablet
- **Emotional State:** Professional, evaluating credibility
- **Success Metric:** Trusts content accuracy and recommends platform

---

## C. DESIGN PHILOSOPHY: "CALM IN CRISIS"

### Core Design Principles

1. **Clarity Under Pressure** — High contrast, large touch targets, clear visual hierarchy
2. **Speed of Access** — Emergency actions above the fold, one tap to critical info
3. **Calming Aesthetic** — Soothing but alert color palette, gentle animations
4. **Trust & Authority** — Medical-grade visual language, professional presentation

### Color System

| Token | Color | Hex | Purpose |
|-------|-------|-----|---------|
| Primary | Deep Royal Purple | `#6A1B9A` | Brand, main CTAs, key accents |
| Secondary | Alert Red | `#E53935` | Emergency buttons, critical warnings |
| Tertiary | Calming Teal | `#00ACC1` | Information cards, success states |
| Neutral Light | Soft White | `#F5F5F5` | Backgrounds |
| Neutral Dark | Charcoal | `#37474F` | Body text, secondary info |
| Accent | Warm Amber | `#FFB74D` | Warnings, non-critical alerts |

### Typography
- **Primary Font:** Inter (headings and UI)
- **Secondary Font:** Open Sans (body text)
- **Scale:** 16px base, 1.25 ratio

---

## D. TECHNICAL ARCHITECTURE

### Stack Decision

| Technology | Purpose | Benefit |
|-----------|---------|---------|
| Tailwind CSS (CDN) | Styling | Removes Bootstrap, consistent design system |
| Vanilla JS (ES6+) | Functionality | No framework bloat, fast on low-end devices |
| Leaflet.js (CDN) | Maps | Free, lightweight, open-source |
| AOS.js (CDN) | Animations | Scroll-triggered, respects reduced motion |
| Font Awesome 6 | Icons | Comprehensive medical icon set |

### File Structure (New)

```
swifttiba/
├── /docs
│   └── SWIFTTIBA_ARCHITECTURE_BLUEPRINT.md
├── /css
│   └── styles.css                 # Tailwind + custom styles
├── /js
│   ├── main.js                    # Shared: nav, dark mode, scroll-top, cookies
│   ├── hospitals.js               # Hospital locator + Leaflet map
│   ├── chatbot.js                 # AI chat interface
│   ├── firstaid.js                # First aid tutorial logic
│   ├── blog.js                    # Blog interactions
│   └── contact.js                 # Contact form validation
├── /data
│   ├── hospitals.json             # Nairobi hospital database
│   └── firstaid.json              # Emergency procedures
├── /img
│   └── (optimized images)
├── index.html                     # Emergency Command Center
├── first-aid.html                 # First Aid Tutorials
├── hospital.html                  # Hospital Locator with Map
├── chatbot.html                   # AI Health Chatbot
├── about.html                     # About SwiftTiba
├── contact.html                   # Contact Us
├── blog.html                      # Health Blog
├── privacy.html                   # Privacy Policy
├── terms.html                     # Terms of Service
├── cookie-policy.html             # Cookie Policy
├── disclaimer.html                # Medical Disclaimer
└── README.md
```

---

## E. PAGE ARCHITECTURE

### 1. Home (index.html) — Emergency Command Center
- Emergency triage banner with CALL 999/112 button
- Quick access grid: First Aid, Hospitals, AI Chat, Resources
- Common emergencies quick links
- Trust section with partner logos
- Stats section
- FAQ accordion
- Blog preview

### 2. First Aid (first-aid.html) — Tutorial Hub
- Search & filter by category
- 5 core tutorials: CPR, Choking, Burns, Severe Bleeding, Fractures
- Step-by-step with numbered progress
- Video tutorial section

### 3. Hospital Locator (hospital.html) — Find Care Fast
- Leaflet.js interactive map
- Filter by type (Public/Private/Mission)
- 10 Nairobi hospitals with full data
- Distance/contact information
- "Get Directions" links

### 4. AI Chatbot (chatbot.html)
- Full-page chat interface
- Keyword-based symptom checker
- Quick reply buttons
- Medical disclaimer prominent

### 5. About (about.html)
- Mission, Vision, Impact
- Company story
- Values & team

### 6. Contact (contact.html)
- Contact form with validation
- Emergency disclaimer
- Contact details & social links

### 7. Blog (blog.html)
- Article cards with categories
- Wellness tips sidebar
- Comment sections

### 8-11. Legal Pages
- Privacy Policy, Terms of Service, Cookie Policy, Medical Disclaimer

---

## F. SEVERITY COLOR SYSTEM

| Level | Color | Hex | Usage |
|-------|-------|-----|-------|
| Critical | Alert Red | `#E53935` | Life-threatening, CALL NOW |
| Urgent | Amber | `#FFB74D` | Seek care within 24 hours |
| Non-Urgent | Teal | `#00ACC1` | Home care, informational |
| Info | Purple | `#6A1B9A` | General resources |

---

## G. PERFORMANCE TARGETS

| Metric | Target |
|--------|--------|
| First Contentful Paint | < 1.2s |
| Largest Contentful Paint | < 2.0s |
| Time to Interactive | < 2.5s |
| Cumulative Layout Shift | < 0.1 |
| Lighthouse Score | > 90 |

---

## H. IMPLEMENTATION PHASES

- **Phase 1:** Foundation — Tailwind setup, design tokens, navigation, footer
- **Phase 2:** Core Pages — Home, First Aid, Hospital Locator, Chatbot
- **Phase 3:** Content Pages — About, Contact, Blog
- **Phase 4:** Legal & Compliance — Privacy, Terms, Cookies, Disclaimer
- **Phase 5:** Polish — Animations, accessibility audit, performance optimization

---

## I. DATA PRESERVATION

### Hospitals (10 entries — Nairobi)
All hospital data from original site preserved in hospital.html with coordinates for Leaflet.js map integration.

### First Aid (5 tutorials)
CPR, Choking, Burns, Severe Bleeding, Fractures — all step-by-step guides preserved.

### Blog (3 articles + 2 wellness tips)
All content migrated to new design.

### Contact
- Email: support@swifttiba.com
- WhatsApp: +254715674828
- Emergency: 999 / 112 (Kenya standard)

---

**Blueprint Status: APPROVED**
**Next Step: Phase 1 Implementation**
