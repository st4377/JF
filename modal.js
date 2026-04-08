/**
 * modal.js – Donate modal open/close & tab switcher
 * Jagathi Foundation
 */

const TABS = ['individual', 'corporate'];

export function openDonateModal() {
  const modal = document.getElementById('donateModal');
  if (!modal) return;
  modal.style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

export function closeDonateModal() {
  const modal = document.getElementById('donateModal');
  if (!modal) return;
  modal.style.display = 'none';
  document.body.style.overflow = '';
}

export function switchTab(tab) {
  TABS.forEach(t => {
    const panel = document.getElementById(`panel-${t}`);
    const btn   = document.getElementById(`tab-${t}`);
    if (!panel || !btn) return;

    const isActive = t === tab;
    panel.style.display = isActive ? 'block' : 'none';
    btn.style.background = isActive ? '#0d4f5c' : 'transparent';
    btn.style.color      = isActive ? 'white'   : '#5a7a82';
  });
}

export function initModal() {
  const modal = document.getElementById('donateModal');
  if (!modal) return;

  // Close on backdrop click
  modal.addEventListener('click', e => {
    if (e.target === modal) closeDonateModal();
  });

  // Close on Escape key
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeDonateModal();
  });

  // Expose functions to global scope for inline onclick attributes in the modal HTML
  window.openDonateModal  = openDonateModal;
  window.closeDonateModal = closeDonateModal;
  window.switchTab        = switchTab;
}
