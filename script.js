// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
  
  // WhatsApp button alert (optional for fun)
  document.querySelector('.whatsapp-float')?.addEventListener('click', () => {
    console.log("WhatsApp button clicked!");
  });
  