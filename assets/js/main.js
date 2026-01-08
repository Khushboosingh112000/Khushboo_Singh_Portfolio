
// Portfolio Interactions — Khushboo Singh (v2)
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');
if (hamburger && menu) {
  hamburger.addEventListener('click', () => {
    const isOpen = getComputedStyle(menu).display !== 'none';
    menu.style.display = isOpen ? 'none' : 'block';
  });
}

// Smooth scroll for anchor links
for (const a of document.querySelectorAll('a[href^="#"]')) {
  a.addEventListener('click', (e) => {
    const targetId = a.getAttribute('href').slice(1);
    const target = document.getElementById(targetId);
    if (target) {
      e.preventDefault();
      window.scrollTo({ top: target.offsetTop - 60, behavior: 'smooth' });
      if (menu && getComputedStyle(menu).position === 'absolute') menu.style.display = 'none';
    }
  });
}
