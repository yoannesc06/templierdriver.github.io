// MENU BURGER
const burger = document.getElementById("burger");
const nav = document.getElementById("nav-links");

burger.addEventListener("click", () => {
  nav.classList.toggle("active");
});

// INTERSECTION OBSERVER POUR L'ANIMATION
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

const elements = document.querySelectorAll(".texte-apparition");
elements.forEach((el) => observer.observe(el));
