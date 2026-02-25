// Album click → show enlarged images (simple version)
// In real project you would load different images per album

const albums = document.querySelectorAll('.album');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.close-lightbox');

albums.forEach(album => {
  album.addEventListener('click', () => {
    // Here you would normally load real album photos
    // For demo we just show the cover image enlarged
    const imgSrc = album.querySelector('img').src;
    lightboxImg.src = imgSrc;
    lightbox.classList.remove('hidden');
  });
});

closeBtn.addEventListener('click', () => {
  lightbox.classList.add('hidden');
});

lightbox.addEventListener('click', e => {
  if (e.target === lightbox) {
    lightbox.classList.add('hidden');
  }
});

// Close with Escape key
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    lightbox.classList.add('hidden');
  }
});

// Add to script.js
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
window.addEventListener('load', () => {
  const overlay = document.getElementById('intro-overlay');
  
  // Wait 3.5 seconds (2.5s typing + 1s pause) then fade out
  setTimeout(() => {
    overlay.classList.add('fade-out');
    
    // Optional: Remove from DOM entirely after fade
    setTimeout(() => {
      overlay.style.display = 'none';
    }, 1000);
  }, 1800);
});