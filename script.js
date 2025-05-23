// TEXT INTRO
// Observer pour détecter quand la section entre dans le viewport
const observerOptions = {
  threshold: 0.3,
  rootMargin: "0px 0px -100px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const section = entry.target;

      // Animation du titre principal
      setTimeout(() => {
        section.querySelector(".quest-title").classList.add("animate");
      }, 200);

      // Animation des textes un par un
      const texts = section.querySelectorAll(".quest-text");
      texts.forEach((text, index) => {
        setTimeout(() => {
          text.classList.add("animate");
        }, 800 + index * 300);
      });

      // Animation du conteneur
      setTimeout(() => {
        section.querySelector(".quest-container").classList.add("animate");
      }, 2000);

      // Arrêter l'observation une fois l'animation déclenchée
      observer.unobserve(section);
    }
  });
}, observerOptions);

// Observer la section
document.addEventListener("DOMContentLoaded", () => {
  const questSection = document.getElementById("quest-section");
  if (questSection) {
    observer.observe(questSection);
  }
});

// Animation de scroll fluide avec parallaxe légère
window.addEventListener("scroll", () => {
  const questSection = document.getElementById("quest-section");
  if (questSection) {
    const rect = questSection.getBoundingClientRect();
    const scrolled = window.pageYOffset;
    const parallax = scrolled * 0.1;

    if (rect.top < window.innerHeight && rect.bottom > 0) {
      questSection.style.transform = `translateY(${parallax}px)`;
    }
  }
});
// MENU BURGER
const burger = document.getElementById("burger");
const nav = document.getElementById("nav-links");

burger.addEventListener("click", () => {
  nav.classList.toggle("active");
  burger.classList.toggle("open");
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
