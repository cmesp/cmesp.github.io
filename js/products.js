const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
const cartButtons = document.querySelectorAll('.add-cart');
const cartDisplay = document.querySelector('#cart-items');
const cartMessage = document.querySelector('#cart-pop-up');

function updateCartDisplay() {
  cartDisplay.textContent = `Cart: ${cartItems.length}`;
}

updateCartDisplay();

cartButtons.forEach(button => {
  button.addEventListener('click', () => {
    const productName = button.closest('.prod-box').querySelector('h2').textContent;
    const productPrice = Number(button.dataset.price);

    cartItems.push({ name: productName, price: productPrice });
    localStorage.setItem('cart', JSON.stringify(cartItems));

    updateCartDisplay();

    cartMessage.textContent = `${productName} added to cart! Thank you for supporting Butter Bun!`;
    const messageWrapper = cartMessage.parentElement;
    messageWrapper.style.display = 'block';

    setTimeout(() => {
      messageWrapper.style.display = 'none';
    }, 3000);
  });
});