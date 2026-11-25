let cartitems = JSON.parse(localStorage.getItem("cart")) || [];

const cartDisplay = document.querySelector("#cart-items");
const cartList = document.querySelector("#cart-list");
const cartTotal = document.querySelector("#cart-total");
const totalPrice = document.querySelector("#total-price");
const clearButton = document.querySelector("#clear-cart");

function displayCart() {
  cartList.innerHTML = "";

  const productCounts = {};
  cartitems.forEach(item => {
    productCounts[item.name] = (productCounts[item.name] || 0) + 1;
  });

  for (const product in productCounts) {
    const productBox = document.createElement("div");
    productBox.classList.add("cart-product");

    const productName = document.createElement("p");
    productName.textContent = product;

    const quantity = document.createElement("p");
    quantity.textContent = `Quantity: ${productCounts[product]}`;

    const productPrice = cartitems.find(item => item.name === product).price;
    const price = document.createElement("p");
    price.textContent = `Price: ₱${productPrice.toFixed(2)}`;

    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.addEventListener("click", () => {
      const itemIndex = cartitems.findIndex(item => item.name === product);
      if (itemIndex !== -1) {
        cartitems.splice(itemIndex, 1);
      }
      localStorage.setItem("cart", JSON.stringify(cartitems));
      displayCart();
    });

    productBox.appendChild(productName);
    productBox.appendChild(quantity);
    productBox.appendChild(price);
    productBox.appendChild(removeButton);

    cartList.appendChild(productBox);
  }

  let total = 0;
  cartitems.forEach(item => {
    total += item.price;
  });

  cartTotal.textContent = `Total Items: ${cartitems.length}`;
  totalPrice.textContent = `Total: ₱${total.toFixed(2)}`;
  cartDisplay.textContent = `Cart: ${cartitems.length}`;

  if (cartitems.length === 0) {
    cartList.textContent = "Your cart is empty! Go grab some treats!";
  }
}

clearButton.addEventListener("click", () => {
  cartitems = [];
  localStorage.setItem("cart", JSON.stringify(cartitems));
  displayCart();
});

displayCart();