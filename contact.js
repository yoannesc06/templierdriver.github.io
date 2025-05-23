// MENU BURGER
const burger = document.getElementById("burger");
const nav = document.getElementById("nav-links");

burger.addEventListener("click", () => {
  nav.classList.toggle("active");
  burger.classList.toggle("open");
});
// ANIMATION FORM QUI BOUGE
document.addEventListener("mousemove", (e) => {
  const form = document.querySelector(".mac-window");
  const x = (e.clientX / window.innerWidth - 0.5) * 20;
  const y = (e.clientY / window.innerHeight - 0.5) * 20;

  form.style.transform = `translate(${x}px, ${y}px)`;
});
// FLUIDE
const formWrapper = document.querySelector(".mac-window");

// Crée un élément
const glow = document.createElement("div");
glow.classList.add("mouse-glow");
formWrapper.appendChild(glow);

formWrapper.addEventListener("mousemove", (e) => {
  const rect = formWrapper.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  glow.style.left = `${x}px`;
  glow.style.top = `${y}px`;
  glow.style.opacity = 1;
});

formWrapper.addEventListener("mouseleave", () => {
  glow.style.opacity = 0;
});
