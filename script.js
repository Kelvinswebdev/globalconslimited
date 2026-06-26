document.addEventListener("DOMContentLoaded", () => {
  const revealItems = document.querySelectorAll(
    '.reveal-up, .reveal-left, .reveal-right, .reveal-scale'
  );

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.18
  });

  revealItems.forEach(item => {
    revealObserver.observe(item);
  });
});