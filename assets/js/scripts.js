/* main.js — small interactive helpers (menu, lightbox, prayer form) */

document.addEventListener('DOMContentLoaded', () => {
  // Nav toggle for small screens
  const navToggle = document.getElementById('nav-toggle');
  const nav = document.querySelector('.nav');
  if (navToggle && nav) {
    navToggle.addEventListener('click', () => {
      nav.classList.toggle('open');
    });
  }

  // Lightbox for gallery
  const galleryItems = document.querySelectorAll('.gallery-item');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxClose = document.querySelector('.lightbox-close');

  if (galleryItems.length && lightbox && lightboxImg && lightboxClose) {
    galleryItems.forEach(img => {
      img.addEventListener('click', () => {
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt || '';
        lightbox.classList.add('show');
        lightbox.setAttribute('aria-hidden', 'false');
      });
    });

    const closeLightbox = () => {
      lightbox.classList.remove('show');
      lightbox.setAttribute('aria-hidden', 'true');
      lightboxImg.src = '';
    };

    lightboxClose.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) closeLightbox();
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeLightbox();
    });
  }

  // Prayer form (simple feedback)
  const prayerForm = document.getElementById('prayer-form');
  if (prayerForm) {
    prayerForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const feedback = document.getElementById('form-feedback');
      // Here you could add AJAX to post to a backend or email service
      feedback.textContent = 'Thank you — your prayer request has been received. We will pray for you.';
      feedback.style.color = 'green';
      prayerForm.reset();
    });
  }
});


// Rotate images inside Byun card
const byunImg = document.getElementById('byun-img');
const images = JSON.parse(byunImg.getAttribute('data-images'));
let currentIndex = 0;

setInterval(() => {
  currentIndex = (currentIndex + 1) % images.length; // loop back to first image
  byunImg.src = images[currentIndex];
}, 5000); // 5000ms = 5 seconds


function fnMove(id) {
  // hide all vision sections
  document.querySelectorAll('.contBox_01, .contBox_03').forEach(el => {
    el.style.display = 'none';
  });

  // show the target section
  const target = document.getElementById(id);
  if(target) {
    // check if it's a flex container
    const displayType = target.classList.contains('contBox_03') || target.classList.contains('contBox_01') ? 'flex' : 'block';
    target.style.display = displayType;
  }
}

// Optional: show first section on page load
document.addEventListener('DOMContentLoaded', () => {
  fnMove('p1');
});

