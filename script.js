const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

const elements = document.querySelectorAll(".texte-apparition");
elements.forEach((el) => observer.observe(el));
