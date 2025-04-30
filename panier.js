document.addEventListener("DOMContentLoaded", () => {
  const produitsContainer = document.querySelector(".panier-produits");
  const totalElement = document.querySelector("#total");
  const panierData = JSON.parse(localStorage.getItem("cart")) || [];
  const recap = document.querySelector(".panier-recap");
  const panierVide = document.querySelector(".panier-vide");

  if (panierData.length === 0) {
    produitsContainer.style.display = "none";
    recap.style.display = "none";
    panierVide.style.display = "block";
    return;
  }

  let total = 0;

  panierData.forEach((item, index) => {
    const itemTotal = item.price * item.quantity;
    total += itemTotal;

    const produitEl = document.createElement("div");
    produitEl.className = "produit";
    produitEl.innerHTML = `
      <img src="${item.image}" alt="${item.name}" class="produit-img">
      <div class="produit-info">
        <h2>${item.name}</h2>
        <p>${item.size ? `Taille : ${item.size}` : ""}</p>
        <p class="prix-unitaire">${item.price.toFixed(2)} €</p>
      </div>
      <div class="produit-actions">
        <div class="quantite">
          <button class="quantite-btn" data-action="decrease" data-index="${index}">−</button>
          <span id="quantity-${index}" class="quantite-valeur">${
      item.quantity
    }</span>
          <button class="quantite-btn" data-action="increase" data-index="${index}">+</button>
        </div>
        <button class="supprimer" data-index="${index}">supprimer</button>
      </div>
      <div class="produit-total">${itemTotal.toFixed(2)} €</div>
    `;
    produitsContainer.appendChild(produitEl);
  });

  totalElement.textContent = total.toFixed(2) + " €";

  // suppression et modification de quantite
  produitsContainer.addEventListener("click", (e) => {
    const index = parseInt(e.target.dataset.index);
    const action = e.target.dataset.action;

    if (e.target.classList.contains("supprimer")) {
      panierData.splice(index, 1);
      localStorage.setItem("cart", JSON.stringify(panierData));
      location.reload();
    }

    if (e.target.classList.contains("quantite-btn")) {
      if (action === "increase") {
        panierData[index].quantity++;
      } else if (action === "decrease" && panierData[index].quantity > 1) {
        panierData[index].quantity--;
      }

      // Met a jour le texte affiche
      const quantityEl = document.getElementById(`quantity-${index}`);
      quantityEl.textContent = panierData[index].quantity;

      localStorage.setItem("cart", JSON.stringify(panierData));
      location.reload();
    }
  });
});
