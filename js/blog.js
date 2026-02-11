/**
 * SwiftTiba — Blog Page Interactions
 * Filter tabs + read more toggles
 */

(function() {
  'use strict';

  // --- Filter Tabs ---
  const filterTabs = document.querySelectorAll('.filter-tab');
  const blogCards = document.querySelectorAll('.blog-card');

  filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      filterTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const filter = tab.getAttribute('data-filter');

      blogCards.forEach(card => {
        if (filter === 'all' || card.getAttribute('data-category') === filter) {
          card.style.display = '';
          card.style.animation = 'fadeInUp 0.4s ease';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // --- Blog Read More Toggles ---
  const toggleBtns = document.querySelectorAll('.blog-toggle');

  toggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-target');
      const fullContent = document.getElementById(targetId);
      if (!fullContent) return;

      const isOpen = fullContent.style.display !== 'none';

      if (isOpen) {
        fullContent.style.display = 'none';
        btn.innerHTML = 'Read Full Article <i class="fas fa-chevron-down"></i>';
      } else {
        fullContent.style.display = 'block';
        fullContent.style.animation = 'fadeInUp 0.3s ease';
        btn.innerHTML = 'Show Less <i class="fas fa-chevron-up"></i>';
        fullContent.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    });
  });

  // --- Newsletter Form ---
  const nlForm = document.querySelector('.newsletter-form');
  if (nlForm) {
    nlForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const input = nlForm.querySelector('input[type="email"]');
      if (input && input.value.trim()) {
        const btn = nlForm.querySelector('button');
        btn.innerHTML = '<i class="fas fa-check"></i> Subscribed!';
        btn.disabled = true;
        input.disabled = true;
        setTimeout(() => {
          btn.innerHTML = '<i class="fas fa-paper-plane"></i> Subscribe';
          btn.disabled = false;
          input.disabled = false;
          input.value = '';
        }, 3000);
      }
    });
  }

})();
