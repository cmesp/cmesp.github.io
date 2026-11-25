
let cartitems = JSON.parse(localStorage.getItem("cart")) || [];

let cartDisplay = document.querySelector("#cart-items");

cartDisplay.textContent = "Cart: " + cartitems.length;
