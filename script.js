// MENU BURGER
const burger = document.getElementById("burger");
const nav = document.getElementById("nav-links");

burger.addEventListener("click", () => {
  nav.classList.toggle("active");
  burger.classList.toggle("open");
});
// FIRST TEXT
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  {
    threshold: 0.5,
  }
);

document.querySelectorAll(".scroll-text").forEach((el) => observer.observe(el));

// CONTENT
document.addEventListener("DOMContentLoaded", () => {
  const contentTop = document.getElementById("content-top");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          contentTop.classList.add("show");
        }
      });
    },
    { threshold: 0.4 }
  );

  observer.observe(contentTop);
});
