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
// INFO
const text = `Je suis Yann Barthes, passionné de sport automobile depuis mon plus jeune âge. 
Déjà enfant, je collectionnais les miniatures et passais des heures à regarder les courses de Formule 1 ou les rallyes mythiques avec des étoiles plein les yeux. 
Mais une marque en particulier m’a toujours fait vibrer : Porsche.

Le son rauque des moteurs à plat, les lignes intemporelles, l’aura de performance et d’élégance… c’est un univers qui m’habite profondément. 
Mon modèle de cœur ? La Porsche 911 3.0 SC. Produite entre la fin des années 70 et le début des années 80, cette icône allie caractère brut et classe mécanique.

Aujourd’hui, j’ai la chance de posséder ma propre 911 SC, un rêve devenu réalité. Chaque sortie est un moment suspendu : la sensation du moteur qui vibre derrière moi, le châssis qui communique chaque détail de la route, et cette impression unique de faire corps avec la machine. 
Je l’entretiens avec soin, souvent à l’ancienne, dans mon garage où l’odeur d’huile et de cuir se mêle à celle de la passion.

Plus qu’un simple loisir, c’est une philosophie de vie. J’aime partager cette passion, échanger autour de la mécanique, des courses historiques, ou tout simplement des souvenirs que cette voiture évoque. 
Porsche, c’est plus qu’un nom, c’est une histoire qui me suit et que je continue d’écrire, virage après virage.`;

const container = document.querySelector(".typewriter-gsap");

container.innerHTML = "";

text.split("").forEach((char, i) => {
  const span = document.createElement("span");
  span.textContent = char === " " ? "\u00A0" : char; // espace insécable
  span.style.animationDelay = `${i * 0.05}s`;
  container.appendChild(span);
});
