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
