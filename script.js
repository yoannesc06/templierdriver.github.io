// MENU BURGER
const burger = document.getElementById("burger");
const nav = document.getElementById("nav-links");

burger.addEventListener("click", () => {
  nav.classList.toggle("active");
  burger.classList.toggle("open");
});
// INFO
const h1 = document.querySelector(".scroll-fade");

window.addEventListener("scroll", () => {
  const rect = h1.getBoundingClientRect();
  if (rect.top < window.innerHeight - 100) {
    h1.classList.add("visible");
  }
});
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
