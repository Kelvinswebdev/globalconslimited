document.addEventListener("DOMContentLoaded", function () {
  const counters = document.querySelectorAll(".counter");

  if (!counters.length) return;

  const startCounter = (counter) => {
    const target = parseInt(counter.getAttribute("data-target"), 10);
    let current = 0;
    const duration = 2000; // 2 seconds
    const stepTime = Math.max(20, Math.floor(duration / target));

    const timer = setInterval(() => {
      current += 1;

      if (current >= target) {
        counter.textContent = target;
        clearInterval(timer);
      } else {
        counter.textContent = current;
      }
    }, stepTime);
  };

  const counterObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        startCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.5
  });

  counters.forEach((counter) => {
    counterObserver.observe(counter);
  });
});