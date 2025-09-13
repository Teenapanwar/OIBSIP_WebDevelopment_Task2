// Smooth scroll animation for nav links
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(link.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Button action
document.getElementById("cta-btn").addEventListener("click", () => {
  alert("🚀 Welcome aboard! Let's start building awesome websites.");
});
