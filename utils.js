/**
 * utils.js – Shared utilities
 * (clipboard copy · smooth scroll · contact form · donate button wiring)
 * Jagathi Foundation
 */

import { openDonateModal } from './modal.js';

/** Copy text to clipboard and give button visual feedback */
export function copyText(text, btn) {
  navigator.clipboard.writeText(text).then(() => {
    const original = btn.textContent;
    btn.textContent        = '✓ Copied!';
    btn.style.background   = '#0d4f5c';
    btn.style.color        = 'white';

    setTimeout(() => {
      btn.textContent      = original;
      btn.style.background = 'rgba(13,79,92,0.08)';
      btn.style.color      = '#0d4f5c';
    }, 2000);
  });
}

/** Simple contact-form submission handler (shows inline success message) */
export function handleSubmit(e) {
  e.preventDefault();
  const successMsg = document.getElementById('form-success');
  if (successMsg) successMsg.style.display = 'block';
}

/** Wire all "Donate" buttons / links to open the modal */
export function wireDonateButtons() {
  document.querySelectorAll('a[href="#donate"], .btn-primary').forEach(btn => {
    if (btn.textContent.toLowerCase().includes('donate')) {
      btn.addEventListener('click', e => {
        e.preventDefault();
        openDonateModal();
      });
    }
  });
}

/** Smooth-scroll for in-page anchor links */
export function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

// Expose to global scope for inline onclick attributes (copyText, handleSubmit)
window.copyText    = copyText;
window.handleSubmit = handleSubmit;
