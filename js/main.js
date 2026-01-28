// Main JS for BuildStack

document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      // Toggle Navigation
      if (navLinks.style.display === 'flex') {
        navLinks.style.display = 'none';
      } else {
        navLinks.style.display = 'flex';
        // Apply mobile styles dynamically since we didn't add them in CSS
        Object.assign(navLinks.style, {
          flexDirection: 'column',
          position: 'absolute',
          top: '70px',
          right: '25px', /* Align with container padding */
          backgroundColor: '#ffffff',
          padding: '25px',
          boxShadow: '0 5px 20px rgba(0,0,0,0.1)',
          borderRadius: '12px',
          zIndex: '1000',
          width: '200px',
          gap: '20px'
        });
      }
    });
  }

  // Add simple animation for hero elements on load
  const elements = document.querySelectorAll('.hero-content > *, .hexagon-wrapper, .badge');
  elements.forEach((el, index) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';

    setTimeout(() => {
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    }, 100 * index + 200);
  });



});

console.log('BuildStack Logic Loaded');
