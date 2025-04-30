// ID
const params = new URLSearchParams(window.location.search);
const productId = params.get("id");
const target = document.querySelector(".other h1");
// PRODUITS TEXTE
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        target.classList.add("typing");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.5,
  }
);

observer.observe(target);

// Liste des produits
const products = {
  1: {
    name: "T-SHIRT TEMPLIER DRIVER",
    price: "30.00 €",
    frontImage: "images/Shop/T1B.png",
    backImage: "images/Shop/T1F.png",
    color: "navy",
  },
  2: {
    name: "T-SHIRT TEMPLIER DRIVER (NOIR)",
    price: "30.00 €",
    frontImage: "images/Shop/T2B.png",
    backImage: "images/Shop/T2F.png",
    color: "black",
  },
  3: {
    name: "MUG TEMPLIER DRIVER",
    price: "30.00 €",
    frontImage: "images/Shop/mug1.png",
    backImage: "images/Shop/mug2.png",
    color: "navajowhite",
  },
};

// Verifie si ID existe
if (products[productId]) {
  const product = products[productId];

  document.getElementById("product-name").textContent = product.name;
  document.getElementById("product-price").textContent = product.price;
  document.getElementById("product-front").src = product.frontImage;
  document.getElementById("product-back").src = product.backImage;
  document.getElementById("product-color").style.backgroundColor =
    product.color;

  // Quantité
  const quantityEl = document.getElementById("quantity");
  const increaseBtn = document.getElementById("increase");
  const decreaseBtn = document.getElementById("decrease");
  let quantity = 1;

  increaseBtn.addEventListener("click", () => {
    quantity++;
    quantityEl.textContent = quantity;
  });

  decreaseBtn.addEventListener("click", () => {
    if (quantity > 1) {
      quantity--;
      quantityEl.textContent = quantity;
    }
  });

  // Ajouter au panier
  const addToCartBtn = document.getElementById("add-to-cart");
  addToCartBtn.addEventListener("click", () => {
    const size = document.getElementById("size").value;

    const cartProduct = {
      name: product.name,
      price: parseFloat(product.price),
      size: size,
      quantity: quantity,
      image: product.frontImage,
    };

    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(cartProduct);
    localStorage.setItem("cart", JSON.stringify(cart));
  });
} else {
  document.body.innerHTML = "<h1>Produit introuvable</h1>";
}
