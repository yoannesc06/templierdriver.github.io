// AVANCE SCROLL
window.addEventListener("scroll", () => {
  const scrollBar = document.querySelector(".scroll-progress-bar");
  const totalHeight = document.body.scrollHeight - window.innerHeight;
  const progress = (window.scrollY / totalHeight) * 100;
  scrollBar.style.height = progress + "%";
});

// MENU BURGER
const burger = document.getElementById("burger");
const nav = document.getElementById("nav-links");

burger.addEventListener("click", () => {
  nav.classList.toggle("active");
  burger.classList.toggle("open");
});
