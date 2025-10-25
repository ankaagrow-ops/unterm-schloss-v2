// Lazy Loading Script für bessere Performance
document.addEventListener('DOMContentLoaded', function() {
  // Intersection Observer für Lazy Loading
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        
        // Bild laden
        if (img.dataset.src) {
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
        }
        
        // Loaded Klasse hinzufügen für Animation
        img.classList.add('loaded');
        
        // Observer stoppen für dieses Bild
        observer.unobserve(img);
      }
    });
  }, {
    rootMargin: '50px 0px',
    threshold: 0.1
  });

  // Alle lazy images finden und beobachten
  const lazyImages = document.querySelectorAll('img[loading="lazy"]');
  lazyImages.forEach(img => {
    // Sofort sichtbar machen
    img.style.opacity = '1';
    img.style.visibility = 'visible';
    img.style.transform = 'translateY(0)';
    
    // Observer hinzufügen
    imageObserver.observe(img);
  });

  // Fallback für Browser ohne Intersection Observer
  if (!window.IntersectionObserver) {
    lazyImages.forEach(img => {
      img.style.opacity = '1';
      img.style.visibility = 'visible';
      img.style.transform = 'translateY(0)';
    });
  }
});
