/**
 * SwiftTiba — Contact Form Validation & Submission
 */

(function() {
  'use strict';

  const form = document.getElementById('contactForm');
  const successDiv = document.getElementById('formSuccess');
  if (!form) return;

  const fields = {
    name: {
      el: document.getElementById('contactName'),
      error: document.getElementById('nameError'),
      validate: (v) => v.trim().length >= 2 ? '' : 'Please enter your full name (at least 2 characters).'
    },
    email: {
      el: document.getElementById('contactEmail'),
      error: document.getElementById('emailError'),
      validate: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()) ? '' : 'Please enter a valid email address.'
    },
    subject: {
      el: document.getElementById('contactSubject'),
      error: document.getElementById('subjectError'),
      validate: (v) => v ? '' : 'Please select a subject.'
    },
    message: {
      el: document.getElementById('contactMessage'),
      error: document.getElementById('messageError'),
      validate: (v) => v.trim().length >= 10 ? '' : 'Please write a message (at least 10 characters).'
    }
  };

  // Real-time validation
  Object.values(fields).forEach(field => {
    field.el.addEventListener('blur', () => validateField(field));
    field.el.addEventListener('input', () => {
      if (field.el.classList.contains('invalid')) {
        validateField(field);
      }
    });
  });

  function validateField(field) {
    const msg = field.validate(field.el.value);
    if (msg) {
      field.el.classList.add('invalid');
      field.el.classList.remove('valid');
      field.error.textContent = msg;
      field.error.style.display = 'block';
      return false;
    } else {
      field.el.classList.remove('invalid');
      field.el.classList.add('valid');
      field.error.textContent = '';
      field.error.style.display = 'none';
      return true;
    }
  }

  function validateAll() {
    let valid = true;
    Object.values(fields).forEach(field => {
      if (!validateField(field)) valid = false;
    });
    return valid;
  }

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    if (!validateAll()) {
      // Scroll to first error
      const first = form.querySelector('.invalid');
      if (first) first.focus();
      return;
    }

    // Simulate form submission
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    submitBtn.disabled = true;

    setTimeout(() => {
      form.style.display = 'none';
      successDiv.style.display = 'block';
      successDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 1500);
  });

})();
