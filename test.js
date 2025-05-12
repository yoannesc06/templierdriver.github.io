// Détection du scroll pour afficher le titre
const h1 = document.querySelector(".scroll-fade");

window.addEventListener("scroll", () => {
  const rect = h1.getBoundingClientRect();
  if (rect.top < window.innerHeight - 100) {
    h1.classList.add("visible");
  }
});
