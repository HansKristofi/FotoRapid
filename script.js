// ── Intro overlay: reduced to 1.2s ──
window.addEventListener('load', () => {
  const overlay = document.getElementById('intro-overlay');
  setTimeout(() => {
    overlay.classList.add('fade-out');
    setTimeout(() => { overlay.style.display = 'none'; }, 1000);
  }, 1200);
});

// ── Smooth scroll ──
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
    // Auto-close hamburger menu on mobile link click
    const menuToggle = document.getElementById('menu-toggle');
    if (menuToggle) menuToggle.checked = false;
  });
});

// ── Service Modal ──
const albums = document.querySelectorAll('.album');
const modal = document.getElementById('service-modal');
const modalImg = document.getElementById('modal-img');
const modalTitle = document.getElementById('modal-title');
const modalDesc = document.getElementById('modal-desc');
const modalPrice = document.getElementById('modal-price');
const modalClose = document.querySelector('.modal-close');
const modalBackdrop = document.querySelector('.modal-backdrop');
const modalCta = document.querySelector('.modal-cta');

albums.forEach(album => {
  album.addEventListener('click', () => {
    const imgSrc = album.querySelector('img').src;
    modalImg.src = imgSrc;
    modalTitle.textContent = album.dataset.title || '';
    modalDesc.textContent = album.dataset.desc || '';
    modalPrice.textContent = album.dataset.price || '';
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  });
});

function closeModal() {
  modal.classList.add('hidden');
  document.body.style.overflow = '';
}

if (modalClose) modalClose.addEventListener('click', closeModal);
if (modalBackdrop) modalBackdrop.addEventListener('click', closeModal);
if (modalCta) modalCta.addEventListener('click', closeModal);

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
});
