const products = document.querySelectorAll('.product');

products.forEach(product => {
  const quantityControls = product.querySelector('.product__quantity-controls');
  const decControl = quantityControls.querySelector('.product__quantity-control_dec');
  const incControl = quantityControls.querySelector('.product__quantity-control_inc');
  const quantityValue = quantityControls.querySelector('.product__quantity-value');

  decControl.addEventListener('click', () => {
    let quantity = parseInt(quantityValue.textContent);
    if (quantity > 1) {
      quantity--;
      quantityValue.textContent = quantity;
    }
  });

  incControl.addEventListener('click', () => {
    let quantity = parseInt(quantityValue.textContent);
    quantity++;
    quantityValue.textContent = quantity;
  });

  const addToCartButton = product.querySelector('.product__add');
  addToCartButton.addEventListener('click', () => {
    const productId = product.getAttribute('data-id');
    const productImage = product.querySelector('.product__image').getAttribute('src');
    const productCount = parseInt(quantityValue.textContent);

    const cartProduct = document.querySelector(`.cart__product[data-id="${productId}"]`);
    if (cartProduct) {
      const cartProductCount = cartProduct.querySelector('.cart__product-count');
      let count = parseInt(cartProductCount.textContent);
      count += productCount;
      cartProductCount.textContent = count;
    } else {
      const cartProducts = document.querySelector('.cart__products');
      const cartProductTemplate = `
        <div class="cart__product" data-id="${productId}">
          <img class="cart__product-image" src="${productImage}">
          <div class="cart__product-count">${productCount}</div>
        </div>
      `;
      cartProducts.insertAdjacentHTML('beforeend', cartProductTemplate);
    }
  });
});