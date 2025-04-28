let cart = JSON.parse(localStorage.getItem("cart")) || [];

const panierContainer = document.createElement("main");
panierContainer.classList.add("panier-container");

// Si le panier est vide
if (cart.length === 0) {
  panierContainer.innerHTML = "<h2>Votre panier est vide.</h2>";
} else {
  cart.forEach((product, index) => {
    const productCard = document.createElement("div");
    productCard.classList.add("cart-product");

    // CORRECTION ICI : utilisation de `backticks` (``) au lieu de rien
    productCard.innerHTML = `
      <img src="${product.image}" alt="${
      product.name
    }" class="cart-product-image">
      <div class="cart-product-details">
        <h3>${product.name}</h3>
        <p>Taille: ${product.size}</p>
        <p>Quantité: ${product.quantity}</p>
        <p>Prix: ${(product.price * product.quantity).toFixed(2)} €</p>
        <button class="remove-btn" data-index="${index}">Supprimer</button>
      </div>
    `;

    panierContainer.appendChild(productCard);
  });

  // Ajouter un bouton pour vider tout le panier
  const clearButton = document.createElement("button");
  clearButton.classList.add("clear-cart");
  clearButton.textContent = "Vider le panier";
  clearButton.addEventListener("click", () => {
    localStorage.removeItem("cart");
    location.reload();
  });
  panierContainer.appendChild(clearButton);
}

document.body.insertBefore(
  panierContainer,
  document.querySelector(".footer-separator")
);

// Gestion suppression produit individuellement
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("remove-btn")) {
    const index = e.target.getAttribute("data-index");
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    location.reload();
  }
});
