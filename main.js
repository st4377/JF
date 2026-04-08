/**
 * main.js – Application entry point
 * Imports and initialises all feature modules.
 * Jagathi Foundation
 */

import { initNav }                          from './nav.js';
import { initModal }                        from './modal.js';
import { wireDonateButtons, initSmoothScroll } from './utils.js';

document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initModal();
  wireDonateButtons();
  initSmoothScroll();
});
