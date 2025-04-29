document.addEventListener("DOMContentLoaded", () => {
  const produitsContainer = document.querySelector(".panier-produits");
  const totalElement = document.querySelector("#total");
  const panierData = JSON.parse(localStorage.getItem("cart")) || [];
  const recap = document.querySelector(".panier-recap");
  const panierVide = document.querySelector(".panier-vide");

  if (panierData.length === 0) {
    produitsContainer.style.display = "none"; // cache l'ancienne liste
    recap.style.display = "none"; // cache le récap
    panierVide.style.display = "block"; // affiche le message personnalisé
    return;
  }

  if (panierData.length === 0) {
    produitsContainer.innerHTML = "<p>Votre panier est vide.</p>";
    totalElement.textContent = "0,00 €";
    return;
  }

  let total = 0;

  panierData.forEach((item, index) => {
    const produitEl = document.createElement("div");
    produitEl.className = "produit";
    produitEl.innerHTML = `
      <img src="${item.image}" alt="${item.name}" class="produit-img">
      <div class="produit-info">
        <h2>${item.name}</h2>
        <p class="prix">${item.price.toFixed(2)} €</p>
        <p>Taille : ${item.size}</p>
        <div class="quantite">
          Quantité : <input type="number" value="${
            item.quantity
          }" min="1" data-index="${index}" class="quantite-input">
        </div>
      </div>
      <button class="supprimer" data-index="${index}">✕</button>
    `;
    produitsContainer.appendChild(produitEl);

    total += item.price * item.quantity;
  });

  totalElement.textContent = total.toFixed(2) + " €";

  // Supprimer un produit
  produitsContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("supprimer")) {
      const index = parseInt(e.target.dataset.index);
      panierData.splice(index, 1);
      localStorage.setItem("cart", JSON.stringify(panierData));
      location.reload();
    }
  });

  // Mettre à jour la quantité
  produitsContainer.addEventListener("input", (e) => {
    if (e.target.classList.contains("quantite-input")) {
      const index = parseInt(e.target.dataset.index);
      const newQty = parseInt(e.target.value);
      if (newQty >= 1) {
        panierData[index].quantity = newQty;
        localStorage.setItem("cart", JSON.stringify(panierData));
        location.reload();
      }
    }
  });
});
