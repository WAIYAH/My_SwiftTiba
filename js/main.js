/**
 * SwiftTiba — Main JavaScript Module
 * Shared functionality across all pages:
 * - Sticky navigation with scroll effects
 * - Mobile menu toggle
 * - Dark mode toggle with persistence
 * - Scroll-to-top button
 * - Cookie consent banner
 * - Scroll animations
 * - FAQ accordion
 */

'use strict';

// ============================================
// NAVIGATION
// ============================================
const navbar = document.querySelector('.navbar');
const navToggle = document.querySelector('.nav-toggle');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileClose = document.querySelector('.mobile-close');

// Sticky navigation scroll effect
if (navbar) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
}

// Mobile menu toggle
if (navToggle && mobileMenu) {
  navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    mobileMenu.classList.toggle('open');
    document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
  });
}

if (mobileClose && mobileMenu) {
  mobileClose.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
    if (navToggle) navToggle.classList.remove('active');
    document.body.style.overflow = '';
  });
}

// Close mobile menu on link click
document.querySelectorAll('.mobile-menu a').forEach(link => {
  link.addEventListener('click', () => {
    if (mobileMenu) mobileMenu.classList.remove('open');
    if (navToggle) navToggle.classList.remove('active');
    document.body.style.overflow = '';
  });
});

// Active nav link
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a, .mobile-menu a:not(.mobile-emergency)').forEach(link => {
  const href = link.getAttribute('href');
  if (href === currentPage || (currentPage === '' && href === 'index.html')) {
    link.classList.add('active');
  }
});

// ============================================
// DARK MODE
// ============================================
const darkToggle = document.querySelector('.dark-toggle');
const darkToggleMobile = document.querySelector('.dark-toggle-mobile');

function setDarkMode(isDark) {
  document.body.classList.toggle('dark', isDark);
  localStorage.setItem('swifttiba-dark-mode', isDark ? 'true' : 'false');

  // Update toggle icons
  document.querySelectorAll('.dark-toggle').forEach(btn => {
    btn.innerHTML = isDark
      ? '<i class="fas fa-sun"></i>'
      : '<i class="fas fa-moon"></i>';
  });
}

// Initialize dark mode from saved preference or system preference
const savedDark = localStorage.getItem('swifttiba-dark-mode');
if (savedDark === 'true') {
  setDarkMode(true);
} else if (savedDark === null && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  setDarkMode(true);
}

// Toggle handlers
document.querySelectorAll('.dark-toggle').forEach(btn => {
  btn.addEventListener('click', () => {
    setDarkMode(!document.body.classList.contains('dark'));
  });
});

// ============================================
// SCROLL TO TOP
// ============================================
const scrollTopBtn = document.querySelector('.scroll-top');

if (scrollTopBtn) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      scrollTopBtn.classList.add('visible');
    } else {
      scrollTopBtn.classList.remove('visible');
    }
  });

  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ============================================
// SCROLL ANIMATIONS
// ============================================
const animateElements = document.querySelectorAll('[data-animate]');

if (animateElements.length > 0) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animated');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  animateElements.forEach(el => observer.observe(el));
}

// ============================================
// FAQ ACCORDION
// ============================================
document.querySelectorAll('.accordion-trigger').forEach(trigger => {
  trigger.addEventListener('click', () => {
    const item = trigger.closest('.accordion-item');
    const content = item.querySelector('.accordion-content');
    const isOpen = item.classList.contains('open');

    // Close all siblings
    const parent = item.parentElement;
    parent.querySelectorAll('.accordion-item').forEach(sibling => {
      sibling.classList.remove('open');
      const sibContent = sibling.querySelector('.accordion-content');
      if (sibContent) sibContent.style.maxHeight = null;
    });

    // Toggle current
    if (!isOpen) {
      item.classList.add('open');
      content.style.maxHeight = content.scrollHeight + 'px';
    }
  });
});

// ============================================
// COOKIE CONSENT
// ============================================
const cookieBanner = document.querySelector('.cookie-banner');
const cookieAccept = document.querySelector('.cookie-accept');
const cookieDecline = document.querySelector('.cookie-decline');

function showCookieBanner() {
  const consent = localStorage.getItem('swifttiba-cookie-consent');
  if (!consent && cookieBanner) {
    setTimeout(() => {
      cookieBanner.classList.add('show');
    }, 1500);
  }
}

if (cookieAccept) {
  cookieAccept.addEventListener('click', () => {
    localStorage.setItem('swifttiba-cookie-consent', 'accepted');
    cookieBanner.classList.remove('show');
  });
}

if (cookieDecline) {
  cookieDecline.addEventListener('click', () => {
    localStorage.setItem('swifttiba-cookie-consent', 'declined');
    cookieBanner.classList.remove('show');
  });
}

showCookieBanner();

// ============================================
// EMERGENCY CALL BUTTON
// ============================================
document.querySelectorAll('[data-emergency-call]').forEach(btn => {
  btn.addEventListener('click', (e) => {
    const confirmed = confirm('You are about to call emergency services (999). Continue?');
    if (!confirmed) {
      e.preventDefault();
    }
  });
});
