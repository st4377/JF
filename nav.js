/**
 * nav.js – Mobile navigation / hamburger menu
 * Jagathi Foundation
 */

export function initNav() {
  const hamburger  = document.querySelector('.hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  const closeBtn   = document.querySelector('.mobile-close');

  if (!hamburger || !mobileMenu) return;

  // Toggle menu open/close
  hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
  });

  // Close button inside mobile menu
  closeBtn?.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
  });

  // Close when any link inside the mobile menu is clicked
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
    });
  });
}
